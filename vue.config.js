const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const PackageJSON = require('./package.json');

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('html').tap((args) => {
      args[0].title = `${PackageJSON.config.title || ''}`;
      return args;
    });
    config.plugin('define').tap((args) => {
      args[0]['process.env'].VUE_APP_TITLE = `"${PackageJSON.config.title || ''}"`;
      args[0]['process.env'].VUE_APP_DESCRIPTION = `"${PackageJSON.description || ''}"`;
      args[0]['process.env'].VUE_APP_VERSION = `"${PackageJSON.version || '0.0.0'}"`;
      return args;
    });
  },
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      })
    ],
  },
  css: {
    loaderOptions: {
      sass: {
        additionalData: '@import "@/styles/colors.sass"',
      },
    },
  },
});
