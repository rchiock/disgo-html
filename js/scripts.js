$(document).ready(function(){

	var screenHeight = window.innerHeight;
	var screenWidth = window.innerWidth;
	$(".cover").css({"width": screenWidth, "height":screenHeight });


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