let path = require('path')
let webpack = require('webpack')
// webpack  是 node编写的， 就要用node的语法写
module.exports = {
  mode: 'development', // 开发环境的模式 两种
  entry: {
    react: ['react', 'react-dom']
  }, // 入口
  output: {
    filename: '_dll_[name].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist'), // 要求路径是一个绝对路径
    library: '_dll_[name]',
    libraryTarget: 'var' // umd  var[默认] commonjs this ...
  },
  plugins: [
    new webpack.DllPlugin({ // name === library
      name: '_dll_[name]',
      path: path.resolve(__dirname, 'dist', 'mainfest.json') // 产生清单的路径
    })
  ]
}