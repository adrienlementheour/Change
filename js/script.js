function setBurgerMenu(){
	$(".hamburger").find("a").click(function(){
		if ($(this).parent('.hamburger').hasClass("burgerOn") ) {  
		    $("header").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" );
		    $("body").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" ); 
		    $("#masque").fadeOut();
		    $(this).parent('.hamburger').removeClass("burgerOn");
		} else {
 			$("header").animate({ "margin-left": "-200px", "margin-right": "200px"}, "ease-in-out" );
		    $("body").animate({ "margin-left": "-200px", "margin-right": "200px"}, "ease-in-out" );
		    $("#masque").fadeIn(); 
		    $(this).parent('.hamburger').addClass("burgerOn");	
		}
		return false;
	});
	$("#masque").click(function(){
		$("header").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" );
		$("body").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" ); 
		$(this).fadeOut();
		$('.hamburger').removeClass("burgerOn");
	});
}

function adjustBurgerMenu(){
	if($('.hamburger').hasClass('burgerOn') && $(window).width() > 979){
		$("header").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" );
		$("body").animate({ "margin-left": "0", "margin-right": "0"}, "ease-in-out" ); 
		$("#masque").fadeOut();      
		$(this).removeClass("burgerOn");
	}
}

function setSizeBugerMenu(){
	if($(window).width() < 979){
		var height = $(window).height() + 100;
		$('#menu-header').css('height', height+'px');
	}
	else{
		$('#menu-header').css('height', 'auto');
	}
}

function scroll(){
	var myScroll = $(document).scrollTop();
	var bottom = $(document).height() - $(window).height();
	var footer = bottom - 70;

	if ($("html").not(".lt-ie9")) {

		// Header
		if (myScroll>100) {
			if($("html").hasClass("no-touch")){
				$("#header").addClass("scrolled");
			}
		} else {
			if($("html").hasClass("no-touch")){
				$("#header").removeClass("scrolled");
			}
		}

		// Footer
		if($("html").hasClass("no-touch")){
			if(myScroll > footer){
				$('#contact').addClass('up');
				$('footer').addClass('contactUp');
				setTimeout(function() { $("#contact").addClass("upZ"); },300);
			}
			else{
				$('#contact').removeClass('upZ');
				$('#contact').removeClass('up');
				$('footer').removeClass('contactUp');
			}
		}else{
			$('#contact').addClass('up');
			$('footer').addClass('contactUp');
		}

	}
}

function noScroll(){
	if($("html").hasClass("lt-ie9")){
		$('#contact').addClass('up upZ');
		$('footer').addClass('contactUp');
	}
}

function setFirstStrong(){
	var firstP = $('.content').find('p').eq(0);
	var firstStrong = firstP.find('strong').eq(0);
	var posStrong = firstStrong.closest('p').html().indexOf('<strong>');
	if(posStrong === 0){
		firstStrong.addClass('maj');
	}
}


$(document).ready(function(){

	setSizeBugerMenu();
	setBurgerMenu();
	setFirstStrong();
	noScroll();

	$(document).scroll(function() {
		scroll();
	});

});

$( window ).resize(function() {

	setSizeBugerMenu();
	adjustBurgerMenu();

});