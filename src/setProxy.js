const proxySettings = {
  '/api/': {
    target: 'http://198.168.111.111:3001',
    changeOrigin: true,
  },
  '/api-2/': {
    target: 'http://198.168.111.111:3001',
    changeOrigin: true,
    pathRewrite: {
      '^/api-2/': '',
    },
  },
}
module.exports = proxySettings
