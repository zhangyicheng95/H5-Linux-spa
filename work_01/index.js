window.onload = function(){
  document.getElementById('rectangle__width').focus();//页面加载完成后自动获取焦点
	var calc = document.getElementById('rectangle__calc');
	var width = document.getElementById('rectangle__width');
	 var height = document.getElementById('rectangle__height');

	/*字符级校验*/
	  width.oninput = function(){
	    if(typeof width.value == String){      
	    	width.value = "";
	      document.getElementById('tx1').innerHTML = "请输入正数值"; 
	    }
	  }
	  /*字段级校验*/
	 $('rectangle__width').blur(function(){
	    if(width.value == ""){
	      width.focus();
	    }
	  })

	calc.onclick = function(){
	  var width = document.getElementById('rectangle__width');
	  var height = document.getElementById('rectangle__height');
	  var per = document.getElementById('rectangle__perimeter');
	  var are = document.getElementById('rectangle__area');

	  /*表单级校验*/
	  if(width.value !== "" && height.value !== "" && width.value > 0 && height.value > 0){
	    var per_result = JSON.stringify((Number(width.value) * 2 + Number(height.value) * 2));
	    if(per_result.indexOf('.')>0){
	    	per.value = parseFloat(per_result.slice(0,per_result.indexOf('.')+3));
	    }else{
	    	per.value = parseFloat(per_result);
	    }
	    var are_result = JSON.stringify(Number(width.value) * Number(height.value));
	    if(are_result.indexOf('.')>0){
	    	are.value = parseFloat(are_result.slice(0,are_result.indexOf('.')+3));
	  	}else{
	  		are.value = parseFloat(are_result);
	  	}
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
}
