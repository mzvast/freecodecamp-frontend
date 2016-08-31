/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
 */


// function checkCashRegister(price, cash, cid) {
//   var change;
//   // Here is your change, ma'am.
//   change = +((cash - price)*100).toFixed(0);
//   var face = [1,5,10,25,100,500,1000,2000,10000];//美分
//   var face_balance = cid.map(function(item) {
//     return +(item[1]*100).toFixed(0);
//   }); 
//   var total_cash = face_balance.reduce(function(pre,cur) {
//     return pre + cur;
//   },0);  
//   if (total_cash === change) {
//     return 'Closed'
//   }else{
//     var result = face_balance.reduceRight(function(pre,cur,curIndex,array) {
//       if (cur === 0) {
//         return pre;
//       }
//       var need = Math.min(parseInt(change/face[curIndex]),(face_balance[curIndex]/face[curIndex]));
//       if (need > 0) {
//         // console.log('change:',change,',need:',need,',face:',face[curIndex])//,cid[curIndex][0])
//         change = change - need*face[curIndex] 
//         // console.log(curIndex,cid[curIndex][1]);
//         pre[1].push([cid[curIndex][0],+(face[curIndex]*need/100).toFixed(2)]);
//       }
//       return pre;     
      
//     },[change,[]])[1];

//     if (change>0) {
//       return "Insufficient Funds";
//     }else{
//       return result;
//     }
    
//   }  
// }


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))

function checkCashRegister(price, cash, cid){
  var toChange = parseInt((cash - price)*100);
  var face = [1,5,10,25,100,500,1000,2000,10000];//美分
  var result = []
  var total_cash = cid.reduce(function(pre,cur,curIndex,array) {
    return pre + cur[1]*100;
  },0)

  if (toChange === total_cash) {
    return 'Closed';
  }

  for(var i=cid.length - 1;i>=0;i--){
    var need = Math.min(parseInt(toChange/face[i]),parseInt((cid[i][1]*100)/face[i]));
    if (need > 0) {
      var changed = face[i]*need;
      toChange = toChange - changed;
      result.push([cid[i][0],face[i]*need/100]);
    }
  }
  return toChange>0?"Insufficient Funds":result;
}
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]))
// console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))