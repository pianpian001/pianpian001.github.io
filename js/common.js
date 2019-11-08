 /* 公共交互 */

 // 工具方法(针对前后端分离,如不是需删除)
 (function(win, $) {
     if (!window.Util) {
         window.Util = {};
     }
     /*
      * 序列化表单元素，区别于jQuery 的serialize和serializeArray方法
      */
     $.fn.serializeObject = function() {
         var o = {};
         var a = this.serializeArray();
         $.each(a, function() {
             if (o[this.name]) {
                 if (!o[this.name].push) {
                     o[this.name] = [o[this.name]];
                 }
                 o[this.name].push(this.value || '');
             } else {
                 o[this.name] = this.value || '';
             }
         });
         return o;
     };
     $.extend(Util, {
         /* 获取URL地址参数
          * prop:参数名
          */
         getUrlParams: function(prop) {
             var params = {},
                 query = location.search.substring(1),
                 arr = query.split('&'),
                 rt;

             $.each(arr, function(i, item) {
                 var tmp = item.split('='),
                     key = tmp[0],
                     val = tmp[1];

                 if (typeof params[key] == 'undefined') {
                     params[key] = val;
                 } else if (typeof params[key] == 'string') {
                     params[key] = [params[key], val];
                 } else {
                     params[key].push(val);
                 }
             });
             rt = prop ? params[prop] : params;
             return rt;
         },

         // 适配f9中的response格式
         ajax: function(options) {
             options = $.extend({}, {
                 type: 'POST',
                 dataType: 'json',
                 dataFilter: function(data, type) {
                     if (type == 'json') {
                         data = JSON.parse(data);

                         // TODO: 这里可以对data做些统一处理，权限处理等

                         data = data;

                         if (typeof data == 'object') {
                             data = JSON.stringify(data);
                         }

                     }

                     return data;
                 },
                 error: Util._ajaxErr
             }, options);

             //options.url = SrcBoot.getPath(options.url);

             return $.ajax(options);
         },

         //ploceholder
         placeholder: function() {
             // console.log("placeholder加载了");
             if (!('placeholder' in document.createElement('input'))) {
                 $('input[placeholder],textarea[placeholder]').each(function() {
                     var that = $(this),
                         text = that.attr('placeholder');
                     if (that.val() === "") {
                         that.val(text).addClass('placeholder');
                     }
                     that.focus(function() {
                             if (that.val() === text) {
                                 that.val("").removeClass('placeholder');
                             }
                         })
                         .blur(function() {
                             if (that.val() === "") {
                                 that.val(text).addClass('placeholder');
                             }
                         })
                 });
             }
         },

         // empty function
         noop: function() {},

         _ajaxErr: function(jqXHR, textStatus, errorThrown) {
             console.error('status: %s, error: %s', textStatus, errorThrown);
         }


     });

     /*
      * 动态加载CSSJS使用示例
      */
     //  Util.loadCss("css/grid.20.980.css"/*tpa=http://www.hebpr.cn/hbjyzx/js/css/grid.20.980.css*/);
     //  Util.loadJs('js/lib/jquery.cookie.js'/*tpa=http://www.hebpr.cn/hbjyzx/js/js/lib/jquery.cookie.js*/, function() {
     //      console.log("回调函数");
     //  });

 }(this, jQuery));

 // 加载头尾代码片段
 (function(win, $) {

     var Include = function(cfg) {
         this.cfg = cfg;

         this._init();
     };

     Include.prototype = {
         constructor: Include,

         _init: function() {
             var c = this.cfg;

             if (c.async !== false) c.async = true;

             this.$container = $('#' + c.id);
         },

         fetch: function() {
             var c = this.cfg,
                 self = this;

             return $.ajax({
                 url: c.src,
                 type: 'GET',
                 dataType: 'html',
                 async: c.async,
                 success: function(html) {
                     self.$container.html(html);

                     c.onload && c.onload(html);
                 }
             });
         }
     };

     // 需要引入的代码片段
     var includes = [{
         id: 'header',
         src: 'http://www.hebpr.cn/hbjyzx/header.inc.html',
         onload: function() {
			 
			 /* 机器人隐藏 */
			 $('a.ewb-robot.visible-desktop').addClass('hidden')

				//load weather
				// $("#head_wea").attr("src","http://tianqi.eastday.com/plugin/widget_v1.html?sc=3&z=1&t=1&v=0&d=1&bd=0&k=&f=&q=1&a=1&c=54511&w=317&h=28&align=left");
				
			 
			  var is_iPd = navigator.userAgent.match(/(iPad|iPod|iPhone)/i) !== null;
            var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) !== null;
            if (is_iPd || is_mobi) {
				
		     //	
			  if($(".ewb-local a").length>1){
			 var $a = $(".ewb-local a").eq(1);
			 var content = $a.html().replace(/\s+/g,"");
			 // console.log(content);
			 // /sjdsy/014001/phoneTradingHall.html
			 switch (content){
				 case "交易大厅":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014001/phoneTradingHall.html');
				 break;
				 
				 case "新闻综合":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014002/phoneNewsIntegrated.html');
				 break;
				 
				 case "党建之窗":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014003/phonePartyBuilding.html');
				 break;
				 
				 case "政务公开":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014004/phoneOpenGovernment.html');
				 break;
				 
				 case "政策法规":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014005/phonePoliciesRegulations.html');
				 break;
				 
				 case "办事指南":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014006/phoneGuidance.html');
				 break;
				 
				 case "互动交流":
				 $a.attr('href','http://www.hebpr.cn/hbjyzx/sjdsy/014007/phoneInteractive.html');
				 break;
									}
			  }
			}else{
				
				
							 //对一些当前位置进行处理
			 if($(".ewb-local a").length>2){
			var thrid_link = $(".ewb-local a").eq(2).attr("href").split("/");
			if(thrid_link.length>2){
				var index = thrid_link[3].charAt(2);
				if(index=="e"){
					index=7;
				}
				var link = "/hbjyzx/index.html?indexL="+index;
				$(".ewb-local a").eq(1).attr("href",link);	
			}
			if(thrid_link[3]=="001002"){
				//var index = thrid_link[2].charAt(2);
				var link = "http://www.hebpr.cn/hbjyzx/jydt/001002/001002001/subNoticeGov.html";
				$(".ewb-local a").eq(2).attr("href",link);	
			}
			if(thrid_link[3]=="001001"){
				//var index = thrid_link[2].charAt(2);
				var link = "http://www.hebpr.cn/hbjyzx/jydt/001001/001001001/todayTrading.html";
				$(".ewb-local a").eq(2).attr("href",link);	
			}
			 }
				
				
				
				
				
			}
			 
			 
			 
			 
			 
            var inputTips = new inputPlaceholder({
                dom: '.ewb-reg-txt', //input,或者input的class
                pebox: '.ewb-reg-node', //input直接父元素
                tip: '.input-placeholder' //提示文字label的样式
            });
           // $(".ewb-ft-select").chosen({disable_search_threshold: 10});
			    //点击logo切换引导页
				$("#guidePage").on('click',function(event) {
				     window.location.href="http://www.hebpr.cn/hbjyzx";
				});
				 var date = new Date();
				var year = date.getFullYear();
				var month = date.getMonth()+1;
				var day = date.getDate();
				$(".timer_lw").html(year+"年"+month+"月"+day+"日");
				            var inputTips = new inputPlaceholder({
                dom: '.ewb-reg-txt', //input,或者input的class
                pebox: '.ewb-reg-node', //input直接父元素
                tip: '.input-placeholder' //提示文字label的样式
            });
         
            // 移动设备禁止跳转
            var is_iPd = navigator.userAgent.match(/(iPad|iPod|iPhone)/i) !== null;
            var is_mobi = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|win ce)/i) !== null;
            if (is_iPd || is_mobi) {
                $(".ewb-phone-user").on('click', function(event) {
                    if($(this).hasClass('cur')){
                        $(this).removeClass('cur');
                        $(".ewb-phone-user-con").slideUp();
                    } else {
                        $(this).addClass('cur');
                        $(".ewb-phone-user-con").slideDown();
                    }
                });
                $("#right").on('click',function(event) {
                    $(".ewb-phone-nav-con1").hide();
                    $(".ewb-phone-nav-con2").show();
                });
                $("#left").on('click',function(event) {
                    $(".ewb-phone-nav-con2").hide();
                    $(".ewb-phone-nav-con1").show();
                });
                var name = window.location.pathname;
                var len = name.split("/").length;
                name = name.split("/")[len-1].split(".")[0];
                switch (name){
                    case "phoneTradingHall":
                        $(".ewb-phone-nav-con1 li").eq(0).addClass('cur')
                        break;
                    case "phoneNewsIntegrated":
                        $(".ewb-phone-nav-con1 li").eq(1).addClass('cur')
                        break;
                    case "phonePartyBuilding":
                        $(".ewb-phone-nav-con1 li").eq(2).addClass('cur')
                        break;
                    case "phoneOpenGovernment":
                        $(".ewb-phone-nav-con1 li").eq(3).addClass('cur')
                        break;
                    case "phonePoliciesRegulations":
                        $(".ewb-phone-nav-con1").hide();
                        $(".ewb-phone-nav-con2").show();
                        $(".ewb-phone-nav-con2 li").eq(1).addClass('cur')
                        break;
                    case "phoneGuidance":
                        $(".ewb-phone-nav-con1").hide();
                        $(".ewb-phone-nav-con2").show();
                        $(".ewb-phone-nav-con2 li").eq(2).addClass('cur')
                        break;
                    case "phoneInteractive":
                        $(".ewb-phone-nav-con1").hide();
                        $(".ewb-phone-nav-con2").show();
                        $(".ewb-phone-nav-con2 li").eq(3).addClass('cur')
                        break;
                }
            }

			//绑定全局函数
			serarchDesktop();
			//
			trgSerarchDesktop()
			serarchpPhone();
			
			
         }
     }, {
         id: 'footer',
         src: 'http://www.hebpr.cn/hbjyzx/footer.inc.html',
         onload: function() {
			  $(".ewb-ft-select").chosen({disable_search_threshold:10});
			  //
			   $(".ewb-ft-sel").css("background-image","url('../images/yami.png'/*tpa=http://www.hebpr.cn/hbjyzx/images/yami.png*/)");
			  
         }
     }];

     $.each(includes, function(i, cfg) {
         if ($('#' + cfg.id).length) {
             new Include(cfg).fetch();
         }
     });
	 
	 
	 
	 

	 
	 

 }(this, jQuery));
	//非首页使用
	//绑定全局函数
	serarchpPhone();
 	
	 //全局函数  引导页 搜索跳转用
	function  serarchpGuid(){
		 $("#search_guid").on('click',function(){
			var title =	$("#username1").val();
			if(title==""){
				window.alert("请输入标题");
				return false;
			}else{
				var urlTemp = "/hbjyzx/search/fullsearch.html?wd="+title;
				window.open(urlTemp,'_blank');
				
			}
		 });
	}
	//引导页的触发函数 
	function trgSerarchpGuid(){ 
		 //引导页面的输入
		$("#username1").keypress(function (e) {
			if (e.which == 13) {
			$("#search_guid").trigger("click");
			 }
		});
	}
	 
	 
	//全局函数  电脑端头部跳转用
	function  serarchDesktop(){
	 $("#username_button").on('click',function(){
		var title =	$("#username").val();
		if(title==""){
			window.alert("请输入标题");
			return false;
		}else{
			var urlTemp = "/hbjyzx/search/fullsearch.html?wd="+title;
			window.open(urlTemp,'_blank');
			
		}
	 });
	}
	//头部搜索
	// 引导页的触发函数 
	function trgSerarchDesktop(){ 
		 //引导页面的输入
		$("#username").keypress(function (e) {
			if (e.which == 13) {
			$("#username_button").trigger("click");
			 }
		});
	}
	
	
	
	
	

 
 
 
	  //全局函数  手机端 搜索跳转用
	 function  serarchpPhone(){
		 $("#name_botton").on('click',function(){
			var title =	$("#name").val();
			if(title==""){
				window.alert("请输入标题");
				return false;
			}else{
				var urlTemp = "/hbjyzx/search/fullsearch.html?wd="+title;
				window.open(urlTemp,'_blank');
				
			}
		 });
	 }
 
 
	 	 //增加a 标签的title

	 $('a').each(function(){
		 
		 var title = $(this).html().replace(/(^\s*)|(\s*$)/g, "");
		 
		if(title.indexOf("<")<=-1){
		$(this).attr("title",title);
		}else{
			
		}
		
	 });
	 
	 
	 
	 //处理国际招标的连接 wb-tree
	 $(".ewb-local a").each(function(){
		 if($(this).html().indexOf("国际招标")>-1){
			 $(this).attr("href","http://www.hebpr.cn/hbjyzx/jydt/001002/001002005/001002005001/subNoticeGovGJzb.html");
		 }
	 });
	 
	 	 $(".wb-tree a").each(function(){
		 if($(this).html().indexOf("国际招标")>-1){
			 $(this).attr("href","http://www.hebpr.cn/hbjyzx/jydt/001002/001002005/001002005001/subNoticeGovGJzb.html");
		 }
	 });
	 
	 		

 
 