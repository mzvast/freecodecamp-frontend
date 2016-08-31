function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var filterdArr = arr.filter(function(val) {
  	switch(val+''){
  		case 'false':
  		case 'null':
  		case '0':
  		case "":
  		case 'undefined':
  		case 'NaN':
  			return false;
  		default:
  			return true;
  	}
  });
  console.log("filterdArr=",filterdArr);
  return filterdArr;
}

bouncer([7, "ate", "", false, 9]);
bouncer([false, null, 0, NaN, undefined, ""])
bouncer([1, null, NaN, 2, undefined])