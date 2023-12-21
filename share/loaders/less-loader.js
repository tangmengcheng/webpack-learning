const less = require('less')

function loader(source) {
    const cb = this.async()
    let css = ''
    less.render(source, (err, data) => {
        if (!err) {
            css = data.css
        }
        cb(null, css)
    })
    // return source
}


module.exports = loader