const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: { // 告诉配置 这个jQuery是CDN引用的模块  不需要打包
    jquery: '$'
  },
  module: {
    rules: [
      // {
      //   test: require.resolve('jquery'), // 只要代码中引用了juqery就使用下面的loader
      //   use: 'expose-loader?$'
      // },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
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
    })
    // new webpack.ProvidePlugin({ // 在每个模块中都注入jquery
    //   $: 'jquery'
    // })
  ]
}