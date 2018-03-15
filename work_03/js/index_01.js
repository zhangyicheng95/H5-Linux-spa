$('btn').click(function(){
  alert('12');
  if($('txt').val() !== ""){
    var li = document.creatElement('li');
    li.innerHTML = $('txt').val();
    $('ul').appendChild(li);
    }
})
