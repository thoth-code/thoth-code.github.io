const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { resolve } = require('path');

const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, './dist'),
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader',
            },
        ]
    },
    devServer: {
        contentBase: resolve(__dirname, '/public'),
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
	    host: '0.0.0.0',
	    disableHostCheck: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './static/favicon.ico',
            template: './static/index.html'
        }),
        new CleanWebpackPlugin(),
    ]
}

module.exports = config;
