function pair(str) {
	var arr = str.split('');
	var rt = [];
	console.log("",arr);
	for (var i = 0; i < arr.length; i++) {
		var pair;
		switch(arr[i]){
			case 'A':
				pair='T';
				break;
			case 'T':
				pair='A';
				break;
			case 'C':
				pair='G';
				break;
			case 'G':
				pair='C';
		};
		rt.push([arr[i],pair]);
	}
	console.log("return",rt);
  return rt;
}

// pair("GCG");
pair("ATCGA")