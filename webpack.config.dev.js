const { merge } = require('webpack-merge');
const common = require('./webpack.config.js');

const config = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080'
    },
    historyApiFallback: true,
  }
};

module.exports = merge(common, config);