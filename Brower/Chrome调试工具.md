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
|320px| 375px |425px |768px| 1024px| 1440px| 2560px|

- 顶部右侧可以设置 DPR、Ruler、capture 内容
  - DPR
    设备像素比 (DPR) 是硬件屏幕上的物理像素与逻辑 (CSS) 像素之间的比率。换句话说，DPR 告诉 Chrome 使用多少屏幕像素来绘制 CSS 像素。
  - DPR 的重要性在于它影响了图像和文本在不同屏幕上的显示质量和大小。
  - 苹果的 Retina 显示器通常具有 DPR 值为 2，这意味着每个逻辑像素对应四个物理像素
    ```
        @media only screen and (min-resolution: 2dppx) {
            /* 适用于DPR为2的设备，提供高分辨率图像 */
        }
    ```
- 模拟特定设备，例如 Next Hub 智能家居设备

## element

- ctrl+F 查看元素
- 编写 textcontent 或者 tag 的 attributes、edit node type、edit node html、duplcication a node
- reorder dom nodes
  - force state
  - hide node
  - delete a node
  - $0 可以显示所选的内容显示在 console 中
  - Store as global variable 需要多次参考某个节点多次 可以将其设置为全局变量
- 在 properties 面板内可以找到
  节点的属性 以及 inherited

## css

- inactive 有效但因为其他元素的存在而不能发挥作用的标志
- 斜体为无法编辑

## console

- console.log() 显示信息
- console.assert() 警告信息 红色的字体
- console.table(object) 显示图表 其实 object 是数组对象
- console 控制台也是 REPL（Read–eval–print loop）运行 js 内容
- console.warn 警告信息 黄色字体
- console.Verbose
- console.Errors
- create live expression 将要表达式写入
- Format and style messages in the Console
- console.count() 计数工具 当 count 里添加内容即重新开始计数 每次使用 console.log 加 1
- console.countReset()重新计数
- console.dir(object)打印指定对象的 JSON 表达式
- console.dirxml(node)打印节点后面的 xml 内容
- console.error 打印出错误内容信息提示 并暴扣堆栈跟踪
- console.ground()
  ```
  const label = 'Adolescent Irradiated Espionage Tortoises';
  console.group(label);
  console.info('Leo');
  console.info('Mike');
  console.info('Don');
  console.info('Raph');
  console.groupEnd(label);
  ```
- console.time() expression console.timeEnd() 配合来计算 expression 的时间
- console.trace 将堆栈跟踪打印到控制台
- $_ 返回最近计算的值 $_.length 的长度
- $0 - $4 reference to the last five DOM elements inspected within the Elements panel or the last five JavaScript heap objects selected in the Profiles panel.
- $(selector) 是 document.querySelector 的快捷方式 $(selector).src 查看属性值

## sources

查看所有已经在的资源

- top 代表 html 整体框架
- Snippets 运行脚本片段
- Debug javascript 调试
- Pause your code with breakpoints

## network

- Disable cache 来模拟首次访问

## memory

内存泄露问题 通常可以被用户察觉

- 随着时间的推移、页面的性能会逐渐变差，指的页面的中错误导致页面随着时间的推移最贱使用越来越多的内存。
- 页面的始终很差，可能是内存膨胀的症状，页面使用的内存多于最佳页面速度所需的内存。
- 页面的性能出现延迟或者频繁暂停，频繁的垃圾手机的症状，垃圾收集指的是浏览器回收内存
- 通过时间线激励可视化内训泄露
- 修复内存问题 记录堆快照 - 分配分析器工具

## animations

Chrome 开发者工具中的"Animations"（动画）面板是用于调试和分析网页中 CSS 动画和过渡的工具。它提供了以下主要功能和作用：

1. **动画控制**：Animations 面板允许您暂停、播放、快进和倒带页面上的 CSS 动画。这对于调试和查看动画的每个帧以及调整动画的速度和时长非常有用。

2. **帧查看**：您可以逐帧查看动画，以便分析每一帧的样式和布局变化。这对于发现动画中的问题或性能瓶颈非常有帮助。

3. **动画时间轴**：Animations 面板上有一个时间轴，显示了页面上正在进行的所有动画和过渡。您可以在时间轴上选择特定的动画来查看其详细信息。

4. **属性变化追踪**：Animations 面板显示了在动画过程中 CSS 属性的值如何随时间变化。这对于了解动画的行为以及在需要时进行调整非常有用。

5. **动画事件追踪**：您可以查看动画的各种事件，如开始、暂停、完成等，以便了解动画的生命周期。

6. **动画性能分析**：Animations 面板还提供了性能分析工具，可以帮助您识别潜在的性能问题，如掉帧或过渡效果的卡顿。

7. **动画控制台**：您可以在控制台中查看与动画相关的消息、警告和错误，以便更容易调试问题。

总的来说，Chrome 开发者工具中的 Animations 面板是一个强大的工具，用于调试和分析网页上的 CSS 动画和过渡。它使开发者能够更好地理解、控制和优化网页中的动画效果，以提供更好的用户体验。

## record

Record a user flow

# 总结

- Elements（元素）面板：
  用途：查看和编辑网页的 DOM 结构，可以实时修改 HTML 和 CSS，查看页面中的元素层次结构。
- Console（控制台）面板：
  用途：显示 JavaScript 日志、错误和警告信息，还可以在这里执行 JavaScript 代码片段。
- Sources（资源）面板：
  用途：调试 JavaScript 代码，包括断点设置、单步执行、查看变量值等。还可以查看页面的资源文件，如脚本、样式表等。
- Network（网络）面板：
  用途：监视网页加载的所有网络请求，包括请求和响应的详细信息、响应时间线等。有助于性能分析和优化。
- Performance（性能）面板：
  用途：分析页面的性能，包括加载时间、资源使用、渲染性能等。可以录制性能分析会话以进行深入分析。
- Application（应用）面板：
  用途：查看网页的本地存储、缓存、Cookie 等信息。还可以进行 Service Worker 和 Web Workers 的调试。
- Security（安全性）面板：
  用途：检查网页的安全性，包括 SSL 证书信息、混合内容警告等，以确保网页的安全性。
- Audits（审核）面板：
  用途：进行网页性能和可访问性的审核，生成有关改进网页性能的建议。
- Coverage（代码覆盖率）面板：
  用途：帮助识别未使用的 JavaScript 和 CSS 代码，以减小页面加载时间。
- Lighthouse（灯塔）面板：
  用途：使用 Google Lighthouse 工具执行综合性能和可访问性审查，提供改进建议
