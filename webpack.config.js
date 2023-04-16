const path = require('path');

module.exports = {
	mode: 'development',
	module:{
		rules: [
			{
				test:/\.css|scss$/,
				use:['style-loader','css-loader','sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }],
						],
					},
				},
			},
		],
	},
	entry: './src/assets/js/index.js',
	// 出力の設定
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, 'build/assets'),
	}
};
