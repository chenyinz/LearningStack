# DOM 基础概念：

DOM 是使用多个 API 构建的，例如 HTMLDOMAPI 为核心的 DOM 增加了对表示 HTML 文档的支持，SVGAPI 增加了对表示 SVG 文档的支持。
DOM 不是 JavaScript 语言的一部分，而是用于建立网站的 Web API。而且 DOM API 不是 Node.js 运行时的核心部分。

- 了解 DOM 是什么，它是如何表示文档结构的树形结构，由节点组成的等基本概念。

节点类型：

- 理解不同类型的节点，如元素节点、文本节点、属性节点等。
  - 元素节点 div p ul
  - 文本节点 <p>文本节点<p>
  - 属性节点 如<a href="https://example.com">中的 href 属性
  - 注释节点 <!-- 这是一个注释 -->
  - 文档节点 表示 DOM 树的根节点。
  - 文档类型节点:定义文档的类型 如<!DOCTYPE html> 它通常出现在文档的顶部，告诉浏览器或解析器如何解释文档
- 节点获取和操作：
  - 学习如何通过 JavaScript 代码获取 DOM 节点，例如使用 document.getElementById、document.querySelector 等方法。
    学习如何创建、修改和删除 DOM 节点。
- 遍历 DOM：
  - 学习如何遍历 DOM 树，访问父节点、子节点、兄弟节点等。
- 修改 DOM 属性和内容：
  - 学会如何修改元素的属性，如 element.setAttribute、element.removeAttribute 等。
  - 学会如何修改元素的文本内容，如 element.textContent、element.innerHTML 等。
- 事件处理：
  了解如何添加事件监听器以响应用户操作，例如 element.addEventListener。
  学习事件对象的属性和方法，以便处理事件。
- 样式操作：
  - 学习如何通过 DOM 修改元素的样式，如 element.style 属性。
    了解样式类的操作，如 element.classList。
    表单操作：
    。
- DOM 事件模型：
  - 了解 DOM 事件传播机制，包括捕获和冒泡阶段。
    学习如何阻止事件的默认行为和取消事件传播。
    异步操作：
- 了解异步加载和操作 DOM 的方法，如 setTimeout、setInterval 和 Promise 等。

## DOM 数据类型

在 DOM（文档对象模型）中，有一些常见的数据类型

1. **Document**：

   - 表示整个文档，是 DOM 树的根节点。
   - 包含了文档的所有元素、属性和其他内容。

2. **Node**

   - 位于文档中的每个对象都是某种类型的节点。在一个 HTML 文档中，
     一个对象可以是一个元素节点，也可以是一个文本节点或属性节点。

3. **Element**：
   Element 是继承 Node

   - 表示 HTML 或 XML 文档中的元素节点，如`<div>`、`<p>`、`<ul>`等。
   - 具有标签名、子节点、属性等属性。

4. **Text**：

   - 表示文本节点，通常包含在元素节点内，表示元素的文本内容。
   - 文本节点的内容是纯文本，不包含 HTML 标签。

5. **Attribute**：

   - 表示元素的属性节点，如`<a href="https://example.com">`中的`href`属性。
   - 属性节点包含属性的名称和值。

6. **Comment**：

   - 表示注释节点，用于添加注释或说明文档的一部分。
   - 注释节点的内容以`<!--`开头和`-->`结尾。

7. **DocumentFragment**：

   - 表示文档片段，是一种虚拟容器，可以用来临时存储和操作一组节点。
   - 通常用于批量操作节点，以减少 DOM 操作的性能开销。

8. **NodeList**：

   - 表示一组节点的列表，通常由查询 DOM 元素时返回。
   - NodeList 是类似数组的对象，可以通过索引访问其中的节点。

9. **HTMLCollection**：

   - 类似于 NodeList，表示一组元素的集合。
   - HTMLCollection 通常表示特定于 HTML 文档的元素集合，如表单元素或页面上的图片集合。

10. **NamedNodeMap**：

    - 表示一组属性节点的集合，通常用于表示元素的属性列表。
    - NamedNodeMap 以属性名称作为键，属性节点作为值。

11. **Range**：
    - 表示文档中的一个范围，用于选择和操作文档的一部分。
    - 可以用于创建、移动和删除文档中的内容。

## DOM 中的核心接口

window 对象代表类似浏览器的东西，而 document 对象是文档本身的根。
Element 继承自通用的 Node 接口，这两个接口一起提供了许多你在单个元素上使用的方法和属性。

```
    document.querySelector()
    document.querySelectorAll()
    document.createElement()
    Element.innerHTML
    Element.setAttribute()
    Element.getAttribute()
    EventTarget.addEventListener()
    HTMLElement.style
    <!-- 这个style是用于修改演示的 -->
        <!-- const paragraph = document.getElementById("myParagraph");
    // 修改样式
    paragraph.style.backgroundColor = "blue";
    paragraph.style.color = "white";
    paragraph.style.padding = "10px";
    paragraph.style.border = "1px solid black";
    paragraph.classList.add("highlight"); -->

    Node.appendChild()
    window.onload
     <!-- window.onload = (event) => {
        console.log("page is fully loaded");
    }; -->
    window.scrollTo()
```

- 添加子元素

```
Document.querySelector() 来访问 <div> 和按钮
EventTarget.addEventListener() 来监听按钮点击事件
Document.createElement 来创建元素
Node.appendChild() 来添加子元素
Node.removeChild() 来移除子元素
```

# DOM 传播机制

DOM 事件传播机制是指当一个元素上发生了事件时，该事件如何在 DOM 树中传播到其他元素的过程。DOM 事件传播机制分为三个阶段：捕获阶段、目标阶段和冒泡阶段。
另外阻止默认事件的发生或者以免影响到其他运行的程序。

1. 捕获阶段（Capture Phase）：

   - 事件从文档根节点开始，逐级向下传播，直到达到触发事件的元素。
   - 在捕获阶段，事件会依次经过从根节点到事件目标元素的每个父级元素。

2. 目标阶段（Target Phase）：

   - 事件到达触发事件的元素。
   - 在目标阶段，事件仅在事件目标元素上触发，不涉及其他元素。

3. 冒泡阶段（Bubbling Phase）：
   - 事件从事件目标元素开始，逐级向上冒泡，直到达到文档根节点。
   - 在冒泡阶段，事件会依次经过从事件目标元素到根节点的每个父级元素。

在事件传播的过程中，可以通过调用 `event.stopPropagation()` 方法来停止事件的传播。这样可以阻止事件继续向上冒泡或向下捕获。

默认情况下，大多数 DOM 事件会在目标阶段触发，并在冒泡阶段继续传播。但也有一些事件（如** `focus` 和 `blur`**）不会冒泡，而是在目标元素上触发并停止传播。

可以使用以下方法来绑定事件处理程序：

- `addEventListener(eventType, handler, useCapture)`：通过该方法可以在元素上添加事件处理程序。`eventType` 是事件类型，如 "click"、"keydown" 等；`handler` 是事件处理函数；`useCapture` 是一个可选参数，表示事件是否在捕获阶段处理，默认为 `false`（在冒泡阶段处理）。
- `element.oneventType = handler`：通过该方法可以直接将事件处理函数赋值给元素的事件属性。例如，`element.onclick = handleClick`。

在事件处理程序中，可以通过访问 `event.target` 属性来获取触发事件的元素，以及使用其他 `event` 对象的属性和方法来处理事件。
