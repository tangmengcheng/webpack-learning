let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let CleanWebpackPlugin = require('clean-webpack-plugin')
let CopyWebpackPlugin = require('copy-webpack-plugin')
let webpack = require('webpack')
// 1. cleanWebpackPlugin
// 2. copyWebpackPlugin
// 3. BannerPlugin 内置 版权声明插件
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
      }
    ]
  },
  devServer: {
    // 3. 有服务端， 不想用代理来处理  能不能再服务端中启动webpack 端口用服务端端口
    // 2. 我们前端只想单纯来模拟数据
    // before(app) {
    //   app.get('/user', (req, res) => {
    //     res.json({name: '汤梦成 bofore'})
    //   })
    // }
    // 1.第一种
    // proxy: {
    //   '/api': {
    //     target: 'http://localhost:3000',
    //     pathRewrite: {'/api': ''} // 重写api
    //   }
    // }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {from : 'doc', to: './'} // 从doc目录拷贝到dist目录
    ]),
    new webpack.BannerPlugin('make 2019 by mc')
  ]
}