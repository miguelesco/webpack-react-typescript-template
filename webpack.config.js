

/* eslint-disable */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/* eslint-disable */
const path = require('path');

const scssRules = {
  test: /\.s[ac]ss$/i,
  use: [
    // Creates `style` nodes from JS strings
    'style-loader',
    // Translates CSS into CommonJS
    'css-loader',
    // Compiles Sass to CSS
    'sass-loader',
  ],
};

const imagesRule = {
  test: /\.(png|jp(e*)g|svg|gif)$/,
  use: ['file-loader'],
};

const svgRule = {
  test: /\.svg$/,
  use: ['@svgr/webpack'],
};

const reactRules = {
  use: "babel-loader",
  test: /.(js|jsx)$/,
  exclude: /node_modules/,
}

/** @type {import('webpack').Configuration} **/

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  devServer: {
    contentBase: './dist',
    headers: {
      "Access-Control-Allow-Origin": "*",
    }
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Project GM',
    template: 'public/index.html',
  }), new CleanWebpackPlugin()],
  module: {
    rules: [scssRules, reactRules, imagesRule, svgRule],
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"]
  }

};