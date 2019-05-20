let babel = require('@babel/core')
const loaderUtils = require('loader-utils')

function loader(source) {

  console.log('this')
  loaderUtils.getOptions(this)

  return source
}

module.exports = loader