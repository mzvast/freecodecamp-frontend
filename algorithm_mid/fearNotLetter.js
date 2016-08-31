/**
 * Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
 */

function fearNotLetter(str) {
  var start = str.substring(0,1).charCodeAt(0),
      end = str.substring(str.length-1).charCodeAt(0),
      len = end - start,
      missing = [];
      
  for(var i = start;i<=end;i++){
    var cur_char = String.fromCharCode(i);
    if (str.indexOf(cur_char) === -1) {
      missing.push(cur_char);
    }
  }
  return missing.length>0?missing.join(''):undefined;
}

console.log(fearNotLetter("abce"))
console.log(fearNotLetter("abcdefghjklmno"))
console.log(fearNotLetter("bcd"))