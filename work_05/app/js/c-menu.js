var $menu = (function(){
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-menu"></div>')
	}
	
	return {show:show};
})()
