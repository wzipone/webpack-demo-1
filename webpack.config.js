const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'development',
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            }
        ],
    }
}