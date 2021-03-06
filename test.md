时间过得真快！！！

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;生日之际，从大学到现在，自己学习并实践过认为比较有用的技术点，也是常见面试考点...

![将来的你一定会感谢自己拼命努力的自己](https://user-gold-cdn.xitu.io/2019/6/9/16b3caf23c468068?imageView2/0/w/1280/h/960/format/webp/ignore-error/1 '加油💪')

> 前端学习记录
## Html5
- 对WEB标准以及W3C的理解与认识
- Html5新特性与语义化
- 行内元素与块级元素
- 渐进增强与优雅降级的理解及区别
- cookie、sessionStorage、localStorage原理与区别
- ....
## CSS3
- CSS盒模型
- 获取盒子宽高的几种方式及区别
- Flex与Grid布局
- CSS常见选择器
- BFC
- 浮动与定位
- 常见的页面布局
- CSS3新特性
- 常见单位
- 移动端视口配置
- 文字、盒子水平垂直居中
- CSS3画三角形、六边形等
- link和@import有什么区别
- 常见兼容性问题
- ....
## jQuery
- jQuery的好处
- jQuery选择器与css选择器的区别
- jQuery对象与Dom对象
- jQuery中的Ajax
- DOM元素的增删改查
- DOM元素的遍历
   - 同胞元素
   - 后代元素
   - 祖先元素
- jQuery淡入淡出与动画
- jQuery尺寸
- jQuery事件
- window.onload 事件和 jQuery ready 函数有何不同
- ....
##  JS
- 原始类型与对象类型及对象之间的转换
- 构造函数、实例、原型、原型链、继承等
- 实现继承的方式及优缺点
- typeof & instanceof
- 原生ajax
- 对象深浅拷贝
- this的理解
- 函数柯里化、高阶函数
- bind、call、apply用法及区别
- 字符串、数组、对象、日期等的属性与方法
- 浏览器对象
   - Window对象
   - History对象
   - Location对象
   - Screen对象
- 三大家族和一个事件对象
   - Offset家族
   - Scroll家族
   - Client家族
   - Event事件
- Event-Loop 事件循环
   - js 运行机制
   - 进程与线程
   - 宏任务与微任务
   - Node中的Event-Loop
- 原生DOM增删改查
- 常见的模块化
- 作用域、闭包与立即执行函数等
- 同步与异步
- 常见的循环及区别
   - for...in
   - for...of
   - ....
## ES6+
- let 与 const
- 异步解决方案
   - 回调函数
   - Promise
   - Generator
   - Async/Await
- 箭头函数
- 模块化（export & import）
- 解构赋值（主要：数组和对象）
- 数组、字符串、函数、日期等扩展方法
- 默认值、扩展运算符
- 数组forEach、some、every、map、filter、reducer等方法的使用及区别
- Proxy
- ...
## Stylus Sass Less
- 常见三个预处理的用法及区别
- 常见功能
   - 变量
   - 嵌套
   - 导入
   - 继承
   - Mixins
   - 循环 & 判断
   - ....
## TypeScript
- TypeScript特点及理解
- Typescript常用语法
   - 基础类型
   - 布尔值 boolean
   - 数字 number
   - 字符串 string
   - 数组 number[] Array
   - 元祖 Tuple
   - 枚举 enum
   - any
   - void
   - null & undefined
   - never
   - object
- 类型断言
- 变量声明
- 接口
- 类
- 函数
- 泛型
- 类型判断
- 高级类型
- ....
- Typescript集成在React项目中
- Typescript集成在Vue项目中
## Webpack4.x
- Webpack配置文件常见选项
   - 入口文件-entry
   - 出口文件-output
   - 模块-module
   - 插件-plugins
   - 模式-mode
   - 开发服务器-devServer
   - 解析-resolve
   - 源码调试-sourceMap
   - ....
- 常用Loader
   - 处理CSS文件
      - css-loader style-loader less less-loader node-sass sass-loader stylus stylus-loader
   - 添加CSS3前缀
      - postcss-loader autoprefixer
   - 处理ES6文件及更高级语法
      - babel-loader @babel/core @babel/preset-env @babel/runtime  @babel/plugin-proposal @babel/plugin-proposal-class-properties  @babel/plugin-transform-runtime
   - 处理图片、字体等文件
      - file-loader url-loader html-withimg-loader
   - ....
- 常用Plugin
   - 生成HTML文件 Html-webpack-plugin
   - 删除dist目录 clean-webpack-plugin
   - 压缩css文件 optimize-css-assets-webpack-plugin
   - 压缩js文件 uglifyjs-webpack-plugin
   - 复制目录插件 copyWebpackPlugin
   - 添加版权声明 bannerPlugin
   - 提取css文件 mini-css-extract-plugin extract-text-webpack-plugin
   - ....
- 常见优化
- Webpack 自带优化
   - noParse 不去解析某依赖包中的依赖关系 jquery
   - IgnorePlugin 加载某依赖时，忽略某文件 moment
   - DllPlugin、DllRederencePlugin 动态链接库 react
   - Tree-Sharking、 Scope-Hosting
- 引入依赖
   - expose-loader 暴露到window上
   - providePlugin 给每个模块都注入
   - externals选项 CDN引入 不打包
- 定义环境变量 DefinePlugin
- 不同环境 【common、dev、prod】
- 多线程打包 happypack
- 抽离公共代码
- 懒加载 & 热加载
- 打包单页&多页应用
- Webpack跨域 & watch用法
- 优化构建速度
- 分析打包结果
- Webpack & Grunt & Gulp的区别
- 手写loader
- 手写plugin
- 手写简易版的webpack
   - babylon 将源码转换成AST
   - @babel/traverse 遍历节点
   - @babel/types 替换节点
   - @babel/generator 将替换好的节点生成
- 理解Tapable
## Vue全家桶
- MVC & MVVM的理解
- Virtual DOM的理解
- 数据双向绑定 & 组件化
- Vue常见API
- 常见选项
   - methods watch computed filter mixins ...
- 常用指令
   - v-for v-pre v-html v-bind v-model...
- 常用组件
   - transition transition-group keep-alive slot ...
- $nextTick $set $refs $slots $scopedSlots $forceUpdate...
- 动态绑定class & style
- Vue生命周期
- Vue监听数组
- 组件的封装
- Vue-cli2.x & Vue-cli3.x
- 组件间的通信
   - 父子组件
      - 父组件向子组件 props $children
      - 子组件向父组件 parent
   - 非父子组件兄弟组件
      - 中央事件总线 EventBus
      - $attrs $listeners inheritAttrs
      - provide inject
      - ....
- Vue-loader的理解
- Vue-Router的理解
   - router-link
   - router-view
- 导航方式
   - 编程式导航
   - 声明式导航
- 命名路由 & 命名视图
   - name属性   -> {name:, params:}
   - router-view的name属性与components对应
- 动态路由及路由组件间传参
   - name + params方式
   - path + query方式
- router & route的理解
- 导航守卫
   - 全局守卫
   - 组件内守卫
   - 路由独享守卫
- 路由懒加载
   - vue异步组件
   - es提案的import()
   - webpack的require ensure()
- Vuex的理解及使用场景
- Vuex核心概念
   - State
   - Getters
   - Mutations
   - Actions
   - Modules
- 脚手架搭建Vue全家桶项目
- 服务端渲染SSR
   - 首屏渲染 & SEO 问题
   - Nuxt.js
## React全家桶
- JSX语法
- 属性props & 状态state
- React生命周期
- React优化
   - shouldComponentUpdate
- 函数组件 & 类组件 & 高阶组价
- Fiber的理解
- React Hooks
   - useState
   - useEffect
   - useContext
   - useReducer
   - ....
- React-Router-Dom
- React路由的原理
- 常用API
   - BrowserRouter & HashRouter
   - Route
   - Link & NavLink
   - Switch
   - Prompt
   - Redirect
   - ....
   - match location history对象
- Redux
- 对Redux的理解
- Action创建函数
- 常用API
   - State
   - Action
   - Reducer
   - createStore
   - combineReducers
   - applyMiddleware
   - bindActionCreators
   - compose
- Store常用方法
   - getState
   - dispatch
   - subscribe
- react-redux
   - Provider
   - connect
      - mapStateToProps
      - mapDispatchToProps
- 处理异步 redux-thunk
## ReactNative & Weex
- 搭建RN环境 & Weex环境
- Flexbox布局
- 导航间数据传递
- 公共组件的封装
- 常用组件
   - 列表组价 FlatList (上拉刷新、下拉加载)
   - 数据存储组件 AsyncStorage
   - 提示符组件 ActivityIndicator
   - 滚动组件组件 ScrollView
   - 状态栏组件 StatusBar
   - 加载网页组件 WebView
   - 动画组件 Animated
   - 样式组件 StyleSheet
   - 获取屏幕组件 Dimensions
   - ....
- RN项目常用第三依赖
   - 图片缩略图
      - react-native-image-picker
      - react-naitve-progress
      - react-native-image-resizer
   - 导航
      - react-navigation
      - react-native-router-flux
   - 启动屏
      - react-native-splash-screen
   - 微信 & 支付宝支付
      - react-native-wechat
      - react-native-yunpeng-alipay
   - 热更新
      - react-native-code-push
- 视图组件库
   - antd-mobile-rn
   - ....
- RN项目安卓 & IOS打包
> 后端学习记录
## Node
- 对Node的认识
- 事件循环 & EventEmitter
- 创建简单的服务器
- 模块化
   - exports
   - module.exports
- 核心模块
   - npm
   - path
   - fs
   - buffer
   - stream
   - http & https
   - tcp
   - process
   - ....
- 使用Node开发企业官网项目
## Express
- request & response对象属性和方法
- GET & POST请求
- 静态文件 static
- 路由中req, res对象中的属性
- 对中间件的理解
- 常用中间件
   - body-parser
   - cookie-parser
   - ....
## Koa2
- 对Koa2的理解
- 与Express的区别
- 理解核心对象
   - Application
   - Context
   - Request
   - Response
- 常见中间件
- 中间件的概念
   - koa-body
   - koa-bodyparse
   - koa-multer
   - koa-router
   - koa-static
   - koa-compose
   - Koa2路由的使用
## Java
- JDK安装
- 常见数据类型的属性与方法
- 面向对象的特性
   - 继承
   - 封装
   - 抽象
   - 多态
- 集合类
   - Collection
   - List Arraylist LinkedList
   - Set HashSet
   - Map HashMap
   - Vector
   - ....
- 线程
- 实现方式
   - 继承Thread类
   - 实现Runnable接口
- 创建Java连接Mysql、Redis工具类
- 理解Java项目的MVC三大架构
- 整合SSH项目
   - Spring
   - SpringMVC
   - MyBatis
   - ....
## SpringBoot
- SpringBoot的使用及优点
- 配置文件格式
   - .properties
   - .yml
- 搭建SpringBoot+MyBatis项目
- SpringBoot项目中常用注解
- SpringBoot项目实现分页和排序功能
- SpringBoot整合Swagger
- 整合模板
- ....
##  Http协议与数据请求
- Http请求与响应对象
- TCP三次握手、四次挥手
- Http常见方法与状态码
- 方法
   - GET
   - POST
   - PUT
   - HEAD
   - DELETE
   - ....
- 状态码
   - 1xx 信息类
   - 2xx 成功类
   - 3xx 重定向
   - 4xx 客户端错误
   - 5xx 服务端错误
- 长连接与管线化
- Etag & Expires & Cache-control等理解
- 兼容版原生Ajax
- Fetch
- Axios
- Flyio
- ....
## 浏览器
- 从输入URL到页面加载的全过程
- 浏览器缓存
- 重绘 & 回流
- 常见浏览器及其内核
- ....
## 算法
- 数组
   - 数组排序
   - 数组去重
   - 扁平化数组
   - 求数组中最大值和最小值
   - ....
## 排序方式
   - 冒泡排序
   - 选择排序
   - 快速排序
   - 递归
   - ....
## 代码管理
- Git
   - 常见命令
   - git clone
   - git status
   - git add .
   - git commit -am 'xxxx'
   - git pull origin dev
   - git push -u origin dev
   - git branch / -r
   - git checkout dev
   - git stash
   - ....
- GitHub & GitLab & Gitee
   - 如何创建在这些平台上常见代码仓库
   - 如何将本地项目与远程仓库关联
   - 使用GitHub搭建个人博客
   - ....
## UI层框架
- BootStrap
- iView
- Andt Design
- Element UI
## 数据库
- MySql
   - Mac上安装Mysql
   - Mysql常见增删改查SQL语句
   - Java连接Mysql
   - Node连接Mysql
   - ....
- MonogoDB
   - Mac上安装MonogoDB
   - MonogoDB常见增删改查SQL语句
   - mongoose
   - Node连接MonogoDB
   - ....
- Redis
   - Mac上安装Redis
   - Redis支持的数据类型
      - String
      - List
      - Set
      - Sorted Set
      - Hash
      - Java使用Redis
      - Node使用Redis
      - ....
## 小程序
- 微信小程序
   - 理解微信小程序的原理
   - 基础
      - 单位
      - 数据绑定
      - 生命周期
      - 列表渲染
      - 页面跳转
      - tarBar
      - ....
   - 授权获取用户信息
- 上拉刷新 & 下拉加载
- request请求
- 各个文件代表的意思
- 页面跳转及传递参数
- 代码审核与发布
- 常用组件
   - view
   - scroll-view
   - swiper
   - ....
- MpVue
   - 语法和vue很像
## 编辑器
- VSCode & WebStrom & IDEA
   - VSCode常用插件
   - WebStorm与IDEA永久安装
   - 常用快捷键
   - ....
## 部署与运维
- Linux
   - Mac上安装Linux
   - Linux目录结构及说明
   - Linux在工作中常用指令
      - ssh
      - cp
      - ln
      - tar
      - ....
- FileZilla & XShell & WinSCP
   - Mac上这些软件的安装
   - 如何连接远程服务器
   - ....
## 优化
- 防抖与节流
- 图片懒加载
## 常见第三方依赖库
- axios
- better-scroll
- lodash
- moment
- ....
## 其他
- webpack4从零搭建Vue全家桶项目
- webpack4从零搭建React全家桶项目
- 使用VuePress搭建自己的技术博客
- ....
## 项目中常见错误
- 移动端1像素边框
## 进阶之路
- 彻底掌握Webpack4.x & 手写简易版Webpack
- 彻底掌握常见的跨域方式与实现原理
- 手写简易版Express
- 手写简易版Koa2
- 手写简易版React-Router
- 手写简易版React & React-Diff
- 手写简易版Vue框架的MVVM实现
## 2019年目标
- 编写以上每个技术中核心知识点博客
- 系统学习前端
   - HTML5
   - CSS3
   - 原生JS基础
   - ES6 7 8 9 10
- Vue深入理解与源码学习
- React深入理解与源码学习
- 学习Flutter
- 学习前端常见设计模式
- 学习JavaScript数据结构与算法
## 后记

非常喜欢的一段话：在我们20岁的时候用30岁的心态来做事，那么当我们30岁的时候就可以享受别人40岁的成功！~💪💪💪
