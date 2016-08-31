var balance = 0;
var op;
var current = '';
var key_history = '';
var container = document.querySelector('.container');
container.addEventListener('click', function(e) {
  e.stopPropagation();
  if(/btn/.test(e.target.className) ===false){
    return;
  };
  // if (e.target) {}
  var key = e.target.innerHTML;
  
  console.log(key,key_history);
  if (/[\d\.]/.test(key)) {//数字键    
    // console.log('==number===')
    addKeyHistory(key);
    current = current+''+key;
    console.log(current);
    show(current);
    // if(op === undefined){
    //   balance = current;
    // }
  }else if(/[\+\-\*\/]/.test(key)){//算数键
    // console.log('==op===')
    addKeyHistory(key);
    if (op) {
      balance = calc(balance,current,op);
      // current = '';
      // show(current);
    }else{
      balance = current;
    }
    op = key;
    current = '';
    show(current);
    
  }else if(/ac/i.test(key)){//清屏
    // console.log('===AC====')
    
      ac();
      show(current);
    
  }else if(/ce/i.test(key)){
      ce();
      show(current);
  }else if(/=/.test(key)){//打印结果
      if (op !== undefined) {
        console.log('===result===')
        balance = calc(balance,current,op);
        ce();
        addKeyHistory('='+balance);
        show(balance);
      }
    }
})

var show = function(val) {
  var textEle = document.querySelector('.display');
  var value_str = val?val:'0';//.match(/(^\d+\.?\d*|0\.\d*)|0|(\d*\.?\d*)/)[0];
  textEle.innerHTML = value_str;
  var debugEle = document.querySelector('.debug');
  debugEle.innerHTML = `balance:${balance} current:${current} op:${op}<br>key_history:${key_history}
  `
}

var ac = function() {
  balance = 0;
  op = undefined;
  current = '';
  key_history = '';
}

var ce = function() {
  current = '';
  op = undefined;
}

var calc = function(pre,cur,op) {
  pre = +pre;
  cur = +cur;
  switch(op){
    case '+':{
      return pre + cur;
    }
    case '-':{
      return pre - cur;
    }
    case '*':{
      return pre * cur;
    }
    case '/':{
      if (cur!==0) {
        console.log(pre / cur)
        return pre / cur;
      }
      return 'NaN';
    }
  }
}

var addKeyHistory = function(key) {
  key_history = key_history + key;
}