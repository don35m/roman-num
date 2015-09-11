describe('romanNum', function() {
  it("Takes 1 and converts it to I", function() {
    expect(romanNum(1)).to.equal("I")
  });

  it("Takes 2 and converts it to II", function() {
    expect(romanNum(2)).to.equal("II")
  });

  it("Takes 4 and subtacts 1 from 5 to make IV", function() {
    expect(romanNum(4)).to.equal("IV")
  });

  it("Takes 5 and and converts it to V", function() {
    expect(romanNum(5)).to.equal("V")
  });

  it("Takes 9 and subtacts 1 from 10 to make IX", function() {
    expect(romanNum(9)).to.equal("IX")
  });

  it("Takes 10 and converts it to X", function() {
    expect(romanNum(10)).to.equal("X")
  });
});
