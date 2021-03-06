const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpg|jpeg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name][ext]',
                }
            },
        ],
    },
}