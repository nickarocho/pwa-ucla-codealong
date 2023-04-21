const path = require('path');

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js',
      cards: './src/js/cards.js',
    },

    // TODO: Add the correct output config for the bundled files
    output: {},

    // TODO: Add HTMLWebackPlugin, InjectManifest, and WebpackPwaManifest plugins
    plugins: [],

    // TODO: Add rules here for the CSS and Babel loaders to compile our files properly
    module: {},
  };
};
