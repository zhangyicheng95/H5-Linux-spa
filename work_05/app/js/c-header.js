var $header = (function(){
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-header"></div>');
	}
	return {show:show};
})();
