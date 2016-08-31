/**
 * Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */



function chunkArrayInGroups(arr, size) {
  // Break it up.
  var i = 0,
      result=[];
  while(i<arr.length){
    result.push(arr.slice(i,i+size));
    i = i + size;
  }
  return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2))