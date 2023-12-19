function loader(source) {
    console.log('inline')
    return source
}
loader.pitch = function () {
    console.log('pitch-inline')
}


module.exports = loader