'use strict'

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const glob = require("glob")

const entry = {};
const plugins = [];
glob.sync('./src/pages/*/index.js').forEach(function (filePath) {
  var name = filePath.match(/pages\/(.+)\/index.js/);
  name = name[1];
  entry[name] = filePath;
  plugins.push(new HtmlWebpackPlugin({
    filename: name+'.html',
    template: './index.html',
    chunks:[name],
  }));
});
plugins.push(new VueLoaderPlugin());
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry,
  output: {
    filename: 'js/[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'images/[name][ext]',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        type: 'asset/resource'
      },
	  {
		test: /\.js$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: [
					['@babel/preset-env', 
					//{ targets: "defaults"
					//},
					]
				]
			}
		}
    }
    ]
  },
  plugins,
  devServer: {
    compress: true,
    port: 8082
  }
}
