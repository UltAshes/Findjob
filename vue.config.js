module.exports = {

    devServer: {
      //port: 8000,
      proxy: {
        '/api': {
          target: 'https://52.221.194.237:40337',// 后端接口
          secure: false,
          changeOrigin: true, // 是否跨域
          pathRewrite: {
            '^/api': ''
          },
          logLevel: 'debug', // 开启详细日志
          onProxyReq: (proxyReq, req, res) => {
            console.log(`Proxying request to: ${proxyReq.path}`);
        }
      }
    }
  }
}

