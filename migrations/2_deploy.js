const BCDToken = artifacts.require('BCDToken');

module.exports = async function (deployer) {
  await deployer.deploy(BCDToken);
};
