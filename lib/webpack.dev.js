const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const path = require('path');
const projectRoot = process.cwd();
const devConfig = {
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase:path.join(projectRoot, 'dist'),
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
