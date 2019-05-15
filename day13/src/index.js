import jquery from 'jquery'
import moment from 'moment'

// 设置语言

// 手动引入所需的语言
import 'moment/locale/zh-cn'

moment.locale('zh-cn')

let r = moment().endOf('day').fromNow()
console.log(r)