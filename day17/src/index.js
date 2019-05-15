// let button =document.createElement('button')

// button.innerHTML = 'Hello World'

// button.addEventListener('click', function(){
//   // console.log('click')
//   // es6 草案中的代码  jsonp实现动态加载文件，返回promise
//   import('./source.js').then(data => {
//     console.log(data.default)
//   })
// })

// document.body.appendChild(button)

import str from './source'

console.log(str)

if(module.hot) {
  module.hot.accept('./source', () => {
    // console.log('文件更新了')
    let str = require('./source')
    console.log(str)
  })
}