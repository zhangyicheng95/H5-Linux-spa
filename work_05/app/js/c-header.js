var $header = (function(){
	$headerDOM = ''
	+'<div class="title">'
	+'	<h1></h1>'
	+'</div>'
	+'<div class="account">'
	+'	<div class="logo" id="logo"></div>'
	+'	<span>管理</span>'
	+'	<i class="iconfont icon-arrowdown" id="i1"></i>'
	+'	<div class="submenu">'
	+'		<i class="iconfont icon-sun-none"></i>'
	+'		<span>注销</span>'
	+'	</div>'
	+'</div>';
	
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-header">'+$headerDOM+'</div>');
		var $title = $('.title h1'),
			$logo = $('.account .logo'),
			$account = $('.account'),
			$menu = $('.submenu'),
			$arrow = $('#i1');
			console.log($account)
		$title.html(app.config.headerTitle);
		$logo.css('background','url('+app.config.headerLogo+')');
		console.log($logo.css('background'))
		
		$account.mouseover(function(){
			$menu.css('display','block');
			$arrow.removeClass('icon-arrowdown');
			$arrow.addClass('icon-arrowup');
			
		});
		$account.mouseout(function(){
			$menu.css('display','none');
			$arrow.removeClass('icon-arrowup');
			$arrow.addClass('icon-arrowdown');
		});
		$menu.click(function(){
			location.hash = '#/login';
		})
		
	}
	return {show:show};
})();


