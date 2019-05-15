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
  module: {
    noParse: /jquery/, // 不去解析jquery包中的依赖关系
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        },
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.IgnorePlugin(/\.\/locale/, /moment/) // 加载moment这个依赖时，忽略加载./locale文件
  ]
}