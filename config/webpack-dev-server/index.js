const webpack = require('webpack'),
      argv    = require('yargs').argv,
      config  = require('../../config'),
      WebpackDevServer = require('webpack-dev-server'),
      makeCompiler = require('../webpack/client');

const QUIET_MODE = !!argv.quiet;

const server = new WebpackDevServer(webpack(makeCompiler()), {
  contentBase : config.inProject(config.SRC_DIRNAME),
  hot    : true,
  quiet  : QUIET_MODE,
  noInfo : QUIET_MODE,
  lazy   : false,
  stats  : {
    colors : true
  },
  historyApiFallback : true
});

server.listen(config.WEBPACK_PORT, config.WEBPACK_HOST, function () {
  console.log('Webpack dev server running at host %s and port %d \n', config.WEBPACK_HOST, config.WEBPACK_PORT);
});

module.exports = exports = server;
