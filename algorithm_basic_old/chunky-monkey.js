function chunk(arr, size) {
  // Break it up.
	var arr2 = arr.slice('');
	var result=[];
	// console.log(arr.length);
	for(var i=0;i<arr.length; i+=size){
		console.log(i);
		console.log(arr2.slice(i,i+size));
		result.push(arr2.slice(i,i+size));
	}
	console.log(result);
  return result;
}

chunk(["a", "b", "c", "d"], 2);
