var $header = (function(){
	$headerDOM = ''
	+'<div class="title">'
	+'	<h1></h1>'
	+'	<a class="iconfont icon-daohang"></a>'
	+'</div>'
	+'<div class="account">'
	+'	<div class="logo"></div>'
	+'	<span>管理</span>'
	+'	<i class="iconfont icon-arrowdown-copy" id="i1"></i>'
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
	$title.html(app.config.headerTitle);
	$logo.css('background','url('+app.config.headerLogo+')');
	
	function onMouseover(){
		$menu.css('display','block');
		$arrow.addClass('icon-arrowup');
		$arrow.removeClass('icon-arrowdown-copy');
	};
	function onMouseout(){
		$menu.css('display','none');
		$arrow.addClass('icon-arrowdown-copy');
		$arrow.removeClass('icon-arrowup');
	};
	function onClick(){
		location.hash = '#/login';
	};
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-header">'+$headerDOM+'</div>');
		$account.mouseover(onMouseover);
		$account.mouseout(onMouseout);
		$menu.click(onClick);
	}
	return {show:show};
})();


