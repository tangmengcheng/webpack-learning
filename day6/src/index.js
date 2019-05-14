require('@babel/polyfill')
function * gen(params) {
  yield 1
}

console.log(gen().next())

'aaa'.includes('a')