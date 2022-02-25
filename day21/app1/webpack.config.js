const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Mfd = require('webpack').container.ModuleFederationPlugin

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'app1.bundle.js',
        path: path.resolve(__dirname, 'output')
    },
    module: {
        rules: []
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'output'),
        static: path.resolve(__dirname, 'output'),
        port: 3001
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 模块提供方
        new Mfd({
            name: 'app1', // 应用名称（供调用方使用）
            filename: 'app1.js', // 调用方引入的文件名称
            exposes: { // 暴露模块
                // 模块名称：模块对应的路径
                './tmc': './src/Sitename.js'
            }
        })
    ]
}