
let fn = () => {
  console.log('箭头函数')
}

fn()

@log
class A {
  a = 1
}

let a = new A()
console.log(a.a)

function log(target) {
  console.log(target)
}