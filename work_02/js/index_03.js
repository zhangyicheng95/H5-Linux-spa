var inp = document.getElementById('inp');
var val = document.getElementById('val');
inp.onchange = function(){
  val.innerHTML = "你的年龄是：" + inp.value;
};
inp.onmousedown = function(){
  val.innerHTML = "你的年龄是：" + inp.value;
}
