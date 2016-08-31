/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
 */

function convertHTML(str) {
  // &colon;&rpar;
  return str.replace(/&/g,'&amp;')
            .replace(/</g,'&lt;')
            .replace(/>/g,'&gt;')
            .replace(/"/g,'&​quot;')
            .replace(/'/g,'&​apos;');
}

console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML('Stuff in "quotation marks"'))