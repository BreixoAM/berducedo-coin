const BCDToken = artifacts.require('BCDToken');
const initialSupply = 1000;

module.exports = async function (deployer) {
  await deployer.deploy(BCDToken, initialSupply);
};
