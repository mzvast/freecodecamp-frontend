/**
 * Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
 */

 /* 
 全排列（递归链接）算法 
. 1、设定源数组为输入数组，结果数组存放排列结果（初始化为空数组）； 
. 2、逐一将源数组的每个元素链接到结果数组中（生成新数组对象）； 
. 3、从原数组中删除被链接的元素（生成新数组对象）； 
. 4、将新的源数组和结果数组作为参数递归调用步骤2、3，直到源数组为空，则输出一个排列。 
. */

function permAlone(str) {
  var arr = str.split('');
  var result = []; 
  var counter = 0;
  function check(s) {
    if(!(/(\w)\1/.test(s))){
      counter++;
    }
  }

  function fn(input, output) {
    if (input.length === 0) {
      check(output.join(''));
    } else {
      for (var i = 0; i < input.length; i++) {
        fn(
          input.slice(0, i).concat(input.slice(i + 1)),
          output.concat(input[i])
        );
      }
    }
  }

  fn(arr, []);
  return counter;

}
console.log(permAlone('aaabb'))
