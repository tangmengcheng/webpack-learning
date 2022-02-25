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
        port: 3002
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // 模块使用放
        new Mfd({
            // 导入模块
            remotes: {
                // 导入别名：“远程应用名称@远程应用地址/远程导出文件的名称”
                appone: "app1@http://localhost:3001/app1.js"
            }
        })
    ]
}