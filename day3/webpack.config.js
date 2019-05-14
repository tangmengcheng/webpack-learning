let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  mode: 'development',
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  module: { // 模块
    /**
     * loader的用法：
     * loader的特点： 希望单一
     * loader的用法： 字符串只用一个loader, 多个时需要写数组，也可以写成对象形式
     * loader的执行顺序： 从右向左，从下到上执行
     */
    rules: [ // 规则
      {
        test: /\.css$/,
        use: [
          // 'style-loader', // 它是把css插入到head标签中, 默认插入到head标签最底部。如果想在模块中自定义的样式时，可以使用选项将其插入到指定该位置
          {
            loader: 'style-loader',
            options: {
              insertAt: 'top'
            }
          },
          'css-loader' // 主要解析 @import等这类语法
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 
          'css-loader', 
          'less-loader' // 把less  -》 css
        ]
      },
      {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
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