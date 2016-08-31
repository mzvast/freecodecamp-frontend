/**
 * Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.
 */
 function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num>0){
    var repeat_str = "";
    for (var i = 0; i < num; i++) {
     repeat_str+=str; 
    }
    return repeat_str;
  }
  return "";
}

console.log(repeatStringNumTimes("abc", 3));