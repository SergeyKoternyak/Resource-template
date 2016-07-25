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

	// Certificate
	$('.certificate').click(function(){
		$('.certificate-zoom-box').show();
	});

	$('.certificate-zoom-box').click(function(){
		$(this).hide()
	});

	// Partners list
	$(".tab-content:first").show();

	$(".tab-list-mode, .tab").click(function(){
		if(!$(this).hasClass('active')) {
			$(".tab-content").hide();
			$("#"+$(this).attr("data-name")).show();
			$($(this).hasClass('tab') ? '.tab' : '.tab-list-mode').removeClass("active");
			$(this).addClass("active");
			$($(this).hasClass('tab') ? '.tab-list-mode' : '.tab').removeClass("active");
			$(($(this).hasClass('tab') ? '.tab-list-mode' : '.tab') + "[data-name^='" + $(this)
				.attr("data-name") + "']")
				.addClass("active");
		} else{
			$(".tab-content").hide();
			$(".tab-list-mode, .tab").removeClass("active");
		}
	});

	// Round sliders
	function roundSlider(name) {
		var slideWidth = $(name+' .slide').width();
		var $slideWrapper = $(name+' .slides-wrapper');

		$(name+' .next').click(function(){
			var marginSide = window.matchMedia("(max-width: 742px)").matches ? 'margin-left' : 'margin-top';

			if ($slideWrapper.is(':animated')==false){
				$slideWrapper.animate({[marginSide] : -slideWidth}, function(){
					$slideWrapper.find('.slide:first')
					.appendTo($slideWrapper)
					.parent()
					.css({[marginSide] : 0});
				});
			};
		});

		$(name+' .prev').click(function(){
			var marginSide = window.matchMedia("(max-width: 742px)").matches ? 'margin-left' : 'margin-top';

			if ($slideWrapper.is(':animated')==false){
				$slideWrapper.find('.slide:last')
				.prependTo($slideWrapper)
				.parent()
				.css({[marginSide] : -slideWidth})
				.animate({[marginSide] : 0});
			}
		});
	}

	roundSlider('.first');
	roundSlider('.second');
})