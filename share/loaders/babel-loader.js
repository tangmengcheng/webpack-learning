/**
 * 第一步要拿到preset, babel通过这个预设来转换我们的代码   loader-utils@1.2.3
 * @param {*} source 
 * @returns 
 */
const babel = require('@babel/core')
const {
    getOptions
} = require('loader-utils')

function loader(source) {
    // console.log('this', Object.keys(this).resourceQuery)
    // this loader的上下文
    const options = getOptions(this)
    const cb = this.async()
    // console.log('options', options)
    babel.transform(source, {
        ...options, // 包含presets plugins
        sourceMaps: true, // 源码调试
        filename: this.resourcePath.split('/').pop() // 文件名
    }, function (err, result) {
        // console.log('result', result)
        cb(err, result.code, result.map) // 异步(第一个参数是否错误，第二个参数是转换后的代码，第三个是源代码)
    })
    // return source
}

module.exports = loader