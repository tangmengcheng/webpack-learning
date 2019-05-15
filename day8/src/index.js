// webpack 打包图片
/**
 * 引入图片的方式：
 *  1. 在js中创建图片来也引入
 *  2. 在css中使用backgournd: url()
 *  3. 在html中使用<img src= ''/>
 * 
 *  使用的loader: 
 *    file-loader 默认会在内部生成一张图片 到dist目录下，会把生成的图片名字返回回来
 */

 // 注意：不能使用字符串的方式引入图片资源'./btn.png'， 否则打包会找不到资源；使用require()或es6 import的方式引入
 let btn = require('./btn.png') // 引入图片，返回的结果是一个新的图片地址（很长的一个hash数字）
 let image = new Image()
 image.src = btn
 document.body.appendChild(image)



 require('./index.css') // 通过css方式引入图片时，系统通过css-loader会自动把图片地址变成require()的方式，然后可以进行打包