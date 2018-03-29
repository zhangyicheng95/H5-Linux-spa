var $stage = (function(){
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-stage"></div>');
	}
	return {show:show};
})();
