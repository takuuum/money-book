const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: isProd ? '/money-book' : '/',
  outputDir: 'docs',
  filenameHashing: false,
  productionSourceMap: false