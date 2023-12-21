// const reg = /debugger/g;

// function loader(source) {
//     return source.replace(reg, '')
// }

// module.exports = loader
// babel的核心：解析、遍历、生成 ====》（Vue：解析、遍历、生成）
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const generator = require('@babel/generator').default
const t = require('@babel/types')
// https://babeljs.io/
module.exports = function (source) {
    const ast = parser.parse(source, {
        sourceType: 'module'
    })
    traverse(ast, {
        CallExpression(path) {
            if (t.isMemberExpression(path.node.callee) && t.isIdentifier(path.node.callee.object, {
                    name: "console"
                })) {
                path.remove()
            }
        }
        // DebuggerStatement(path) {
        //     if (t.isDebuggerStatement(path.node)) {
        //         path.remove()
        //     }
        // }
    })
    const output = generator(ast, {}, source);
    return output.code
}