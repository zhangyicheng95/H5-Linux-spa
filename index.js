window.onload = function(){
  document.getElementById('rectangle__width').focus();
}
var calc = document.getElementById('rectangle__calc');
calc.onclick = function(){
  var width = document.getElementById('rectangle__width');
  var height = document.getElementById('rectangle__height');
  var per = document.getElementById('rectangle__perimeter');
  var are = document.getElementById('rectangle__area');
  if(width.value !== "" && height.value !== ""){
    per.value = width.value * 2 + height.value * 2;
    are.value = width.value * height.value;
  }else{
    document.getElementById('tx1').innerHTML = "*";
    document.getElementById('tx2').innerHTML = "*";
  }
  width.onfocus = function(){
    document.getElementById('tx1').innerHTML = "";
    document.getElementById('tx2').innerHTML = "";
  }
  height.onfocus = function(){
    document.getElementById('tx1').innerHTML = "";
    document.getElementById('tx2').innerHTML = "";
  }
}
