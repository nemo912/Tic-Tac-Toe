const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: __dirname + '/lib',
    },

    module: {
        rules: [
            { test: /\.jsx$/, use: 'babel-loader' },

            {
                test: /module\.css$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: 'css-loader',
                    options: {
                        url: false,
                        modules: {
                            exportLocalsConvention: 'camel-case-only',
                        }
                    }
                }]
            },

            { test: /global\.css$/, use: ['style-loader', 'css-loader'] },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({ minify: true, template: './src/index.html' }),

        new MiniCssExtractPlugin(),
    ],

    resolve: {
        alias: {
            '@compo': __dirname + '/components',
            '@styl': __dirname + '/stylesheets',
            '@util': __dirname + '/util',
            '@hooks': __dirname + '/hooks',
        }
    },
}
