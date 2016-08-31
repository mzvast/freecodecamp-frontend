function diff(arr1, arr2) {
  var newArr = [];
  var a1 = arr1.filter(function(val) {
  	return arr2.indexOf(val)<0;
  }); 
  var a2 = arr2.filter(function(val) {
  	return arr1.indexOf(val)<0;
  });
  newArr = a1.concat(a2);
  console.log("newArr=",newArr);
  return newArr;
}

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);