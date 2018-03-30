var $stage = (function(){
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-stage"></div>');
	}
	
	/***
	 * 
	 * @param {Object} router
	 */
	function load(router){
		var panel = parsePanel(router);
	}
	
	/**
	 * 
	 * @param {Object} router
	 */
	function parsePanel(router){
		return '';
	}
	return {show:show,load:load};
})();
