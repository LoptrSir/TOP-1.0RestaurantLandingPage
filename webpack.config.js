const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    home: "./src/home.js",
    menu: "./src/menu.js",
    contact: "./src/contact.js",
    // module: ["./src/module.js", "webpack/hot/dev-server"],
    // module was attempted due to webpack HotModuleReplacement HMR causing reload.  This didn't fix it.
  },
  devServer: {
    static: "./dist",
    hot: true,
    historyApiFallback: true,
    // publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "home",
      filename: "index.html",
      template: "src/index.html",
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
          from: "src/menu",
          to: "menu",
        },
        {
          from: "src/contact",
          to: "contact",
        },
        { from: "src/images", to: "images" },
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
          to: "script.js",
        },
        {
          from: "src/fonts",
          to: "fonts",
        },
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
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        // use: [
        //   {
        //     loader: "file-loader",
        //     options: {
        //     name: "[name].[ext]",
        //     }
        //   },
        // ],
      },
    ],
  },
};
