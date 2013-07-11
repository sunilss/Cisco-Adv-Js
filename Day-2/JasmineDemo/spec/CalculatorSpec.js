describe("Calculator", function() {
  var calculator;

  beforeEach(function() {
    calculator = new Calculator();
  });

  it("should be able to add two numbers", function() {
    var result = calculator.add(100,200);
    expect(result).toEqual(300);
  });

  it("should be able to subtract two numbers", function() {
    var result = calculator.subtract(100,200);
    expect(result).toEqual(-100);
  });

  it("should be able to multiply two numbers", function() {
    var result = calculator.multiply(100,200);
    expect(result).toEqual(20000);
  });


  it("should be able to divide two numbers", function() {
    var result = calculator.divide(200,100);
    expect(result).toEqual(2);
  });

});
