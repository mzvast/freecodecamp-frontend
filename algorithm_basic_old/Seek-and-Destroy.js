function destroyer(arr) {
var myArray = arguments[0];//准备数组
var myArgs = [];//准备参数
	for (var i = 1; i < arguments.length; i++) {
		myArgs.push(arguments[i]);
	}
	/*过滤*/
	var myNewArray = myArray.filter(function(val) {
		for (var i = 0; i < myArgs.length; i++) {
			if (myArgs[i]==val) {
				return false;
			}
		}
		return true;
	});
	console.log("myNewArray=",myNewArray);
	return myNewArray;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);