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
- 所使用的依赖包有：babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-decorators @babel/plugin-proposal-class-properties  @babel/plugin-transform-runtime  @babel/runtime  @babel/polyfill[includes]

- 7. 全局变量的引入[jquery]
- 所使用的依赖包有：expose-loader  webpack.providePlugin()  externals:{}

- 8. 图片的处理
- 所使用的依赖包有：file-loader url-loader html-withimg-loader

- 9. 打包多页应用
- 所使用的依赖包有：html-webpack-plugin

- 10. 配置sourceMap和watch的用法和resolve属性的配置

- 11. copyWebpackPlugin bannerWebpack cleanWebpackPlugin等插件
