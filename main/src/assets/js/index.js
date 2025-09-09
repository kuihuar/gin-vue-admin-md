$(function(){
	function detectBrowser () {
		var agent = navigator.userAgent.toLowerCase(); 
		var browser; 
		
		if ( (agent.indexOf('msie') > -1) || (agent.indexOf('trident') > -1) || (agent.indexOf('edge') > -1) ) { 
			browser = 'ie'
		}else if(agent.indexOf('firefox') > -1) { 
			browser = 'firefox' 
		}else if(agent.indexOf('opr') > -1) { 
			browser = 'opera' 
		}else if(agent.indexOf('chrome') > -1) { 
			browser = 'chrome' 
		}else if(agent.indexOf('safari') > -1) { 
			browser = 'safari'
		}
	
		return browser;
	}
	
	var $mainVisual = $(".main-visual-slider");
	var $mainVisualItem = $mainVisual.find(".main-visual-item");
	var $mainLoadingBar = $mainVisual.find(".main-visual-loading-bar > span");
	var $mainCounter = $mainVisual.find(".main-visual-conuter");
	var mainVisualLength = $mainVisualItem.length;
	
	if ( detectBrowser () === "ie" ) {
		$(".main-visual-slider .overlay").remove();
	}
	
	var interleaveOffset = .85;
	var autoPlaySpeed = 4000;
	var swiperOptions = {
		loop: true,
		speed: 1200,
		parallax: false,
		draggable: false,
		autoplay: {
			delay: autoPlaySpeed,
			disableOnInteraction: false 
		},
		allowTouchMove:false,
		watchSlidesProgress: true,
		pagination: {
			el: '.main-visual-pagination',
			clickable: true,
			renderBullet: function (index, className) {
			  return '<div class="main-visual-paging-item '+className+'"><span><img src="'+ $mainVisualItem.eq(index).find('.visual-img').data('img-src') + '" alt="Main Visual '+index+'"/></span></div>';
			}
		},
		navigation: {
			nextEl: '.main-visual-slider .slide-next-btn',
			prevEl: '.main-visual-slider .slide-prev-btn'
		},
		on: {
			init : function  () {
				$mainCounter.find(".total-num").text("0"+ mainVisualLength);
			},
			progress: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					var slideProgress = swiper.slides[i].progress;
					var innerOffset = swiper.width * interleaveOffset;
					var innerTranslate = slideProgress * innerOffset;
					/* swiper.slides[i].querySelector(".slide-inner").style.transform =
					"translate3d(" + innerTranslate + "px, 0, 0)"; */
					if ( detectBrowser () !== "ie" ) {
						TweenMax.set(swiper.slides[i].querySelector(".slide-inner"), {
							x: innerTranslate,
						});
					}
				} 
			},
			slideChange : function  () {
			},
			slideChangeTransitionStart : function(){
				var cur_idx = $(this.slides[this.activeIndex]).data("swiper-slide-index");
				
				// Zoom in
				$mainVisualImage = $(".swiper-slide-active").find(".visual-img");
				TweenMax.killTweensOf($mainVisualImage);
				TweenMax.fromTo($mainVisualImage, 2, { transform: "scale(1.4)" }, {transform: "scale(1) rotate(0.002deg)",force3D: true,ease: Circ.easeOut,delay: 0});
		
				// Counter
				$mainCounter.find(".cur-num").text("0"+(cur_idx+1));
	
				// Loading Motion
				TweenMax.killTweensOf($mainLoadingBar);
				TweenMax.set($mainLoadingBar, { width: "0%" });
				TweenMax.to($mainLoadingBar, autoPlaySpeed / 1000, { width: "100%" });
	
				// Text Motion
				$mainVisualText1 = $(".swiper-slide-active").find(".main-visual-tit span");
				$mainVisualText2 = $(".swiper-slide-active").find(".main-visual-txt span");
				$mainVisualButton = $(".swiper-slide-active").find(".main-visual-btn");
				TweenMax.fromTo($mainVisualText1, 1, {transform: "translateY(100%)",autoAlpha: 0}, {transform: "translateY(0%)",autoAlpha: 1,force3D: true,ease: Circ.easeOut,delay: 0.3});
				TweenMax.fromTo($mainVisualText2, 1, {transform: "translateY(100%)",autoAlpha: 0}, {transform: "translateY(0%)",autoAlpha: 1,force3D: true,ease: Circ.easeOut,delay: 0.7});
				TweenMax.fromTo($mainVisualButton, 0.5, {transform: "translateY(100%)",autoAlpha: 0}, {transform: "translateY(0%)",autoAlpha: 1,force3D: true,ease: Circ.easeOut,delay: 1});
				
				
				if($(".main-visual-slider.ar_web .swiper-slide-active video").length>0){
					// 停止自动切换
					// swiper.autoplay.stop();
					// 动态增加id
					
					swiper.autoplay.stop();
					$(".main-visual-slider.ar_web .swiper-slide-active video").attr("id","video_01");
					setTimeout(function(){
						var _video = document.querySelector('.main-visual-slider.ar_web .swiper-slide-active video');
						// 播放视频
						_video.play();
						// 切换后重新播放视频
						_video.currentTime = 0;
						// 静音
						_video.volume = 0;
						// 监听视频播放结束
						_video.addEventListener('ended', function () {  
							swiper.slideNext();
							//重新开始轮播banner
							swiper.autoplay.start();
						});
					}, 100);
				}
			},
			touchStart: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					swiper.slides[i].style.transition = "";
				}
			},
			setTransition: function (speed) {
				var swiper = this;
				if ( detectBrowser () !== "ie") {
					for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = speed + "ms";
						swiper.slides[i].querySelector(".slide-inner").style.transition =
						speed + "ms";
					}
				}
			},
			slideChangeTransitionEnd: function(swiper){
				//动态移除id
				$(".main-visual-slider .swiper-slide-active video").attr("id","");
			},
		} 
	};
	
	var swiper = new Swiper(".main-visual-slider .swiper-container", swiperOptions);
	if ($(window).width() < 1200) {
		$(".main-visual-slider .swiper-slide-video").remove(); 
	}
	
	
	
	var swiper1 = new Swiper('.list1_box', {
		speed: 1000,
		loop: true,
		spaceBetween: 0,
		roundLength: true,
		autoplay: { delay: 6000, stopOnLastSlide: false, disableOnInteraction: false, },
		direction: 'vertical',
	});
	$('.inotice_list_con .arr_prev').click(function(){
	    swiper1.slidePrev();
	})
	$('.inotice_list_con .arr_next').click(function(){
	    swiper1.slideNext();
	})
	
	var swiper2 = new Swiper('.list2_box', {
		speed: 1000,
		loop: true,
		spaceBetween: 0,
		roundLength: true,
		autoplay: { delay: 6000, stopOnLastSlide: false, disableOnInteraction: false, },
	});
	
	$(".list7 li:first-child").addClass("on");
	$(".list8 li").hide()
	$(".zhicheng_box .content").each(function () {
		var hd1 = $(this).find('.list7 li');
		var bd1 = $(this).find('.list8 li');
		bd1.eq(0).show();
		hd1.hover(function () {
		  var index = $(this).index();
		  hd1.eq(index).addClass("on").siblings().removeClass("on");
		  bd1.eq(index).show().siblings().hide();
		})
	});
	
	$(".home3_tit3").click(function(){
		$(".zhicheng_box").removeClass("active");
	});
	$(".home3_tit6").click(function(){
		$(".zhicheng_box").addClass("active");
	});
	
	$(".misoTab .hd ul li:first-child").addClass("on");
	$(".misoTab .bd .bd_li").hide()
	$(".misoTab").each(function () {
		var hd1 = $(this).find('.hd ul li');
		var bd1 = $(this).find('.bd .bd_li');
		bd1.eq(0).show();
		hd1.click(function () {
		  var index = $(this).index();
		  hd1.eq(index).addClass("on").siblings().removeClass("on");
		  bd1.eq(index).show().siblings().hide();
		})
	});
	
	var swiper3 = new Swiper('.list9_box', {
		speed: 1000,
		spaceBetween: 20,
		roundLength: true,
		//autoplay: { delay: 6000, stopOnLastSlide: false, disableOnInteraction: false, },
		// navigation: { nextEl: '.slide-bb  .next', prevEl: '.slide-bb  .prev', },
		// pagination: { el: '.slideTab-b .swidotb', clickable: true, bulletActiveClass: 'active',type : 'progressbar' },
		breakpoints: {
			280: { slidesPerView: 2, spaceBetween: 0 },
			900: { slidesPerView: 3, spaceBetween: 20 },
			1280: { slidesPerView: 4, spaceBetween:20},
		}
	});
	$('.miso_btn1 .prev').click(function(){
	    swiper3.slidePrev();
	})
	$('.miso_btn1 .next').click(function(){
	    swiper3.slideNext();
	})
	
	$(".list10 li:first-child").addClass("on");
	$(".list11 li").hide()
	$(".home4 .content2").each(function () {
		var hd1 = $(this).find('.list10 li');
		var bd1 = $(this).find('.list11 li');
		bd1.eq(0).show();
		hd1.hover(function () {
		  var index = $(this).index();
		  hd1.eq(index).addClass("on").siblings().removeClass("on");
		  bd1.eq(index).show().siblings().hide();
		})
	});
	
	var swiper4 = new Swiper('.list16_box', {
		speed: 1000,
		loop: true,
		spaceBetween: 66,
		roundLength: true,
		autoplay: { delay: 6000, stopOnLastSlide: false, disableOnInteraction: false, },
		// navigation: { nextEl: '.slide-bb  .next', prevEl: '.slide-bb  .prev', },
		// pagination: { el: '.slideTab-b .swidotb', clickable: true, bulletActiveClass: 'active',type : 'progressbar' },
		breakpoints: {
			280: { slidesPerView: 2, spaceBetween: 14 },
			900: { slidesPerView: 3, spaceBetween: 20 },
			1280: { slidesPerView: 3, spaceBetween: 30},
		}
	});
	$('.miso_btn2 .prev').click(function(){
	    swiper4.slidePrev();
	})
	$('.miso_btn2 .next').click(function(){
	    swiper4.slideNext();
	})
});