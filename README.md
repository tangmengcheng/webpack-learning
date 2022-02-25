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

> 为什么要有代码分离

1. 如果把所有代码都打包一起，可能最终的代码非常大
2. 很多代码初始加载时，是不需要的。我们可以根据代码的紧急程度，将代码分割打包

> 怎么做代码分离呢

1. 多入口打包：配置 entry 加载加载多个入口文件
2. 提取公用模块：optimization.splitChunks.chunks: all
3. 动态导入：按需加载 | 预加载

- 多入口打包

```js
module.exports = {
  entry: {
    index: './scr/index.js',
    about: './src/about.js',
  },
  output: {
    filename: '[name].bundle.js', // 不能写成固定名称
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 不同页面加载各自的bundle
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      chunks: ['about'],
    }),
  ],
}
```

- 提取公共代码

如果多个页面都用到了一个公共文件（例如：jQuery）,每个页面都将公共文件打包一次是不合理的。更好的办法是将公共文件提取出来

将公共文件提取出来，单独打包

```js
module.exports = {
  // 优化策略
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
```

- 代码分离（Code Splitting）动态导入

1. 懒加载

   - 默认不加载，事件触发后才加载
   - webpackChunkName: '加载名称'

   ```js
   // import: 开启懒加载
   // webpackPrefetch: true 开启预加载
   import(/* webpackChunkName: 'tmc', webpackPrefetch: true */, './xxx').then(res => {
       console.log(res)
   })
   ```

2. 预加载

   - 先等待其他资源加载，浏览器空闲时，再加载
   - webpackPrefetch: true
   - 缺点：在移动端有兼容性问题

**注意：**两者的区别：预加载在浏览器的 network 中有记录，懒加载没有

- 源码映射（Source Map）

> 什么是 Source Map

- 是一种源代码与构建后代码之间的映射技术
- 通过.map 文件，将构建后的代码与源代码之间建立映射关系

> 为什么要用 Source Map

- 问题：构建后的代码，出了问题之后不好定位
- 方案：有了 Source Map 后，可以快速定位问题代码

> 如何生成 Source Map

- devtool: '映射模式'

1. 不同的映射模式的报错定位和打包执行速度不同
2. Webpack4 中，一共有 13 种不同的映射模式
3. Webpack5 中，一共有 26 种不同的映射模式

- cheap: 只定位报错行，不定位报错列
- hidden: 生成.map 文件，但是.js 的末尾没有关联.map, 报错后需手动关联，然后定位报错
- inline: 不生成.map 文件，映射以 Base64-VLQs 的形式添加到.js 最后
- eval: 不生成.map 文件，映射信息追加到 eval 函数的最后
- module: 不但映射工程师自己写的代码，还支持对 loader 和第三方模块的映射
- nosources: 生成的.map 中不包含 sourceContent, 定位错误时看不到源码（更安全）

| devtool | .map | build | rebuild | production | description |
| none | Y | fastest | fastest | Y | 不启用 Source Map |
| source-map | Y | fastest | slowest | Y | 报错时，定位行列（功能最全，也最慢） |
| cheap-source-map | Y | fast | slow | Y | 只定位行（不包含第三方模块） |
| cheap-module-source-map | Y | slow | slower | Y | 只定位行，包含第三方模块 |
| nosources-source-map | Y | slowest | slowest | Y | 只定位错误，不显示源码 |
| hidden-source-map | Y | slowest | slowest | Y | 定位行列，默认.js 不关联.map，报错后手动关联 |
| inline-source-map | N | fastest | fastest | N | 映射在.js 最后，定位行列 |
| inline-cheap-source-map | N | fast | slow | N | 映射在.js 最后，只定位行 |
| inline-cheap-module-source-map | N | slow | slower | N | 映射在.js 最后，只定位行 ，包含第三方模块 |
| eval | N | fastest | fastest | N | 映射在 eval 函数最后，只映射文件名，不定位行和列 |
| eval-source-map | N | slowest | fast | N | 映射在 eval 函数最后，定位行列 |
| eval-cheap-source-map | N | fast | faster | N | 映射在 eval 函数最后，只定位行 |
| eval-cheap-module-source-map | N | slow | faster | N | 映射在 eval 函数最后，值定位行，包含第三方模块 |

> 开发环境：速度快，调试更友好

- 速度快：（eval > inline > cheap > ....）

  1. eval-cheap-source-map
  2. eval-source-map

- 调试更友好
  1. source-map
  2. cheap-module-source-map
  3. cheap-source-map

**综上所得**：可以选择：eval-source-map / eval-cheap-module-source-map

> 生产环境：代码需不需要隐藏？

内联会让代码体积变大，所以生产环境不用内联

1. nosources-source-map 全部隐藏
2. hidden-source-map 只隐藏源代码，会提示构建后代码错误

**综上所得**：可以选择：source-map / cheap-module-source-map

- 删除多余代码（Tree Shaking）

> Tree Shaking 的作用是删除未引用的代码（dead code）

- return 后面的代码
- 只声明，而未使用的函数
- 只引入，而未使用的代码

> 使用 Tree Shaking 的前提

1. 使用 ES Modules 规范的模块，才能执行 Tree Shaking
2. Tree Shaking 依赖于 ES Modules 的静态语法分析

> 如何使用呢

1. 生产模式：Tree Shaking 会自动开启
2. 开发模式：（两种方式：usedExports, sideEffects）

- optimization.usedExports (标记没有的代码)

  - /_ unused harmony export xxxx _/标记没使用的代码

- terser-webpack-plugin（删除没用的代码）

  - optimization.minimize: true（删除 unused harmony export xxxx 标记的代码）
  - Webpack4 需要单独安装（Webpack5 内置，无需安装）

- Tree Shaking 与 Source Map 一起用的时候，存在兼容性问题

  - devtool: 只能选择 source-map | inline-source-map | hidden-source-map | nosources-source-map
  - eval 模式，将 JS 输出为字符串（不是 ES Modules 规范），导致 Tree Shaking 失效

```js
const TerserPlugin = require('terser-webpack-plugin')
module.exports = {
  // 优化策略
  optimization: {
    usedExports: true, // 标记未被使用的代码
    minimize: true, // 删除usedExports标记的未使用的代码
    minimizer: [new TerserPlugin()],
  },
}
```

- 副作用

  - 无副作用：如果一个模块单纯的导入导出变量，那它就无副作用
  - 有副作用：如果一个模块还修改其他模块或者全局的一些东西，就有副作用
    - 修改全局变量
    - 在原型上扩展方法
    - css 的引入

> sideEffects 的作用：把未使用但无副作用的模块一并删除

    - 对于没有副作用的模块，未使用代码不会被打包（相当于压缩了输出内容）

- 开启副作用（webpack.config.js）

  - optimization.sideEffects: true

- 标识代码是否有副作用（package.json）

  - "sideEffects"
    - false: 所有代码都没有副作用（告诉 webpack 可以安全的删除未用的 exports）
    - true: 所有代码都有副作用
    - 数组：（告诉 webpack 哪些模块有副作用，不删除）
      - 【相对路径，绝对路径，正则】['./src/index.js', '*.css']

```js
// webpack.config.js
module.exports = {
  // 优化策略
  optimization: {
    sideEffects: true,
  },
}
// package.json
{
    // "sideEffects": false 删除所有没有导出的内容
    "sideEffects": [ // 告诉webpack哪些有副作用的
        "./src/extend.js",
        "./src/css/**"
    ]
}
```

- 缓存

  - Babel 缓存
    - cacheDirectory: true（第二次构建时，会读取之前的缓存）
  - 文件资源缓存
    - 问题：如果代码再缓存期内，导致代码更新后看不到实时效果
    - 方案：将代码文件名称，设置为哈希名称，名称发生变化时，就加载最新的内容
    - Webpack 哈希值
      - hash: (每次 webpack 打包生成的 hash 值)
      - chunkhash: (不同 chunk 的 hash 值不同 -》同一次打包可能生成不同的 chunk)
      - contenthash: (不同内容的 hash 值不同 -》同一个 chunk 中可能有不同的内容)

- 模块解析（resolve）
- 排除依赖（externals）
- 模块联邦（Module Federation）

  - 多个应用，可以共享一个模块（本地可以调远程的模块）
  - 模块提供方
    - name: 当前应用名称（供调用方使用）
    - filename: 打包后的文件名称（供调用方使用）
    - exposes: 暴露模块（相当于 export 导出）
      - 模块名称：模块文件路径
  - 模块使用方 - remotes: 导入模块（相当于 import）

    - 导入后的别名：“远程应用名称@远程地址/远程导出的文件名”
    - import("导入后的别名/模块名称").then(//...)

    // 按钮模块 轮播图模块 tab 切换模块等应用

Webpack5 中压缩 CSS 的插件，建议使用 css-minimizer-webpack-plugin（https://www.npmjs.com/package/css-minimizer-webpack-plugin）
