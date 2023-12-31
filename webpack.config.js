const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/home.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
  },
  devServer: {
    static: "./dist",
    historyApiFallback: true,
    // publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "home",
      template: "./src/index.html",
      chunks: ["home"],
    }),
    new HtmlWebpackPlugin({
      filename: "menu/index.html",
      template: "src/menu/index.html",
      chunks: ["menu"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact/index.html",
      template: "src/contact/index.html",
      chunks: ["contact"],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "src/style.css",
          to: "style.css",
        },
        {
          from: "src/module.js",
          to: "module.js",
        },
        {
            from: "src/script.js",
            to: "script.js"
        }
      ],
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: '/',
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
