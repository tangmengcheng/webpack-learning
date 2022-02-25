export default (name) => {
    console.log('来自 App1 的公共模块')

    const ele = document.createElement('h3')
    ele.textContent = name

    return ele
}