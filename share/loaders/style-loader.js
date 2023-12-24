const {
    stringifyRequest
} = require('loader-utils')

function loader(source) {
    // 在style-loader中导出一个脚本，最后一个loader要导出一个合法的js脚本
    let str = `
        let style = document.createElement('style')
        style.innerHTML = ${JSON.stringify(source)}
        document.head.appendChild(style);
    `
    return str
}
// 在style-loader上写了pitch
// style-loader css-loader!less-loader!./index.less
loader.pitch = function (remainingRequest) {
    // console.log(stringifyRequest(this, '!!' + remainingRequest))
    // stringifyRequest() 把路径转换成相对路径
    // 让style-loader   style-loader css-loader!less-loader/./index.less
    // require路径  返回是就是css-loader处理好的结果 require(!!css-loader!less-loader!index.less)
    let str = `
        let style = document.createElement('style')
        style.innerHTML = require(${stringifyRequest(this, '!!'+remainingRequest)})
        document.head.appendChild(style);
    `
    return str
}


module.exports = loader