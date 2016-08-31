/**
 * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
 */

function destroyer(arr) {
  // Remove all the values
  var exc = [].slice.call(arguments,1);
  return arr.filter(function(item) {
    if(exc.indexOf(item) === -1){
      return item;
    }
  })
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3) )