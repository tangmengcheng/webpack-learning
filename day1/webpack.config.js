let path = require('path')
// webpack  是 node编写的， 就要用node的语法写
module.exports = {
  mode: 'development', // 开发环境的模式 两种
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  }
}