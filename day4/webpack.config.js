let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let MiniCssExtractPlugin = require('mini-css-extract-plugin')
let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
let UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
// webpack  是 node编写的， 就要用node的语法写
module.exports = {
  optimization: { // 优化项
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(), // 注意：压缩css时，js会不压缩，要下载相应的包进行压缩
      new UglifyjsWebpackPlugin({
        cache: true, // 是否使用缓存
        parallel: true, // 并行压缩
        sourceMap: true // 压缩后源码调试
      })
    ]
  },
  mode: 'production', // 开发环境的模式 两种
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css' // 抽离的css文件名
    })
  ]
}