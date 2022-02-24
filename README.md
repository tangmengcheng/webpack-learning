# webpack-learning

- webpack4.x 学习

Webpack 是一个现代的 JS 应用程序的静态模块打包器（module bundler）

模块：模块化开发，可以提高开发效率，避免重复造轮子
打包：将各个模块，按照一定的规则组装起来

- 1. webpack 基础配置
- 所使用的依赖包有：webpack webpack-cli webpack-dev-server

- 2. html 插件
- 所使用的依赖包有：html-webpack-plugin

- 3. css 样式的处理
- 所使用的依赖包有：css-loader style-loader less less-loader stylus stylus-loader sass-loader node-sass

- 4. css 样式自动添加前缀和抽离 css 样式文件
- 所使用的依赖包有: postcss-loader autoprefixer mini-css-extract-plugin `extract-text-plugin(过时)`

- 5. css 样式和 js 文件的压缩
- 所使用的依赖包有：optimize-css-assets-webpack-plugin uglifyjs-webpacl-plugin

- 6. 处理 es6 和一些更高级的语法
- 所使用的依赖包有：babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime @babel/runtime @babel/polyfill[includes]

- 7. 全局变量的引入[jquery]
- 所使用的依赖包有：expose-loader webpack.providePlugin() externals:{}

- 8. 图片的处理
- 所使用的依赖包有：file-loader url-loader html-withimg-loader

- 9. 打包多页应用
- 所使用的依赖包有：html-webpack-plugin

- 10. 配置 sourceMap 和 watch 的用法和 resolve 属性的配置

- 11. copyWebpackPlugin bannerWebpack cleanWebpackPlugin 等插件

- 12. 定义环境变量 DefinePlugin 和 区别不同环境

- 13. webpack 自带优化，noParse IgnorePlugin

- 14. webpack 优化，动态链接库 DllPlugin DllReferencePlugin

- 15. webpack 优化，多线程打包 happypack 和自带优化 tree-shaking & scope-hosting

- 16. 抽离公共代码

- 17. 懒加载和热加载

- 18. 手写 webpack

- 19. 手写 loader

webpack 可以看做是模块打包机，它做的事情是，分析你的项目结构，找到 JavaScript 模块以及其他的一些浏览器不能直接运行的扩展语言（Sass TS 等）
并将其打包为合适的格式以供浏览器使用。
构建就是把源代码转换成发布到线上的可执行的 JavaScript CSS HTML 代码，包括以下内容：

- 代码转换：TypeScript 编译成 JavaScript 、Scss 编译成 CSS 等
- 文件优化：压缩 JavaScript、CSS、HTML 代码，压缩合并图片等
- 代码分割：提供多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载
- 模块合并：在采用模块化的项目里会有多个模块和文件，需要构建功能把模块分类合并成一个文件
- 自动刷新：监听本地源代码，自动重新构建，刷新浏览器
- 代码校验: 在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统

构建其实是工程化，自动化思想在前端开发中的体现，把一系列流程用代码去实现，让代码自动化的执行这一系列复杂的列出，构建给前端开发注入了更大的活力，解放了我们的生产力。

> webpack 进阶内容

- 区分打包环境

> 区分环境的两种方式：

1.  通过环境变量区分：
    - webpack --env.production【webpack4 写法】
    - webpack --env production【webpack5 写法】
    - webpack.config.js 中判断 env
    ```js
    // webpack.config.js
    module.exports = (env, argv) => {
      if (env.production) {
        // 生产环境的配置
      }
      // 开发环境的配置
    }
    ```
2.  通过配置文件区分：
    - webpack.dev.conf.js
    - webpack.prod.conf.js
    - 执行打包时，指定配置文件（webpack --config webpack.[dev/prod].conf.js）
    ```js
    webpack.dev.js
    webpack.base.js
    webpack.prod.js
    ```
3.  DefinePlugin
    - 为配置注入全局变量
    - 开发环境和生产环境的接口地址不同
    ```js
    // webpack.config.js
    const webpack = require('webpack')
    module.exports = {
      // ...
      plugins: [
        new webpack.DefinePlugin({
          API_BASE_URL: JSON.stringify('https://www.api.com'),
        }),
      ],
    }
    // 代码里使用
    console.log(API_BASE_URL)
    ```
    **注意：** 变量后面的值，是一个代码片段。**不是字符串**

- 自定义 plugin

  Webpack 插件是一个具有 apply 方法的 JavaScript 对象。apply 方法会被 webpack compiler 调用，并且在整个编译生命周期都可以访问 compiler 对象

  - 原理：通过在**生命周期**的**钩子**中挂载函数，来实现功能扩展。

  - 生命周期：就是整个生命过程中的关键节点

  - 钩子：是提前在可能增加的地方，埋好（预设）一个函数

  - 常用钩子：

    | 钩子        |                   描述 |      类型       |
    | :---------- | ---------------------: | :-------------: |
    | environment |           环境准备好了 |    SyncHook     |
    | compile     |               编译开始 |    SyncHook     |
    | compilation |               编译结束 |    SyncHook     |
    | emit        | 打包资源到 output 之前 | AsyncSeriesHook |
    | afterEmit   | 打包资源到 output 之后 | AsyncSeriesHook |
    | done        |               打包完成 |    SyncHook     |

    > 顺序：environment -> compile -> compilation -> emit -> afterEmit -> done

    ```js
    class MyPlugin {
      constructor(options) {
        console.log('插件选项：', options)
        this.userOptions = options || {}
      }

      // 必须带有apply方法
      apply(compiler) {
        compiler.hooks.emit.tap('插件名称', (compilation) => {
          // compilation 此次打包的上下文
          console.log('webpack 构建过程开始！', compilation)
          for (const name in compilation.assets) {
            // if(name.endsWith('.css'))
            if (name.endsWith(this.userOptions.target)) {
              // 获取处理之前的内容
              const content = compilation.assets[name]
              // 将原来的内容，通过正则表达式，删除注释
              const noComments = content.replace(/\/\*[\s\S*?]\*\//g, '')
              // 将处理后的结果，替换
              compilation.assets[name] = {
                source: () => noComments,
                size: () => noComments.length,
              }
            }
          }
        })
      }
    }

    module.exports = MyPlugin

    // 使用
    const MyPlugin = require('./plugin/my-plugin')

    module.exports = {
      // 插件配置
      plugins: [
        new MyPlugin({
          // 插件选项
          target: '.css',
        }),
      ],
    }
    ```

- 自定义 loader
- 代码分离（Code Splitting）
- 源码映射（Source Map）
- 删除多余代码（Tree Shaking）
- 缓存
- 模块解析（resolve）
- 排除依赖（externals）
- 模块联邦
