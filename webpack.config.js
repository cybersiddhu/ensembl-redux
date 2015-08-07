if (process.env.NODE_ENV === 'production') {
  module.exports = exports = [
    require('./config/webpack/client')(),
    require('./config/webpack/server')()
  ];
} else {
  module.exports = exports = [
    require('./config/webpack/client')()
  ];
}
