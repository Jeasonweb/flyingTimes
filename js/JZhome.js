/***********************************************************************************
 ** 功能模塊描述:首页js代码
 **=================================================================================
 ** 功能內容描述:
 ** 
 ** 聯繫方式：Jeason_zhang888@163.com      Tel:13641638693
 ** 修改時間：2017-4-5 10:18:44
 ** 加法函数，用来得到精确的加法结果
 ** 调用：
 ** 返回值：
 **=================================================================================
 ************************************************************************************/

//$('#myCarousel').carousel(2000);
var selectedIndex=0;

var bannerArr = ['img/home/banner1.jpg','img/home/banner2.jpg','img/home/banner3.jpg','img/home/banner4.jpg'];
var timer = null
var JZ = {
	
	timer:null,
	carousel:function(){
		
		
	
		var tempStr = '<ol>';
		
		for(var i=0;i<bannerArr.length;i++){
			
			if (selectedIndex == i) {
				tempStr += '<li class="active"><img src="' + bannerArr[i] + '" /></li>';
			} else{
				tempStr += '<li><img src="' + bannerArr[i] + '" /></li>';
			}		
			
		}
		
		$('#myCarousel').html(tempStr);		
		timer = setInterval(function(){
			
			++selectedIndex;
			
			selectedIndex %= bannerArr.length;
			
			$('#myCarousel li').eq(selectedIndex).addClass('active').siblings().removeClass('active');
			
		},2000);
		
		$('#myCarousel').on('mouseover','li',function(){
			
			selectedIndex = $(this).index();
			
			$('#myCarousel li').eq(selectedIndex).addClass('active').siblings().removeClass('active');
			clearInterval(timer);
			timer = null;
			
		});
		$('#myCarousel').on('mouseout','li',function(){
			timer = setInterval(function(){
			
			++selectedIndex;
			
			selectedIndex %= bannerArr.length;
			
			$('#myCarousel li').eq(selectedIndex).addClass('active').siblings().removeClass('active');
			
		},2000);
		
		});
		
		
		
	}	
	
}
JZ.carousel();

