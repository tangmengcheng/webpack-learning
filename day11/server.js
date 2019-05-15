let express = require('express')

let app = express()

let webpack = require('webpack')
let middle = require('webpack-dev-middleware')

let config = require('./webpack.config.js')

let compiler = webpack(config)

app.use(middle(compiler))
// 中间件

app.get('/user', (req, res) => {
  res.json({name: '汤梦成'})
})

app.listen(3000)