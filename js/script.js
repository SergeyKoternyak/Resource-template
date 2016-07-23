$(function(){
	// Navigation mobile open/close
	$('.open-navigation-mobile').click(function(){
		$('.navigation-list').toggle()
	});

	// Partners list
	$(".tab-list-mode, .tab").click(function(){
		if(!$(this).hasClass('active')) {
			$(".tab-content").hide();
			$("#"+$(this).attr("data-name")).show();
			$($(this).hasClass('tab') ? '.tab' : '.tab-list-mode').removeClass("active");
			$(this).addClass("active");
			$($(this).hasClass('tab') ? '.tab-list-mode' : '.tab').removeClass("active");
			$(($(this).hasClass('tab') ? '.tab-list-mode' : '.tab') + "[data-name^='" + $(this).attr("data-name") + "']").addClass("active");
		}
	})
})