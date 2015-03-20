/* Variables */
var countSlide = 0, slides, timerSlide = 5, pagination, vignettes,
	countSlideVid = 0, slidesVid, timerSlideVid = 2.2,
	indic,
	myScroll,
	sectionsPartner, sectionsEnt,
	tlRect, path, tlTitre1, titre1, drawTitre1 = false, tlTitre2, titre2, drawTitre2 = false, tlTitre3, titre3, drawTitre3 = false,
	valOffset,
	body = $('body'), html = $('html'), burger = $('.hamburger'), header = $('header'), masque = $('#masque'), menuMain, 
	subMenu = $('#subMenu'), containerVid = $('#containerVid'), htmlBody = $('html, body'), topHeader = $('.top-header'),
	t1 = $('.titreRect1'), t2 = $('.titreRect2'), t3 = $('.titreRect3'), equipe = $('#equipe'), animWorld = false, animSchema = false,
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
	if(action === 'open'){ mvt = 200; }
	elt.animate({ marginLeft: -mvt, marginRight: mvt}, "ease-in-out" );
}

function setBurgerMenu(){
	burger.find("a").click(function(){
		if(burger.hasClass("burgerOn") ) {  
			html.hasClass('no-touch') ? moveBurgerMenu(header, 'close') : menuMain.animate({ right: "-200px"}, "ease-in-out" );
			moveBurgerMenu(body, 'close');
			masque.fadeOut();
			burger.removeClass("burgerOn");
		} else {
			html.hasClass('no-touch') ? moveBurgerMenu(header, 'open') : menuMain.animate({ right: 0}, "ease-in-out" );
			moveBurgerMenu(body, 'open');
			masque.fadeIn(); 
			burger.addClass("burgerOn");	
		}
		return false;
	});

	masque.click(function(){
		moveBurgerMenu(header, 'close');
		moveBurgerMenu(body, 'close'); 
		menuMain.animate({ right: "-200px"}, "ease-in-out" );
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

function setSizeBugerMenu(size){
	if(windowWidth < size){
		var height = windowHeight + 100;
		menuMain.css('height', height+'px');
	}else{
		menuMain.css('height', 'auto');
	}
}


/* Top header au hover */
function hoverHeader(){
	header.on('mouseenter', function(){
		topHeader.removeClass('on');
	}).on('mouseleave', function(){
		topHeader.addClass('on');
	});
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

	function setMaj(first, type){
		var firstB = first.eq(0);
		var posB = firstB.closest('p').html().indexOf(type);
		if(posB === 0){
			firstB.addClass('maj');
		}
	}

	if(allP.length) {
		var firstP = allP.eq(0);
		var strong = firstP.find('strong');
		var b = firstP.find('b');
		if(strong.length){
			setMaj(strong, '<strong>');
		}
		if(b.length){
			setMaj(b, '<b>');
		}
	}
}


/* Eléments animés au scroll: header, video accueil */

function scroll(){
	var factor = 1.9, factor2 = 9, myScrollH2 = Math.ceil(myScroll/factor2);

	
	myScroll > 50 ? topHeader.addClass('on') : topHeader.removeClass('on');

	if(topHeader.hasClass('on')){
		hoverHeader();
	}

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
		if($('#shop').length){

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
				$("#screen-solution").css("margin-bottom", "0");
				$('#shop').css('top', '0');
				$('#nuage1').css('margin-top', '0');
				$('#nuage2').css('margin-top', '0');
			}
		}

		function animSousMenu(tabSection){
			var bulle = subMenu.find('.bulleMenu');

			if(myScroll <= tabSection[0] - valOffset[8]){
				bulle.css('left', '-50px');
			}

			function activeLink(pos){
				var thisLi = subMenu.find('li').eq(pos);
				thisLi.siblings().find('a').removeClass('actif');
				thisLi.find('a').addClass('actif');
				bulle.css('left', thisLi.offset().left + (thisLi.width()/2) + 15);
			}

			for(var i=0; i<tabSection.length; i++){
				if(myScroll > tabSection[i] - valOffset[6] && myScroll <= tabSection[i+1] - valOffset[6]){
					activeLink(i);
				}
			}
			if(myScroll <= tabSection[0] - valOffset[6]){
				subMenu.find('a').removeClass('actif');
			}
			if(myScroll > tabSection[3] - valOffset[7]){
				activeLink(3);
			}
		}

		//Sous menu
		if(subMenu.length){
			body.hasClass('partner') ? animSousMenu(sectionsPartner) : animSousMenu(sectionsEnt);
		}

		if(body.hasClass('partner')){
			// Titres qui se dessinent
			var heightScreen = windowHeight - 150;
			if(myScroll >= t1.offset().top - heightScreen && !drawTitre1){
				drawTitre1 = true;
				tlTitre1.staggerTo(titre1, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
			if(myScroll >= t2.offset().top - heightScreen && !drawTitre2){
				drawTitre2 = true;
				tlTitre2.staggerTo(titre2, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
			if(myScroll >= t3.offset().top - heightScreen && !drawTitre3){
				drawTitre3 = true;
				tlTitre3.staggerTo(titre3, 0.8, {drawSVG: "100%", ease:Power1.easeInOut});
			}
		}
	}

	if($('#svgWorld').length){
		if(myScroll > $('#svgWorld').offset().top - valOffset[9] && !animWorld){
			animWorld = true;
			animSvgEnt($('#svgWorld'), 700, 260);
		}

		if(myScroll > $('#svgSchema').offset().top - valOffset[9] && !animSchema){
			animSchema = true;
			animSvgEnt($('#svgSchema'), 130, 570);

			var txt = $('#blockSchema').find('li'),
				txtLength = txt.length, i = 0, count = 0;

			for(i; i<txtLength; i++){
				txt.eq(i).delay(count).animate({opacity: 1}, 300);
				count += 430;
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
		if(containerVid.find('video').length){
			onVideoEnd(containerVid.find('video'));
		}
		if(containerVid.find('embed').length){
			onVideoEnd(containerVid.find('embed'));
		}
	}
}

function playVideo(){
	var vid;
	if(containerVid.find('video').length){
		vid = containerVid.find('video');
	}
	if(containerVid.find('embed').length){
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
		slides.eq(i).find('.img').css('background-image', 'url(' + slides.eq(i).data('img') + ')');
	}

	for(var j = 0; j < vignettes.length-1; j++){
		vignettes.eq(j).mouseover(function(){
			TweenMax.killTweensOf(slideshow);
			setSlide($(this).index());
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

	setSizeBugerMenu(979);
}


/* Formulaire dossier de presse */

function openFormDossier(){
	if($('#formDossier').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: $('#formDossier').offset().top + valOffset[5] }, 500);
	}
	
	if($("#formDossier").find('.container').hasClass("success")) {
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

	setSizeBugerMenu(979);
}


/* Formulaire inscription au club */

function openFormClub(){
	if($('#inscription').hasClass("opened")) {
		htmlBody.delay(300).animate({scrollTop: $('#inscription').offset().top - valOffset[4] }, 500);
	}

	$('#btnClub').click(function(){
		htmlBody.animate({scrollTop: $('#inscription').offset().top - valOffset[3] }, 600);
		return false;
	});
}


/* Ajout du svg dans la page partenaire (sinon bug sous IE) */

function appendSvg(){
	var bigSvg = $('.bigSvg'),
		smallSvg = $('.smallSvg');

	/* Rectangles qui se dessinent à 0 */
	function setRect(){
		tlRect = new TimelineLite();
		bigSvg.css('display') !== 'none' ? path = bigSvg.find('path') : path = smallSvg.find('path');

		tlRect.set(path, {drawSVG:0});

		tlTitre1 = new TimelineLite();
		titre1 = t1.find('rect');
		tlTitre1.set(titre1, {drawSVG:0});

		tlTitre2 = new TimelineLite();
		titre2 = t2.find('rect');
		tlTitre2.set(titre2, {drawSVG:0});

		tlTitre3 = new TimelineLite();
		titre3 = t3.find('rect');
		tlTitre1.set(titre3, {drawSVG:0});
	}

	if( bigSvg.css('display') === 'none' ){
		smallSvg.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="508px" height="208px">
									<path d="M 465 4 500 4 500 200 480 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
									<path d="M 160 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
								</svg>');
	}else{
		bigSvg.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768px" height="208px">
								<path d="M 490 4 760 4 760 200 730 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
								<path d="M 385 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>
							</svg>');
	}

	var rectTitre = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233px" height="144px">
						<rect x="3" y="3" stroke="#47acdc" stroke-width="3" width="227" height="138" fill="none" stroke-linejoin="round"/>
					</svg>'
	t1.append(rectTitre);
	t2.append(rectTitre);
	t3.append(rectTitre);

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

function clickSubMenu(tabSections){

	function scrollAncre(eq, top){
		htmlBody.animate({scrollTop: tabSections[eq] - top }, 600);
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


/* Blog */

function openSearchInput(e){
	e.preventDefault();

	var input = $('#searchInput'),
		query = input.val(),
		queryLength = query.length;

	queryLength === 0 || !input.hasClass('open') ? input.toggleClass('open').focus() : $('#searchform').submit();
}


/* Entreprise */

function setSliderEntreprise(leftVal){

	var vignettesEnt = equipe.find('.vignettesEnt').find('li'),
		currentAnim = false;

	function slideVignettes(idSlide){
		var indexV1 = $('[data-slide="' + idSlide + '"]').index() + 1;
		function boucle(i, nb, count){
			for(i; i<nb; i++){
				count ++;
				if(vignettesEnt.eq(i).index() == -1){
					vignettesEnt.eq(0).addClass('v'+ count);
					var nbVignettesRestantes = nb - count;
					boucle(1, nbVignettesRestantes, count);
				}else{
					vignettesEnt.eq(i).addClass('v'+ count);
				}
			}
		}

		vignettesEnt.removeClass().addClass('middle');
		$('[data-slide="' + idSlide + '"]').addClass('on v1');
		boucle(indexV1, vignettesEnt.length+1, 1);
		setTimeout(function(){ vignettesEnt.removeClass('middle'); }, 300);
	}

	function slideText(idSlide, right){
		currentAnim = true;
		equipe.find('.sliderEnt').css('height', $('#'+idSlide).height());
		if(right){
			$('#'+idSlide).css({'display': 'block', 'right': 'auto', 'left': '-600px'}).animate({left: leftVal + 'px', opacity: 1}, 600).siblings().css('right', 'auto').animate({left: '1200px', opacity: 0}, 600, function(){
				$('#'+idSlide).siblings().css({right: 'auto', left: '-600px', display: 'none'});
				currentAnim = false;
			});
		}else{
			$('#'+idSlide).css({'display': 'block', 'left': 'auto', 'right': '-600px'}).animate({right: 0, opacity: 1}, 600).siblings().css('left', 'auto').animate({right: '1200px', opacity: 0}, 600, function(){
				$('#'+idSlide).siblings().css({left: 'auto', right: '-600px', display: 'none'});
				currentAnim = false;
			});
		}
	}

	vignettesEnt.on('click keypress', function(event){
		if(event.which === 13 || event.type === 'click' && !currentAnim){
			var dataSlide = $(this).attr('data-slide');
			slideVignettes(dataSlide);
			slideText(dataSlide, true);
		}
	});

	$('#navEnt').find('button').on('click', function(){
		if(!currentAnim){
			var dataNb = equipe.find('.vignettesEnt').find('.on').index(), 
				dataSlide;

			if($(this).hasClass('next')){
				dataSlide = dataNb == 3 ? vignettesEnt.eq(0).attr('data-slide') : vignettesEnt.eq(dataNb).next().attr('data-slide');
				slideText(dataSlide, true);
			}else{
				dataSlide = dataNb == 0 ? vignettesEnt.eq(3).attr('data-slide') : vignettesEnt.eq(dataNb).prev().attr('data-slide');
				slideText(dataSlide, false);
			}

			slideVignettes(dataSlide);
		}
	});
}

function animSvgEnt(svg, frameWidth, frameHeight){
	var col = 6, row = 6, i = 0,
		steppedEase = new SteppedEase(col-1),
		tlaze = new TimelineMax();

	svg.animate({opacity: 1}, 300);

	for(i; i<row; i++){
		tlaze.add(TweenMax.fromTo(svg, 0.4, { backgroundPosition:'0 -'+(frameHeight*i)+'px'}, { backgroundPosition: '-'+(frameWidth*(col-1))+'px -'+(frameHeight*i)+'px', ease:steppedEase}));
	}
}


$(function(){
	detectTouchDevice();
	setFooter();

	$('#menu-main').length ? menuMain = $('#menu-main') : menuMain = $('.menuBlog');

	body.hasClass('blog') ? setSizeBugerMenu(768) : setSizeBugerMenu(979);
	
	setBurgerMenu();

	if(!body.hasClass('home')){
		setFirstStrong();
	}

	valOffset = [100, 150, 140, 70, 120, 80, 160, 190, 200, 400];

	if(html.hasClass('touch')){
		for(var i=0; i<valOffset.length; i++){
			valOffset[i] -= 80;
		}

		menuMain.find('a').on('click touchend', function(e) {
			window.location = $(this).attr('href');
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
		clickSubMenu(sectionsPartner);
		openFormPartner();
	}

	/* Page entreprise */
	if(equipe.length){
		sectionsEnt = [$('#vision').offset().top, $('#histoire').offset().top, $('#partenaires').offset().top, equipe.offset().top];
		clickSubMenu(sectionsEnt);

		equipe.find('.sliderEnt').css('height', equipe.find('.firstSlide').height());
		if(windowWidth > 979){
			setSliderEntreprise(50);
		}else{
			setSliderEntreprise(0);
			$('#philip').css('left', 0);
		}	
	}

	if(windowWidth > 767){
		$('#search').on('click', openSearchInput);
		$('#btnCat').on('click', function(){
			$('#cats').slideToggle(300);
			var btnCat = $(this).find('a');
			if(btnCat.hasClass('close')){
				btnCat.blur();
			}
			btnCat.toggleClass('close');
			return false;
		});
	}

	$('.share').on('click', function(){
		var ul = $(this).siblings('.socialm');
		ul.toggleClass('open');

		if(ul.hasClass('open')){
			windowWidth > 610 ? ul.animate({height: '109px', overflow: 'visible'}, 300) : ul.animate({width: '91px', overflow: 'visible'}, 300);
		}else{
			windowWidth > 610 ? ul.animate({height: 0, overflow: 'hidden'}, 300) : ul.animate({width: 0, overflow: 'hidden'}, 300);
			$(this).blur();
		}
		
		return false;
	});

	$(document).scroll(function() {
		myScroll = $(this).scrollTop();
		scroll();
		setFooter();
	});

	$(window).resize(function() {

		windowHeight = $(window).height();
		windowWidth = $(window).width();

		if(body.hasClass('home')){
			setVideoContainer();
		}

		setFooter();
		body.hasClass('blog') ? setSizeBugerMenu(768) : setSizeBugerMenu(979);
		adjustBurgerMenu();

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

		if($('#svgShop').length){
			animSvgEnt($('#svgShop'), 450, 400);
			if(html.hasClass('lt-ie9')){
				animSvgEnt($('#svgWorld'), 700, 260);
				animSvgEnt($('#svgSchema'), 130, 570);
			}
		}
	});

});