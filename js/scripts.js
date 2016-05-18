$(document).ready(function(){

	/* Encaja el cover a todo el tamaño de la pantalla
	-------------------------------------------------- */
	var screenHeight = (window.innerHeight)-60;
	$(".cover").css("height", screenHeight);

	/* Baja el scroll para empezar la landing
	-------------------------------------------------- */
	$(".cover-scroll span").on("click",function(){
		$("html, body").animate({scrollTop: screenHeight},"slow","easeOutBack");
	})

	/* Open/Close Search window
	-------------------------------------------------- */
	$(".SearchButton").on("click", function(a){
		//alert("Hello");
		$(".overlay-content").toggleClass("overlay-content-on");
		$(".wrapper").toggleClass("main-content-off");
		a.preventDefault();
	})


	/* Toggle Display Scroll to Top
	-------------------------------------------------- */
	$(window).scroll(function(){
		var sectionUp = $(window).scrollTop();
		if (sectionUp>=140) {
			$(".main-content .TopBar").css("display","block");
		} else {
			$(".main-content .TopBar").css("display","none");
		}
	})

});