var expect = require("chai").expect;
var add = require("../add");

describe("add", function() {
  it("should add 2 and 2", function() {
    // Arrange
    var a = 2;
    var b = 2;
    // Act
    var result = add(a, b);

    // Assert
    expect(result).to.equal(4);
  });

  it("should add 2 and (-2)", function() {
    // Arrange
    var a = 2;
    var b = -2;
    // Act
    var result = add(a, b);

    // Assert
    expect(result).to.equal(0);
  });

  it("should add 42 and 63", function() {
    expect(add(42, 63)).to.equal(105);
  });
});
