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
		
		
		
	},
	
	appendDesition:function(){
		
		$.ajax({
			type:"get",
			url:"source/desition.json",
			async:true,
			success:function(jsonData){
				if(jsonData.resultStatus=='ok'){
					var desitionArr = jsonData.data.desition;
					var desitionCount = desitionArr.length;
					var airArr = jsonData.data.air;
					var airCount = airArr.length;
					
					var depArr = jsonData.data.departure;
					var depCount = depArr.length;
					
					var tempStr = '';
					if(desitionCount){
						 tempStr += '<div class="desition"><h2>目的地参团</h2>';
						for(var i=0;i<desitionCount;i++){
							var desition=desitionArr[i];
							tempStr +='<dl data-value="'+desition.cid
							+'"><dt><img src="'+desition.imgUrl
							+'"/></dt><dd>'+desition.title
							+'</dd><dd class="price">出发地:<span>'+desition.startPlace
							+'</span> <i>&yen;<b>'+desition.price
							+'</b>起</i></dd></dl>';
							
							
						}
						tempStr +='</div>';						
						
					}
					if(airCount){
						 tempStr += '<div class="desition"><h2>机票+目的地参团</h2>';
						for(var i=0;i<airCount;i++){
							var air=airArr[i];
							tempStr +='<dl data-value="'+air.cid
							+'"><dt><img src="'+air.imgUrl
							+'"/></dt><dd>'+air.title
							+'</dd><dd class="price">出发地:<span>'+air.startPlace
							+'</span> <i>&yen;<b>'+air.price
							+'</b>起</i></dd></dl>';		
							
						}
						tempStr +='</div>';			
						
					}
					if(depCount){
						tempStr += '<div class="desition"><h2>出发地参团</h2>';
						for(var i=0;i<depCount;i++){
							var dep=depArr[i];
							tempStr +='<dl data-value="'+dep.cid
							+'"><dt><img src="'+dep.imgUrl
							+'"/></dt><dd>'+dep.title
							+'</dd><dd class="price">出发地:<span>'+dep.startPlace
							+'</span> <i>&yen;<b>'+dep.price
							+'</b>起</i></dd></dl>';		
							
						}
						tempStr +='</div>';
						
						
					}
					
					$('.desitionContainer').html(tempStr);
					
					
						
					
				}	
				
			},
			error:function(){
				alert('网络出错');
			}
		});
		
	},
	producedOtherService:function(){
		
		
		
	}
	
	
}


JZ.carousel();


$('document').ready(function(){
	
	JZ.appendDesition();
	
	
});

