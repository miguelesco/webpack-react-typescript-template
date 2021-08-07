const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const {HotModuleReplacementPlugin} = require("webpack")
const { default: merge } = require("webpack-merge");
const common = require("./webpack.common");

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

/** @type {import('webpack').Configuration} **/
const devConfig = {
  mode: 'development',
  devServer: {
    port: 3000,
    contentBase: '../dist',
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    hot: true,
    open: "opera"
  },
  target: "web",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin()
  ],
  devtool: "eval-source-map",
  module: {
    rules: [scssRules]
  }
}

module.exports = merge(common, devConfig)