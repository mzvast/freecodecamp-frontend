/**
 * Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
 */

function translatePigLatin(str) {
  var index = str.match(/[aeiou]/).index;
  return str.substring(index) + str.substring(0,index) + (index===0?'way':'ay')
}

// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("california"));
// console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
// console.log(translatePigLatin("glove"))