const GolBall = artifacts.require("GolBall");

module.exports = function (deployer) {
  deployer.deploy(GolBall, 'MyNtf', 'MT');
};
