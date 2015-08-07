const projectConfig     = require('../../config'),
      makeWebpackConfig = require('../webpack/make-config'),
      KARMA_ENTRY_FILE  = 'karma.entry.js';

const WEBPACK_CONFIG = makeWebpackConfig(
  require('../webpack/client')('development')
);

function makeDefaultConfig () {
  const preprocessors = {};

  preprocessors[KARMA_ENTRY_FILE] = ['webpack', 'sourcemap'];

  return {
    files : [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      './' + KARMA_ENTRY_FILE
    ],
    frameworks : ['jasmine'],
    preprocessors : preprocessors,
    reporters : ['progress', 'clear-screen'],
    browsers : ['PhantomJS'],
    webpack : {
      devtool : 'inline-source-map',
      cache: true,
      resolve : WEBPACK_CONFIG.resolve,
      module  : {
        loaders : WEBPACK_CONFIG.module.loaders
      }
    },
    webpackMiddleware : {
      noInfo : true
    },
    plugins : [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-coverage'),
      require('karma-phantomjs-launcher'),
      require('karma-clear-screen-reporter'),
      require('karma-nyan-reporter')
    ],
    port: 8080,
    logLevel: config.LOG_INFO,
    captureTimeout: 60000
  };
}

module.exports = function (karmaConfig) {
  return karmaConfig.set(
    require(`./configs/_${projectConfig.NODE_ENV}`)(makeDefaultConfig())
  );
};
