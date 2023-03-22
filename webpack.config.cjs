/* eslint-disable no-undef */
const path = require('path');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: 'eval',
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
};
