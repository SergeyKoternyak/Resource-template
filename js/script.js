$(function(){
	// Navigation mobile open/close
	$('.open-navigation-mobile').click(function(){
		$('.navigation-list').toggle()
	});

	// Top slider
	function getRandomNumber(min, max){
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	setInterval(function(){
		var el = $('.flipper')[getRandomNumber(0, 6)];

		if($(el).hasClass('is-show')){
			$(el).find('.front').css('background-image', 'url(styles/imgs/top-slide-' + getRandomNumber(0, 9) + '.png)');
		} else{
			$($(el).find('.back')).css('background-image', 'url(styles/imgs/top-slide-' + getRandomNumber(0, 9) + '.png)');
		}
		$(el).hasClass('is-show') ? $(el).removeClass('is-show') : $(el).addClass('is-show');
	}, 3000);

	// Partners list
	$(".tab-list-mode, .tab").click(function(){
		if(!$(this).hasClass('active')) {
			$(".tab-content").hide();
			$("#"+$(this).attr("data-name")).show();
			$($(this).hasClass('tab') ? '.tab' : '.tab-list-mode').removeClass("active");
			$(this).addClass("active");
			$($(this).hasClass('tab') ? '.tab-list-mode' : '.tab').removeClass("active");
			$(($(this).hasClass('tab') ? '.tab-list-mode' : '.tab') + "[data-name^='" + $(this).attr("data-name") + "']").addClass("active");
		} else{
			$(".tab-content").hide();
			$(".tab-list-mode, .tab").removeClass("active");
		}
	});

	// Round sliders
	function roundSlider(name) {
		var slideWidth = $(name+' .slide').width();
		var slideSum = $(name+' .slide').length;
		var $slideWrapper = $(name+' .slides-wrapper');

	// CSS slide-wrapper width
		$slideWrapper.width(slideSum*slideWidth);

	// Обработчики кнопок вперед/назад
		$(name+' .next').click(function(){
			if ($slideWrapper.is(':animated')==false){
				if (window.matchMedia("(max-width: 742px)").matches) {
					$slideWrapper.animate({'margin-left': -slideWidth}, function(){
						$slideWrapper.find('.slide:first').appendTo($slideWrapper).parent().css({'margin-left': 0});
					});
				} else{
					$slideWrapper.animate({'margin-top': -slideWidth}, function(){
						$slideWrapper.find('.slide:first').appendTo($slideWrapper).parent().css({'margin-top': 0});
					});
				}
			};
		});

		$(name+' .prev').click(function(){
			if ($slideWrapper.is(':animated')==false){
				if (window.matchMedia("(max-width: 742px)").matches) {
					$slideWrapper.find('.slide:last').prependTo($slideWrapper).parent().css({'margin-left': -slideWidth}).animate({'margin-left': 0});
				} else{
					$slideWrapper.find('.slide:last').prependTo($slideWrapper).parent().css({'margin-top': -slideWidth}).animate({'margin-top': 0});
				}
			}
		});
	}

	roundSlider('.first');
	roundSlider('.second');
})