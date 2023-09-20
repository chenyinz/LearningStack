# 为什么要选择 Vite 呢

## 1、vite 解决了什么问题

    - 对于大型项目来说 javacript代码量往往较大、上千个模块。这时的工具会有性能瓶颈，需要一段时间才能启动live sever功能，即使使用的热模块替换。
    - 而vite即解决上述问题。
    - 所采用的的技术
    1.  将应用中模块区分为依赖和源码两类，改进了开发服务器启动时间。
       - 依赖 大多为在开发时不会变动的纯 JavaScript  外部文件 javacript css等 而vite将会使用esbuild预构件依赖，比javascript编写的打包器要快10-100倍。
       - 源码 非直接js文件，需要转码例如 jsx、CSS 、sacc、vue 、tsx等。主要注意的是并未所有源码都需要同时被加载 例如 基于路由拆分的代码模块。
       - bundle based dev server
        [](/asset/1.jpg)
       - Native ESM based dev server
        [](/asset/2.jpg)

       - Server ready是开发服务器
    2. HMR vite只需要精确地使已编辑的模块与其最近的HMR边界之间的链失活
    3. Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。
    4. 生产环境为何仍需打包，因在开发的时候，浏览器支持原生的ES模块，实现按需编译和快速热更新，但在生产环境中，需要将所有模块打包成一个或多个最终输出文件，因为浏览器并不支持模块的嵌套导入，需要将魔铠打包成浏览器可以理解的格式。优化和压缩。资源管理和版本控制。代码进行tree-staking、懒加载、chunk分割。
    5. 为何不用ESBuild打包。 不兼容，因为vite采用的是Rollup灵活的插件API

### 2、如何使用 Vite

    - 注意点 使用vite需要更高版本node.js支持。

        ```
        npm create vite@latest
        ```
        ```
        npm create vite@latest 项目名称 -- --template vue
        ```
    - index.html与项目根目录
        index.html入口文件 也可以使用配置文件中的vite.config.js 来更改根目录

        ```
            {
            "scripts": {
            "dev": "vite", // 启动开发服务器，别名：`vite dev`，`vite serve`
            "build": "vite build", // 为生产环境构建产物
            "preview": "vite preview" // 本地预览生产构建产物
            }
            }
        ```

### 3、typescript

- vite 仅执行.ts 文件的转译工作，并不执行任何类型检查，并假定类型检查已经被你的 IDE 处理完了。

## Vite 工具

    - 打包：将浏览器不认识的代码 交给构建工具进行编译处理 打包完成后给我们可以认识的文件。
    0. 在浏览器支持ES模块之前，javascript并没有提供原生机制让开发者以模块化的方式进行开发。
    1. 模块化开发是一种组织和管理前端代码的方法，将代码划分为独立的模块，并使得每个模块负责特定的功能，从而提高代码的可维护性、可复用性、可扩展性。
    2. 在传统前端开过程中，代码通常以脚本形式编写，所有代码都写在一个或多个全局作用域中。对于这种情况常常会出现一些问题，例如 全局命名冲突、代码耦合度回高、维护成本高。模块化开发通过将代码拆分为独立的模块，每个模块有自己的作用域和内部状态，从而解决这些问题。
    3. 开发过程中，应注意一下这些情况，封装和抽象、依赖管理、模块加载和组合(webpack、requirejs)、代码复用。
    4. webpack Rollup、Parcel等工具的兴起。

    1. typescript 转化为 javsscript tsc app.tsx-->tsc-->app.jsx-->react-compileer-->js 文件
    2. React/Vue 编译 react-compile vue-compile
    3. less/sass/postcss/component-style:需要安装 less-loader,sass-loader 等编译工具。
    4. 语法降级 babel
    5. 体积优化：uglifyjs

    - 模块化开发支持： 直接从 node_modules 里引入代码，多种模块化支持
    - 处理代码兼容性： 集成上面工具，从而达到自动处理。
    - 提高项目的性能: 压缩文件 **代码分割**
    - 提高代码的性能： 构建工具能够帮你自动监听文件的变化，当文件变化后自动调用对应的集成工具进行重新打包，然后再浏览器重新运行。
        1. 开发服务器：跨越的问题，react-cli create-react-element vue-cli 解决跨域问题
        - 在前端开发过程中，跨域问题是一个常见的挑战。跨域是指在浏览器中，当一个网页的 JavaScript 代码试图访问与当前页面不同域名、协议或端口的资源时，浏览器会阻止这种跨域请求。这是出于安全考虑，以防止恶意网站获取用户的敏感信息或进行其他攻击。

## 以下是一些常见的跨域解决方法：

        1. JSONP（JSON with Padding）：JSONP 是一种通过动态创建 `<script>` 标签来实现跨域请求的方法。服务器返回的数据包裹在一个函数调用中，前端通过指定回调函数的方式获取数据。JSONP 只支持 GET 请求，且需要服务器端的支持。

        2. CORS（Cross-Origin Resource Sharing）：CORS 是一种现代化的跨域解决方案，通过在服务器端设置响应头来允许跨域请求。服务器端需要设置 `Access-Control-Allow-Origin` 头来指定允许访问的域名，还可以设置其他的 CORS 相关头，如 `Access-Control-Allow-Methods`、`Access-Control-Allow-Headers` 等。CORS 支持各种类型的请求，包括 GET、POST 等。

        3. 代理服务器：通过在自己的服务器上设置代理，将前端请求转发到目标服务器上，从而绕过浏览器的跨域限制。前端代码发送请求到自己的服务器，服务器再将请求发送到目标服务器，并将响应返回给前端。这种方式需要在服务器端进行配置。

        4. WebSocket：WebSocket 是一种全双工通信协议，它允许在浏览器和服务器之间建立持久连接。由于 WebSocket 是基于 HTTP 协议的，它可以绕过浏览器的跨域限制。

        5. 反向代理：使用反向代理服务器，将前端的请求转发到目标服务器，并将响应返回给前端。反向代理服务器和目标服务器可以在同一个域名下，避免了跨域问题。

        ```js
        //这段代码最终会在浏览器里运行  webpack是应许我们这么写的
        const loadsh=require("loadsh") common.js规范
        import Vue from "vue"; es6 module
        ```
        1. webpack(构建工具)运行在服务端
        2. webpack编译原理 AST抽象语法分析的工具 用于分析js文件中的导入和导出操作

        ```js
        const loadsh=webpack_require("loadsh")
        const vue=webpack_require("vue")
        ```
       3. 需要注意的点是:webpack等构建工具是用在本地开发环境中，然后将构建后的文件放至服务端上，然后从浏览器从服务端或者静态文件服务器上下载和执行。
       4. vite是基于es modules的 webpack支持多种模块化开发，需要将所有依赖全部读取一遍。
       5. vite 关注浏览器端 webpack关注于兼容性。
    # vite 脚手架

    ```
    yarn create vite
    ```

    1. 全局安装 create-vite (vite 脚手架)
    2. 直接运行这个 create-vite bin 目录下的一个执行配置

    create-vite 与 vite 之间的关系 create-vite 内置了 vite 与 vue-cli 会内置 webpack

    -
