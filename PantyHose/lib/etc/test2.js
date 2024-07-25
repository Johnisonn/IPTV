var rule = {
	title:'好趣网',
	编码:'GBK',//不填就默认utf-8
	搜索编码:'GBK',//不填则不编码，默认都是按utf-8.可优先于全局编码属性.比如网页源码编码是gbk,这里可以指定utf-8搜索独立编码。多数情况这个属性不填或者填写gbk应对特殊的网站搜索
	host:'http://tv.haoqu99.com',
	url: '/fyclass',
	searchUrl: '/e/sch/index.php?page=fypage&keyboard=**&sear=1',
	searchable:2,//是否启用全局搜索,
	quickSearch:0,//是否启用快速搜索,
	headers:{'User-Agent':'MOBILE_UA'},
	timeout:5000,//网站的全局请求超时,默认是3000毫秒
	class_name:'央视&卫视频道&河北',
	class_url:'1&2&3/hebei',
	play_parse:true,
	lazy:'js:input=input.replace("tv", "m")',
	limit:6,
	推荐: '.p-list-sya&&li;.s&&Text;img&&src;;a&&href',
	一级: '.bx-sya&&li;span&&Text;img&&src;;a&&href',
	二级: '*',
	//搜索: 'div.list-box.J-medal&&li;a&&Text;;;a&&href',
}

