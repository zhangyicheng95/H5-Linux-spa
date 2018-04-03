var $menu = (function(){
	var $menuDOM=''
		+'<ul>'
			+'<li>'
				+'<div class="menu-bar">'
					+'<i class="iconfont icon-mendianguanli1"></i>'
					+'<span>门店管理</span>'
					+'<i class="iconfont icon-arrowdown-copy"></i>'
				+'</div>'
				+'<div class="menu-items">'
					+'<div class="item">'
						+'<p data-href = "#/store-list">门店列表</p>'
					+'</div>'
				+'</div>'
			+'</li>'
			+'<li>'
				+'<div class="menu-bar">'
					+'<i class="iconfont icon-huodong"></i>'
					+'<span>活动管理</span>'
					+'<i class="iconfont icon-arrowdown-copy"></i>'
				+'</div>'
				+'<div class="menu-items">'
					+'<div class="item">'
						+'<p>首次关注送券</p>'
					+'</div>'
					+'<div class="item">'
					+'	<p>微信商品券</p>'
					+'</div>'
					+'<div class="item">'
					+'	<p>微信立减券</p>'
					+'</div>'
					+'<div class="item">'
					+'	<p>微信折扣券</p>'
					+'</div>'
				+'</div>'
			+'</li>'
			+'<li>'
				+'<div class="menu-bar">'
					+'<i class="iconfont icon-mimaguanli"></i>'
					+'<span>密码管理</span>'
					+'<i class="iconfont icon-arrowdown-copy"></i>'
				+'</div>'
				+'<div class="menu-items">'
					+'<div class="item">'
					+'	<p>修改密码</p>'
					+'</div>'
				+'</div>'
			+'</li>'
		+'</ul>';
	function show(config){
		$(app.config.appContainer).append('<div class="admin-app-menu">'+ $menuDOM +'</div>');
		var $menuBar = $('.menu-bar'),
			$menuItem = $('.item'),
			$lastmenuBar = null;
			
		$menuBar.click(function(e){
			var $menu = $(e.target).parents('li');
			var $items = $menu.find('.menu-items');
			var display = $items.css('display') === 'none'?'block':'none';
			$items.css('display',display);
			
			if(($lastmenuBar !== null) && ($lastmenuBar.get(0) !== $menu.get(0))){
				$lastmenuBar.find('.menu-items').css('display','none');
			}
			$lastmenuBar = $menu;
		})
		$menuItem.click(function(e){
			var $item = $(e.currentTarget);
			location.hash = $item.find('p').attr('data-href');
		})
	}
	
	return {show:show};
})()
