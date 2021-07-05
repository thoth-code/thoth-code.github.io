const { resolve } = require('path');

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
        ]
    },
    resolve: {
        extensions: ['.js', '.json', '.ts', '.tsx', '.css']
    }
}

module.exports = config;