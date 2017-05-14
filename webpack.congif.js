const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

console.log(__dirname);

module.exports = {
    entry: './src/app.js',
    output: {
        path: './dist/',
        filename: 'js/[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                // exclude: /node_modules/,
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css!postcss'
                /*loaders: [
                    'style-loader',
                    'css-loader',
                    'postcss'
                ]*/
            },
            {
                test: /\.less$/,
                loader: 'style!css!postcss!less'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.ejs/,
                loader: 'ejs'
            },
            {
                test: /\.(png|jpg|gif|svf|jpeg)$/i,
                loader: 'file'
            }
        ]
    },
    postcss: [
        require('autoprefixer')({
            browsers: ['last 5 versions']
        })
    ],
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: '123'
        })
    ]
};