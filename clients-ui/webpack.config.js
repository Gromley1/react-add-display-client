const path = require("path");
const webpack = require("webpack");
const   HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        })
    ]
}