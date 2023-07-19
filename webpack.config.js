const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
        path: path.resolve(__dirname, '/dist'),
        filename: 'bundle.js',
    },
    devServer: {
        static: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [
          {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.(js)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          }
        ],
    },
    resolve: {
        extensions: ['*', '.js']
    }
}