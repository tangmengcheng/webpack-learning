let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
// webpack  是 node编写的， 就要用node的语法写
module.exports = {
  mode: 'production', // 开发环境的模式 两种
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  resolve: { // 解析
    modules: [path.resolve('node_modules')], // 在那个模块中查找，可以加多个
    mainFields: ['style', 'main'], // 先找bootstrap的style 再找main
    // mainFiles: [], // 入口文件的名字 index.js
    // alias: { // 别名
    //   'bootstrap': 'bootstrap/dist/css/bootstrap.css'
    // },
    extensions: ['.js', '.css', '.json', '.vue'] // 省略扩展名
  },
  // watch: true, // 实时打包
  // watchOptions: { // 监控的选项
  //   poll: 1000, // 每秒 问我 1000 次
  //   aggregateTimeout: 500, // 防抖 我一直输入代码 500ms后再打包
  //   ignored: /node_modules/ // 不需要进行监控的文件
  // },
  /**
   * 1. source-map 源码映射  会单独生成一个sourcemap映射文件   出错了会显示当前报错的列和行   大而全
   * 2. eval-source-map  不会产生单独的文件  但是可以显示行和列   映射文件集成在打包的文件中
   * 3. cheap-module-source-map 不会产生列  但是是一个单独的文件; 产生后你可以保存起来以后调试
   * 4. cheap-module-eval-source-map不会产生文件  集成在打包后的文件中  不会产生列
   */
  // devtool: 'cheap-module-eval-source-map', // 增加映射文件，可以帮我们调式代码
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}