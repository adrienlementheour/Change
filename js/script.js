/* Variables */

var countSlide = 0;
var slides;
var timerSlide = 5;
var pagination;
var vignettes;

var countSlideVid = 0;
var slidesVid;
var timerSlideVid = 2;

var indic;

var animHencours = false;


/* Add class touch when mobile and tablet are detected, no-touch if not */

function detectTouchDevice(){
	if(isMobile.phone || isMobile.tablet || isMobile.seven_inch || isMobile.other_blackberry || isMobile.other_opera){
		if($('html').hasClass('no-touch')){
			$('html').removeClass('no-touch').addClass('touch');
		}
	}else{
		if($('html').hasClass('touch')){
			$('html').removeClass('touch').addClass('no-touch');
		}
	}
}

/* Burger menu */

function moveBurgerMenu(elt, action){
	var mvt = 0;
	if(action === 'open'){
		mvt = 200;
	}
	elt.animate({ "margin-left": -mvt, "margin-right": mvt}, "ease-in-out" );
}

function setBurgerMenu(){
	$(".hamburger").find("a").click(function(){
		if ($(this).parent('.hamburger').hasClass("burgerOn") ) {  
			if($('html').hasClass('no-touch')){
				moveBurgerMenu($('header'), 'close');
			}
			else{
				$("#menu-header").animate({ "right": "-200px"}, "ease-in-out" );
			}
		    moveBurgerMenu($("body"), 'close');
		    $("#masque").fadeOut();
		    $(this).parent('.hamburger').removeClass("burgerOn");
		} else {
			if($('html').hasClass('no-touch')){
 				moveBurgerMenu($("header"), 'open');
 			}
 			else{
				$("#menu-header").animate({ "right": "0"}, "ease-in-out" );
			}
		    moveBurgerMenu($("body"), 'open');
		    $("#masque").fadeIn(); 
		    $(this).parent('.hamburger').addClass("burgerOn");	
		}
		return false;
	});
	$("#masque").click(function(){
		moveBurgerMenu($("header"), 'close');
		moveBurgerMenu($("body"), 'close'); 
		$(this).fadeOut();
		$('.hamburger').removeClass("burgerOn");
	});
}

function adjustBurgerMenu(){
	if($('.hamburger').hasClass('burgerOn') && $(window).width() > 979){
		moveBurgerMenu($("header"), 'close');
		moveBurgerMenu($("body"), 'close');
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


/* Footer toujours en bas de page */

function setFooter(){
	var docHeight = $('html').height();
	if($('footer').hasClass('bottom')){
		docHeight = $('html').height() + $('footer').height();
		if (docHeight >= $(window).height()) {
			$('footer').removeClass('bottom');
		}
	}
	if (docHeight < $(window).height()) { 
	   $('footer').addClass('bottom');
	}
}


/* Premier strong en maj */

function setFirstStrong(){
	if ($('.content').find('p').length > 0) {
		var firstP = $('.content').find('p').eq(0);
		var strong = firstP.find('strong');
		var b = firstP.find('b');
		if (strong.length > 0) {
			var firstStrong = strong.eq(0);
			var posStrong = firstStrong.closest('p').html().indexOf('<strong>');
			if(posStrong === 0){
				firstStrong.addClass('maj');
			}
		}
		if (b.length > 0) {
			var firstB = b.eq(0);
			var posB = firstB.closest('p').html().indexOf('<b>');
			if(posB === 0){
				firstB.addClass('maj');
			}
		}
	}
}


/* Eléments animés au scroll: header, video accueil */

function scroll(){
	var myScroll = $(document).scrollTop();
	var factor = 1.9;
	var myScrollH = -Math.ceil(myScroll/factor);
	/*var bottom = $(document).height() - $(window).height();
	var footer = bottom - 70;*/

	if (!$("html").hasClass("lt-ie9")) {

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
		/*if($("html").hasClass("no-touch")){
			if(myScroll > footer && !$('body').hasClass('contactPage')){
				$('#contact').addClass('up');
				$('footer').addClass('contactUp');
				setTimeout(function() { $("#contact").addClass("upZ"); },300);
			}
			else{
				$('#contact').removeClass('upZ');
				$('#contact').removeClass('up');
				$('footer').removeClass('contactUp');
			}
		}*/

		// Video

		if ($(window).height()>900) {
			factor = 1.5;
		}
		if ($(window).height()>950) {
			factor = 1.4;
		}
		if ($(window).height()>1050) {
			factor = 1.2;
		}
		if ($(window).height()>1200) {
			factor = 1;
		}

		$("video").css("bottom",myScrollH+"px");
	}
}

/*function noScroll(){
	if($("html").hasClass("lt-ie9")){
		$('#contact').addClass('up upZ');
		$('footer').addClass('contactUp');
	}
}*/


/* Tooltip rejouer (video + slider accueil) */ 

function setPlayAgainIndic(){
	var logoVid = $('#mask');

	$('#mask').css('cursor', 'pointer');

	logoVid.mousemove(function(evt){
		var posContainer = $('#containerVid').find('.container').offset(); 
		indic.css({'left': evt.pageX - posContainer.left - 90 +'px', 'top': evt.pageY - posContainer.top + 15 +'px'});
	});
	logoVid.mouseenter(function(){
		indic.fadeIn();
	}).mouseleave(function(){
		indic.fadeOut();
	});
}

function gonePlayAgainIndic(){
	$('#mask').css('cursor', 'auto');
	indic.fadeOut();
}

/* Video accueil */

function onVideoEnd(video){
	video.bind("ended", function() {
		video.fadeOut(function(){
			setPlayAgainIndic();
			$('#mask').click(function(){
				video[0].play();
				setTimeout(function(){ video.fadeIn(); }, 200);
				gonePlayAgainIndic();
			});
		});
	});
}

function setVideoContainer(){
	var height = $(window).height() - 100;
	$('#containerVid').find('.container').css('height', height + 'px');

	if($('html').hasClass('no-touch') && $(window).width() > 980){
		if($('#containerVid').find('video').length > 0 ){
			onVideoEnd($('#containerVid').find('video'));
		}
		if($('#containerVid').find('embed').length > 0 ){
			onVideoEnd($('#containerVid').find('embed'));
		}
	}

}

/* Animation du texte */

function setAnimHomeenCours(){
  if(animHencours === false){
    animHencours = true;
  }else{
    animHencours = false;
  }
}

function animTxt(){
	setAnimHomeenCours();
	var tl = new TimelineMax();
	tl.to($('.sentence'), 0.5, {className:"+=discret"});
  	tl.to($('.produits'), 0.5, {className:"+=big"});
  	tl.to($('.produits'), 0.1, {delay:2,className:"-=big"});
  	tl.to($('.vente'), 0.5, {className:"+=big"});
  	tl.to($('.vente'), 0.1, {delay:2,className:"-=big"});
  	tl.to($('.marque'), 0.5, {className:"+=big"});
  	tl.to($('.marque'), 0.1, {delay:2,className:"-=big"});
  	tl.to($('.ecommerce'), 0.5, {className:"+=big"});
  	tl.to($('.ecommerce'), 0.1, {delay:2,className:"-=big"});
    tl.to($('.sentence'), 0.5, {className:"-=discret",onComplete:setAnimHomeenCours});
}

/* Slider smartphone et ie9 (à la place de la vidéo) */

function resetSlideVid(index){
	for(var i=0; i<slidesVid.length; i++){
		if(i !== index){
			slidesVid.eq(i).css('z-index', '1');
		}
	}
	slidesVid.eq(index).css('z-index', '2');
}

function setSlideVid(index){
	if (slidesVid.eq(index).css('z-index') !== "2") {
		slidesVid.eq(index).css({'z-index': '3', 'opacity': '0'});
		TweenMax.to(slidesVid.eq(index), 0.5, {opacity: "1", onComplete: resetSlideVid, onCompleteParams:[index]});
	}
}

function slideshowVid(){
	countSlideVid ++;
	if(countSlideVid === slidesVid.length - 1){
		TweenMax.to($('#sliderVid'), 0.4, {opacity: "0"});
		if($('html').hasClass('no-touch')){
			setPlayAgainIndic();
		}
	}
	setSlideVid(countSlideVid);
	TweenMax.delayedCall(timerSlideVid, slideshowVid);

	$('#mask').click(function(){
		countSlideVid = -2;
		setSlideVid(countSlideVid);
		TweenMax.killTweensOf(slideshowVid);
		slideshowVid();
		TweenMax.to($('#sliderVid'), 0.4, {opacity: "1"});
		if($('html').hasClass('no-touch')){
			gonePlayAgainIndic();
		}
	});
}

function setSliderVid(){
	for(var i = 0; i < slidesVid.length; i++){
		var src = slidesVid.eq(i).data('img');
		slidesVid.eq(i).css('background-image', 'url(' + src + ')');
	}

	TweenMax.delayedCall(timerSlideVid, slideshowVid);
}



/* Slider accueil references */

function resetSlide(index){
	for(var i=0; i<slides.length; i++){
		if(i !== index){
			slides.eq(i).css('z-index', '1');
		}
	}
	slides.eq(index).css('z-index', '2');
}

function setSlide(index){
	if (slides.eq(index).css('z-index') !== "2") {
		slides.eq(index).css({'z-index': '3', 'opacity': '0'});
		var posVignette = vignettes.eq(index).position();
		TweenMax.to(pagination, 0.2, {left: posVignette.left+5+"px", top: posVignette.top+110+"px", ease:Quad.easeIn});
		TweenMax.to(slides.eq(index), 0.5, {opacity: "1", onComplete: resetSlide, onCompleteParams:[index]});
	}
}

function slideshow(){
	countSlide ++;
	if(countSlide === slides.length){
		countSlide = 0;
	}
	setSlide(countSlide);
	TweenMax.delayedCall(timerSlide, slideshow);
}

function setSlider(){
	for(var i = 0; i < slides.length; i++){
		var src = slides.eq(i).data('img');
		slides.eq(i).css('background-image', 'url(' + src + ')');
	}

	for(var j = 0; j < vignettes.length-1; j++){
		vignettes.eq(j).mouseover(function(){
			TweenMax.killTweensOf(slideshow);
			var index = $(this).index();
			setSlide(index);
		}).mouseout(function(){
			countSlide = $(this).index();
			TweenMax.delayedCall(timerSlide, slideshow);
		});
	}

	TweenMax.delayedCall(timerSlide, slideshow);
}


/* Google maps */

function initMap() {
	var locations = [
      ['Paris', 48.8597311, 2.3793472, "https://www.google.fr/maps/place/16+Bis+Avenue+Parmentier/@48.8597149,2.3792576,17z/data=!3m1!4b1!4m2!3m1!1s0x47e66df744c37131:0xd60d5e672814a3e9"],
      ['Strasbourg', 48.5809678, 7.7543122, "https://www.google.fr/maps/place/30+Quai+des+Bateliers/@48.5809678,7.7543122,17z/data=!3m1!4b1!4m2!3m1!1s0x4796c854f4ca5601:0x7c8b5e817e4619b0"]
    ];

    var _zoom;
    
    if ($("body").hasClass("lt-ie9")) {    
	    if (window.matchMedia("(min-width: 1150px)").matches) {
	      _zoom=7;
	    } else {
	      _zoom=6;
	    }
	 }else {
	 	_zoom=6;
	 }

	var mapOptions = {
        zoom: _zoom,
        center: new google.maps.LatLng(48.4167150, 4.9383584),
        panControl: false,
		zoomControl: false,
		mapTypeControl: false,
		scaleControl: false,
		streetViewControl: false,
		overviewMapControl: false,
        styles: [{"elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#f5f5f2"},{"visibility":"on"}]},{"featureType":"administrative","stylers":[{"visibility":"off"}]},{"featureType":"administrative.city","stylers":[{"visibility":"simplified","color":"#34343c"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"poi.attraction","stylers":[{"visibility":"off"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"visibility":"on"}]},{"featureType":"poi.business","stylers":[{"visibility":"off"}]},{"featureType":"poi.medical","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","stylers":[{"visibility":"off"}]},{"featureType":"poi.school","stylers":[{"visibility":"off"}]},{"featureType":"poi.sports_complex","stylers":[{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#ffffff"},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"visibility":"simplified"},{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"color":"#ffffff"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.park","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#54b8e7"}]},{"featureType":"landscape","stylers":[{"color":"#efebe2"}]},{"featureType":"poi.park","stylers":[{"visibility":"off"}]},{"featureType":"road","stylers":[{"color":"#ffffff"}]},{"featureType":"poi.sports_complex","elementType":"geometry","stylers":[{"color":"#c7c7c7"},{"visibility":"off"}]},{"featureType":"water","stylers":[{"color":"#54b8e7"}]},{"featureType":"poi.park","stylers":[{"color":"#91b65d"}]},{"featureType":"poi.park","stylers":[{"gamma":1.51}]},{"featureType":"road.local","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"poi.government","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.local","stylers":[{"visibility":"simplified"}]},{"featureType":"road"},{"featureType":"road"},{},{"featureType":"road.highway"}]
    };

    var mapElement = document.getElementById('map');

    var map = new google.maps.Map(mapElement, mapOptions);

    var pin = 'layoutImg/pin.png'; 

    var parmentier = new google.maps.Marker({ 
    	position: new google.maps.LatLng(locations[0][1], locations[0][2]),
    	title: locations[0][0], 
    	url: locations[0][3],
    	icon: pin,
    	map: map
    });
    google.maps.event.addListener(parmentier, 'click', function() {
        window.open(parmentier.url);
    });

    var strasbourg = new google.maps.Marker({ 
    	position: new google.maps.LatLng(locations[1][1], locations[1][2]),
    	title: locations[1][0], 
    	url: locations[1][3],
    	icon: pin,
    	map: map 
    });
    google.maps.event.addListener(strasbourg, 'click', function() {
        window.open(strasbourg.url);
    });
}


/* Formulaires contact */

function openForm(){
	if ($('#contactMail').hasClass("opened")) {
		$("html, body").animate({scrollTop: $('#contactMail').offset().top - 70 }, 0);
	}
	
	if ($('#contactTel').hasClass("opened")) {
		$("html, body").animate({scrollTop: $('#contactTel').offset().top - 70 }, 0);
	}



	if ($("#contactMail").find('medium').hasClass("success")) {
		$("html, body").animate({scrollTop: $('#contactMail').offset().top - 70 }, 500);
	}
	
	if ($("#contactTel").find('medium').hasClass("success")) {
		$("html, body").animate({scrollTop: $('#contactTel').offset().top - 70 }, 500);
	}

	$('#soumettre').click(function(){
		$("#contactMail").slideDown(100);
		$("#contactTel").slideUp(100,function() {
			$("html, body").animate({scrollTop: $('#contactMail').offset().top - 70 }, 600);
		});
		return false;
	});
	
	$('#consultant').click(function(){
		$("#contactTel").slideDown(100);
		$("#contactMail").slideUp(100,function() {
			$("html, body").animate({scrollTop: $('#contactTel').offset().top - 70 }, 600);
		});
		return false;
	});

	setSizeBugerMenu();
}

/// Fonction pour animer le visuel en haut de la page solution ///
function animVisuSolution(){
	TweenMax.to($("#screen-solution"), 2, {y: 0, opacity: 0.95, ease:Cubic.easeIn});
}

function visuSolution(){
	TweenMax.set($("#screen-solution"), {y: 50, opacity: 0});
	animVisuSolution();
}


$(function(){


	detectTouchDevice();
	setFooter();
	setSizeBugerMenu();
	setBurgerMenu();
	setFirstStrong();
	//noScroll();

	if($('body').hasClass('home')){
		indic = $('#containerVid').find('.rejouer');
		animTxt();
		if($("html").hasClass("lt-ie9")){
			$('#containerVid').find('.container').css('height', '700px');
		}else{
			setVideoContainer();
		}
	}

	if ($("body").hasClass("solution")){
		visuSolution();
	}

	if ($("body").hasClass("contactPage")){
		openForm();
		google.maps.event.addDomListener(window, 'load', initMap);
	}

	$(document).scroll(function() {
		scroll();
		setFooter();
	});

});

$(window).load(function(){
	if($('body').hasClass('home')){

		// Slider a la place de la vidéo
		if($('html').hasClass('lt-ie9') || $('html').hasClass('touch')){
			slidesVid = $('#sliderVid').find('.slides').find('li');
			setSliderVid();
		}

		// Slider références
		slides = $('#slider').find('.slides').find('li');
		vignettes = $('#slider').find('.vignettes').find('li');
		pagination = $('#bulle');
		setSlider();
	}
});

$(window).resize(function() {

	if($('body').hasClass('home')){
		setVideoContainer();
	}

	setFooter();
	setSizeBugerMenu();
	adjustBurgerMenu();

});