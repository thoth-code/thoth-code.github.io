const { resolve, join } = require('path')

const config = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'public')
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
        contentBase: join(__dirname, 'public'),
        hot: true,
        open: true,
        overlay: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    }
}

module.exports = config;