const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    home: './src/index.js',
    other: './src/other.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'other.html',
      chunks: ['other']
    })
  ]
}