let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')
// let Happypack = require('happypack')
module.exports = {
  mode: 'production', // 开发环境的模式 两种
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        // use: 'Happypack/loader?id=js'
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
        // use: 'Happypack/loader?id=css'
      }
    ]
  },
  plugins: [
    // new Happypack({
    //   id: 'css',
    //   use: ['style-loader', 'css-loader']
    // }),
    // new Happypack({
    //   id: 'js',
    //   use: [{
    //     loader: 'babel-loader',
    //     options: {
    //       presets: [
    //         '@babel/preset-env'
    //       ]
    //     }
    //   }]
    // }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}