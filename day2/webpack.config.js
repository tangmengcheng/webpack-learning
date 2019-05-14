let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'production',
  devServer: { // 开发服务器的配置   在内存中打包
    contentBase: '/dist', // 以dist目录作为静态服务的目录
    port: 3000, // 端口号
    progress: true, // 打包进度条
    compress: true, // 启动gzip压缩
  },
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // 模板名称
      filename: 'index.html', // 文件名
      title: 'tmc', // 标题
      minify: { // 压缩
        removeAttributeQuotes: true, // 删除双引号
        collapseWhitespace: true, // 变成一行
      },
      hash: true, // 生成hash戳  24位  防止缓存
      inject: 'body' /** true或者body：所有的JavaScript资源都输出到body元素的底部【默认】；head: 所有的JavaScript资源插入到head元素中； false: 所有的静态资源css和js等都不会注入到模板文件中 */
    })
  ]
}