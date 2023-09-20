# 为什么要选择 Vite 呢

## 0、模块化开发

    0. 在浏览器支持ES模块之前，javascript并没有提供原生机制让开发者以模块化的方式进行开发。打包的含义其实就是，使用工具、处理将我们的源码模块串联起来并可以在浏览器中运行。
    1. 模块化开发是一种组织和管理前端代码的方法，将代码划分为独立的模块，并使得每个模块负责特定的功能，从而提高代码的可维护性、可复用性、可扩展性。
    2. 在传统前端开过程中，代码通常以脚本形式编写，所有代码都写在一个或多个全局作用域中。对于这种情况常常会出现一些问题，例如 全局命名冲突、代码耦合度回高、维护成本高。模块化开发通过将代码拆分为独立的模块，每个模块有自己的作用域和内部状态，从而解决这些问题。
    3. 开发过程中，应注意一下这些情况，封装和抽象、依赖管理、模块加载和组合(webpack、requirejs)、代码复用。
    4. webpack Rollup、Parcel等工具的兴起。

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
