var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: "eval-source-map",
	entry: __dirname + "/app/script/main.js",
	output: {
		path: __dirname + "/public",
		filename: "bundle.js"
	},
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.js$/,
			exclude: /node_module/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		inline: true,
		hot: true,
		port: 3232,
		historyApiFallback: true
	}
}