/**
 * Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
 */


function addTogether() {
  var a = arguments[0];
  var invalid = false;
  [].forEach.call(arguments,function(arg) {
    // console.log(arg+'-->',typeof arg,'-->',typeof arg === 'number')
    if(typeof arg !== 'number'){
      invalid = true;
    }
  })
  if (invalid) {
    return undefined;
  }

  if (arguments.length==2) {
    return arguments[0]+arguments[1];
  }else{
    return function(x) {
      return typeof x==='number'?a+x:undefined;
    }
  }
}

console.log(addTogether(2,3))
console.log(addTogether(2)(3))
console.log(addTogether("http://bit.ly/IqT6zt"))
console.log(addTogether(2)([3]))