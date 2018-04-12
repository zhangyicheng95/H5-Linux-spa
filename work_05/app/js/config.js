var app = {};
app.config = {
	'appContainer':'#admin-app',
	'panelContainer':'.admin-app-stage',
	'headerTitle':'匠人牛品管理后台',
	'headerLogo':'data:img/jpg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSgBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/AABEIACgAKAMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APqmgAoAKACgAoAwfGHiiz8K2CXd9Dcyoxx+6VQq+7yOVRByOWYZ7ZoAk8Ja8fEekx6gunXdlbzKrwGd4m85CMh1MbsMH3x69KAGa74t0TQr1bPUr5I7xrWW8W3UF5DFEpZ22gE4wD9cYGTQBW8UeMrDQPAcvixobq705IIrgJDHiRo5CoB2tjGAwJzggA0Aavh3V4de0Oy1W1iuIYLuISolxHscKemRQB5J8Rv+ElfxddWzf27HYiC4a1u9Ns3lWSOSOAC3LxqWjPmRSEsPmwRjqRQBi61qmoaF8PdH8G3w13TQ0atq2pMxurmOyXHnzJsMjIrOwRdwyq7sqNtAEvxD8MQaz4d1vW/C99Nq32yzZlubPUFi8q1itNqRO2Gkk3P5jbRtDFsP0zQB0GuaF4wF9oGgSQWF54cmgS3uEtrX/R4lVmDrIskhO0xsmGJc7ozgLuyACx8K7jxDZeJbnTNdUxQeU0VvFPchT5cLmNXit0hWONGwcfNkgAgEDNLmV+XqaKlNw9pbTY9ZpmYwQxCdphGnnMoQvtG4qCSBn05P50Ac1pPgDwto+qXGp6RodjY6jOSWuYIgrjPXaf4c98YzQBsjTnCOp1C9O7ody5X6fL/OgCnD4ejj1+HVWvLqWWO3+z7JCpVvmYhjgZyN7D6Go5Pe5jdV2qPsbdb36/1ojbqzAKACgAoAKAP/2Q=='
};
app.menuDate = [
	{
		'title':'门店管理',
		'icon':'icon-mendianguanli',
		'items':[
			{
				'title':'门店列表',
				'url':'#/store-list'
			}
		]
	
	},
	{
		'title':'活动管理',
		'icon':'icon-huodong',
		'items':[
			{
				'title':'首次关注送券',
				'url':'#/play-list'
			},
			{
				'title':'微信商品券',
				'url':'#/play-list'
			},
			{
				'title':'微信立减券',
				'url':'#/play-list'
			},
			{
				'title':'微信折扣券',
				'url':'#/play-list'
			}
		]
	},
	{
		'title':'密码管理',
		'icon':'icon-mimaguanli',
		'items':[
			{
				'title':'修改密码',
				'url':'#/change-password'
			}
		]
	}
];
app.isLogin = false;
