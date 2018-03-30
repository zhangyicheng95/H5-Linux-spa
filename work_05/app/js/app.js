$(function(){
	
	$header.show();
	$menu.show();
	$stage.show();
	$footer.show();
	
	window.onhashchange = function(){
		if(location.hash === '#/login'){
			$login.show();
		}
	}
})
