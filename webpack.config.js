const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        // removing 'src' directory from entry point, since 'context' is taking care of that  './src/app.js',
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './assets/js/[name].bundle.js'
    },
    module: {
        rules: [
            //babel-loader
            {
                test: /\.js$/,
                include: /src/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['env']
                    }
                }
            },
            //html-loader
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist/assets/media"),
        stats: 'errors-only',
        open: true,
        port: 12000,
        compress: true
    },
    devtool: 'inline-source-map'
};

module.exports = config;