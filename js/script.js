/* Variables */
var countSlide = 0, slides, timerSlide = 5, pagination, vignettes,
	countSlideVid = 0, slidesVid, timerSlideVid = 2.2,
	indic,
	myScroll,
	sectionsPartner,
	tlRect, path, tlTitre1, titre1, drawTitre1 = false, tlTitre2, titre2, drawTitre2 = false, tlTitre3, titre3, drawTitre3 = false,
	valOffset,
	body = $('body'), html = $('html'), burger = $('.hamburger'), header = $('header'), masque = $('#masque'), menuMain = $('#menu-main'), 
	subMenu = $('#subMenu'), containerVid = $('#containerVid'), htmlBody = $('html, body'),
	windowHeight = $(window).height(), windowWidth = $(window).width();


/* Add class touch when mobile and tablet are detected, no-touch if not */
function detectTouchDevice(){
	if(isMobile.phone || isMobile.tablet || isMobile.seven_inch || isMobile.other_blackberry || isMobile.other_opera){
		if(html.hasClass('no-touch')){
			html.removeClass('no-touch').addClass('touch');
		}
	}else{
		if(html.hasClass('touch')){
			html.removeClass('touch').addClass('no-touch');
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
	burger.find("a").click(function(){
		if(burger.hasClass("burgerOn") ) {  
			html.hasClass('no-touch') ? moveBurgerMenu(header, 'close') : menuMain.animate({ "right": "-200px"}, "ease-in-out" );
			moveBurgerMenu(body, 'close');
			masque.fadeOut();
			burger.removeClass("burgerOn");
		} else {
			html.hasClass('no-touch') ? moveBurgerMenu(header, 'open') : menuMain.animate({ "right": "0"}, "ease-in-out" );
			moveBurgerMenu(body, 'open');
			masque.fadeIn(); 
			burger.addClass("burgerOn");	
		}
		return false;
	});
	masque.click(function(){
		moveBurgerMenu(header, 'close');
		moveBurgerMenu(body, 'close'); 
		menuMain.animate({ "right": "-200px"}, "ease-in-out" );
		$(this).fadeOut();
		burger.removeClass("burgerOn");
	});
}

function adjustBurgerMenu(){
	if(burger.hasClass('burgerOn') && windowWidth > 979){
		moveBurgerMenu(header, 'close');
		moveBurgerMenu(body, 'close');
		masque.fadeOut();      
		$(this).removeClass("burgerOn");
	}
}

function setSizeBugerMenu(){
	if(windowWidth < 979){
		var height = windowHeight + 100;
		menuMain.css('height', height+'px');
	}
	else{
		menuMain.css('height', 'auto');
	}
}


/* Footer toujours en bas de page */

function setFooter(){
	var docHeight = html.height();
	var footer = $('footer');
	if(footer.hasClass('bottom')){
		docHeight += footer.height();
		if (docHeight >= windowHeight) {
			footer.removeClass('bottom');
		}
	}
	if (docHeight < windowHeight) { 
	   footer.addClass('bottom');
	}
}


/* Premier strong en maj */

function setFirstStrong(){
	var allP = $('.content').find('p');
	if (allP.length > 0) {
		var firstP = allP.eq(0);
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
	var factor = 1.9;
	var factor2 = 9;
	var myScrollH2 = Math.ceil(myScroll/factor2);

	if (!html.hasClass("lt-ie9")) {

		// Video
		if(body.hasClass('home')){
			if (windowHeight>900) factor = 1.5;
			if (windowHeight>950) factor = 1.4;
			if (windowHeight>1050) factor = 1.2;
			if (windowHeight>1200) factor = 1;
			var myScrollH = -Math.ceil(myScroll/factor);

			$("video").css("bottom",myScrollH+"px");
		}

		//Parallaxe solution
		if(body.hasClass('solution') || body.hasClass('page-template-solution-php')){

			if(windowWidth > 978){
				$("#screen-solution").css("margin-bottom",myScrollH2+"px");

				if(myScroll > 600){
					$('#shop').css('top', -myScrollH2+'px');
				}

				if(myScroll > 2470){
					$('#nuage1').css('margin-top', -myScrollH2/1.7+'px');
					$('#nuage2').css('margin-top', -myScrollH2+'px');
				}
			}
			else{
				$("#screen-solution").css("margin-bottom", "0px");
				$('#shop').css('top', '0px');
				$('#nuage1').css('margin-top', '0px');
				$('#nuage2').css('margin-top', '0px');
			}
		}

		if(body.hasClass('partner')){

			//Sous menu partenaires
			var bulle = subMenu.find('.bulleMenu');

			if(myScroll <= sectionsPartner[0] - valOffset[8]){
				bulle.css('left', '-50px');
			}

			function activeLink(pos){
				var thisLi = subMenu.find('li').eq(pos);
				thisLi.siblings('li').find('a').removeClass('actif');
				thisLi.find('a').addClass('actif');
				bulle.css('left', thisLi.offset().left + (thisLi.width()/2) + 15);
			}

			for(var i=0; i<sectionsPartner.length; i++){
				if(myScroll > sectionsPartner[i] - valOffset[6] && myScroll <= sectionsPartner[i+1] - valOffset[6]){
					activeLink(i);
				}
			}
			if(myScroll <= sectionsPartner[0] - valOffset[6]){
				subMenu.find('a').removeClass('actif');
			}
			if(myScroll > sectionsPartner[3] - valOffset[7]){
				activeLink(3);
			}


			// Titres qui se dessinent
			var heightScreen = windowHeight - 150;
			if(myScroll >= $('.titreRect1').offset().top - heightScreen && drawTitre1 === false){
				drawTitre1 = true;
				tlTitre1.staggerTo(titre1, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
			if(myScroll >= $('.titreRect2').offset().top - heightScreen && drawTitre2 === false){
				drawTitre2 = true;
				tlTitre2.staggerTo(titre2, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
			if(myScroll >= $('.titreRect3').offset().top - heightScreen && drawTitre3 === false){
				drawTitre3 = true;
				tlTitre3.staggerTo(titre3, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
		}
	}
}


/* Lien rejouer (video + slider accueil) */ 

function setPlayAgainIndic(){
	$('#mask').css('cursor', 'pointer');
	indic.fadeIn();
}

function gonePlayAgainIndic(){
	$('#mask').css('cursor', 'auto');
	indic.fadeOut();
}

/* Video accueil */

function onVideoEnd(video){
	video.bind("ended", function() {
		video.fadeOut();
		setPlayAgainIndic();
		$('#mask').click(function(){
			video[0].play();
			setTimeout(function(){ video.fadeIn(); }, 10);
			gonePlayAgainIndic();
		});
	});
}

function setVideoContainer(){
	var height = windowHeight - 100;

	containerVid.find('.container').css('height', height + 'px');

	if(height < 751){
		containerVid.find('br').css('display', 'block');
	}

	if(html.hasClass('no-touch') && windowWidth > 980){
		if(containerVid.find('video').length > 0 ){
			onVideoEnd(containerVid.find('video'));
		}
		if(containerVid.find('embed').length > 0 ){
			onVideoEnd(containerVid.find('embed'));
		}
	}
}

function playVideo(){
	var vid;
	if(containerVid.find('video').length > 0 ){
		vid = containerVid.find('video');
	}
	if(containerVid.find('embed').length > 0 ){
		vid = containerVid.find('embed');
	}
	vid[0].play();
	setTimeout(function(){ vid.fadeIn(); }, 10);
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
		if(html.hasClass('no-touch')){
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
		if(html.hasClass('no-touch')){
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
		slides.eq(i).find('.img').css('background-image', 'url(' + src + ')');
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
    var _zoom;
    
    if (body.hasClass("lt-ie9")) {    
	    window.matchMedia("(min-width: 1150px)").matches ? _zoom=7 : _zoom=6;
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
		htmlBody.delay(300).animate({scrollTop: $('#contactMail').offset().top - valOffset[3] }, 500);
	}
	
	if ($('#contactTel').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: $('#contactTel').offset().top - valOffset[3] }, 500);
	}

	$('#soumettre').click(function(){
		$("#contactMail").slideDown(100);
		$("#contactTel").slideUp(100,function() {
			htmlBody.animate({scrollTop: $('#contactMail').offset().top - valOffset[3] }, 600);
		});
		return false;
	});
	
	$('#consultant').click(function(){
		$("#contactTel").slideDown(100);
		$("#contactMail").slideUp(100,function() {
			htmlBody.animate({scrollTop: $('#contactTel').offset().top - valOffset[3] }, 600);
		});
		return false;
	});

	setSizeBugerMenu();
}


/* Formulaire dossier de presse */

function openFormDossier(){
	if ($('#formDossier').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: $('#formDossier').offset().top + valOffset[5] }, 500);
	}
	
	if ($("#formDossier").find('.container').hasClass("success")) {
		htmlBody.animate({scrollTop: $('#formDossier').offset().top - valOffset[3] }, 500);
	}

	$('#dossier').click(function(){
		$(this).fadeOut(100, function(){
			$('#formDossier').find('form').slideDown(200,function() {
				htmlBody.animate({scrollTop: $(this).offset().top - valOffset[4] }, 600);
			});
		});
		return false;
	});

	setSizeBugerMenu();
}


/* Formulaire inscription au club */

function openFormClub(){
	if ($('#inscription').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: $('#inscription').offset().top - valOffset[4] }, 500);
	}

	$('#btnClub').click(function(){
		htmlBody.animate({scrollTop: $('#inscription').offset().top - valOffset[3] }, 600);
		return false;
	});
}


/* Rectangles qui se dessinent à 0 */

function setRect(){
	tlRect = new TimelineLite();
	path = $('.bigSvg').find('path');
	if( $('.bigSvg').css('display') === 'none' ){
		path = $('.smallSvg').find('path');
	}
	tlRect.set(path, {drawSVG:0});


	tlTitre1 = new TimelineLite();
	titre1 = $('.titreRect1').find('rect');
	tlTitre1.set(titre1, {drawSVG:0});

	tlTitre2 = new TimelineLite();
	titre2 = $('.titreRect2').find('rect');
	tlTitre2.set(titre2, {drawSVG:0});

	tlTitre3 = new TimelineLite();
	titre3 = $('.titreRect3').find('rect');
	tlTitre1.set(titre3, {drawSVG:0});
}


/* Ajout du svg dans la page (sinon bug sous IE) */

function appendSvg(){
	if( $('.bigSvg').css('display') === 'none' ){
		$('.smallSvg').append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="508px" height="208px">
									<path d="M 465 4 500 4 500 200 480 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
									<path d="M 160 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
								</svg>');
	}else{
		$('.bigSvg').append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768px" height="208px">
								<path d="M 490 4 760 4 760 200 730 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
								<path d="M 385 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
							</svg>');
	}

	var rectTitre = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233px" height="144px">
						<rect x="3" y="3" stroke="#47acdc" stroke-width="3" width="227" height="138" fill="none" stroke-linejoin="round"/>
					</svg>'
	$('.titreRect1').append(rectTitre);
	$('.titreRect2').append(rectTitre);
	$('.titreRect3').append(rectTitre);

	setRect();
}

/* Formulaire devenir partenaire */

function openFormPartner(){
	if ($('#partenaire').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: sectionsPartner[3] - valOffset[2] }, 500);

	}

	function goToForm(){
		htmlBody.animate({scrollTop: sectionsPartner[3] - valOffset[1] }, 600);
		return false;
	}
	$('#partnerSol').click(goToForm);
	$('#partnerTech').click(goToForm);
}

/* Smooth scroll pour les ancres du sous-menu */

function clickSubMenu(){

	function scrollAncre(eq, top){
		htmlBody.animate({scrollTop: sectionsPartner[eq] - top }, 600);
	}

	subMenu.find('a').eq(0).click(function(){ scrollAncre(0, valOffset[0]); return false; });
	subMenu.find('a').eq(1).click(function(){ scrollAncre(1, valOffset[0]); return false; });
	subMenu.find('a').eq(2).click(function(){ scrollAncre(2, valOffset[1]); return false; });
	subMenu.find('a').eq(3).click(function(){ scrollAncre(3, valOffset[1]); return false; });
}


/// Fonction pour animer le visuel en haut de la page solution ///

function animVisuSolution(){
	TweenMax.to($("#screen-solution"), 2, {y: 0, opacity: 1, ease:Cubic.easeIn});
}

function visuSolution(){
	TweenMax.set($("#screen-solution"), {y: 50, opacity: 0});
}

// Schéma clignotant page solution //

function ploup(){
	var ploupDiv = $('.ploup');
	ploupDiv.spriteanim();
	var rand = Math.floor((Math.random() * ploupDiv.length));
	ploupDiv.eq(rand).spriteanim('play').one('frame-10-shown', function(){
		$(this).spriteanim('stop');
		ploup();
	});
}


// Page ref //

function openRef(){
	var ref = $('.ref').find('.first');
	if(windowWidth > 850){
		ref.mouseout(function(){
			$(this).removeClass('openRef');
		});
	}else{
		ref.removeClass('openRef');
	}
}


$(function(){
	detectTouchDevice();
	setFooter();
	setSizeBugerMenu();
	setBurgerMenu();

	if(!body.hasClass('home')){
		setFirstStrong();
	}

	valOffset = [100, 150, 140, 70, 120, 80, 160, 190, 200];

	if(html.hasClass('touch')){
		for(var i=0; i<valOffset.length; i++){
			valOffset[i] -= 80;
		}

		menuMain.find('a').on('click touchend', function(e) {
		    var el = $(this);
		    var link = el.attr('href');
		    window.location = link;
		});
	}

	if(body.hasClass('home')){
		indic = containerVid.find('.rejouer');
		html.hasClass("lt-ie9") ? containerVid.find('.container').css('height', '700px') : setVideoContainer();
	}

	if (body.hasClass("solution") || body.hasClass('page-template-solution-php')){
		visuSolution();
		ploup();
	}

	if (body.hasClass("contactPage") || body.hasClass('page-template-contact-php')){
		openForm();
	}

	if (body.hasClass("presse") || body.hasClass('page-template-presse-php')){
		openFormDossier();
	}

	if (body.hasClass("club") || body.hasClass('page-template-club-php')){
		openFormClub();
	}

	if(body.hasClass('references') || body.hasClass('page-template-references-php')){
		openRef();
	}

	if(body.hasClass('partner')){
		if(!html.hasClass('lt-ie9') && html.hasClass('svg')){
			appendSvg();
		}
		sectionsPartner = [$('#solution').offset().top, $('#technologiques').offset().top, $('#ensemble').offset().top, $('#partenaire').offset().top];
		subMenu.find('.bulleMenu').css('left', '-50px');
		clickSubMenu();
		openFormPartner();
	}

	$(document).scroll(function() {
		myScroll = $(this).scrollTop();
		scroll();
		setFooter();
	});

});

$(window).load(function(){
	if(body.hasClass('home')){

		// Slider a la place de la vidéo
		if(html.hasClass('lt-ie9') || html.hasClass('touch') || html.width() < 979){
			slidesVid = $('#sliderVid').find('.slides').find('li');
			setSliderVid();
		}else{
			playVideo();
		}

		// Slider références
		slides = $('#slider').find('.slides').find('li');
		vignettes = $('#slider').find('.vignettes').find('li');
		pagination = $('#bulle');
		setSlider();
	}
	
	if(body.hasClass('solution') || body.hasClass('page-template-solution-php')){
		animVisuSolution();
	}

	if(body.hasClass('partner') && !html.hasClass('lt-ie9')){
		tlRect.staggerFromTo(path, 0.8, {drawSVG:0}, {drawSVG: "100%", ease:Power1.easeInOut}, 0.7);
	}
});

$(window).resize(function() {

	if(body.hasClass('home')){
		setVideoContainer();
	}

	setFooter();
	setSizeBugerMenu();
	adjustBurgerMenu();

});