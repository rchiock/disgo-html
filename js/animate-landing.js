$(document).ready(function(){

	/* Toggle animation Landing Page
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		var appPosX = $(".app-feature").offset().top;
		var adminPosX = $(".admin-feature").offset().top;
		if (sectionUp>=(appPosX-300)) {
			$(".app-feature .image-animate").addClass("imageturn-animate-on");
			$(".app-feature .info-text-2").addClass("slideup-animate-on");
			$(".app-feature .info-text-1").addClass("slideup-animate-on");
			$(".app-feature .info-text-4").addClass("slideup-animate-on");
			$(".app-feature .info-text-3").addClass("slideup-animate-on");
		}
		if (sectionUp>=(adminPosX-300)) {
			$(".admin-feature .image-animate").addClass("imagescale-animate-on");
			$(".admin-feature .info-text-2").addClass("slideleft-animate-on");
			$(".admin-feature .info-text-4").addClass("slideleft-animate-on");
			$(".admin-feature .info-text-1").addClass("slideright-animate-on");
			$(".admin-feature .info-text-3").addClass("slideright-animate-on");
		}
	})

});