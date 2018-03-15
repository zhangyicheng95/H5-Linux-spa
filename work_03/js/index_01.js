$('#btn').click(function(){
  if($('#txt').val() !== ""){
    $('#ul').append("<li>"+$('#txt').val()+"</li>");
  }
});
