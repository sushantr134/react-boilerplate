const path = require("path");

//Webpack Plugins
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const compressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  entry: path.resolve(__dirname, "src/index.js"),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.(s?[ac]ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { url: false, sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devtool: "source-map",
  plugins: [
    new htmlWebpackPlugin({ template: path.resolve(__dirname, "./src/index.html"), meta: { "theme-color": "#c689ff" } }),
    new MiniCssExtractPlugin({
      filename: "spotify-style.css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin({ path: ["./build"] }),
    new compressionPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      })
    ]
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    publicPath: "/",
    filename: "spotify-bundle.js"
  },
  devServer:
    process.env.NODE_ENV === "development"
      ? {
          contentBase: path.resolve(__dirname, "./build"),
          hot: true,
          port: 4000
        }
      : {}
};
