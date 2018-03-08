var uneye = $('#uneye');
var inp = $('#inp');
uneye.mouseover(function(){
  uneye[0].src = "img/eye100.png";
  inp.attr('type','textbox');
});
uneye.mouseout(function(){
  uneye[0].src = "img/eye101.png";
  inp.attr('type','password');
})
