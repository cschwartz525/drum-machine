/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = [
    // Client
    {
        devtool: 'source-map',
        entry: './src/index.tsx',
        module: {
            rules: [
                {
                    test: /\.(ts|js)x?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react",
                                "@babel/preset-typescript"
                            ]
                        }
                    }
                },
                {
                    test: /\.(svg)$/i,
                    use: [
                        {
                            loader: 'file-loader'
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            path: `${__dirname}/dist`,
            publicPath: '/',
            filename: 'bundle.js'
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public' }
                ]
            })
        ]
    },
    // Server
    {
        devtool: 'source-map',
        entry: './app.ts',
        target: 'node',
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: [
                        'ts-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            path: `${__dirname}/dist`,
            publicPath: '/',
            filename: 'app.js'
        }
    }
];