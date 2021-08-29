const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const buildPath = path.resolve(__dirname, 'dist');

module.exports = {
	devtool: 'source-map',
	entry: {
		index: './src/assets/js/index.js',
		// index: './src/assets/js/about.js',
		// index: './src/assets/js/careers.js',
		// index: './src/assets/js/locations.js',
	},
	output: {
		filename: '[name].[hash:20].js',
		path: buildPath,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env'],
				},
			},
			{
				test: /\.css$/i,
				include: path.resolve(__dirname, 'src'),
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
			},
		],
	},
	devServer: {
		port: 8080,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Home Page',
			template: './src/pages/index.html',
			inject: true,
			chunks: ['index'],
			filename: 'index.html',
		}),
		new HtmlWebpackPlugin({
			title: 'About Page',
			template: './src/pages/about.html',
			inject: true,
			chunks: ['index'],
			filename: 'about.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Careers Page',
			template: './src/pages/careers.html',
			inject: true,
			chunks: ['index'],
			filename: 'careers.html',
		}),
		new HtmlWebpackPlugin({
			title: 'Locations Page',
			template: './src/pages/locations.html',
			inject: true,
			chunks: ['index'],
			filename: 'locations.html',
		}),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash].css',
			chunkFilename: '[id].[contenthash].css',
		}),
	],
};
