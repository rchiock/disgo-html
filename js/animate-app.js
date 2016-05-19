$(document).ready(function(){

	/* Toggle animation About Admin Page
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		var adminFunctionsX = $(".about-app-functions").offset().top;
		var adminServiceX = $(".about-app-services").offset().top;
		var adminInstructiveX = $(".about-app-instructive").offset().top;
		var adminLoginX = $(".about-app-login").offset().top;
		if (sectionUp>=(adminFunctionsX-600)) {
			$(".about-app-functions img").addClass("slideright-animate-on");
			$(".about-app-functions h2").addClass("slideleft-animate-on");
			$(".about-app-functions p").addClass("slideleft-animate-on");
		}
		if (sectionUp>=(adminServiceX-600)) {
			$(".about-app-services img").addClass("slideup-animate-on");
			$(".about-app-services h2").addClass("slideup-animate-on");
			$(".about-app-services p").addClass("slideup-animate-on");
		}
		if (sectionUp>=(adminInstructiveX-600)) {
			$(".about-app-instructive img").addClass("slideright-animate-on");
			$(".about-app-instructive h2").addClass("slideleft-animate-on");
			$(".about-app-instructive p").addClass("slideleft-animate-on");
		}
		if (sectionUp>=(adminLoginX-600)) {
			$(".about-app-login img").addClass("slideup-animate-on");
			$(".about-app-login h2").addClass("slideup-animate-on");
			$(".about-app-login p").addClass("slideup-animate-on");
			$(".about-app-login .button").addClass("slideup-animate-on");
		}
	})

});