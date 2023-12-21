const path = require('path')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    watch: true, // 边写边打包
    resolveLoader: {
        // 先在node_modules下找，找不到再到loaders目录下去找
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
        // alias: {
        //     loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
        // }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['remove-console-loader', {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }]
        }]
        // rules: [{
        //     test: /\.less$/,
        //     use: ['style-loader', 'css-loader', 'less-loader']
        // }, {
        //     test: /\.js$/,
        //     use: {
        //         loader: 'banner-loader',
        //         options: {
        //             name: '',
        //             filename: path.resolve(__dirname, 'banner.js')
        //         }
        //     }
        // }]
        // rules: [{
        //     test: /\.js$/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: [
        //                 '@babel/preset-env'
        //             ]
        //         }
        //     }
        // }]
        // 找loader的方式有几种：1、直接写个绝对路径(有没有更方便的查找方式呢？)2、别名
        // rules: [{
        //     test: /\.js$/,
        //     // use: ['loader1', 'loader2', 'loader3']
        //     use: {
        //         loader: 'loader1'
        //     },
        //     enforce: 'pre'
        // }, {
        //     test: /\.js$/,
        //     use: 'loader2'
        // }, {
        //     test: /\.js$/,
        //     use: 'loader3',
        //     enforce: 'post'
        // }]
    }
}
/**
 * 接下来看看loader怎么配置多个？以及loader有哪几种类型
 * loader的执行顺序：从右向左，从下到上(能不能改变他的顺序呢？)
 * loader的种类：pre 、normal、inline、post
 * loader 默认是由两部分组成：pitch-loader（熔断）、normal-loader
 * 接下来我们通过来实现babel-loader，来掌握更多loader中的用法
 * 接下来我们继续手写核心loader来掌握更多的API
 */