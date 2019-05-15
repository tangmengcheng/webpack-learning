// 只有import语法 在生产环境下  回自动去除掉没用的代码
// tree-shaking 把没有用到的语法  自动删除掉

// es6 模块 会把结果放到default属性上

// scope hosting 作用域提升 [在webpack中自动化省略 自动可以简化一些代码]

let a = 1;
let b = 2;
let c = 3;

let d = a+b+c;
console.log(d, '--------------')