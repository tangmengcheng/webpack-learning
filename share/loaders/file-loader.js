const {
    interpolateName
} = require('loader-utils')

function loader(source) {
    // file-loader需要返回一个路径
    // console.log(source)
    // interpolateName: 根据当前环境，生成图片路径
    const fileName = interpolateName(this, '[hash].[ext]', {
        content: source
    })
    // console.log('fileName', fileName)
    this.emitFile(fileName, source) // 文件发射到dist目录
    return `module.exports="${fileName}"`
    // return source
}
loader.raw = true // 二进制
module.exports = loader