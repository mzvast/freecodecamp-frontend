/**
 * Convert the given number into a roman numeral.
 */

function convertToRoman(num) {
  var arr = [['','I','II','III','IV','V','VI','VII','VIII','IX'],
             ['','X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
             ['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
             ['','M','MM','MMM','MMMM','MMMMM','MMMMMM','MMMMMMM','MMMMMMMM','MMMMMMMMM']];
  var result ="";
  var n = 0;
  while(num>0){
    result = arr[n][num%10] + result;
    num = parseInt(num / 10);
    // console.log(num)
    n++;
  }
  return result;
}

// console.log(convertToRoman(36))
console.log(convertToRoman(1000))
// console.log(convertToRoman(891))
// console.log(convertToRoman(3999))