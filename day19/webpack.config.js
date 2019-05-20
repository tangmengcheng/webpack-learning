const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'build.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolveLoader: {
    // 模块
    modules: ['node_modules', path.resolve(__dirname, 'loader')], // 当在node_modules中找不到loader时，去自定义的文件夹中查找
    // 别名
    // alias: {
    //   loader1: path.resolve(__dirname, 'loader', 'loader1')
    // }
  },
  module: {
    rules: [ // loader 的顺序：从下到上  从右到左   pre + normal + inline + post
      // loader 的分类：pre 在前面  post 在后面  normal 正常的  行内的loader
      // {
      //   test: /\.js$/,
      //   // loader的写法
      //   // use: path.resolve(__dirname, 'loader', 'loader1')
      //   // use: 'loader1'
      //   // use: ['loader3', 'loader2', 'loader1']
      // }
      {
        test: /\.js$/,
        use: {
          loader: 'loader1'
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'loader2'
        }
      },
      {
        test: /\.js$/,
        use: {
          loader: 'loader3'
        },
        enforce: 'post'
      }
    ]
  }
}