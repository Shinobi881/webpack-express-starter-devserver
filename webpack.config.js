var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: [
    'webpack-hot-middleware/client?http://localhost:3001/',
    'webpack/hot/dev-server',
    './app/app.js'
  ],
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'sourcemap',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}