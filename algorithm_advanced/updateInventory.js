/**
 * Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
 */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr2.reduce(function(pre,cur,curIndex,array) {
      var index = pre.map(function(item) {
        return item[1]
      }).indexOf(cur[1]);
      if (index === -1) {
        pre.push(cur);
      }else{
        pre[index][0] = pre[index][0] + cur[0];
      }
      return pre;
    },arr1).sort(function(a,b) {
      return a[1]>b[1];
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv))