var MEDGToken = artifacts.require("MEDGToken");

contract("MEDGToken", function(accounts) {
  it("should assert true", function(done) {
    var m_e_d_g_token = MEDGToken.deployed();
    assert.isTrue(true);
    done();
  });
});
