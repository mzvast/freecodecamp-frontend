var gcounter1 = 0;
var gcounter2 = 0;
var fibonacci = function() {
  var memo = [0,1]
  return function fib(n) {
    var result = memo[n]
    if (typeof result !== 'number') {
      result = fib(n-1) + fib(n-2)
      memo[n] = result
    }
      return result;
    
  }
}()

var fibOld = function(n) {
  if (n < 2) {
    return [0,1][n];
  }else{
    gcounter2++;
    return fibOld(n-1) + fibOld(n-2);
  }
}

var n = 39
var s1 = new Date();
var rs1 = fibonacci(n);
var e1 = new Date();
console.log(rs1,e1 - s1,gcounter1);

var s2 = new Date();
var rs2 = fibOld(n);
var e2 = new Date();
console.log(rs2,e2 - s2,gcounter2)