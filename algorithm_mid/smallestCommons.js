/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
 */

function smallestCommons(arr) {
  var startTime = new Date();
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0],arr[1]);

  function checkCom(n) {
    for(var j=min;j<=max;j++){
      if(n%j !==0){
        return false;
      }
    }
    return true;
  }

  var i = min;
  while(!checkCom(i)) {
    i++;
  }
  return [i,new Date()-startTime];
}


console.log(smallestCommons([1,5]))
console.log(smallestCommons([1,13]))
console.log(smallestCommons([23,18]))