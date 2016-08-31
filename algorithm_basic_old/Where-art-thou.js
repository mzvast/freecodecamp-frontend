function where(collection, source) {
  var arr = [];
  // What's in a name?
  // console.log("",Object.keys(source).length);
  for (var i = 0; i < collection.length; i++) {
  	var right = true;
  	for (var j = 0; j < Object.keys(source).length; j++) {
  		if (!collection[i].hasOwnProperty(Object.keys(source)[j])) {
  			right = false;
  			break;
  		}else if(collection[i][Object.keys(source)[j]] != source[Object.keys(source)[j]]){
  			right = false;
  			break;

  		}; 		
  	}
  	if (right) {
  		console.log("0000k=",collection[i]);
  		arr.push(collection[i]);
  	};
  }
  console.log("",arr);
  return arr;
}

where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
