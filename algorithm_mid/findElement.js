/**
 * Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).
 */

function findElement(arr, func) {
  var i=0;
  while(!func(arr[i])){
    i++;
  }

  return arr[i]
}

console.log(findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; }))