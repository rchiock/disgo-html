$(document).ready(function(){

	/* Toggle animation Landing Page
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		var appPosX = $(".app-feature").offset().top;
		var adminPosX = $(".admin-feature").offset().top;
		if (sectionUp>=(appPosX-300)) {
			$(".app-feature .image-animate").animate({marginTop: '0', opacity: '1' },1000);
			$(".app-feature .info-text-2").delay(500).animate({marginTop: '0', opacity: '1' },1000);
			$(".app-feature .info-text-1").delay(1000).animate({marginTop: '0', opacity: '1' },1000);
			$(".app-feature .info-text-4").delay(1500).animate({marginTop: '0', opacity: '1' },1000);
			$(".app-feature .info-text-3").delay(2000).animate({marginTop: '0', opacity: '1' },1000);
		}
		if (sectionUp>=(adminPosX-300)) {
			$(".admin-feature .image-animate").animate({marginTop: '0', opacity: '1' },1000);
			$(".admin-feature .info-text-1").delay(500).animate({marginTop: '0', opacity: '1' },1000);
			$(".admin-feature .info-text-2").delay(1000).animate({marginTop: '0', opacity: '1' },1000);
			$(".admin-feature .info-text-3").delay(1500).animate({marginTop: '0', opacity: '1' },1000);
			$(".admin-feature .info-text-4").delay(2000).animate({marginTop: '0', opacity: '1' },1000);
		}
	})

});