const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.js',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
    plugins: [
		new CleanWebpackPlugin(),
	]
}