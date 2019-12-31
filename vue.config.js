const debug = process.env.NODE_ENV !== 'production'

module.exports = {
  configureWebpack: config => {
    if (debug) { // 开发环境配置
      config.devtool = 'source-map'
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
