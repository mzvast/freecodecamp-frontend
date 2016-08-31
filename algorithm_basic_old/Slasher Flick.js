function slasher(arr, howMany) {
  // it doesn't always pay to be first
  for(var i=howMany; i>0; i--){
  	arr.shift();
  };
  console.log("arr",arr);
  return arr;
}

slasher([1, 2, 3], 2);//should return [3].
slasher(["burgers", "fries", "shake"], 1)