function sumAll(arr) {
	var max = Math.max(arr[0],arr[1]);
	var min = Math.min(arr[0],arr[1]);
	var sum = 0;
	for (var i = min; i <=max; i++) {
		sum+=i;
	}
	console.log("",sum);
  return sum;
}

sumAll([1, 4]);
sumAll([10, 5]);
