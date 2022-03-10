const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const esmOutput = {
  path: path.jsoin(__dirname, "dist"),
  filename: "scheduler.js",
  library: {
    type: "module",
  },
}

const umdOutput = {
  path: path.join(__dirname, "dist"),
  filename: "scheduler.js",
  library: "Scheduler",
  libraryTarget: "umd",
  umdNamedDefine: true,
}

module.exports = ({ esm }) => ({
  entry: path.join(__dirname, "src"),
  output: esm ? esmOutput : umdOutput,
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        loader: "css-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".html"],
    alias: {
      react: "preact/compat",
      "react/jsx-runtime": "preact/jsx-runtime",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  devtool: "source-map",
  devServer: {
    static: path.join(__dirname, "dist"),
    port: 4000,
  },
  experiments: {
    outputModule: esm,
  },
})
