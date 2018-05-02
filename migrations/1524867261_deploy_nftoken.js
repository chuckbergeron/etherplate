var NFToken = artifacts.require('./NFToken')

module.exports = function(deployer) {
  NFToken.deploy()
};
