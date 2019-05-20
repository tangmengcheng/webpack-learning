console.log('hello')

// let str = require('inline-loader!./a.js') // 行内loader
let str = require('-!inline-loader!./a.js') 
// -! 不会让文件  再去通过pre + normal loader来处理了
// ！没有normal
// !! 什么都不要，只要inline loader


// loader 默认是由两部分组成 pitch normal