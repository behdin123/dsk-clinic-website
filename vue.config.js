const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
   transpileDependencies: [
    'swiper',
  ],
  chainWebpack: (config) => {
    config.module
      .rule('images')
      .test(/\.(png|jpe?g|gif|svg)$/i)
      .type('asset/resource')
      .set('generator', {
        filename: 'assets/images/[name].[hash:8][ext]',
      });

    // اضافه کردن تنظیمات Swiper برای Webpack
    config.module
      .rule('swiper')
      .test(/swiper\\.*\.m?js$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end();
  },
});