///////////////
// variables //
///////////////

function burger(){
	$(".hamburger").find(".symbole-burger").click(function(){
		$("#menu-header").slideToggle(200).toggleClass('.menuOpen');
		return false;
	});
}

function scrollMenu(){
	var myScroll = $(document).scrollTop();
	if (!$("html").hasClass("lt-ie9")) {
		if (myScroll>10) {
			if($("html").hasClass("no-touch")){
				$("#header").addClass("on");
			}
		} else {
			if($("html").hasClass("no-touch") && $("body").hasClass("home")){
				$("#header").removeClass("on");
			} 
		}
		if (myScroll>100) {
			if($("html").hasClass("no-touch")){
				$("#header").addClass("scrolled");
			}
		} else {
			if($("html").hasClass("no-touch")){
				$("#header").removeClass("scrolled");
			}
		}
	}
}

$(document).ready(function(){
	burger();

	$(document).scroll(function() {
		scrollMenu();
	});
	
});

function adjustBurgerMenu(){
	if($(window).width() > 979 && $("#menu-header").not('menuOpen')){
		$("#menu-header").slideDown(200);
	}else{
		$("#menu-header").slideUp(0);
	}
}

$( window ).resize(function() {
	adjustBurgerMenu();
});