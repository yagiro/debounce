const path = require('path');
module.exports = {
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        // contentBase: path.resolve(__dirname,),
        port: 3333,
    },
    module: {
        rules: [
            {
            test: /\.[tj]s$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-typescript']
                }
            }
            }
        ],
    },
};