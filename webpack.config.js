const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/client/client.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s?css$/,
        loader: ExtractTextPlugin.extract({
          use: [
            'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader',
          ],
          fallback: 'style-loader',
          publicPath: '/assets/',
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    compress: true,
    port: 8081,
    filename: 'main.js',
    publicPath: '/assets/',
  },

};
