// 调用app1中的模块
import('appone/tmc').then(res => {
    // console.log(res)
    res.default()
    const title = res.default('应用 B')
    document.body.append(title)
})