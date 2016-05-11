$(document).ready(function(){

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
			$(".TopBar").css("display","block");
		} else {
			$(".TopBar").css("display","none");
		}
	})

});