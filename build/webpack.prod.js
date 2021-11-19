/**
 * @file webpack.config
 * @author ienix(guoaimin01@baidu.com)
 *
 * @since 2021/11/18
 */

 'use strict';

let path = require('path');
let {merge} = require('webpack-merge');

let OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
let TerserWebpackPlugin = require('terser-webpack-plugin');

let all = require('./all');

let mainConfig = {
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'webpack-jdists-loader',
                    options: {
                        remove: 'dev',
                    },
                },
            },
        ],
    },
    plugins: [
        new OptimizeCssAssetsWebpackPlugin(),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
        ],
    },
};
 
 module.exports = merge(all, mainConfig);
 