/**
 * Flatten a nested array. You must account for varying levels of nesting.
 */

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var res = [];

  function flaten(obj) {
    if (obj instanceof Array) {
      obj.forEach(function (item) {
        flaten(item);
      })
    } else {
      res.push(obj);
    }

  }
  flaten(arr);
  return res;
}

console.log(steamrollArray([1, [2],
  [3, [
    [4]
  ]]
]));
console.log(steamrollArray([1, {},
  [3, [
    [4]
  ]]
]))
