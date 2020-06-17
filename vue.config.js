let IS_DEV_ENV = process.env.NODE_ENV !== 'production'

module.exports = {
  outputDir: 'dist',
  publicPath: './',
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: IS_DEV_ENV,
  productionSourceMap: IS_DEV_ENV
}