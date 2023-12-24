/**
 * ! 忽略 normal
 * -! 忽略 pre normal
 * !! 忽略 pre normal post(什么都不要 只要行内loader)
 */
// require('!!inline!./a')
// require('./index.css')
// import './index.less'
console.log('hello')
// debugger
// class Wms {
//     constructor(name) {
//         this.name = name
//     }
//     getName() {
//         return this.name
//     }
// }

// const w = new Wms('n-wms')
// const w1 = new Wms('mt-wms')
// console.log(w)
// console.log(w1)
// console.log('hello1')

/**
 * @babel/parser 将源码解析成AST
 * @babel/traverse 对AST节点进行递归遍历，生成一个便于操作、转换的path对象
 * @babel/generator 将AST解码生成js代码
 * @babel/types 通过该模块对具体的AST节点进行增、删、改、查
 */
import pic from './pic.jpg'
let img = document.createElement('img')
img.src = pic
document.body.append(img)