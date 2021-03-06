const path = require("path");
const yamljs = require('yamljs');
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  module: {
    rules: [
      {
        test:/\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    {
        test:/\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
    },
    {
      test:/\.(woff|woff2|eot|ttf|otf)$/i,
      type: "asset/resource",
    },
      {
        test:/\.yaml$/i,
        type:'json',
        parser:{
          parse: yamljs.parse,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Output Management",
      template: "src/index.html",
    }),

  ],

  


};


