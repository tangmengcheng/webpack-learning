let fs = require('fs')
let path = require('path')
let babylon = require('babylon')
let t = require('@babel/types')
let generator = require('@babel/generator').default
let traverse = require('@babel/traverse').default
let ejs = require('ejs')
let { SyncHook } = require('tapable')
/**
 * babylon 主要就是把源码转换成ast
 * @babel/traverse 遍历节点
 * @babel/types 替换节点
 * @babel/generator 将替换好的节点生成
 */
class Compiler {
  constructor(config) {
    this.config = config // 将配置挂载到全局
    // 需要保存入口文件的路径
    this.entryId; // 主文件入口 './src/index.js'
    // 需要保存所有的模块依赖
    this.modules = {}; // 存放所有的依赖关系
    this.entry = config.entry; // 入口路径
    this.root = process.cwd() // 当前文件的工作路径

    this.hooks = {
      entryOption: new SyncHook(), // 入口
      compile: new SyncHook(), // 编译
      afterCompile: new SyncHook(), // 编译之后
      afterPlugins: new SyncHook(), //插件之后
      run: new SyncHook(), // 文件运行
      emit: new SyncHook(), // 文件发射
      done: new SyncHook() // 文件完成
    }

    // 如果传递plugins参数
    let plugins = this.config.plugins;
    if(Array.isArray(plugins)) {
      plugins.forEach(plugin => {
          plugin.apply(this)
      })
    }

    this.hooks.afterPlugins.call()
  }
  
  /**
   * 获取源码
   * @param modulePath
   */
  getSource(modulePath) {
    let rules = this.config.module.rules;
    let content = fs.readFileSync(modulePath, 'utf8');
    // 拿到每个规则来处理
    for(let i=0; i<rules.length; i++) {
        let rule = rules[i]
        let {test, use} = rule
        let len = use.length - 1; // 找到最后一个loader
        if(test.test(modulePath)) { // 这个模块需要通过loader来转化
            // 获取对应的loader函数
            function normalLoader() {
                let loader = require(use[len--])
                // 递归调用loader 实现转化功能
                content = loader(content)
                if(len >= 0) {
                    normalLoader()
                }
            }
            normalLoader()
        }
    }
    return content;
  }

  /**
   * 解析源码
   * @param source 源代码
   * @param parentPath 父路径 ./src
   */
  parse(source, parentPath) { // AST解析语法数
    let ast = babylon.parse(source)
    let dependencies = [] // 依赖的数组
    // 对应的网址：www.astexplorer.net
    traverse(ast, {
      CallExpression(p) {
        let node = p.node; // 对应的节点
        if(node.callee.name === 'require') {
          node.callee.name = '__webpack_require__'
          let moduleName = node.arguments[0].value; // 取到的就是模块的引用名字
          moduleName = moduleName + (path.extname(moduleName) ? '' : '.js')
          moduleName = './' + path.join(parentPath, moduleName) // 'src/a.js'  =》 './ser/a.js'
        
          dependencies.push(moduleName)
          node.arguments = [t.stringLiteral(moduleName)] // 修改源码
        }
      }
    })
    let sourceCode = generator(ast).code // 重新生成源码
    return { sourceCode, dependencies }
  }

  /**
   * 构建模块
   * @param modulePath 模块路径
   * @param isEntry 是否是文件入口
   */
  buildModule(modulePath, isEntry) {
    // 拿到源码的内容
    let source = this.getSource(modulePath);
    // 拿到模块的id的相对路径 modulePath = modulePath - this.root ===’src/index.js‘
    let moduleName = './' + path.relative(this.root, modulePath)
    // 如果当前是主入口的话
    if(isEntry) {
      this.entryId = moduleName // 保存入口的名字
    }
    // 解析源码 需要把source源码进行改造， 返回一个依赖列表
    let {sourceCode, dependencies} = this.parse(source, path.dirname(moduleName)) // moduleName的父路径就是src
    // 把相对路径和模块中的内容  对应起来
    this.modules[moduleName] = sourceCode
    
    dependencies.forEach(dep => { // 附模块的加载 递归
      this.buildModule(path.join(this.root, dep), false)
    })
  }

  emitFile() {
    // 用数据 渲染我们的模板
    // 拿到输出到那个目录下  输出路径
    let main  = path.join(this.config.output.path, this.config.output.filename)
    // 模板的路径
    let templateStr = this.getSource(path.join(__dirname, 'main.ejs'))
    let code = ejs.render(templateStr, {
        entryId: this.entryId,
        modules: this.modules
    })
    this.assets = {}
    // 资源中  路径对应的代码
    this.assets[main] = code
    fs.writeFileSync(main, this.assets[main])
  }

  run () {
    this.hooks.run.call()
    this.hooks.compile.call()
    // 执行 并且创建模块的依赖关系 true代表是主模块
    this.buildModule(path.resolve(this.root, this.entry), true)
    // 发射一个文件 打包后的文件
    this.hooks.afterCompile.call()
    this.emitFile()
    this.hooks.emit.call()
    this.hooks.done.call()
  }
}

module.exports = Compiler