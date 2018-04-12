var $header = (function(){
	$headerDOM = ''
	+'<div class="title">'
	+'	<h1></h1>'
	+'	<a class="iconfont icon-daohang"></a>'
	+'</div>'
	+'<div class="account">'
	+'	<i class="logo"></i>'
	+'	<span>管理</span>'
	+'	<i class="iconfont icon-arrowdown" id="i1"></i>'
	+'	<div class="submenu">'
	+'		<i class="iconfont icon-icon_logout"></i>'
	+'		<span>注销</span>'
	+'	</div>'
	+'</div>';
	
	var $title = $('.title h1'),
		$logo = $('.account .logo'),
		$account = $('.account'),
		$menu = $('.submenu'),
		$arrow = $('#i1');
	
	function onMouseOver() {
		$menu.css('display','block');
		$arrow.addClass('icon-arrowup');
		$arrow.removeClass('icon-arrowdown');
	}
	
	function onMouseOut() {
		$menu.css('display','none');
		$arrow.addClass('icon-arrowdown');
		$arrow.removeClass('icon-arrowup');
	}
	
	function onClick() {
		onMouseOut();
		location.hash = '#/logout';
	}
	
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-header">'+$headerDOM+'</div>');
		$title.html(app.config.headerTitle);
		$logo.css('background','url('+app.config.headerLogo+')');
		$account.mouseover(onMouseOver);
	    $account.mouseout(onMouseOut);
	    $menu.click(onClick);
		
	}
	return {show:show};
})();


