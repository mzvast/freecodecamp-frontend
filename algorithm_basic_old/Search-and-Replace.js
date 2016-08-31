function myReplace(str, before, after) {
	// console.log("str",str = str.split(' '));
	// console.log("str2",str.indexOf(before));
	// // var strr = str.slice(str.indexOf(before), before.length)
	// console.log("str3",str.replace(str.indexOf(before),after));
	// console.log("",str);
	if (before.toLowerCase()!=before) {
		console.log("!!!!");
		console.log("",after = after.replace(after.slice(0, 1),after.slice(0, 1).toUpperCase()));
	}
	console.log("",str = str.replace(before,after));
  return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");