/**
 * Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
 */

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  return str.match(/([A-Za-z][a-z]*)/g).join('-').toLowerCase();
  // return str.split(/\W/).join('-').toLowerCase();
}

console.log(spinalCase('This Is Spinal Tap'))
console.log(spinalCase('thisIsSpinalTap'))
console.log(spinalCase("The_Andy_Griffith_Show"))
console.log(spinalCase("Teletubbies say Eh-oh"))
console.log(spinalCase("AllThe-small Things"))
