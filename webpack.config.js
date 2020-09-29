const path = require('path')

module.exports = {
    //entry: './src/app.js',
    entry: './frontend/app.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/')
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader","babel-jest"]
        }, {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
        },
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    mode: 'development',
    devtool: 'inline-source-map'
};