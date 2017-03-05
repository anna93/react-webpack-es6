var path = require('path');
var srcPath = path.join(__dirname, 'src');
var buildPath = path.join(__dirname, 'dist');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: srcPath,
  entry: path.join(srcPath, 'js', 'main.js'),
  output: {
      path: buildPath,
      filename: "bundle.js"
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }, {
						test: /\.scss$/,
						loader: ExtractTextPlugin.extract({
							fallback: "style-loader",
          		loader: "css-loader!sass-loader",
						})
					}
      ]
  },
	plugins: [
		new ExtractTextPlugin({filename:'style.css',
			allChunks: true
		})
	],
	devServer: {
    port: 8080,
    historyApiFallback: {
      index: 'index.html'
    }
  }
};