module.exports = {
    entry: './app.js',
    output: {
        path: './dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }, {
                test: /\.css$/,
                loader: 'style!css'
            },

            {
                test: /\.(eot|woff|ttf|woff2|svg)$/,
                loader: "file"
            }

        ]
    },
};
