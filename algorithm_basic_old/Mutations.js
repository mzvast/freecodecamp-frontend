function mutation(arr) {
	var result = true;
	var arr1 = arr[0].toLowerCase().split('');
	var arr2 = arr[1].toLowerCase().split('');
	console.log("arr1",arr1);
	console.log("arr2",arr2);
	for (var i = 0; i < arr2.length; i++) {
		var count = 0;
		for (var j = 0; j < arr1.length; j++) {
			if (arr2[i]==arr1[j]) {
				break;
			}else{
				if (count==arr1.length-1) {
					result = false;
					break;
				}
				count++;
			};
		}
	}
	console.log("result=",result);
  return result;
}

mutation(["hello", "Hello"])
// mutation(["hello", "hey"]);
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])