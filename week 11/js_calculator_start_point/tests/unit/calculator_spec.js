var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should add 2 numbers', function() {

    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(5, calculator.runningTotal);
  })

  it('should subtract 1 numbner from another', function() {

    calculator.numberClick(7);
    calculator.operatorClick("-");
    calculator.numberClick(4);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  })

  it('sho9uld multiply 2 numbers', function(){
    calculator.numberClick(3);
    calculator.operatorClick("*");
    calculator.numberClick(5);
    calculator.operatorClick("=");
    assert.strictEqual(15, calculator.runningTotal);
  })

  it('should divde 1 number by another', function(){
    calculator.numberClick(2);
    calculator.numberClick(1);
    calculator.operatorClick("/");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.strictEqual(3, calculator.runningTotal);
  })

  it('should concatonate numbers', function(){
    calculator.numberClick(4);
    calculator.numberClick(3);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.operatorClick("=");
    assert.strictEqual(50, calculator.runningTotal);
  })

  it('should chain multiple instructions togteher', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    
    assert.strictEqual(33, calculator.runningTotal);
  })

  it('should clear the running total without affecting the calc', function(){
    calculator.numberClick(4);
    calculator.operatorClick("+");
    calculator.numberClick(7);
    calculator.operatorClick("*");
    calculator.numberClick(3);
    calculator.operatorClick("=");
    calculator.numberClick(1);
    calculator.operatorClick("+");
    calculator.numberClick(6);
    calculator.operatorClick("=");
    assert.strictEqual(7, calculator.runningTotal);
  })

});
