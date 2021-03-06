var path = require('path'),
    webpack = new require('webpack'),
    autoprefixer = new require('autoprefixer'),
    ProvidePlugin = new require('webpack/lib/ProvidePlugin'),
    CommonsPlugin = new require('webpack/lib/optimize/CommonsChunkPlugin'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    OfflinePlugin = require("offline-plugin"),
    CopyWebpackPlugin = require('copy-webpack-plugin');

const ENV = 'production'; // process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV !== 'production';

module.exports = {
	context: path.resolve(__dirname, "src"),
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: '/',
		filename: 'widget.js'
	},
	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.css', '.scss'],
		modulesDirectories: [
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		],
		alias: {
			components: path.resolve(__dirname, "src/components"),    // used for tests
			style: path.resolve(__dirname, "src/style"),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},
	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.jsx?$/,
		// 		exclude: /src\//,
		// 		loader: 'source-map'
		// 	}
		// ],
		loaders: [
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            // },
            // {
            //     test: /\.css/,
            //     loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            // },
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			}
			// {
			// 	test: /\.(scss|css)$/,
			// 	exclude: /src\/components\//,
			// 	loader: ExtractTextPlugin.extract('style?singleton', [
			// 		`css?sourceMap=${CSS_MAPS}`,
			// 		`postcss`,
			// 		`less?sourceMap=${CSS_MAPS}`
			// 	].join('!'))
			// }
			// {
			// 	test: /\.json$/,
			// 	loader: 'json'
			// }
			// {
			// 	test: /\.(xml|html|txt|md)$/,
			// 	loader: 'raw'
			// },
			// {
			// 	test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
			// 	loader: ENV === 'production' ? 'file?name=[path][name]_[hash:base64:5].[ext]' : 'url'
			// }
		]
	},

	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],

	plugins: ([
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true
			// disable: ENV !== 'production'
		}),
		new webpack.optimize.DedupePlugin(),
		new webpack.DefinePlugin({
			'process.env': JSON.stringify({ NODE_ENV: ENV })
		}),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
		// new HtmlWebpackPlugin({
		// 	template: './index.html',
		// 	inject: 'body',
		// 	hash: true,
		// 	cache: true,
		// 	minify: { collapseWhitespace: false }
		// })
		new CopyWebpackPlugin([
			{ from: './index.html', to: './index.html' }
		])
		// new OfflinePlugin({
		// 	relativePaths: false,
		// 	AppCache: false,
		// 	publicPath: '/'
		// })
	]).concat(ENV === 'production' ? [
		new webpack.optimize.OccurenceOrderPlugin()
	] : []),

	stats: { colors: true },

	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},

	devtool: ENV === 'production' ? 'source-map' : 'cheap-module-eval-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		colors: true,
		publicPath: '/',
		contentBase: './src',
		historyApiFallback: true,
		open: true,
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
};