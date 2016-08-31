/**
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).
 */
function sym(args) {
  function delta(arr1,arr2) {
    var basket = [];
    arr1.forEach(function(i) {
      if(arr2.indexOf(i) === -1&&basket.indexOf(i)===-1){
        basket.push(i);
      }
    })
    arr2.forEach(function(i) {
      if(arr1.indexOf(i) === -1&&basket.indexOf(i)===-1){
        basket.push(i);
      }
    })
    return basket;
  }
  var arr = [].slice.call(arguments,0)

  return arr.reduce(function(pre,cur,curIndex,array) {
    return delta(pre,cur)
  },[]);
}

// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]))
// console.log(sym([1, 2, 3], [5, 2, 1, 4]))
// console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]))

console.log(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]))