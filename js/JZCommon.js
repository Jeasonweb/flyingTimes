/***********************************************************************************
 ** 功能模塊描述:
 **=================================================================================
 ** 功能內容描述:
 ** 
 ** 聯繫方式：Jeason_zhang888@163.com      Tel:13641638693
 ** 修改時間：
 ** 加法函数，用来得到精确的加法结果
 ** 调用：
 ** 返回值：
 **=================================================================================
 ************************************************************************************/

var JZCommon = {
	//切换导航函数
	exchangeNavbar:function(){
		$('nav').on('click','li',function(e){
			e.preventDefault();
			var selectedIndex=$(this).index();
			$('nav li').eq(selectedIndex).addClass('active').siblings('.active').removeClass('active');
			
			location.href = $(this).find('a').attr('href');
		})		
	}	
}
JZCommon.exchangeNavbar();