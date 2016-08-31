function fearNotLetter(str) {
	var iniArr = str.split('');
	var missingArr = [];
	// console.log("",iniArr);
	var alpha = "abcdefghijklmnopqrstuvwxyz";
	var start = str.slice(0,1);
	var end = str.slice(str.length-1);
	// console.log("",alpha.indexOf(start));
	// console.log("",alpha.indexOf(end));
	var completeStr = alpha.slice(alpha.indexOf(start),alpha.indexOf(end)+1);
	var completeArr = completeStr.split('');
	// console.log("",completeArr);
	if (completeArr.length==iniArr.length) {
		return undefined;
	};
	for (var i = 0; i < completeArr.length; i++) {
		if (iniArr.filter(function(val) {
			return val == completeArr[i];
		}).length==0) {
			missingArr.push(completeArr[i]);
		}
	}
	console.log("",missingArr+'');
  return missingArr+'';
}

// fearNotLetter("abce");
// fearNotLetter("abcdefghjklmno");
fearNotLetter("bcd") 