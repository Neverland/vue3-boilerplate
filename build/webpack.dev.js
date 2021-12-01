/**
 * @file all
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

let webpack = require('webpack');

let ip = require('ip');
let path = require('path');
let {merge} = require('webpack-merge');
let all = require('./all');

let BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let resolve = dir => path.join(process.cwd(), dir);
let mainConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'webpack-jdists-loader',
                    options: {
                        remove: 'prod',
                    },
                },
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // new BundleAnalyzerPlugin({
        //     analyzerHost: ip.address(),
        // }),
    ],
    devServer: {
        historyApiFallback: true,
        compress: true,
        host: ip.address(),
        port: '8080',
    }
};

module.exports = merge(all, mainConfig);

