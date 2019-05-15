let path = require('path')

module.exports = {
  optimization: {
    splitChunks: { // 分割代码块
      cacheGroups: { // 缓存组
        common: { // 公共的模块
          chunks: 'initial',
          minSize: 0, // 超过零个字节
          minChunks: 2 // 只要公用一次以上就抽离
        },
        vendor: { // 第三方 ---jquery
          priority: 1, // 权重 先抽离第三方公共代码，再去抽离自己写的公共代码【代码默认是从上到下执行，不加权重的话，系统会自动把jquery也抽离到自己写的公共代码中】
          test: /node_modules/, // 只要引入node_modules中的文件就抽离出来
          chunks: 'initial',
          minSize: 0, 
          minChunks: 2 
        }
      }
    }
  },
  mode: 'production', 
  entry: {
    index: './src/index.js',
    other: './src/other.js'
  }, 
  output: {
    filename: '[name].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  }
}