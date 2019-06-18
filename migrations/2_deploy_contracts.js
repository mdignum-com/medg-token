var MEDGToken = artifacts.require("MEDGToken");
module.exports = function(deployer) {
    deployer.deploy(MEDGToken);
};