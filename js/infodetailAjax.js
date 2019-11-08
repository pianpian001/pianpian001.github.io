(function(win, $) {
			$("#attachment").addClass("ewb-con-img");
			$(".l>a").click(function(){     
				if($(this).attr('id')=="bigger"){
					$('div.ewb-con-p').css("fontSize","22px");
					$(this).siblings().removeClass("cur").end().addClass("cur");
				}else if($(this).attr('id')=="medium"){
					$('div.ewb-con-p').css("fontSize","14px");
					$(this).siblings().removeClass("cur").end().addClass("cur");
				}else{
						$('div.ewb-con-p').css("fontSize","10px");
					$(this).siblings().removeClass("cur").end().addClass("cur");
				}
			});
			
           $(".ewb-con-list").addClass("hidden");

 
})(this, jQuery);
