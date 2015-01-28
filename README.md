# Amaze UI Snippets
---

Amaze UI 代码片段。

## 使用效果

![snippets](snippets.gif)

## 下载

- [JetBrains 系列编辑器（WebStorm、IntelliJ IDEA 等）](http://amazeui.org/download?ver=jetbrains)
- [Sublime Text](http://amazeui.org/download?ver=sublime)

## 安装

- 现目前还没有添加到官方插件中使用如下：

- **Sublime Text 2/3**：打开 `Preferences > Browse Packages`. 在 `Browse Packages` 下创建 AmazeUI 目录，把 dist 目录 sublime 内的文件复制创建好的 `AmazeUI` 目录下。

- **JetBrains 系列编辑器（WebStorm 等）**：
  - **方式一**：Mac 用户把下载解压得到的 AmazeUI.xml 拷贝到 `~/Library/Preferences/WebStorm9/templates` 目录下，重启编辑器（`WebStorm9` 为相应编辑器的名称和版本）；
  - **方式二**：打开 `Preferences > Live Templates` 增加 AmazeUI 代码片段，把下载解压得到的 `AmazeUI.xml` 拷贝到 `Live Templates` 你自定义的代码片段下;

## CSS 代码片段目录

### CDN

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead><th>组件</th><th>代码片段</th></thead>
  <tbody>
    <tr><td>CDN 链接 (both CSS & JS)</td><td>am-cdn</td></tr>
    <tr><td>CDN 链接 (CSS only)</td><td>am-cdn:css</td></tr>
    <tr><td>CDN 链接 (JS only)</td><td>am-cdn:js</td></tr>
  </tbody>
</table>

### HTML

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead><th>组件</th><th>代码片段</th></thead>
  <tbody>
    <tr><td>HTML5 布局模板</td><td>am-html</td></tr>
  </tbody>
</table>

### Grid 网格

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>grid 基础代码</td>
    <td>am-grid</td>
    </tr>
    <tr>
    <td>.am-container</td>
    <td>am-grid:container</td>
    </tr>
    <tr>
    <td>.am-g-fixed</td>
    <td>am-grid:fixed</td>
    </tr>
    <tr>
    <td>.am-g-collapse</td>
    <td>am-grid:collapse</td>
    </tr>
    <tr>
    <td>grid:1</td>
    <td>am-grid:1</td>
    </tr>
    <tr>
    <td>grid:2</td>
    <td>am-grid:2</td>
    </tr>
    <tr>
    <td>grid:3</td>
    <td>am-grid:3</td>
    </tr>
    <tr>
    <td>grid:4</td>
    <td>am-grid:4</td>
    </tr>
    <tr>
    <td>grid:5</td>
    <td>am-grid:5</td>
    </tr>
    <tr>
    <td>grid:6</td>
    <td>am-grid:6</td>
    </tr>
    <tr>
    <td>grid:7</td>
    <td>am-grid:7</td>
    </tr>
    <tr>
    <td>grid:8</td>
    <td>am-grid:8</td>
    </tr>
    <tr>
    <td>grid:9</td>
    <td>am-grid:9</td>
    </tr>
    <tr>
    <td>grid:10</td>
    <td>am-grid:10</td>
    </tr>
    <tr>
    <td>grid:11</td>
    <td>am-grid:11</td>
    </tr>
    <tr>
    <td>grid:12</td>
    <td>am-grid:12</td>
    </tr>
  </tbody>
</table>

### AVG-Grid

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>AVG-Grid 等分网格</td>
    <td>am-avggrid</td>
    </tr>
  </tbody>
</table>

### Button 按钮

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>按钮</td>
    <td>am-btn</td>
    </tr>
    <tr>
    <td>按钮颜色:default</td>
    <td>am-btn:default</td>
    </tr>
    <tr>
    <td>按钮颜色:primary</td>
    <td>am-btn:primary</td>
    </tr>
    <tr>
    <td>按钮颜色:secondary</td>
    <td>am-btn:secondary</td>
    </tr>
    <tr>
    <td>按钮颜色:success</td>
    <td>am-btn:success</td>
    </tr>
    <tr>
    <td>按钮颜色:warning</td>
    <td>am-btn:warning</td>
    </tr>
    <tr>
    <td>按钮颜色:danger</td>
    <td>am-btn:danger</td>
    </tr>
    <tr>
    <td>按钮大小:lg</td>
    <td>am-btn:lg</td>
    </tr>
    <tr>
    <td>按钮大小:xl</td>
    <td>am-btn:xl</td>
    </tr>
    <tr>
    <td>按钮大小:sm</td>
    <td>am-btn:sm</td>
    </tr>
    <tr>
    <td>按钮大小:xs</td>
    <td>am-btn:xs</td>
    </tr>
    <tr>
    <td>圆角按钮</td>
    <td>am-btn:radius</td>
    </tr>
    <tr>
    <td>椭圆形按钮</td>
    <td>am-btn:round</td>
    </tr>
    <tr>
    <td>激活状态按钮</td>
    <td>am-btn:active</td>
    </tr>
    <tr>
    <td>禁用状态按钮</td>
    <td>am-btn:disabled</td>
    </tr>
    <tr>
    <td>块级按钮</td>
    <td>am-btn:block</td>
    </tr>
  </tbody>
</table>


### Code 代码

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Code 代码块</td>
    <td>am-code</td>
    </tr>
    <tr>
    <td>Code:scrollable代码高度控制</td>
    <td>am-code:scrollable</td>
    </tr>
  </tbody>
</table>

### Form 表单

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础表单</td>
    <td>am-form</td>
    </tr>
    <tr>
    <td>行内表单</td>
    <td>am-form:inline</td>
    </tr>
    <tr>
    <td>水平排列表单</td>
    <td>am-form:horizontal</td>
    </tr>
  </tbody>
</table>

### Image 图片

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础图片</td>
    <td>am-img</td>
    </tr>
    <tr>
    <td>圆角图片</td>
    <td>am-img:radius</td>
    </tr>
    <tr>
    <td>椭圆形图片</td>
    <td>am-img:round</td>
    </tr>
    <tr>
    <td>圆形图片</td>
    <td>am-form:circle</td>
    </tr>
    <tr>
    <td>图片边框</td>
    <td>am-form:thumbnail</td>
    </tr>
  </tbody>
</table>

### Table 表格

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础表格</td>
    <td>am-table</td>
    </tr>
    <tr>
    <td>圆角表格</td>
    <td>am-table:radius</td>
    </tr>
    <tr>
    <td>基本边框表格</td>
    <td>am-table:bordered</td>
    </tr>
    <tr>
    <td>斑马纹效果表格</td>
    <td>am-table:striped</td>
    </tr>
  </tbody>
</table>

### Badge 小徽章

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>Badge:基础样式</td>
    <td>am-badge</td>
    </tr>
    <tr>
    <td>Badge:圆角样式</td>
    <td>am-badge:radius</td>
    </tr>
    <tr>
    <td>Badge:椭圆样式</td>
    <td>am-badge:round</td>
    </tr>
    <tr>
    <td>Badge:primary 颜色</td>
    <td>am-badge:primary</td>
    </tr>
    <tr>
    <td>Badge:secondary 颜色</td>
    <td>am-badge:secondary</td>
    </tr>
    <tr>
    <td>Badge:success 颜色</td>
    <td>am-badge:success</td>
    </tr>
    <tr>
    <td>Badge:warning 颜色</td>
    <td>am-badge:warning</td>
    </tr>
    <tr>
    <td>Badge:danger 颜色</td>
    <td>am-badge:danger</td>
    </tr>
    <tr>
    <td>Badge:xl 大小</td>
    <td>am-badge:xl</td>
    </tr>
    <tr>
    <td>Badge:lg 大小</td>
    <td>am-badge:xl</td>
    </tr>
    <tr>
    <td>Badge:sm 大小</td>
    <td>am-badge:sm</td>
    </tr>
  </tbody>
</table>

### Breadcrumb 面包屑导航

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础面包屑</td>
    <td>am-breadcrumb</td>
    </tr>
    <tr>
    <td>斜杆分隔符</td>
    <td>am-breadcrumb:slash</td>
    </tr>
    <tr>
    <td>结合 Icon</td>
    <td>am-breadcrumb:icon</td>
    </tr>
  </tbody>
</table>


### Button-group 按钮组

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础按钮组</td>
    <td>am-btn-group</td>
    </tr>
    <tr>
    <td>按钮工具栏</td>
    <td>am-btn-group:toolbar</td>
    </tr>
    <tr>
    <td>垂直排列</td>
    <td>am-btn-group:stacked</td>
    </tr>
    <tr>
    <td>自适应宽度</td>
    <td>am-btn-group:justify</td>
    </tr>
    <tr>
    <td>按钮组大小:lg</td>
    <td>am-btn-group:lg</td>
    </tr>
    <tr>
    <td>按钮组大小:sm</td>
    <td>am-btn-group:sm</td>
    </tr>
    <tr>
    <td>按钮组大小:xs</td>
    <td>am-btn-group:xs</td>
    </tr>
  </tbody>
</table>


### Close 关闭按钮

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基础关闭按钮</td>
    <td>am-close</td>
    </tr>
    <tr>
    <td>带边框样式</td>
    <td>am-close:alt</td>
    </tr>
    <tr>
    <td>hover 旋转</td>
    <td>am-close:spin</td>
    </tr>
  </tbody>
</table>


### Comment 评论列表

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-comment</td>
    </tr>
  </tbody>
</table>


### Icon 字体图标

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-icon</td>
    </tr>
    <tr>
    <td>Icon button</td>
    <td>am-icon:btn</td>
    </tr>
    <tr>
    <td>旋转动画</td>
    <td>am-icon:spin</td>
    </tr>
    <tr>
    <td>Icon:lg 大小</td>
    <td>am-icon:lg</td>
    </tr>
    <tr>
    <td>Icon:md 大小</td>
    <td>am-icon:md</td>
    </tr>
    <tr>
    <td>Icon:sm 大小</td>
    <td>am-icon:sm</td>
    </tr>
  </tbody>
</table>


### Input Group 输入框组

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-input-group</td>
    </tr>
    <tr>
    <td>输入框结合 Button</td>
    <td>am-input-group:btn</td>
    </tr>
    <tr>
    <td>Input Group: primary 颜色</td>
    <td>am-input-group:primary</td>
    </tr>
    <tr>
    <td>Input Group: secondary 颜色</td>
    <td>am-input-group:secondary</td>
    </tr>
    <tr>
    <td>Input Group: success 颜色</td>
    <td>am-input-group:success</td>
    </tr>
    <tr>
    <td>Input Group: warning 颜色</td>
    <td>am-input-group:warning</td>
    </tr>
    <tr>
    <td>Input Group: danger 颜色</td>
    <td>am-input-group:danger</td>
    </tr>
    <tr>
    <td>Input Group: lg 大小</td>
    <td>am-input-group:lg</td>
    </tr>
    <tr>
    <td>Input Group: sm 大小</td>
    <td>am-input-group:sm</td>
    </tr>
  </tbody>
</table>


### List 列表

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-list</td>
    </tr>
    <tr>
    <td>纯文字列表</td>
    <td>am-list:static</td>
    </tr>
    <tr>
    <td>列表边框</td>
    <td>am-list:border</td>
    </tr>
    <tr>
    <td>斑马纹列表</td>
    <td>am-list:striped</td>
    </tr>
  </tbody>
</table>


### Nav 导航

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-nav</td>
    </tr>
    <tr>
    <td>水平导航</td>
    <td>am-nav:pills</td>
    </tr>
    <tr>
    <td>标签式导航</td>
    <td>am-nav:tabs</td>
    </tr>
    <tr>
    <td>宽度自适应</td>
    <td>am-nav:justify</td>
    </tr>
  </tbody>
</table>


### Topbar 导航条

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-topbar</td>
    </tr>
    <tr>
    <td>深色样式</td>
    <td>am-topbar:inverse</td>
    </tr>
    <tr>
    <td>底部固定</td>
    <td>am-topbar:fixed-bottom</td>
    </tr>
    <tr>
    <td>顶部固定</td>
    <td>am-topbar:fixed-top</td>
    </tr>
  </tbody>
</table>


### Pagination 分页

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-pagination</td>
    </tr>
    <tr>
    <td>居中对齐</td>
    <td>am-pagination:centered</td>
    </tr>
    <tr>
    <td>右对齐</td>
    <td>am-pagination:right</td>
    </tr>
    <tr>
    <td>左右分布</td>
    <td>am-pagination:prevnext</td>
    </tr>
  </tbody>
</table>


### Panel 面板

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-panel</td>
    </tr>
    <tr>
    <td>面板颜色: primary</td>
    <td>am-panel:primary</td>
    </tr>
    <tr>
    <td>面板颜色: secondary</td>
    <td>am-panel:secondary</td>
    </tr>
    <tr>
    <td>面板颜色: success</td>
    <td>am-panel:success</td>
    </tr>
    <tr>
    <td>面板颜色: warning</td>
    <td>am-panel:warning</td>
    </tr>
    <tr>
    <td>面板颜色: danger</td>
    <td>am-panel:danger</td>
    </tr>
    <tr>
    <td>面板页脚</td>
    <td>am-panel:footer</td>
    </tr>
    <tr>
    <td>面板嵌套表格</td>
    <td>am-panel:table</td>
    </tr>
    <tr>
    <td>面板嵌套列表</td>
    <td>am-panel:list</td>
    </tr>
    <tr>
    <td>面板群组</td>
    <td>am-panel:group</td>
    </tr>
  </tbody>
</table>


### Progress 进度条

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-progress</td>
    </tr>
    <tr>
    <td>进度条颜色: secondary</td>
    <td>am-progress:secondary</td>
    </tr>
    <tr>
    <td>进度条颜色: success</td>
    <td>am-progress:success</td>
    </tr>
    <tr>
    <td>进度条颜色: warning</td>
    <td>am-progress:warning</td>
    </tr>
    <tr>
    <td>进度条颜色: danger</td>
    <td>am-progress:danger</td>
    </tr>
    <tr>
    <td>进度条高度: xs</td>
    <td>am-progress:xs</td>
    </tr>
    <tr>
    <td>进度条高度: sm</td>
    <td>am-progress:sm</td>
    </tr>
    <tr>
    <td>进度条条纹: striped</td>
    <td>am-progress:striped</td>
    </tr>
  </tbody>
</table>


### Thumbnail 缩略图

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-thumbnail</td>
    </tr>
  </tbody>
</table>


### Animation 动画

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-animation</td>
    </tr>
    <tr>
    <td>动画效果: fade</td>
    <td>am-animation:fade</td>
    </tr>
    <tr>
    <td>动画效果: scale-up</td>
    <td>am-animation:scale-up</td>
    </tr>
    <tr>
    <td>动画效果: scale-down</td>
    <td>am-animation:scale-down</td>
    </tr>
    <tr>
    <td>动画效果: slide-top</td>
    <td>am-animation:slide-top</td>
    </tr>
    <tr>
    <td>动画效果: slide-bottom</td>
    <td>am-animation:slide-bottom</td>
    </tr>
    <tr>
    <td>动画效果: slide-left</td>
    <td>am-animation:slide-left</td>
    </tr>
    <tr>
    <td>动画效果: slide-right</td>
    <td>am-animation:slide-right</td>
    </tr>
    <tr>
    <td>动画效果: shake</td>
    <td>am-animation:shake</td>
    </tr>
    <tr>
    <td>动画效果: spin</td>
    <td>am-animation:spin</td>
    </tr>
  </tbody>
</table>


### Article 文章内容

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-article</td>
    </tr>
  </tbody>
</table>

## JS 代码片段目录

### Alert 警告框

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-alert</td>
    </tr>
    <tr>
    <td>颜色: success</td>
    <td>am-alert:success</td>
    </tr>
    <tr>
    <td>颜色: warning</td>
    <td>am-alert:warning</td>
    </tr>
    <tr>
    <td>颜色: danger</td>
    <td>am-alert:danger</td>
    </tr>
    <tr>
    <td>颜色: secondary</td>
    <td>am-alert:secondary</td>
    </tr>
  </tbody>
</table>

### Collapse 折叠

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-collapse</td>
    </tr>
    <tr>
    <td>折叠面板</td>
    <td>am-collapse:accordion</td>
    </tr>
  </tbody>
</table>

### Dropdown 下拉组件

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-dropdown</td>
    </tr>
    <tr>
    <td>上拉列表</td>
    <td>am-dropdown:up</td>
    </tr>
    <tr>
    <td>下拉内容</td>
    <td>am-dropdown:content</td>
    </tr>
    <tr>
    <td>宽度适应</td>
    <td>am-dropdown:justify</td>
    </tr>
  </tbody>
</table>

### Modal 模态窗口

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-modal</td>
    </tr>
    <tr>
    <td>模拟 Alert</td>
    <td>am-modal:alert</td>
    </tr>
    <tr>
    <td>模拟 Confirm</td>
    <td>am-modal:confirm</td>
    </tr>
    <tr>
    <td>模拟 Prompt</td>
    <td>am-modal:prompt</td>
    </tr>
    <tr>
    <td>模拟 Loading</td>
    <td>am-modal:loading</td>
    </tr>
    <tr>
    <td>模拟 Actions</td>
    <td>am-modal:actions</td>
    </tr>
    <tr>
    <td>模拟 Popup</td>
    <td>am-modal:popup</td>
    </tr>
  </tbody>
</table>


### Popover 弹出框

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-popover</td>
    </tr>
  </tbody>
</table>


### Slider 图片轮播

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-slider</td>
    </tr>
  </tbody>
</table>


### OffCanvas 侧边栏

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-offcanvas</td>
    </tr>
    <tr>
    <td>右侧显示</td>
    <td>am-offcanvas:flip</td>
    </tr>
  </tbody>
</table>

### ScrollSpy 滚动侦测

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-scrollspy</td>
    </tr>
    <tr>
    <td>动画形式:fade</td>
    <td>am-scrollspy:fade</td>
    </tr>
    <tr>
    <td>动画形式:scale-down</td>
    <td>am-scrollspy:scale-down</td>
    </tr>
    <tr>
    <td>动画形式:scale-up</td>
    <td>am-scrollspy:scale-up</td>
    </tr>
    <tr>
    <td>动画形式:shake</td>
    <td>am-scrollspy:shake</td>
    </tr>
    <tr>
    <td>动画形式:slide-bottom</td>
    <td>am-scrollspy:slide-bottom</td>
    </tr>
    <tr>
    <td>动画形式:slide-left</td>
    <td>am-scrollspy:slide-left</td>
    </tr>
    <tr>
    <td>动画形式:slide-right</td>
    <td>am-scrollspy:slide-right</td>
    </tr>
    <tr>
    <td>动画形式:slide-up</td>
    <td>am-scrollspy:slide-up</td>
    </tr>
  </tbody>
</table>

### ScrollSpyNav 滚动侦测导航

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-scrollspy-nav</td>
    </tr>
  </tbody>
</table>

### Smooth Scroll 平滑滚动

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-smoothscroll</td>
    </tr>
  </tbody>
</table>

### Sticky 固定元素

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-sticky</td>
    </tr>
  </tbody>
</table>

### Tabs 选项卡

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-tabs</td>
    </tr>
  </tbody>
</table>

### Datepicker 日期组件

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-datapicker</td>
    </tr>
    <tr>
    <td>结合组件使用</td>
    <td>am-datapicker:group</td>
    </tr>
  </tbody>
</table>

### Selected 下拉选框

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-selected</td>
    </tr>
    <tr>
    <td>多选下拉框</td>
    <td>am-selected:multiple</td>
    </tr>
    <tr>
    <td>分组多选下拉框</td>
    <td>am-selected:group</td>
    </tr>
  </tbody>
</table>

### uCheck 单/多选框

<table class="am-table am-table-bordered am-table-striped am-table-hover">
  <thead>
    <tr>
    <th>组件</th>
    <th>代码片段</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>基本样式</td>
    <td>am-ucheck</td>
    </tr>
    <tr>
    <td>选框状态: checked</td>
    <td>am-ucheck:checked</td>
    </tr>
    <tr>
    <td>选框状态: disabled</td>
    <td>am-ucheck:disabled</td>
    </tr>
  </tbody>
</table>
