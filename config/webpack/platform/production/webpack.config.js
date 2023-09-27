const { merge } = require('webpack-merge');
const commonConfig = require('@wildberries/webpack-config-stream');
const ActionsLoaderConfig = require('@mihanizm56/webpack-magic-redux-modules/lib/loader-config');

const config = {
  module: {
    rules: [ActionsLoaderConfig({ withPkgJsonName: true })],
  },
};

module.exports = merge(commonConfig, config);
