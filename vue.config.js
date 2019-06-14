let externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'axios': 'axios',
  'ant-design-vue': 'antd'
}
const cdn = {
  css: [],
  js: [
    '//cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js',
    '//cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
    '//cdn.jsdelivr.net/npm/vue-router@3/dist/vue-router.min.js',
    '//cdn.jsdelivr.net/npm/vuex@3/dist/vuex.min.js',
    '//cdn.jsdelivr.net/npm/ant-design-vue@1/dist/antd.min.js',
  ]
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: './docs',
  assetsDir: undefined,
  runtimeCompiler: undefined,
  productionSourceMap: false,
  parallel: undefined,
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  lintOnSave: false,
  devServer: {
    port: 8081,
    // proxy: {
    //   '/': {
    //     target: 'http://192.168.1.110:8080',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': ''
    //     }
    //   }
    // }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.externals(externals)//忽略打包
      config.plugin('html')
        .tap(args => {
          args[0].cdn = cdn;
          return args
        })
    }
  }
}
