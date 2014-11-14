function Decimal(initialValue){
  this.value = initialValue * 1;
  this.mantissa = initialValue.toString().match(/[^.]*\.?(\d*)/)[1].length;

  this.minus = function(subtrahend){
    var difference = this.value - subtrahend.value;
    var fixedDifference = difference.toFixed(9);
    return new Decimal(fixedDifference)
  }

  this.plus = function(addend){
    var sum = this.value + addend.value;
    var digits = Math.max(this.mantissa, addend.mantissa);
    return new Decimal(sum.toFixed(digits));
  }

  this.times = function(multiplicand){
    var product = this.value * multiplicand.value;
    var fixedproduct = product.toFixed(9);
    return new Decimal(fixedproduct);
  }

  this.dividedBy = function(divisor){
    var quotient = this.value / divisor.value;
    var fixedQuotient = quotient.toFixed(9);
    return new Decimal(fixedQuotient);
  }

  // Option a
  this.toString = function(){
    return this.value.toString();
  }
}

// or, Option b
// Decimal.prototype.toString = function(){
//   return this.value;
// }
