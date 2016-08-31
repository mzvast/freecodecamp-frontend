// function convert(num) {
// 	var qian = Math.floor(num/1000);
// 	num = Math.floor(num%1000);
// 	var bai = Math.floor(num/100);
// 	num = Math.floor(num%100);
// 	var shi = Math.floor(num/10);
// 	num = Math.floor(num%10);
// 	var ge = num;

// 	var result = '';
// 	if (!!qian) {
// 		for (var i = 0; i < qian; i++) {
// 			result+='M'
// 		}
// 	};
// 	if (!!bai) {
// 		switch(bai){
// 			case 9:
// 				result+='CM';
// 				break;
// 			case 8:
// 				result+='DCCC';
// 				break;
// 			case 7:
// 				result+='DCC';
// 				break;
// 			case 6:
// 				result+='DC';
// 				break;
// 			case 5:
// 				result+='D';
// 				break;
// 			case 4:
// 				result+='CD';
// 				break;
// 			case 3:
// 				result+='CCC';
// 				break;
// 			case 2:
// 				result+='CC';
// 				break;
// 			case 1:
// 				result+='C';
// 				break;
// 		}
// 	};
// 	if (!!shi) {
// 		switch(shi){
// 			case 9:
// 				result+='XC';
// 				break;
// 			case 8:
// 				result+='LXXX';
// 				break;
// 			case 7:
// 				result+='LXX';
// 				break;
// 			case 6:
// 				result+='LX';
// 				break;
// 			case 5:
// 				result+='L';
// 				break;
// 			case 4:
// 				result+='XL';
// 				break;
// 			case 3:
// 				result+='XXX';
// 				break;
// 			case 2:
// 				result+='XX';
// 				break;
// 			case 1:
// 				result+='X';
// 				break;
// 		}
// 	}
// 		if (!!ge) {
// 		switch(ge){
// 			case 9:
// 				result+='IX';
// 				break;
// 			case 8:
// 				result+='VIII';
// 				break;
// 			case 7:
// 				result+='VII';
// 				break;
// 			case 6:
// 				result+='VI';
// 				break;
// 			case 5:
// 				result+='V';
// 				break;
// 			case 4:
// 				result+='IV';
// 				break;
// 			case 3:
// 				result+='III';
// 				break;
// 			case 2:
// 				result+='II';
// 				break;
// 			case 1:
// 				result+='I';
// 				break;
// 		}
// 	}
// 	console.log("",qian,bai,shi,ge,result);
//  return result;
// }
function convert (num) {
    if (!+num){
        return false;
    }
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--){
    	roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    }
    var result = Array(+digits.join("") + 1).join("M") + roman;
    console.log("",result);
    return result
}
convert(3999);