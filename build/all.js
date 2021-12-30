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
let DashboardPlugin = require('webpack-dashboard/plugin');
let FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

let WebpackBuildNotifierPlugin = require('webpack-build-notifier');
let Dashboard = require('webpack-dashboard');

let Components = require('unplugin-vue-components/webpack');
let {ElementPlusResolver} = require('unplugin-vue-components/resolvers');

/*eslint-disable*/
let threadPool = HappyPack.ThreadPool({size: os.cpus().length});
/*eslint-enable*/

let resolve = dir => path.join(process.cwd(), dir);

let config = {
    cache: true,
    mode: 'production',
    entry: {
        app: resolve('/src/startup.ts'),
    },
    experiments: {
        topLevelAwait: true,
    },
    output: {
        path: resolve('./dist/'),
        filename: '[id].[chunkhash:5].js',
        globalObject: 'this',
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    transformAssetUrls: {
                        video: ['src', 'poster'],
                        source: 'src',
                        audio: 'src',
                        img: 'src',
                        image: ['xlink:href', 'href'],
                        use: ['xlink:href', 'href']
                     },
                },
            },
            {
                test: /\.(j|t)s$/,
                loader: 'babel-loader',
                exclude: [/node_modules/],
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        },
                    },
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
                    'vue-style-loader',
                    'css-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[path][id].[chunkhash:5].[ext]',
                            limit: false,
                        },
                    },
                ],
            },
            {
                test: /\.(jpg|png|jpeg|gif|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[id].[chunkhash:5].[ext]'
                },
            },
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: {
                        inline: false,
                        fallback: false,
                        name: '[id].[chunkhash:5].[ext]',
                    },
                },
            },
            {
                test: /\.(mp3|wav|mp4)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[path][id].[chunkhash:5].[ext]',
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
        new HappyPack({
            threadPool,
            loaders: [{
                loader: 'babel-loader',
            }],
            verbose: false,
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
            filename: '[id].[chunkhash:5].css',
            chunkFilename: '[id].[chunkhash:5].css',
        }),
        new webpack.DefinePlugin({
            __VUE_OPTIONS_API__: JSON.stringify(true),
            __VUE_PROD_DEVTOOLS__: JSON.stringify(false)
        }),
        new FriendlyErrorsWebpackPlugin(),
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
            maxSize: 1000000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '+',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name(module) {
                        let packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/);

                        if (!packageName) {
                            return `unkown-${module.type}`;
                        }

                        return `chunk.${packageName[1].replace('@', '')}`;
                    },
                    priority:10,
                    filename: '[id].[chunkhash:5].js',
                },
            },
        },
    },
};

module.exports = config;
