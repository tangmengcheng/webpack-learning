const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    // publicPath: 'www.geonoon.com/static/' // 给同一资源加这个路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader', 
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpe?g)|gif$/,
        use: {
          // 做一个限制 当我们的图片  小于多少k的时 用base64来转化  大于时用file-loder来打包
          // loader: 'file-loader'
          loader: 'url-loader',
          options: {
            limit: 1,
            outputPath: 'img/',
            publicPath: 'www.geonoon.com/static/' // 只有图片加这个域名前缀
          }
        }
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/main.css'
    })
  ]
}