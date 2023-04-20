const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: './src/app.ts',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    output: {
        publicPath: "public",
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public')
    },
    optimization: {
        minimize: false,
        minimizer: [new TerserPlugin({
            terserOptions: {
                ecma: undefined,
                parse: {},
                compress: {
                    drop_console: false
                },
                mangle: true,
            },
            minify: TerserPlugin.uglifyJsMinify,
        })],
        // splitChunks: {
        //     chunks: 'all',
        //     maxSize: 100000,
        // },

    },
    mode: "development",
}