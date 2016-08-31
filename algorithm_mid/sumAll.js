/**
 * We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
 */

function sumAll(arr) {
  var start = Math.min.apply(null,arr);
  var end = Math.max.apply(null,arr);
  var sum = 0; 
  for (var i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));