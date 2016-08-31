function rot13(str) { // LBH QVQ VG!
	var result='';
	for (var i = 0; i < str.length; i++) {
		if(str.charCodeAt(i)<65||str.charCodeAt(i)>90){
			result+=str[i];
		}else if (str.charCodeAt(i)<=77) {
			result+=String.fromCharCode(str.charCodeAt(i)+13);
		} 
		else{
			result+=String.fromCharCode(str.charCodeAt(i)-13);
		};

	}
	console.log("",result);
	return result;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");