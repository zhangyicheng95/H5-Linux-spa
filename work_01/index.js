window.onload = function(){
  document.getElementById('rectangle__width').focus();
}
var calc = document.getElementById('rectangle__calc');
calc.onclick = function(){
  var width = document.getElementById('rectangle__width');
  var height = document.getElementById('rectangle__height');
  var per = document.getElementById('rectangle__perimeter');
  var are = document.getElementById('rectangle__area');
  /*字符级校验*/
  width.oninput = function(){
    if(typeof width.value !== Number){
      width.value = "";
      document.getElementById('tx1').innerHTML = '请输入正数值'; 
    }
  }
  /*字段级校验*/
  height.onfocus = function(){
    if(width.value !== ""){
      height.focus;
    }
  }
  /*表单级校验*/
  if(width.value !== "" && height.value !== ""){
    var per_result = JSON.stringify((Number(width.value) * 2 + Number(height.value) * 2));
    per.value = parseFloat(per_result.slice(0,per_result.indexOf('.')+3));
    var are_result = JSON.stringify(Number(width.value) * Number(height.value));
    are.value = parseFloat(are_result.slice(0,are_result.indexOf('.')+3));
  
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
