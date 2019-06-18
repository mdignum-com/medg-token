var MEDGToken = artifacts.require("MEDGToken");

contract("MEDGToken", function(accounts) {
  it("should assert true", function(done) {
    var medgToken = MEDGToken.deployed();
    assert.isTrue(true);
    done();
  });
});
