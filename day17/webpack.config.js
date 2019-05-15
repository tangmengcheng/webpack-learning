let path = require('path')
let webpack = require('webpack')
let HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development', 
  entry: {
    index: './src/index.js'
  }, 
  output: {
    filename: '[name].js', // 打包后的文件名
    path: path.resolve(__dirname, 'dist') // 要求路径是一个绝对路径
  },
  devServer: {
    hot: true, // 启用热更新
    port: 3000,
    open: true,
    contentBase: './dist',
    progress: true
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
            ],
            plugins: [
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        },
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    new webpack.NamedModulesPlugin(), // 那个模块更新了
    new webpack.HotModuleReplacementPlugin()
  ]
}