	/*动态生成树状菜单*/
	function produce(target,data,flag){
		var $sidebar = target;
		var ranNumber = Math.floor(Math.random()*100);
		if(data.length>0){
			if(flag){
				$sidebar.append("<ul class='ul_"+ranNumber+"'></ul>");
			}else{
				$sidebar.append("<ul class='sub-menu ul_"+ranNumber+"'></ul>");
			}
			for(var o in data){
					$(".ul_"+ranNumber).append("<li class='li_"+data[o].id+"'></li>");
						if(data[o].url==null){
							$(".li_"+data[o].id).append("<a href='javascript:void(0);' class='a_"+data[o].id+"'>");
						}else{
							$(".li_"+data[o].id).append("<a href='"+data[o].url+"' class='a_"+data[o].id+"'>");
						}
						$(".a_"+data[o].id).append("<i class='"+data[o].icon+"'></i>&nbsp;"+data[o].name);
						if(data[o].children.length==0){
							$(".a_"+data[o].id).append("<i class='fa fa-angle-right'></i>");
						}
					$(".li_"+data[o].id).append("</a><span class='hover'></span>");
						if(data[o].children.length>0){
							produce($(".li_"+data[o].id),data[o].children,false);
						}
			}
		}
	}
	
$(function(){
	/*动态绑定事件*/
	$( ".sidebar li").on({
		mouseenter:function(){
		    $(this).find("a").css("color","white");
		    $(this).find("span").stop().animate({
		    width:"100%",
		    opacity:"0.7",
		  }, 600, function () {
		      // Animation complete.
		      // Show Navigation
		  });
		},
		mouseleave:function(){
			 $(this).find("a").css("color","#919DB1");
			    $(this).find("span").stop().animate({
			    width:"0%",
			    opacity:"0",
			  }, 600, function () {
			      // Animation complete.
			      // Show Navigation
			  });  
		}
	});
});


/*移入移出*/
var flag = true;
var $weapon = $(".weapon");
$weapon.click(
	function() {
		if(flag){
			$(".sidebar").css({
		    	"width":"0",
		    });
			$weapon.removeClass("fa fa-angle-double-left"); 
			$weapon.addClass("fa fa-angle-double-right");
			$(".sidebar *").not(".weapon").css({
				"transition": "opacity 1s",
				"-moz-transition": "opacity 1s", /* Firefox 4 */
				"-webkit-transition": "opacity 1s", /* Safari 和 Chrome */
				"-o-transition": "opacity 1s", /* Opera */
				"opacity":0,
			});
			flag=false;
		}else{
			$(".sidebar").css({
		    	"width":"250px",
		    });
			$weapon.removeClass("fa fa-angle-double-right"); 
			$weapon.addClass("fa fa-angle-double-left");
			$(".sidebar *").css({
				"transition": "opacity 0.5s",
				"-moz-transition": "opacity 0.5s", /* Firefox 4 */
				"-webkit-transition": "opacity 0.5s", /* Safari 和 Chrome */
				"-o-transition": "opacity 0.5s", /* Opera */
				"opacity":1,
			});
			flag=true;
		}
	    
	}
);