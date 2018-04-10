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
		}else if(location.hash === '#/login'){
			$login.show();
			app.isLogin = false;
		}
	}
})
