$(document).ready(function(){

	/* Toggle animation About Admin Page
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		var adminFunctionsX = $(".about-functions").offset().top;
		var adminInstructiveX = $(".about-instructive").offset().top;
		if (sectionUp>=(adminFunctionsX-300)) {
			$(".about-functions img").animate({marginRight: '0', opacity: '1' },1000);
			$(".about-functions h2").delay(500).animate({marginTop: '0', opacity: '1' },1000);
			$(".about-functions p").delay(1000).animate({marginTop: '0', opacity: '1' },1000);
		}
		if (sectionUp>=(adminInstructiveX-300)) {
			$(".about-instructive img").animate({marginRight: '0', opacity: '1' },1000);
			$(".about-instructive h2").delay(500).animate({marginTop: '0', opacity: '1' },1000);
			$(".about-instructive p").delay(1000).animate({marginTop: '0', opacity: '1' },1000);
		}
	})

});