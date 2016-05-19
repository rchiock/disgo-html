$(document).ready(function(){

	/* Toggle animation About Admin Page
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		var adminFunctionsX = $(".about-admin-functions").offset().top;
		var adminServiceX = $(".about-admin-services").offset().top;
		var adminInstructiveX = $(".about-admin-instructive").offset().top;
		var adminLoginX = $(".about-admin-login").offset().top;
		if (sectionUp>=(adminFunctionsX-600)) {
			$(".about-admin-functions img").addClass("slideright-animate-on");
			$(".about-admin-functions h2").addClass("slideleft-animate-on");
			$(".about-admin-functions p").addClass("slideleft-animate-on");
		}
		if (sectionUp>=(adminServiceX-600)) {
			$(".about-admin-services img").addClass("slideup-animate-on");
			$(".about-admin-services h2").addClass("slideup-animate-on");
			$(".about-admin-services p").addClass("slideup-animate-on");
		}
		if (sectionUp>=(adminInstructiveX-600)) {
			$(".about-admin-instructive img").addClass("slideright-animate-on");
			$(".about-admin-instructive h2").addClass("slideleft-animate-on");
			$(".about-admin-instructive p").addClass("slideleft-animate-on");
		}
		if (sectionUp>=(adminLoginX-600)) {
			$(".about-admin-login img").addClass("slideup-animate-on");
			$(".about-admin-login h2").addClass("slideup-animate-on");
			$(".about-admin-login p").addClass("slideup-animate-on");
			$(".about-admin-login .button").addClass("slideup-animate-on");
		}
	})

});