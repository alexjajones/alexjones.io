var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function () {
    return {
        entry: [path.resolve(__dirname, '../src/app')],
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: 'app.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
			alias: {
				styles: path.resolve(__dirname, '../src/core/styles/'),
				components: path.resolve(__dirname, '../src/components/')
			}
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    loaders: ['awesome-typescript-loader']
                },
                {
                    test: /\.html$/,
                    use: [ "html-loader" ]
                },
                {
                    test: /\.(jpe?g|png|gif|svg)$/i,
                    loader:'file-loader'
                },
                {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader" // creates style nodes from JS strings
                    }, {
                        loader: "css-loader" // translates CSS into CommonJS
                    }, {
                        loader: "sass-loader" // compiles Sass to CSS
                    }]
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.html')
            })
        ],
        devServer: {
            compress: true,
            port: 8080,
            historyApiFallback: true
        }
    }
};