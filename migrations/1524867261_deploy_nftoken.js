var nfToken = artifacts.require('NFToken')

module.exports = function(deployer) {
  deployer.deploy(nfToken)
};
