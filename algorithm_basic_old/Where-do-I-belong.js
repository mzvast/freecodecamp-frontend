function where(arr, num) {
  // Find my place in this sorted array.
var myArr = arr.sort(function(a,b) {
	return a-b;
}) 
var index;
for (var i = 0; i < myArr.length; i++) {
	if (num<=myArr[0]) {
		index = 0;
		break;
	};
	if (i==myArr.length-1) {
		index = myArr.length;
		break;
	};
	if (num>myArr[i]&&num<=myArr[i+1]) {
		index = i+1;
		break;
	}
}
console.log("",myArr);
console.log("",index);
  return index;
}

// where([5, 3, 20, 3], 99);
// where([2, 20, 10], 19);
where([3, 10, 5], 3);