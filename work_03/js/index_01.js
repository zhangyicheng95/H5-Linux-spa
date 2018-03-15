$('#btn').click(function(){
  if($('#txt').val() !== ""){
    $('#ul').append("<li>"+$('#txt').val()+"<img src='img/write.png' id='img'/>"+"</li>");
    $('#txt').val("");
  }
});
$('#img').click(function(){
  $('#txt').focus();
})
