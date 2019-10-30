$(function() {
	var user = Cookies.get('_userName');
	var $menu = $('#menu');
	var menuMap = {
		test1: [{
			key: 'upload',
			name: '批量办卡文件上传',
			href: './upload.html'
		}, {
			key: 'progress',
			name: '批次进度查询',
			href: './progress.html'
		}],
		test2: [{
			key: 'dispatch',
			name: '批量办卡调件',
			href: './dispatch.html'
		}, {
			key: 'check',
			name: '扫描复核队列',
			href: './check.html'
		}, {
			key: 'query',
			name: '批次进度查询',
			href: './query.html'
		}]
	};
	var curMenu = menuMap[user || 'test1'];
	
	// 渲染菜单
	var html = [];
	curMenu.forEach(function(item) {
		html.push('<li class="menu-item" data-key="'+ item.key +'">\
				<a href="'+ item.href +'">'+ item.name +'</a>\
			</li>')
	});
	$menu.html(html.join(''));
	
	$menu.find('.menu-item[data-key='+ $menu.data('key') +']').addClass('active')
});