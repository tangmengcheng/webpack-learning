function loader(source) {
    console.log('loader1')
    return source
}
loader.pitch = function () {
    console.log('pitch1')
}

module.exports = loader