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
var selectedIndex=0;
var bannerArr = ['img/localImg/banner01.jpg','img/localImg/banner02.jpg','img/localImg/banner03.jpg','img/localImg/banner04.jpg','img/localImg/banner05.jpg'];
var timer = null
var JZ = {
	
	timer:null,
	carousel:function(){
		
		var tempStr = '<ol>';
		
		for(var i=0;i<bannerArr.length;i++){
			
			if (selectedIndex == i) {
				tempStr += '<li class="active" style="background:url('+bannerArr[i]+') no-repeat center;background-size:100% 100%;"></li>';
			} else{
				tempStr += '<li style="background:url('+bannerArr[i]+') no-repeat center;background-size:100% 100%;"></li>';
			}		
			
		}
		
		$('#myCarousel').html(tempStr);
		tempStr = '';
		
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