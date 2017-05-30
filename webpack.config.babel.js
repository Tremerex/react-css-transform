const path = require('path');
const webpack = require('webpack');
const webpackValidator = require('webpack-validator');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const paths = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'public')
};

module.exports = (env) => {
  const isProduction = !!env.prod;
  return webpackValidator({
    context: path.resolve('src'),
    entry: paths.app,
    output: {
      filename: 'bundle.js',
      path: paths.build,
      publicPath: '/public/',
      pathinfo: isProduction
    },
    devtool: isProduction ? 'source-map' : 'eval',
    module: {
      loaders: [
        { 
          test: /\.js$/, 
          loaders: ['babel-loader'], 
          exclude: /node_modules/ 
        }, {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
          ]
        }, { 
          test: /\.scss$/,
          exclude: /node_modules/,
          loaders: [
            'style-loader',
            'css-loader?importLoaders=1&modules&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader'
          ]
        }
      ]
    },
    devServer: {
      contentBase: paths.build,
      historyApiFallback: false,
      inline: true,
      stats: 'errors-only'
    },
    plugins: [
      new OpenBrowserPlugin({ url: 'http://localhost:3000' })
    ]
  });
}