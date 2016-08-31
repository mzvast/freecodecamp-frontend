(function () {
  var debugEle = document.querySelector('#debug');
  var break_minus_ele = document.querySelector('#bm');
  var break_counter = document.querySelector('#bc')
  var break_plus_ele = document.querySelector('#bp');
  var session_minus_ele = document.querySelector('#sm');
  var session_counter = document.querySelector('#sc')
  var session_plus_ele = document.querySelector('#sm');
  var progress_ele = document.querySelector('.fill');
  var percentage_ele = document.querySelector('#percentage');
  var mode_ele = document.querySelector('#mode');

  var timer_ele = document.querySelector('.timer');
  timer_ele.addEventListener('click', function(e) {
    e.stopPropagation();
    
    if(!runner){
      runner = setInterval(function() {
        count();
      },1000);
    }else{
      clearInterval(runner)
      runner = undefined;
    }
    
  })

  var break_len = 5,
    session_len = 25,
    counter = 0,
    mode = 'session',
    total_sec = session_len * 60,
    runner;

  var count = function() {
    if(counter<total_sec){
      counter ++;
      printProgress();
      log(counter+'/'+total_sec);
    }else{
      if(mode === 'session'){
        setMode('break');        
      }else{
        setMode('session');
      }
      count();
    }
    

  }
  var agency = document.querySelector('.session');
  agency.addEventListener('click', function (e) {
    e.stopPropagation();
    var id = e.target.id;
    log(id);
    if (['bm', 'bp', 'sm', 'sp'].indexOf(id) !== -1) {
      log('in')
      switch (id) {
      case 'bm':
        {
          break_len--;
          break;
        }
      case 'bp':
        {
          break_len++;
          break;
        }
      case 'sm':
        {
          session_len--;
          break;
        }
      case 'sp':
        {
          session_len++;
          break;
        }
      }
      printLen();
      setMode(mode);
    }

  })
  var log = function (info) {
    debugEle.innerHTML = '' + info;
  }

  var printProgress = function() {
    var val_str = counter/total_sec*100+ '%'
    progress_ele.style.height = val_str;
    percentage_ele.innerHTML = countDown();
  }

  var countDown = function() {
    return parseInt((total_sec - counter)/60)+":"+('00'+((total_sec - counter)%60)).substr(-2);
  }

  var setMode = function(val) {
    mode = val
      counter = 0;
    mode_ele.innerHTML = mode;

    if (mode === 'session') {
      progress_ele.style.backgroundColor = 'green';
      total_sec = session_len * 60;
    }else if(mode === 'break'){
      progress_ele.style.backgroundColor = 'pink';
      total_sec = break_len * 60;
    }
    log('total_sec:'+total_sec);
  }

  var resetCounter = function() {
    counter = 0;
    printLen();
  }

  printProgress();

  var printLen = function() {
    break_counter.innerHTML = break_len;
    session_counter.innerHTML = session_len;
  }
  // log('hello')
  // setMode('break')
  

  
})()
