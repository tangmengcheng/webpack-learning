function loader(source) {
    // 在style-loader中导出一个脚本，最后一个loader要导出一个合法的js脚本
    let str = `
        let style = document.createElement('style')
        style.innerHTML = ${JSON.stringify(source)}
        document.head.appendChild(style);
    `
    return str
}


module.exports = loader