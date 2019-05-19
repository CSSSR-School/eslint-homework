var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/public'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ],
    resolve: {
        extensions: ['', '.js','.jsx', '.css']
    },
    node: {
        dns: 'mock',
        net: 'mock'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['react-hot', 'babel'],
            exclude: /node_modules/
        }, 
        { test: /\.jpe?g$|\.gif$|\.eot$|\.png$|\.svg$|\.woff$|\.woff2$|\.ttf$/,
            loader: 'file' 
        },
        {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('css')
        }]
    }
};
