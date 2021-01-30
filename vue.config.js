const path = require('path')
let IS_DEV_ENV = process.env.NODE_ENV !== 'production'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  // lintOnSave: IS_DEV_ENV,
  lintOnSave: false, // 关闭ESlint的检查
  productionSourceMap: IS_DEV_ENV,

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
      .set('utils', resolve('src/utils'))

    // config.module
    //   .rule('images')
    //   .use('url-loader')
    //   .loader('url-loader')
    //   .tap(options => {
    //     return {
    //       limit: 4096,
    //       fallback: {
    //         loader: 'file-loader',
    //         options: `img/[name].[${IS_DEV_ENV ? 'hash' : 'chunkhash'}:5].[ext]`
    //       }
    //     }
    //   })

    config.optimization
      .runtimeChunk({
        name: 'manifest'
      })
      .splitChunks({
        chunks: 'all',
        minSize: 20000,
        minChunks: 3,
        maxAsyncRequests: 5,
        maxInitialRequests: 3,
        automaticNameDelimiter: '~',
        name: 'common',
        cacheGroups: {
          vendor: {
            test: 'vendor',
            name: 'vendor',
            chunks: 'all',
            priority: 10,
            enforce: true,
            reuseExistingChunk: true
          },
          commons: {
            name: 'commons',
            chunks: 'all',
            minChunks: 3,
            reuseExistingChunk: true
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true
          }
        }
      })

  }
}