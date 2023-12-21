/**
 * ! 忽略 normal
 * -! 忽略 pre normal
 * !! 忽略 pre normal post(什么都不要 只要行内loader)
 */
// require('!!inline!./a')
// require('./index.css')
import './index.less'
console.log('hello')

class Wms {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

const w = new Wms('n-wms')
const w1 = new Wms('mt-wms')
console.log(w.getName())
console.log(w1.getName())