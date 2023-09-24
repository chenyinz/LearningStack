# html 与 css 调试

可以利用 element 面板实时编辑和查看页面的 html 和 css,快速测试不同的样式和布局，以确保网页在不同设备上正常显示

- inspect(document.getElementById("section_id"))的形式快速定位到所要查询到的内容
- element.style 添加内容 - user agent stylesheet 为浏览器内置的样式
- inherited from ul 从父类 ul 所继承的样式 - console 命令

# js 调试

通过 source 面板 可以设置断点、监视变量，并逐步执行 javascript 代码。

- //debugger 进行代码调试
- DOM Breakpoints 停止的方式 显示停止的节点
  - subtree modificaitions
  - attribute modifiaction
  - node removal
  - preserve log 页面跳转前的一些请求保留下来
  - no throttling 节流器 可以模拟用户的网络状态
  - user agent 模拟用户网页请求的头部
  - accepted content-encodings 用于接受那些默认的格式
  - HAR file 保存浏览器与服务器之间的交互数据 分析那些内容拖慢了网络速度等内容
  - DOMContentLoaded dom 节点渲染完毕时间

## 其他面板

- 性能面板
  - 性能面板可以帮助我们分析网页加载性能，找出潜在的性能问题，如慢加载资源、大型脚本
- 网络请求监控
  - 查看和分析网页发出的网络请求，包括请求和响应头、请求时间线等信息，并识别潜在的性能问题。
- 安全性分析
  - security 面板 可以检查网页的安全性问题，混合内容，不安全的脚本和证书问题。
- 本地存储管理
  - application 面板 查看和管理本地的存储、cookie 和会话存储。 对于调试用户身份验证和本地数据存储问题
- 代码覆盖率
  - Coverage 面板可以分析 javascript 代码的覆盖率，找出未使用的代码块，从而帮助优化代码。
- 移动设备调试
  - 在开发工具中远程调试移动设备上的网页，已确保在移动环境中正常运行。

## 响应式布局

在响应式布局中可以模拟不同设备 其中会与顶部的横条 可以设置不同宽度已达到模拟手机、平板、笔记比、4K 屏幕
|Mobile S| Mobile M |Mobile L |Tablet |Laptop|Laptop L |4K|
|--------|--------|--------|--------|--------|--------|--------|
