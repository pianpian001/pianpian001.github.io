/**!
 * placeholder提示文字
 * author: wangkai;
 * date:2018-09-14
 */

// $.fn.placeholder = function(options) {

// 	var settings = {
// 		pebox: ".input-box", //提示文字label和input的共同父元素
// 		tip: ".input-placeholder" //提示文字label的样式
// 	}

// 	$.extend(settings, options);

// 	var $this = $(this),
// 		pebox = settings.pebox,
// 		tip = settings.tip;

// 	// 遍历input，有默认值的时，提示文字隐藏
// 	$this.each(function(index, el) {
// 		self.handleTip($(this), pebox, tip);
// 	});

// 	// 获得焦点
// 	$this.focus(function() {
// 		self.handleTip($(this), pebox, tip);
// 	});

// 	$this.change(function(event) {
// 		self.handleTip($(this), pebox, tip);
// 	});

// 	// 实时监听输入框
// 	$this.on('input propertychange', function(e) {
// 		// 解决 IE8下propertychange事件引发的栈溢出
// 		if ($.syncProcessSign) return;
// 		$.syncProcessSign = true;
// 		self.handleTip($(this), pebox, tip);
// 		$.syncProcessSign = false;
// 	});

// 	// IE9中，input propertychange，有bug，使用键盘松开事件
// 	if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
// 		if (parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) == 9) { //判断浏览器内核是否为Trident内核IE9
// 			// 键盘松开事件
// 			$this.keyup(function() {
// 				self.handleTip($(this), pebox, tip);
// 			});
// 		} else {
// 			return false;
// 		}
// 	}

// 	// 失去焦点
// 	$this.blur(function() {
// 		self.handleTip($(this), pebox, tip);
// 	});

// 	// 判读是否显示提示文字
// 	function handleTip(_this) {
// 		var val = _this.val();
// 		if (val != "") {
// 			_this.parent(pebox).find(tip).hide();
// 		} else {
// 			_this.parent(pebox).find(tip).show();
// 		}
// 	}

// 	function update() {
// 		$this.each(function(index, el) {
// 			self.handleTip($(this), pebox, tip);
// 		});
// 	}

// }

// 输入框提示文字
(function(win, $) {

	var defaultSettings = {
		dom: 'input', //input,或者input的class
		pebox: '.ewb-reg-node', //input直接父元素
		tip: '.input-placeholder' //提示文字label的样式
	};

	win.inputPlaceholder = function(opts) {
		this.cfg = $.extend({}, defaultSettings, opts);

		var self = this;
		this._initTips();
		this._updateTips();

		var obj = {};
		obj.init = function(){
			self._initTips();
		};
		obj.update = function(){
			self._updateTips();
		}

		return obj;

	};

	$.extend(inputPlaceholder.prototype, {

		_initTips: function() {

			var c = this.cfg,
				self = this;

			var $this = $(c.dom),
				pebox = c.pebox,
				tip = c.tip;

			// 遍历input，有默认值的时，提示文字隐藏
			$(document).ready(function($) {
				$this.each(function(index, el) {
					self.handleTip($(this), pebox, tip);
				});
			});

			// 获得焦点
			$this.focus(function() {
				self.handleTip($(this), pebox, tip);
			});

			$this.change(function(event) {
				self.handleTip($(this), pebox, tip);
			});

			// 实时监听输入框
			$this.on('input propertychange', function(e) {
				// 解决 IE8下propertychange事件引发的栈溢出
				if ($.syncProcessSign) return;
				$.syncProcessSign = true;
				self.handleTip($(this), pebox, tip);
				$.syncProcessSign = false;
			});

			// IE9中，input propertychange，有bug，使用键盘松开事件
			if (navigator.appName === 'Microsoft Internet Explorer') { //判断是否是IE浏览器
				if (parseInt(navigator.appVersion.split(";")[1].replace(/[ ]/g, "").replace("MSIE", "")) == 9) { //判断浏览器内核是否为Trident内核IE9
					// 键盘松开事件
					$this.keyup(function() {
						self.handleTip($(this), pebox, tip);
					});
				} else {
					return false;
				}
			}

			// 失去焦点
			$this.blur(function() {
				self.handleTip($(this), pebox, tip);
			});

		},
		_updateTips: function() {

			var c = this.cfg,
				self = this;

			var $this = $(c.dom),
				pebox = c.pebox,
				tip = c.tip;

			$this.each(function(index, el) {
				self.handleTip($(this), pebox, tip);
			});

		},
		handleTip: function(_this, pebox, tip) {

			var val = _this.val();
			if (val != "") {
				_this.parent(pebox).find(tip).hide();
			} else {
				_this.parent(pebox).find(tip).show();
			}

		}

	});


}(this, jQuery));