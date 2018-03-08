var i=9;
var btn = $('#btn');
btn.val('点我啊！('+i+'s)');
btn.attr('disabled','disabled')
var timer = setInterval(function(){
  btn.val('点我啊！('+i--+'s)');
  if(i <= 0){
    clearInterval(timer);
    btn.val('点我啊！');
    btn.removeAttr('disabled');
  }
},1000);
btn.click(function(){
  alert('么（づ￣3￣）づ╭?～');
})
