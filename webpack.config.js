const path = require("path");

//Webpack Plugins
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const compressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const autoprefixer = require("autoprefixer");
const isDevelopment = process.env.NODE_ENV === "development" ? true : false;

const postcssLoader = {
  loader: "postcss-loader",
  options: {
    ident: "postcss",
    sourceMap: true,
    plugins: () => [
      autoprefixer({
        browsers: [">1%", "last 4 versions", "Firefox ESR", "not ie < 9"]
      })
    ]
  }
};

module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx|tsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: "file-loader"
      },
      {
        test: /\.(eot|otf|woff|woff2|ttf)(\?\S*)?$/,
        loader: "url-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-modules-typescript-loader",
          { loader: "css-loader", options: { modules: true, localIdentName: "[name]__[local]___[hash:base64:5]", camelCase: true } },
          "sass-loader",
          postcssLoader
        ]
      }
    ]
  },
  devtool: "source-map",
  plugins: [
    new htmlWebpackPlugin({ template: path.resolve(__dirname, "./src/index.html"), meta: { "theme-color": "#c689ff" } }),
    new MiniCssExtractPlugin({
      filename: "spotify-style.css",
      chunkFilename: "[id].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CleanWebpackPlugin(),
    new compressionPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "spotify-bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  mode: process.env.NODE_ENV,
  devServer:
    process.env.NODE_ENV === "development"
      ? {
          contentBase: path.join(__dirname, "build"),
          hot: true,
          compress: true,
          historyApiFallback: true,
          port: 4000
        }
      : {}
};
