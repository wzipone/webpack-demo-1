var path = require('path')

module.exports = [{
    mode: 'development',
    entry: "./src", // string | object | array
    // defaults to ./src/index.js 默认入口路径 
    output: {
        // options related to how webpack emits results
        path: path.resolve(__dirname, "dist"), // string
        // 输出路径 默认是 dist
        // the target directory for all output files
        // must be an absolute path (use the Node.js path module)
        // filename: "index.js", // sting
        //输出文件名 默认是main.js
        // the filename template for entry chunks
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