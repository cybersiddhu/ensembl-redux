module.exports = function karmaDevelopmentConfigModifier (config) {
  config.singleRun = false;
  config.colors = true;

  return config;
};
