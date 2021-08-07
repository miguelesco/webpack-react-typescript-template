

/* eslint-disable */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */
const path = require('path');

const assetsRule = {
  type: "asset",
  test: /\.(png|svg|jpg|jpeg|gif)$/i
}

const reactRules = {
  use: "babel-loader",
  test: /.(js|jsx)$/,
  exclude: /node_modules/,
}

/** @type {import('webpack').Configuration} **/

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project GM',
    template: 'public/index.html',
  }), new CleanWebpackPlugin()],
  module: {
    rules: [ reactRules, assetsRule],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }

};