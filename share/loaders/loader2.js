function loader(source) {
    console.log('loader2')
    return source
}
loader.pitch = function () {
    console.log('pitch2')
    // return '123'
}


module.exports = loader