# BOM

在前端开发过程中，BOM（浏览器对象模型）是用于与浏览器窗口进行交互的一组对象和方法。以下是 BOM 的一些常用知识点：

1.  window 对象：window 对象是 BOM 的顶层对象，表示浏览器窗口或框架标签页。它提供了许多方法和属性，用于操作和控制浏览器窗口。

    - window.location、这个属性允许你获取或设置当前文档的 URL，以及在浏览器中导航到不同的 URL
    - window.alert()、window.setTimeout()
    - window.scrollBy() 和 window.scrollTo() 屏幕滚动

2.  navigator 对象：navigator 对象提供了关于浏览器的信息，如浏览器的名称、版本、用户代理字符串等。它还可以用于检测浏览器的特定功能和功能。

3.  screen 对象：screen 对象表示用户的屏幕或显示器。它提供了关于屏幕的信息，如屏幕的宽度、高度、像素密度等。

4.  location 对象：location 对象用于获取或设置当前窗口的 URL。它提供了一些方法和属性，用于解析和操作 URL。

5.  history 对象：history 对象用于操作浏览器的历史记录。它提供了一些方法，如前进、后退、跳转到指定的 URL 等。

6.  cookies：通过 document 对象的 cookie 属性，可以读取和设置浏览器的 cookie。cookie 是在客户端存储数据的一种方式，用于在不同页面之间传递数据。

    - document.cookie
    - localStorage 和 sessionStorage： 这两个对象允许你在浏览器中存储持久性和会话性数据，以便在不同页面之间或会话之间共享信息。

7.  弹窗：BOM 提供了一些方法，如 alert、confirm 和 prompt，用于在浏览器中显示弹窗，与用户进行交互。

8.  定时器：BOM 提供了两个定时器方法，setTimeout 和 setInterval，用于在指定的时间间隔执行代码或延迟执行代码。

9.  XMLHttpRequest 对象：XMLHttpRequest 对象用于向服务器发送 HTTP 请求并获取服务器的响应。它是实现 AJAX 的基础。

10. 浏览器弹窗阻止： BOM 允许你检测和处理浏览器弹窗阻止器的行为，以确保你的弹窗正常工作。 - 使用现代的弹窗库： 一些现代的弹窗库，如 SweetAlert、Modal 等
    ```js
    // 使用 SweetAlert库
    Swal.fire({
      title: "自定义标题",
      text: "自定义文本内容",
      icon: "info",
      confirmButtonText: "确定",
    });
    window.onload = function () {
      window.alert("欢迎访问我们的网站！");
    };
    ```

这些是 BOM 中的一些常用知识点，它们可以帮助开发人员与浏览器窗口进行交互，并实现与用户的交互和与服务器的通信。
