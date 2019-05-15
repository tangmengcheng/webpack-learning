let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')

// webpack  是 node编写的， 就要用node的语法写
module.exports = {
  mode: 'development', // 开发环境的模式 两种
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.DefinePlugin({ // 定义环境变量
      DEV: "'dev'",
      FLAG: 'true',
      EXPRESSION: '1+1'
    })
  ]
}