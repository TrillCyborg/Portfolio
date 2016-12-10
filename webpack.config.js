var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/Root.jsx'),
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  eslint: {
    configFile: path.join(__dirname, '.eslintrc'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: "eslint-loader",
      exclude: /node_modules/
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      }, {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.json', '.jsx'],
  },
};
