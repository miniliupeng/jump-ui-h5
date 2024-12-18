const path = require("path");
const CracoLessPlugin = require("craco-less");

const pxtorem = require("postcss-pxtorem");

const TerserPlugin = require('terser-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"), // 配置src别名
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          // 开启多进程压缩，提升速度
          parallel: true,
          // 是否将压缩后的代码注释删除
          extractComments: false,
          // 压缩选项
          terserOptions: {
            mangle: true, // 开启变量名混淆
            // 是否保留注释
            output: {
              comments: false,
            },
            // 压缩选项
            compress: {
              // 删除所有console
              drop_console: true,
              // 删除所有debugger
              drop_debugger: true
            }
          }
        })
      ]
    },
    plugins: [
      new WebpackBar()
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1CE7C2" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  style: {
    postcss: {
      mode: "extends",
      loaderOptions: {
        postcssOptions: {
          ident: "postcss",
          plugins: [
            [
              pxtorem({
                rootValue: 37.5, //根据ui提供的效果图修改  看是1x还是2x
                propList: ["*"],
                minPixelValue: 3,
                exclude: /node_modules/i,
              }),
            ],
          ],
        },
      },
    },
  },
  devServer: {
    host: "0.0.0.0",
    proxy: {
      "/usdtx-api": {
        target: "https://cdn.jumpbots.top",
        changeOrigin: true,
        secure: false
      },
    },
  },
};
