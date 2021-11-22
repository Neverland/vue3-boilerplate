/**
 * @file all
 * @author ienix(guoaimin1@tal.com)
 *
 * @since 2021/11/18
 */

let os = require('os');
let path = require('path');

let webpack = require('webpack');
let HappyPack = require('happypack');

let {VueLoaderPlugin} = require('vue-loader');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let MiniCssExtractPlugin = require('mini-css-extract-plugin');
let ProgressBarPlugin = require('progress-bar-webpack-plugin');
let WebpackBuildNotifierPlugin = require('webpack-build-notifier');
let Dashboard = require('webpack-dashboard');
let DashboardPlugin = require('webpack-dashboard/plugin');
let Components = require('unplugin-vue-components/webpack');
let {ElementPlusResolver} = require('unplugin-vue-components/resolvers');

/*eslint-disable*/
let threadPool = HappyPack.ThreadPool({size: os.cpus().length});
/*eslint-enable*/

let resolve = dir => path.join(process.cwd(), dir);

let config = {
    // cache: true,
    mode: 'production',
    entry: {
        app: resolve('/src/startup.ts'),
    },
    output: {
        path: resolve('./dist/'),
        filename: '[id].[contenthash:5].js',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    transformAssetUrls: {
                        audio: 'src',
                    },
                },
            },
            {
                test: /\.(j|t)s$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
                include: /\.module\.css$/,
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpe?g|svg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][id].[contenthash:5].[ext]',
                            limit: false,
                        },
                    },
                ],
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: false,
                        fallback: false,
                        name: '[id].[contenthash:5].[ext]',
                    },
                },
            },
            {
                test: /\.(mp3|wav|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][id].[contenthash:5].[ext]',
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.less', '.css'],
        modules: ['node_modules'],
        alias: {
            static: resolve('/static'),
            assets: resolve('/assets'),
            '@': resolve('src'),
        },
    },
    plugins: [
        new DashboardPlugin(),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        new WebpackBuildNotifierPlugin({
            title: 'Webpack Build',
            suppressSuccess: true,
        }),
        new ProgressBarPlugin(),
        new HappyPack({
            threadPool,
            loaders: [{
                loader: 'babel-loader',
            }],
            verbose: true,
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Vue3',
            chunks: ['app'],
            template: resolve('/src/index.html'),
            filename: 'index.html',
            inject: true,
            appMountId: 'app',
        }),
        new webpack.ProvidePlugin({
            /* eslint-disable */
            _: 'underscore',
            /* eslint-enable */
        }),
        new MiniCssExtractPlugin({
            filename: '[id].[contenthash:5].css',
            chunkFilename: '[id].[contenthash:5].css',
        }),
    ],
    optimization: {
        mangleWasmImports: true,
        concatenateModules: true,
        runtimeChunk: true,
        removeAvailableModules: true,
        removeEmptyChunks: true,
        mergeDuplicateChunks: true,
        splitChunks: {
            chunks: 'all',
            maxSize: 1200000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '+',
            cacheGroups: {
                vue: {
                    test: /[\\/]node_modules[\\/](vue|vuex|vue-router)/,
                    priority: 50,
                },
                element: {
                    test: /[\\/]node_modules\/element-plus.*[\\/]/,
                    priority: 50,
                },
                axios: {
                    test: /[\\/]node_modules\/axios.*[\\/]/,
                    priority: 50,
                },
                default: {
                    enforce: true,
                    reuseExistingChunk: true,
                    test: /[\\/]node_modules[\\/]/,
                    filename: '[id].[contenthash:5].js',
                    chunks: 'all',
                    priority: -10,
                },
            },
        },
    },
};

module.exports = config;
