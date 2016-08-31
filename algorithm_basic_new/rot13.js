/**
 * One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 */


function rot13(str) { // LBH QVQ VG!
   return str.split('').map(function(item) {
    var code =item.charCodeAt(0);
    if((code>77&&code<=90)||code>109&&code<122){
      return String.fromCharCode(item.charCodeAt(0)-13);
    }else if(code>=65||code>=97){
      return String.fromCharCode(item.charCodeAt(0)+13);
    }
    return item;
   }).join('');
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"))

