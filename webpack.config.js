const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public',
        publicPath: '/',
    },
    module: {
        rules: [
            /* ------------------------------------- Typescript ---------------------------------- */
            {
                test: /.tsx?$/,
                loader: 'ts-loader',
            },
            /* ------------------------------------- Style ---------------------------------- */
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader'],
            },
            /* ------------------------------------- Font ---------------------------------- */
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
            /* ------------------------------------- Image ---------------------------------- */
            {
                test: /\.(png|jpe?g)$/,
                loader: 'file-loader',
            },
        ]
    },
    devServer: {
        contentBase: __dirname + '/public',
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    }
}

module.exports = config;