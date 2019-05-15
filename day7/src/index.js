// import $ from 'expose-loader?$!jquery'
// import $ from 'jquery'
// expose-loader  暴露 全局的loader 内敛的loader
// pre 前面执行的loader  normal 普通的loader  内敛的loader   post 后置的loader

import $ from 'jquery'
// console.log($) // 在每个每个模块中 $对象
console.log($)
console.log(window.$)

/**
 * expose-loader  暴露到window上
 * providePlugin  给每个模块都注入一个$
 * 通过CDN引入 不打包
 */