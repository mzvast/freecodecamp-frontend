function translate(str) {
	var ind = str.match(/[aeiouAEIOU]/).index;
	// console.log("",ind);
	if (!ind) {
		// console.log("yes");
		console.log("",str = str +"way");
	}else{
		console.log("",str = str.slice(ind)+str.slice(0,ind)+"ay");
	};
	// console.log("",str);
  return str;
}

translate("california");
translate("eight");
translate("algorithm");
translate("glove");