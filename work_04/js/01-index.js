var $btn = new timerButton({
  'container':'div.main',
  'title':'同意',
  'tLength':9,
  'enable':false
  });
  $btn.on('timer-button-click',function(){
    alert('同意了！');
  });