// webpack.config.js
var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
var pathToReact = path.resolve(node_modules, 'react/dist/react.js');

var config = {
    entry: {
        app: [ path.resolve(__dirname, 'src/js/app.jsx') ],
        vendors: [
            path.resolve(__dirname, 'src/js/vendors/skyicons.js')
        ]
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js'
    },
    resolve: {
        alias: {}
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?stage=1&optional=runtime'
            },
            {
                test: /\.scss$/,
                loader: "style!css!sass?outputStyle=expanded=includePaths[]=" + node_modules + "/bootstrap-sass/assets/stylesheets/"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ],
        noParse: [pathToReact]
    }
};

module.exports = config;