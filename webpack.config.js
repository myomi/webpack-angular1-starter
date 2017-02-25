const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "app.css"
});

// https://github.com/shprink/angular1.4-ES6-material-webpack-boilerplate
module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    loader: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }],
                    // use style-loader in development
                    fallbackLoader: "style-loader"
                })
            }
        ]
    },
    plugins: [
        extractSass
    ],
    devtool: "source-map"
};