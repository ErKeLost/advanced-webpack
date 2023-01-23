const path = require("path");
module.exports = {
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    // 设置输出资源模块文件名
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
        // 兼容浏览器 编译前缀 postcss-loader
      },
      /**
       * 在webpack5之前 加载资源的时候我们需要使用loader
       * file-loader raw-loader url-loader
       * webpack5开始我们可以使用资源模块类型 assets module type 来代替上面的loader
       */
      {
        test: /\.(jpe?g|svg|png|gif|jpg)$/,
        // type: "asset",
        /**
         * 打包成两张图片 两张图片有自己的地址
         */
        // type: "asset/resource",
        /**
         * 打包成行内 编译成base64直接打包到js文件中 浏览器可以识别 打包到行内可以少发送几次网络请求
         * 缺点造成js文件非常大 加载js文件时间比较长
         */
        /**
         * 合理的规范 
         * 针对小的图片 可以进行base64解析
         * 对于大的图片 还是单独的打包 单独请求
         * 设置成 asset 它会自动识别 有一个文件大小的界限
         */
        // type: "asset/inline",
        type: "asset",
        // 添加parser属性 指定dataUrl 属性 maxSize属性
        parser: {
          dataUrlCondition: {
            maxSize: 1000 * 1024
          }
        },
        generator: {
          // 占位符 【】 name 属性 文件名 ext 扩展名 hash 文件hash :6 截取6位hash值
          filename: "img/[name]_[hash:6][ext]"
        }
      },
    ],
  },
};
