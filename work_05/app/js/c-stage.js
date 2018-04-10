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
		eval(panel + '.show()')
	}
	
	/**
	 * 
	 * @param {Object} router
	 */
	function parsePanel(router){
		var panel = router.replace(/-(.)/g, function(letter){
	      return letter.toUpperCase();
	    }).replace(/#\//,'$')
	      .replace(/-/g,'');
	
	    return panel + 'Panel';

	}
	return {show:show,load:load};
})();
