var $header = (function(){
	$headerDOM = ''
	+'<div class="title">'
	+'	<h1></h1>'
	+'	<a class="iconfont icon-daohang"></a>'
	+'</div>'
	+'<div class="account">'
	+'	<div class="account_menu">'	
	+'		<div class="logo"></div>'
	+'		<span>管理</span>'
	+'		<i class="iconfont icon-arrowdown" id="i1"></i>'
	+'	</div>'
	+'	<div class="submenu">'
	+'		<i class="iconfont icon-icon_logout"></i>'
	+'		<span>注销</span>'
	+'	</div>'
	+'</div>';
	
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-header">'+$headerDOM+'</div>');
		
		var $title = $('.title h1'),
			$logo = $('.account .logo'),
			$account = $('.account'),
			$account_menu = $('.account_menu'),
			$menu = $('.submenu'),
			$arrow = $('#i1');
		$title.html(app.config.headerTitle);
		$logo.css('background','url('+app.config.headerLogo+')');
		
		$account_menu.mouseover(function(){
			$menu.css('display','block');
			$arrow.addClass('icon-arrowup');
			$arrow.removeClass('icon-arrowdown');
		});
		$account.mouseout(function(){
			$menu.css('display','none');
			$arrow.addClass('icon-arrowdown');
			$arrow.removeClass('icon-arrowup');
		});
		$menu.click(function(){
			location.hash = '#/login';
		});
	}
	return {show:show};
})();


