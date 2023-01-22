const path = require("path");
module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // loader 顺序从右向左
        // 如果 loader 只有一个 那么可以直接用 loader 不用 use
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/,
        // 先编译成css 文件 但是还是需要css-loader 继续处理
        // loader: 'less-loader'
        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
        // use: [
        //   "style-loader",
        //   "css-loader",
        //   "less-loader",
        //   {
        //     // postcss
        //     loader: "postcss-loader",
        //     options: {
        //       postcssOptions: {
        //         plugins: ["autoprefixer"],
        //       },
        //     },
        //   },
        // ],
      },
      // 兼容浏览器 编译前缀 postcss-loader
    ],
  },
};
