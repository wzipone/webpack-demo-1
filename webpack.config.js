var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    mode: 'development',
    devtool :"inline-source-map",
    devServer:{
        contentBase:'./dist'
    },
    entry: "./src", // string | object | array
    // defaults to ./src/index.js 默认入口路径 
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string
        // 输出路径 默认是 dist
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "index.[contenthash].js", 
        //输出文件名 默认是main.js
        // the filename template for entry chunks
    },
    plugins: [new HtmlWebpackPlugin({
        title:"wzp webpack demo",
        template: 'src/assets/test.html'
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'] // 用css-loader读遇到的css文件（上面的正则匹配），然后交给style-loader处理(在html中写到style标签里)
          }
        ],
      }
},{
    mode: 'development',
    entry: "./src/index2.js", // string | object | array
    // defaults to ./src/index.js 默认入口路径 
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string
        // 输出路径 默认是 dist
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        filename: "index2.js", // sting
        //输出文件名 默认是main.js
        // the filename template for entry chunks
    }
}]