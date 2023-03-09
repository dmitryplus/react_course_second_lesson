const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const createPath = (dirName) => path.resolve(__dirname, dirName);

module.exports = {
	context: createPath('src'),
	mode: 'development',
	entry: './index.ts',
	output: {
		filename: 'index.js',
		path: createPath('dist'),
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
				test: /\.ts?$/,
				exclude: /node_modules/,
				use: {
				  loader: 'babel-loader',
				  options: {
					presets: [
						[
							'@babel/preset-env', 
							{ 
								targets: 
								{ 
									node: 'current' 
								} 
							}
						],
						'@babel/preset-typescript'
					],
					plugins: [
						"@babel/plugin-proposal-class-properties"
					]
				  }
				}
			},
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			}
		],
	  },
    plugins: [
		new CleanWebpackPlugin(),
	]
}