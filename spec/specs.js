describe('romanNum', function() {
  it("Takes 1 and converts it to I", function() {
    expect(romanNum(1)).to.equal("I")
  });

  it("Takes 2 and converts it to II", function() {
    expect(romanNum(2)).to.equal("II")
  });
});
