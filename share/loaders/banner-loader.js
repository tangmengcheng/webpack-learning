// 给所以匹配的js都加上一个loader（比如这个文件是我写的）
const {
    getOptions
} = require('loader-utils')
const schemaUtils = require('schema-utils')
const fs = require('fs')

function loader(source) {
    // this.cacheable(false) // 默认是开启缓存的
    const options = getOptions(this)
    const cb = this.async() // 创建异步方法
    const schema = {
        type: 'object',
        properties: {
            name: {
                type: 'string'
            },
            filename: {
                type: 'string'
            }
        }
    }
    schemaUtils.validate(schema, options, 'banner-loader')
    if (options.filename) {
        this.addDependency(options.filename) // 自动添加文件依赖，告诉webpack我这个文件需要打包
        fs.readFile(options.filename, 'utf8', function (err, data) {
            cb(err, `/**${data}**/ ${source}`)
        })
    } else {
        // return `/**${options.name}**/ ${source}`
        cb(null, `/**${options.name}**/ ${source}`)
    }
}

module.exports = loader
/**
 * 比如我们自己写loader时，需要校验一下这些参数符不符合我们的规范，接下来引入一个校验模块schema-utils
 */