'use strict';

var handlebars = require('handlebars');
var _ = require('underscore');
var fs = require('fs');
var path = require('path');
var markJSON = require('markit-json');
var docUtil = require('amazeui-doc-util');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var version = '2.1.0';

// Handlebars Helper
handlebars.registerHelper('ifCond', function(v1, operator, v2, options) {
  switch (operator) {
    case '==':
      return (v1 == v2) ? options.fn(this) : options.inverse(this);
      break;
    case '===':
      return (v1 === v2) ? options.fn(this) : options.inverse(this);
      break;
    case '<':
      return (v1 < v2) ? options.fn(this) : options.inverse(this);
      break;
    case '<=':
      return (v1 <= v2) ? options.fn(this) : options.inverse(this);
      break;
    case '>':
      return (v1 > v2) ? options.fn(this) : options.inverse(this);
      break;
    case '>=':
      return (v1 >= v2) ? options.fn(this) : options.inverse(this);
      break;
    default:
      return options.inverse(this);
      break;
  }
  return options.inverse(this);
});

var config = {
  path: {
    css: './src/css',
    js: './src/js'
  },
  dist: {
    sublime: '/.build/sublime',
    webstorm: '/.build/webstorm'
  }
};
var prefixName = 'am-';
var fsOptions = {encoding: 'utf8'};

var data = (function readData() {
  var cssFiles = fs.readdirSync(config.path.css);
  var jsFiles = fs.readdirSync(config.path.js);
  var cssTpl = [];
  var cssConfig = [];
  var jsTpl = [];
  var jsConfig = [];

  _.each(cssFiles, function(data) {
    cssTpl.push(fs.readFileSync(path.join(config.path.css, data, 'tpl.hbs'), fsOptions));
    cssConfig.push(require('./' + path.join(config.path.css, data, 'config.js')));
  });

  _.each(jsFiles, function(data) {
    jsTpl.push(fs.readFileSync(path.join(config.path.js, data, 'tpl.hbs'), fsOptions));
    jsConfig.push(require('./' + path.join(config.path.js, data, 'config.js')));
  });

  return {
    cssTpl: cssTpl,
    cssConfig: cssConfig,
    jsTpl: jsTpl,
    jsConfig: jsConfig
  }
})();

var cssData = compileHBS(data.cssTpl, data.cssConfig);
var jsData = compileHBS(data.jsTpl, data.jsConfig);

function compileWebstorm() {
  var result = [];
  var fileName = 'AmazeUI.xml';
  var dirPath = __dirname + config.dist.webstorm;

  var data = cssData.concat(jsData);

  _.each(data, function(value) {
    var triggerName = value.triggerName;

    var regLt = /</mg,
        regGt = />/mg,
        regQuo = /\"/mg,
        regAnd = /&/mg,
        regTab = /\$([^\$]+)\$/img;

    var snippet = value.data;
    var arrNum = snippet.match(regTab);
    var tabVariable = [];

    snippet = snippet.replace(regAnd, '&amp;');
    snippet = snippet.replace(regLt, '&lt;');
    snippet = snippet.replace(regGt, '&gt;');
    snippet = snippet.replace(regQuo, '&quot;');

    snippet = snippet.replace(regTab, function($0, $1) {
      var num = _.indexOf(arrNum, $0) + 1;
      var varName = 'var' + num;
      tabVariable.push('    <variable name="'+ varName +'" expression="&quot;'+ $1 +'&quot;" defaultValue="" alwaysStopAt="true" />');
      return $1 = '$' + varName + '$';
    });

    snippet = snippet.trim();

    var liveTpl = [
      '  <template name="'+ triggerName +'" value="'+ snippet +'" toReformat="true" toShortenFQNames="true">\n',
      tabVariable.join(''),
      '    <context>',
      '      <option name="HTML_TEXT" value="true" />',
      '      <option name="HTML" value="true" />',
      '    </context>',
      '  </template>'
    ].join('\n');

    result.push(liveTpl);

  });

  var tpl = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<templateSet group="AmazeUI">',
    result.join(''),
    '</templateSet>'
  ].join('\n');

  mkdirsSync(dirPath);

  fs.writeFile(dirPath + '/' + fileName, tpl, function(err) {
    if (err) throw err;
  });
}

/** *
 * @param data
 */
function compileSublime(data) {
  _.each(data, function(value) {
    var dirPath = __dirname + config.dist.sublime;
    var dirName = dirPath + '/' + value.name;
    var fileName = dirName + '/' + prefixName + value.name;
    var snippet = value.data;
    var result;
    var regTab = /\$([^\$]+)\$/img;
    var arr = snippet.match(regTab);

    if (value.fileName) {
      fileName += '-' + value.fileName + '.sublime-snippet';
    } else {
      fileName += '.sublime-snippet';
    }

    snippet = snippet.replace(regTab, function($0, $1) {
      var num = _.indexOf(arr, $0) + 1;
      return '${'+ num + ':' + $1 + '}';
    });

    snippet = snippet.trim();

    result = [
      '<snippet>',
      '  <content>',
      '    <![CDATA[',
      snippet,
      '    ]]>',
      '  </content>',
      '  <tabTrigger>'+ value.triggerName +'</tabTrigger>',
      '</snippet>'
    ].join('\n');

    mkdirsSync(dirName);

    fs.writeFile(fileName, result, function(err) {
      if (err) throw err;
    });
  });
}

/**
 * @param dirname
 * @param mode
 * @returns {boolean}
 */
function mkdirsSync(dirname, mode){
  if(fs.existsSync(dirname)){
    return true;
  }else{
    if(mkdirsSync(path.dirname(dirname), mode)){
      fs.mkdirSync(dirname, mode);
      return true;
    }
  }
}

/**
 * 编译 handlebars
 * @param tpl
 * @param config
 */
function compileHBS(tpl, config) {
  var result = [];
  _.each(config, function(value, index) {
    var template = handlebars.compile(tpl[index]);

    _.each(value, function(data, key, list) {
      var triggerName;

      if (_.isArray(data)) {

        _.each(data, function(v) {
          triggerName = prefixName + list.name + ':' + v;
          result.push(
              {
                name: list.name,
                fileName: v,
                triggerName: triggerName,
                data: template({className: v})
              }
          )
        })

      } else {

        triggerName = prefixName + list.name;
        result.push(
            {
              name: list.name,
              fileName: '',
              triggerName: triggerName,
              data: template({})
            }
        )

      }
    });

  });

  return result;
}

gulp.task('build', function() {
  // write sublime snippets
  compileSublime(cssData);
  compileSublime(jsData);

  // write webstorm Live Templates
  compileWebstorm();

  $.util.log($.util.colors.yellow('snippets saved...'));
});

gulp.task('copy:img', function() {
  return gulp.src(['*.gif', '*.png', '*.jpg'])
      .pipe(gulp.dest('dist'))
});

gulp.task('docs', function(){
  return gulp.src('README.md')
      .pipe(markJSON(docUtil.markedOptions))
      .pipe(docUtil.applyTemplate(null, {
        pluginTitle: 'Amaze UI Snippets',
        pluginDesc: 'Amaze UI 代码片段，快速编写基于Amaze UI的网站...',
        buttons: 'amazeui/snippets'
      }))
      .pipe($.rename(function(file) {
        file.basename = file.basename.toLowerCase();
        if (file.basename === 'readme') {
          file.basename = 'index';
        }
        file.extname = '.html';
      }))
      .pipe(gulp.dest(function(file) {
        if (file.relative === 'index.html') {
          return 'dist'
        }
        return 'dist/docs';
      }));
});

gulp.task('zip:webstorm', ['build'], function() {
  return gulp.src('.build/webstorm/*')
      .pipe($.zip('JetBrains.zip'))
      .pipe(gulp.dest('dist'))
});

gulp.task('zip:sublime', ['build'], function() {
  return gulp.src('.build/sublime/**/*')
      .pipe($.zip('SublimeText.zip'))
      .pipe(gulp.dest('dist'))
});

gulp.task('deploy', ['default'], function () {
  return gulp.src('dist/*')
      .pipe($.ghPages());
});

gulp.task('default', ['docs', 'build', 'zip:webstorm', 'zip:sublime', 'copy:img']);
