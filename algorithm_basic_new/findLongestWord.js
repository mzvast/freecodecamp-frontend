/**
 * Return the length of the longest word in the provided sentence.

Your response should be a number.
 */


function findLongestWord(str) {
  return str.match(/(\w*\S)/gi).reduce(function(pre,cur,curIndex,array) {
    return cur.length>pre?cur.length:pre;
  },0);
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));