# webpack-learning

- webpack4.x 学习

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

webpack可以看做是模块打包机，它做的事情是，分析你的项目结构，找到JavaScript模块以及其他的一些浏览器不能直接运行的扩展语言（Sass TS等）
并将其打包为合适的格式以供浏览器使用。
构建就是把源代码转换成发布到线上的可执行的JavaScript CSS HTML代码，包括以下内容：
- 代码转换：TypeScript 编译成 JavaScript 、Scss编译成CSS等
- 文件优化：压缩JavaScript、CSS、HTML代码，压缩合并图片等
- 代码分割：提供多个页面的公共代码，提取首屏不需要执行部分的代码让其异步加载
- 模块合并：在采用模块化的项目里会有多个模块和文件，需要构建功能把模块分类合并成一个文件
- 自动刷新：监听本地源代码，自动重新构建，刷新浏览器
- 代码校验: 在代码被提交到仓库前需要校验代码是否符合规范，以及单元测试是否通过
- 自动发布：更新完代码后，自动构建出线上发布代码并传输给发布系统


构建其实是工程化，自动化思想在前端开发中的体现，把一系列流程用代码去实现，让代码自动化的执行这一系列复杂的列出，构建给前端开发注入了更大的活力，解放了我们的生产力。
