const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createPath = (dirName) => path.resolve(__dirname, dirName);

module.exports = {
	context: path.resolve(__dirname,'src'),
	mode: 'development',
	entry: './index.ts',
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            '@': createPath('src'),
        }
    },
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: [
						"@babel/preset-env",
						"@babel/preset-typescript"
					],
				  }
				}
			},
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	  },
    plugins: [
		new CleanWebpackPlugin(),
	]
}