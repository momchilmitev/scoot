const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/assets/js/index.js',
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
	],
};
