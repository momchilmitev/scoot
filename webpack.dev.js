const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/assets/js/index.js',
		index: './src/assets/js/about.js',
		index: './src/assets/js/careers.js',
		index: './src/assets/js/locations.js',
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
	],
};
