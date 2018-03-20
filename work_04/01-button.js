
  //实例化定时器按钮

  var $btn=timerButton({
  'container':'div.main',
  'title':'同意',
  'tLength':3,
  'enable':false
  });
  $btn.on('timer-button-click',function(){
    alert('同意了！');
  });
  