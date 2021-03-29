const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const { SERVER_HOST, SERVER_PORT } = require('../constant')
const webpack = require('webpack')
const proxySettings = require('../../src/setProxy')
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    compress: true, //是否启用gzip压缩
    stats: 'errors-only', //终端仅打印error
    clientLogLevel: 'silent', //日志等级
    open: true, //打开默认浏览器
    hot: true, //热更新
    proxy: { ...proxySettings },
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
})
