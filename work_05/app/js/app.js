$(function(){
	if(!app.isLogin){
		$login.show();
	}
	
	window.onhashchange = function(){
		if(location.hash === '#/index'){
			$header.show();
			$menu.show();
			$stage.show();
			$footer.show();
		}
	}
})
