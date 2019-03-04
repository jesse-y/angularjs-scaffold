const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	resolve: {
		extensions: [ '.ts', '.js' ],
		alias: {
			src: path.resolve(__dirname, 'src/')
		}
	},
	module: {
		rules: [{
			test: /\.ts$/,
			loader: 'ts-loader'
		}, {
			test: /\.(s*)css$/,
			loader: [ 'style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /(.*)template\.html$/,
			loader: 'raw-loader'
		}]
	},
	entry: {
		index: './src\\index.ts'
	},
	output: {
		path: path.join(process.cwd(), 'dist'),
		filename: '[name].bundle.js',
		chunkFilename: '[id].chunk.js'
	},
	devServer: {
		contentBase: './dist',
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src\\index.html',
			filename: './index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		}
	}
}