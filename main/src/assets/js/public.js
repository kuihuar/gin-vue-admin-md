// JavaScript Document

$(window).scroll(function() {
    if ($(this).scrollTop()>100){
        $("#gotop").removeClass("hide");
    }else{
        $("#gotop").addClass("hide");
    };
});
$('#gotop').click(function () {
    $('html,body').animate({
        scrollTop : '0px'
    }, 800);
}); 
AOS.init({
  disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 150, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});

$(function(){
	$("#miso_loading").fadeOut();
	
	$('.menu').on('click',function(){
	  $('.index').addClass('openMenu')
	})
	$('.nav_close').on('click',function(){
	  $('.index').removeClass('openMenu')
	})
	// 下拉导航栏目触控效果
	function navHover() {
	$('.nav-con .inav .li').hover(function () {
	  $('.nav-con .inav').attr('hov', $(this).data("li"));
	}, function () {
	  $('.nav-con .inav').attr('hov', "no");
	})
	}
	navHover();
	
	// //导航下拉
	// $('.nav').on('mouseenter','.nav_li',function(){
	//   $(this).addClass('active').siblings().removeClass('active');
	//   $(this).find('.dropdown').stop().fadeIn();
	//   $(this).siblings().find('.dropdown').stop().fadeOut()
	// })
	
	
	// $('.nav').mouseleave(function(){
	//   $('.nav .dropdown').stop().fadeOut();
	//   $('.nav .nav_li').removeClass('active');
	// })
	
	// $('.nav .dropdown .left ul li').mouseenter(function(){
	// $(this).addClass('cur').siblings().removeClass('cur')
	// })
	
	$(".ar_article table").wrap('<div class="scroll"></div>');//表格外添加div
	
	$('.tc_btn[name]').click(function() {
		var tf_name_id = $(this).attr('name');
		$('.tc[name=' + tf_name_id + ']').addClass('act');
	});
	$('.tc_close').click(function() {
		$(this).parents('.tc').removeClass('act');
	});
	$('.tc_bg').click(function() {
		$(this).parents('.tc').removeClass('act');
	});
	
	//移动端导航
	$(".list_box_nav_mobile>li i").click(function(){
	   $(this).parents(".list_box_nav_mobile>li").find(".list").slideToggle();
	   $(this).parents(".list_box_nav_mobile>li").toggleClass("on1");
	   $(this).parents(".list_box_nav_mobile>li").siblings().find(".list").slideUp();
	    $(this).parents(".list_box_nav_mobile>li").siblings().removeClass("on1");
	});
	/*$("#m_nav .sub").hide();
	$("#m_nav .void").click(functon(){
		$(this).children(".sub").slideToggle(); //展开
	});*/
	$("#nav_btn_box").click(function(){
	  $("#nav_btn_box .point").toggleClass("on"); 
	  $("#nav_btn_box").toggleClass("on"); 
	  $("#m_nav").toggleClass("act");
	  $(".nav_mask").fadeToggle();
	  $("body").toggleClass("navShow");
	});
	
	$(".nav_mask").click(function(){
	  $("#nav_btn_box .point").removeClass("on"); 
	  $("#nav_btn_box").removeClass("on"); 
	  $(this).fadeToggle();
	  $(".nav_btn_box").removeClass("act");
	  $("#m_nav").removeClass("act");
	})
	
	$("#m_nav .close").click(function(){
	  $("#nav_btn_box .point").removeClass("on"); 
	  $("#nav_btn_box").removeClass("on"); 
	  $(".nav_btn_box").removeClass("act");
	  $("#m_nav").removeClass("act");
	  $(".nav_mask").fadeOut();
	});
	
	//移动端内页导航
	$("#bnt_sub_nav").click(function(){
	$(this).toggleClass("on");
		$("#sub_nav_content").slideToggle();
	});
	
	$("#sub_nav_content dt.title a").attr("href","javascript:void(0)");
	$("#sub_nav_content dt.title_on").next("dd").show();
	$("#sub_nav_content dt.title").click(function() {
		if ($(this).hasClass("title_on")) {
			$(this).next("dd").slideToggle();
			$(this).removeClass("title_on");
		} else {
			$("#sub_nav_content dd").slideUp();
			$("#sub_nav_content dt.title").removeClass("title_on").removeClass("on");
			$(this).toggleClass("title_on");
			$(this).next("dd").slideDown();
		}
	});
	
	//IE9 兼容placdholder属性
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $("[placeholder]").each(function(){
            var _this = $(this);
           // console.log($(this).height());
            var inputHeight = parseInt(parseInt($(this).height()-2)-14)/2;
            var inputHeight = parseInt(parseInt(parseInt($(this).height()-2)/2)-7)+'px';
            _this.parent().css({"position": "relative"});
            var left = _this.position().left+parseInt(_this.css("padding-left"))+parseInt(_this.css("margin-left"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            _this.after('<span class="placeholder" data-type="placeholder" style="position: absolute;font-size:14px; top: '+ inputHeight +'; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            //_this.after('<span class="placeholder" data-type="placeholder" style="position: absolute; top: 0px; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        }).on("focus", function(){
            $(this).parent().find("span.placeholder").hide();
        }).on("blur", function(){
            var _this = $(this);
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function(){
            $(this).hide();
            $(this).siblings("[placeholder]").trigger("click");
            $(this).siblings("[placeholder]").trigger("focus");
        });
    }
	
	/*
	var banners=new Swiper('.slide-banners',{
		loop:true,
		speed:1000,
		spaceBetween:10,
		slidesPerView:3,
		loopedSlides:3,
		watchSlidesProgress:true,
		slideToClickedSlide:true,
	});
	var banner=new Swiper('.slide-banner',{
		speed:1000,
		loop:true,
		spaceBetween:0,
		loopedSlides:3,
		autoplay:{
			delay:6000,
			stopOnLastSlide:false,
			disableOnInteraction:false},
			pagination:{el:".banner .pagBa",clickable:!0,},
			navigation:{nextEl:'.banner .next',prevEl:'.banner .prev',
		},
	});
	
	$(".n_erji li").hover(function() {
		$(this).stop().addClass("on");
		$(this).siblings().stop().removeClass("on");
	}, function() {
		$(this).stop().removeClass("on");
		$(".n_erji li.on1").stop().addClass("on");
	});
	
	$('.banner_slider').on('afterChange',function(event, slick, currentSlide, nextSlide){
	    console.log(currentSlide);
		if (currentSlide == 0){
			  myVideo.play();
			  $('.banner_slider').slick('slickPause');
		}
		if (currentSlide != 0){
			   $('.banner_slider').slick('slickPlay');
		}
	})
	
	document.getElementById('myVideo').addEventListener('ended',myHandler,false);
	function myHandler(e) {
		$('.banner_slider').slick('slickPlay');
		$('.banner_slider').slick('slickGoTo', "1");
	}
	
	$('.banner_slider').slick({
		fade: true,
		autoplay: false,
		cssEase: 'linear',
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		revArrow:'<div class="miso-prev miso-arrow"><svg t="1648618762383" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="6140" width="36" height="36"><path d="M609.024 148.992L278.016 489.984a29.376 29.376 0 0 0-8.96 21.504c0 8.32 2.944 15.872 8.96 22.528l331.008 340.992a30.592 30.592 0 0 0 20.992 8 28.8 28.8 0 0 0 20.992-8.96 28.8 28.8 0 0 0 8.96-21.056 28.8 28.8 0 0 0-8.96-20.992L339.008 512l312-320a28.8 28.8 0 0 0 8.96-20.992 28.8 28.8 0 0 0-8.96-20.992 28.8 28.8 0 0 0-20.992-8.96 30.592 30.592 0 0 0-20.992 8z" p-id="6141"></path></svg></div>',
      nextArrow:'<div class="miso-next miso-arrow"><svg t="1648618783459" class="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" p-id="6294" width="36" height="36"><path d="M341.76 148.992a32.256 32.256 0 0 0-8.96 22.016 28.8 28.8 0 0 0 8.96 20.992l312.064 320-312 320a28.8 28.8 0 0 0 0 41.984 28.8 28.8 0 0 0 20.992 8.96 30.592 30.592 0 0 0 20.992-7.936l331.008-340.992a29.952 29.952 0 0 0 8.96-22.016 29.952 29.952 0 0 0-8.96-22.016L383.808 148.992a30.592 30.592 0 0 0-20.992-8 30.592 30.592 0 0 0-20.992 8z" p-id="6295"></path></svg></div>'
	});
	
	$('.container00 .miso_hd').miso({
	  autoplaySpeed: 6000,
	  autoplay: false,
	  speed: 300,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: false, 
	  dots:false, 
	  touchThreshold: 10,
	  pauseOnHover: false,
	  focusOnSelect: true,
	  asNavFor: '.container00 .miso_bd'
	});
	$('.container00 .miso_bd').miso({
	  autoplaySpeed: 6000,
	  autoplay: false,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false, 
	  dots:false, 
	  touchThreshold: 10,
	  pauseOnHover: false,
	  focusOnSelect: true,
	  asNavFor: '.container00 .miso_hd'
	});
	
	$('.container00 .miso_bd').miso({
		autoplay: false,
		fade: true
	});
	$('.container00 .miso_bd').on('beforeChange', function(event, miso, currentSlide, nextSlide){
		$(".container04 .tabs li").eq(nextSlide).addClass('active').siblings().removeClass('active');
	});
	$(".container00 .tabs li").on('click',function(e){
		e.preventDefault();
		$(this).addClass('active').siblings().removeClass('active');
		$('.container04 .miso_bd').miso('misoGoTo',$(this).index());
		
		$('.container04 .miso_bd1 .li').eq($(this).index()).addClass('active').siblings().removeClass('active');
	});
	
	$('.container00 .miso_hd').miso({
		autoplay: false,
		slidesToShow: 3,
		speed:300,
		waitForAnimate: false,
		asNavFor: '.container00 .miso_bd',
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
	    },
	    {
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
	    }]
	});
	$('.container00 .miso_bd').miso({
		autoplay: false,
		fade:true,
		speed:300,
		waitForAnimate: false,
		asNavFor: '.container00 .miso_hd'
	});
	
	$('.container00 .arrow1_box .miso-prev1').click(function () { 
		$('.container00 .miso_hd').miso("prev")
	});
	$('.container00 .arrow1_box .miso-next1').click(function () { 
		$('.container00 .miso_hd').miso("next")
	});
	
	$(".miso_hd li").click(function () {
		$(this).addClass("on");
		$(this).siblings().removeClass("on");
		$(".miso_bd li").hide().eq($(".miso_hd li").index(this)).show();
	})
	
	//
	$('.container00 .miso_bd').miso({
		autoplay: false,
		fade: true,
		swipe: false,
		onAfterChange: function(e){
			e.preventDefault();
			$(".container00 .tabs .active").removeClass('active');
			$(".container00 .tabs li").eq(currentSlide).addClass('active');
		}
	});
	$(".container00 .tabs li").on('click',function(e){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		$('.container00 .miso_bd').miso('misoGoTo',$(this).index());
	});
	$(".list_box_00").miso({
		autoplay: false,
		rows:2,
		slidesPerRow:6,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesPerRow:4,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesPerRow:3
			}
		}]
	})
	
	var smVideo = {
		load: function (objs) {
			var objplay = jwplayer(objs.vcontainer).setup({
				html5player: '/static/style/pc/js/video/html5player.js',
				file: objs.vfiles,
				image: objs.vfimg,
				width: '100%',
				height: '100%',
				aspectratio: '16:9',
				stretching: 'fill',
				controls: 'true',
				autostart: objs.isautoplay
			});
			return objplay;
		}
	}
	$('').click(function () { 
		smVideo.load({
            vcontainer: 'videobox',  //视频容器
            vfiles:  jQuery(this).attr("data-video"), //视频地址
            vfimg: jQuery(this).attr("data-img"), //视频缩略图(封面)
            isautoplay: 'true'
        });
	    $(".vwrap").fadeIn();
	});
	
	$(".vwrap .close").click(function () { 
		$(".vwrap").hide();
        $('#videobox').html("");
	});*/
});