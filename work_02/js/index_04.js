var start = document.getElementById('start');
var susp = document.getElementById('suspended');
var stop = document.getElementById('stop');
var val = document.getElementById('prg');
var timer;
start.onclick = function(){
  timer !== null && clearInterval(timer);
  timer = setInterval(function(){
    val.value++;
    document.getElementById('result').innerHTML = val.value + '%';
  },300);
  susp.onclick = function(){
    clearInterval(timer);
  };
  stop.onclick = function(){
    clearInterval(timer);
    val.value = 0;
    document.getElementById('result').innerHTML = "";
  };
};

