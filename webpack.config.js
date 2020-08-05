const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/index",
    "editor.worker": "monaco-editor/esm/vs/editor/editor.worker.js",
    "css.worker": "monaco-editor/esm/vs/language/css/css.worker",
    "html.worker": "monaco-editor/esm/vs/language/html/html.worker",
  },

  output: {
    globalObject: "self",
    filename: "[name].bundle.js",
    path: path.join(__dirname, "/dist"),
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules", "src"],
  },

  devServer: {
    historyApiFallback: true,
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[ext]",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
