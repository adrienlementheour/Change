function detectTouchDevice(){isMobile.phone||isMobile.tablet||isMobile.seven_inch||isMobile.other_blackberry||isMobile.other_opera?html.hasClass("no-touch")&&html.removeClass("no-touch").addClass("touch"):html.hasClass("touch")&&html.removeClass("touch").addClass("no-touch")}function moveBurgerMenu(e,t){var i=0;"open"===t&&(i=200),e.animate({"margin-left":-i,"margin-right":i},"ease-in-out")}function setBurgerMenu(){burger.find("a").click(function(){return burger.hasClass("burgerOn")?(html.hasClass("no-touch")?moveBurgerMenu(header,"close"):menuMain.animate({right:"-200px"},"ease-in-out"),moveBurgerMenu(body,"close"),masque.fadeOut(),burger.removeClass("burgerOn")):(html.hasClass("no-touch")?moveBurgerMenu(header,"open"):menuMain.animate({right:"0"},"ease-in-out"),moveBurgerMenu(body,"open"),masque.fadeIn(),burger.addClass("burgerOn")),!1}),masque.click(function(){moveBurgerMenu(header,"close"),moveBurgerMenu(body,"close"),menuMain.animate({right:"-200px"},"ease-in-out"),$(this).fadeOut(),burger.removeClass("burgerOn")})}function adjustBurgerMenu(){burger.hasClass("burgerOn")&&windowWidth>979&&(moveBurgerMenu(header,"close"),moveBurgerMenu(body,"close"),masque.fadeOut(),$(this).removeClass("burgerOn"))}function setSizeBugerMenu(){if(979>windowWidth){var e=windowHeight+100;menuMain.css("height",e+"px")}else menuMain.css("height","auto")}function hoverHeader(){header.on("mouseenter",function(){topHeader.removeClass("on")}).on("mouseleave",function(){topHeader.addClass("on")})}function setFooter(){var e=html.height(),t=$("footer");t.hasClass("bottom")&&(e+=t.height(),e>=windowHeight&&t.removeClass("bottom")),windowHeight>e&&t.addClass("bottom")}function setFirstStrong(){var e=$(".content").find("p");if(e.length){var t=e.eq(0),i=t.find("strong"),s=t.find("b");if(i.length){var o=i.eq(0),n=o.closest("p").html().indexOf("<strong>");0===n&&o.addClass("maj")}if(s.length){var l=s.eq(0),a=l.closest("p").html().indexOf("<b>");0===a&&l.addClass("maj")}}}function scroll(){function e(e){var t=subMenu.find("li").eq(e);t.siblings("li").find("a").removeClass("actif"),t.find("a").addClass("actif"),n.css("left",t.offset().left+t.width()/2+15)}var t=1.9,i=9,s=Math.ceil(myScroll/i);if(body.hasClass("home")||(myScroll>50?topHeader.addClass("on"):topHeader.removeClass("on")),topHeader.hasClass("on")&&hoverHeader(),!html.hasClass("lt-ie9")){if(body.hasClass("home")){windowHeight>900&&(t=1.5),windowHeight>950&&(t=1.4),windowHeight>1050&&(t=1.2),windowHeight>1200&&(t=1);var o=-Math.ceil(myScroll/t);$("video").css("bottom",o+"px")}if((body.hasClass("solution")||body.hasClass("page-template-solution-php"))&&(windowWidth>978?($("#screen-solution").css("margin-bottom",s+"px"),myScroll>600&&$("#shop").css("top",-s+"px"),myScroll>2470&&($("#nuage1").css("margin-top",-s/1.7+"px"),$("#nuage2").css("margin-top",-s+"px"))):($("#screen-solution").css("margin-bottom","0"),$("#shop").css("top","0"),$("#nuage1").css("margin-top","0"),$("#nuage2").css("margin-top","0"))),body.hasClass("partner")){var n=subMenu.find(".bulleMenu");myScroll<=sectionsPartner[0]-valOffset[8]&&n.css("left","-50px");for(var l=0;l<sectionsPartner.length;l++)myScroll>sectionsPartner[l]-valOffset[6]&&myScroll<=sectionsPartner[l+1]-valOffset[6]&&e(l);myScroll<=sectionsPartner[0]-valOffset[6]&&subMenu.find("a").removeClass("actif"),myScroll>sectionsPartner[3]-valOffset[7]&&e(3);var a=windowHeight-150;myScroll>=$(".titreRect1").offset().top-a&&drawTitre1===!1&&(drawTitre1=!0,tlTitre1.staggerTo(titre1,.8,{drawSVG:"100%",ease:Power1.easeInOut})),myScroll>=$(".titreRect2").offset().top-a&&drawTitre2===!1&&(drawTitre2=!0,tlTitre2.staggerTo(titre2,.8,{drawSVG:"100%",ease:Power1.easeInOut})),myScroll>=$(".titreRect3").offset().top-a&&drawTitre3===!1&&(drawTitre3=!0,tlTitre3.staggerTo(titre3,.8,{drawSVG:"100%",ease:Power1.easeInOut}))}}}function setPlayAgainIndic(){$("#mask").css("cursor","pointer"),indic.fadeIn()}function gonePlayAgainIndic(){$("#mask").css("cursor","auto"),indic.fadeOut()}function onVideoEnd(e){e.bind("ended",function(){e.fadeOut(),setPlayAgainIndic(),$("#mask").click(function(){e[0].play(),setTimeout(function(){e.fadeIn()},10),gonePlayAgainIndic()})})}function setVideoContainer(){var e=windowHeight-100;containerVid.find(".container").css("height",e+"px"),751>e&&containerVid.find("br").css("display","block"),html.hasClass("no-touch")&&windowWidth>980&&(containerVid.find("video").length&&onVideoEnd(containerVid.find("video")),containerVid.find("embed").length&&onVideoEnd(containerVid.find("embed")))}function playVideo(){var e;containerVid.find("video").length&&(e=containerVid.find("video")),containerVid.find("embed").length&&(e=containerVid.find("embed")),e[0].play(),setTimeout(function(){e.fadeIn()},10)}function resetSlideVid(e){for(var t=0;t<slidesVid.length;t++)t!==e&&slidesVid.eq(t).css("z-index","1");slidesVid.eq(e).css("z-index","2")}function setSlideVid(e){"2"!==slidesVid.eq(e).css("z-index")&&(slidesVid.eq(e).css({"z-index":"3",opacity:"0"}),TweenMax.to(slidesVid.eq(e),.5,{opacity:"1",onComplete:resetSlideVid,onCompleteParams:[e]}))}function slideshowVid(){countSlideVid++,countSlideVid===slidesVid.length-1&&(TweenMax.to($("#sliderVid"),.4,{opacity:"0"}),html.hasClass("no-touch")&&setPlayAgainIndic()),setSlideVid(countSlideVid),TweenMax.delayedCall(timerSlideVid,slideshowVid),$("#mask").click(function(){countSlideVid=-2,setSlideVid(countSlideVid),TweenMax.killTweensOf(slideshowVid),slideshowVid(),TweenMax.to($("#sliderVid"),.4,{opacity:"1"}),html.hasClass("no-touch")&&gonePlayAgainIndic()})}function setSliderVid(){for(var e=0;e<slidesVid.length;e++){var t=slidesVid.eq(e).data("img");slidesVid.eq(e).css("background-image","url("+t+")")}TweenMax.delayedCall(timerSlideVid,slideshowVid)}function resetSlide(e){for(var t=0;t<slides.length;t++)t!==e&&slides.eq(t).css("z-index","1");slides.eq(e).css("z-index","2")}function setSlide(e){if("2"!==slides.eq(e).css("z-index")){slides.eq(e).css({"z-index":"3",opacity:"0"});var t=vignettes.eq(e).position();TweenMax.to(pagination,.2,{left:t.left+5+"px",top:t.top+110+"px",ease:Quad.easeIn}),TweenMax.to(slides.eq(e),.5,{opacity:"1",onComplete:resetSlide,onCompleteParams:[e]})}}function slideshow(){countSlide++,countSlide===slides.length&&(countSlide=0),setSlide(countSlide),TweenMax.delayedCall(timerSlide,slideshow)}function setSlider(){for(var e=0;e<slides.length;e++){var t=slides.eq(e).data("img");slides.eq(e).find(".img").css("background-image","url("+t+")")}for(var i=0;i<vignettes.length-1;i++)vignettes.eq(i).mouseover(function(){TweenMax.killTweensOf(slideshow);var e=$(this).index();setSlide(e)}).mouseout(function(){countSlide=$(this).index(),TweenMax.delayedCall(timerSlide,slideshow)});TweenMax.delayedCall(timerSlide,slideshow)}function initMap(){var e;e=body.hasClass("lt-ie9")&&window.matchMedia("(min-width: 1150px)").matches?7:6;var t={zoom:e,center:new google.maps.LatLng(48.416715,4.9383584),panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,styles:[{elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f5f5f2"},{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"administrative.city",stylers:[{visibility:"simplified",color:"#34343c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{color:"#ffffff"},{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{color:"#ffffff"}]},{featureType:"road.local",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"landscape",stylers:[{color:"#efebe2"}]},{featureType:"poi.park",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#c7c7c7"},{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"poi.park",stylers:[{color:"#91b65d"}]},{featureType:"poi.park",stylers:[{gamma:1.51}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",stylers:[{visibility:"simplified"}]},{featureType:"road"},{featureType:"road"},{},{featureType:"road.highway"}]},i=document.getElementById("map"),s=new google.maps.Map(i,t),o=new google.maps.Marker({position:new google.maps.LatLng(locations[0][1],locations[0][2]),title:locations[0][0],url:locations[0][3],icon:pin,map:s});google.maps.event.addListener(o,"click",function(){window.open(o.url)});var n=new google.maps.Marker({position:new google.maps.LatLng(locations[1][1],locations[1][2]),title:locations[1][0],url:locations[1][3],icon:pin,map:s});google.maps.event.addListener(n,"click",function(){window.open(n.url)})}function openForm(){$("#contactMail").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#contactMail").offset().top-valOffset[3]},500),$("#contactTel").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#contactTel").offset().top-valOffset[3]},500),$("#soumettre").click(function(){return $("#contactMail").slideDown(100),$("#contactTel").slideUp(100,function(){htmlBody.animate({scrollTop:$("#contactMail").offset().top-valOffset[3]},600)}),!1}),$("#consultant").click(function(){return $("#contactTel").slideDown(100),$("#contactMail").slideUp(100,function(){htmlBody.animate({scrollTop:$("#contactTel").offset().top-valOffset[3]},600)}),!1}),setSizeBugerMenu()}function openFormDossier(){$("#formDossier").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#formDossier").offset().top+valOffset[5]},500),$("#formDossier").find(".container").hasClass("success")&&htmlBody.animate({scrollTop:$("#formDossier").offset().top-valOffset[3]},500),$("#dossier").click(function(){return $(this).fadeOut(100,function(){$("#formDossier").find("form").slideDown(200,function(){htmlBody.animate({scrollTop:$(this).offset().top-valOffset[4]},600)})}),!1}),setSizeBugerMenu()}function openFormClub(){$("#inscription").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#inscription").offset().top-valOffset[4]},500),$("#btnClub").click(function(){return htmlBody.animate({scrollTop:$("#inscription").offset().top-valOffset[3]},600),!1})}function setRect(){tlRect=new TimelineLite,path=$(".bigSvg").find("path"),"none"===$(".bigSvg").css("display")&&(path=$(".smallSvg").find("path")),tlRect.set(path,{drawSVG:0}),tlTitre1=new TimelineLite,titre1=$(".titreRect1").find("rect"),tlTitre1.set(titre1,{drawSVG:0}),tlTitre2=new TimelineLite,titre2=$(".titreRect2").find("rect"),tlTitre2.set(titre2,{drawSVG:0}),tlTitre3=new TimelineLite,titre3=$(".titreRect3").find("rect"),tlTitre1.set(titre3,{drawSVG:0})}function appendSvg(){"none"===$(".bigSvg").css("display")?$(".smallSvg").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="508px" height="208px">\n									<path d="M 465 4 500 4 500 200 480 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n									<path d="M 160 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n								</svg>'):$(".bigSvg").append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768px" height="208px">\n								<path d="M 490 4 760 4 760 200 730 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n								<path d="M 385 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n							</svg>');var e='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233px" height="144px">\n						<rect x="3" y="3" stroke="#47acdc" stroke-width="3" width="227" height="138" fill="none" stroke-linejoin="round"/>\n					</svg>';$(".titreRect1").append(e),$(".titreRect2").append(e),$(".titreRect3").append(e),setRect()}function openFormPartner(){function e(){return htmlBody.animate({scrollTop:sectionsPartner[3]-valOffset[1]},600),!1}$("#partenaire").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:sectionsPartner[3]-valOffset[2]},500),$("#partnerSol").click(e),$("#partnerTech").click(e)}function clickSubMenu(){function e(e,t){htmlBody.animate({scrollTop:sectionsPartner[e]-t},600)}subMenu.find("a").eq(0).click(function(){return e(0,valOffset[0]),!1}),subMenu.find("a").eq(1).click(function(){return e(1,valOffset[0]),!1}),subMenu.find("a").eq(2).click(function(){return e(2,valOffset[1]),!1}),subMenu.find("a").eq(3).click(function(){return e(3,valOffset[1]),!1})}function animVisuSolution(){TweenMax.to($("#screen-solution"),2,{y:0,opacity:1,ease:Cubic.easeIn})}function visuSolution(){TweenMax.set($("#screen-solution"),{y:50,opacity:0})}function ploup(){var e=$(".ploup");e.spriteanim();var t=Math.floor(Math.random()*e.length);e.eq(t).spriteanim("play").one("frame-10-shown",function(){$(this).spriteanim("stop"),ploup()})}function openRef(){var e=$(".ref").find(".first");windowWidth>850?e.mouseout(function(){$(this).removeClass("openRef")}):e.removeClass("openRef")}function openSearchInput(e){e.preventDefault();var t=$("#searchInput"),i=t.val(),s=i.length;0!==s&&t.hasClass("open")?$("#searchform").submit():t.toggleClass("open").focus()}var countSlide=0,slides,timerSlide=5,pagination,vignettes,countSlideVid=0,slidesVid,timerSlideVid=2.2,indic,myScroll,sectionsPartner,tlRect,path,tlTitre1,titre1,drawTitre1=!1,tlTitre2,titre2,drawTitre2=!1,tlTitre3,titre3,drawTitre3=!1,valOffset,body=$("body"),html=$("html"),burger=$(".hamburger"),header=$("header"),masque=$("#masque"),menuMain,subMenu=$("#subMenu"),containerVid=$("#containerVid"),htmlBody=$("html, body"),topHeader=$(".top-header"),windowHeight=$(window).height(),windowWidth=$(window).width();$(function(){if(detectTouchDevice(),setFooter(),menuMain=$($("#menu-main").length?"#menu-main":".menuBlog"),setSizeBugerMenu(),setBurgerMenu(),body.hasClass("home")||setFirstStrong(),valOffset=[100,150,140,70,120,80,160,190,200],html.hasClass("touch")){for(var e=0;e<valOffset.length;e++)valOffset[e]-=80;menuMain.find("a").on("click touchend",function(e){var t=$(this),i=t.attr("href");window.location=i})}body.hasClass("home")&&(hoverHeader(),indic=containerVid.find(".rejouer"),html.hasClass("lt-ie9")?containerVid.find(".container").css("height","700px"):setVideoContainer()),(body.hasClass("solution")||body.hasClass("page-template-solution-php"))&&(visuSolution(),ploup()),(body.hasClass("contactPage")||body.hasClass("page-template-contact-php"))&&openForm(),(body.hasClass("presse")||body.hasClass("page-template-presse-php"))&&openFormDossier(),(body.hasClass("club")||body.hasClass("page-template-club-php"))&&openFormClub(),(body.hasClass("references")||body.hasClass("page-template-references-php"))&&openRef(),body.hasClass("partner")&&(!html.hasClass("lt-ie9")&&html.hasClass("svg")&&appendSvg(),sectionsPartner=[$("#solution").offset().top,$("#technologiques").offset().top,$("#ensemble").offset().top,$("#partenaire").offset().top],subMenu.find(".bulleMenu").css("left","-50px"),clickSubMenu(),openFormPartner()),windowWidth>767&&($("#search").on("click",openSearchInput),$("#btnCat").on("click",function(){$("#cats").slideToggle(300);var e=$(this).find("a");return e.hasClass("close")&&e.blur(),e.toggleClass("close"),!1})),$("#share").on("click",function(){return $("#socialm").slideToggle(300),$(this).hasClass("close")&&$(this).blur(),$(this).toggleClass("close"),!1}),$(document).scroll(function(){myScroll=$(this).scrollTop(),scroll(),setFooter()}),$(window).resize(function(){windowHeight=$(window).height(),windowWidth=$(window).width(),body.hasClass("home")&&setVideoContainer(),setFooter(),setSizeBugerMenu(),adjustBurgerMenu()})}),$(window).load(function(){body.hasClass("home")&&(html.hasClass("lt-ie9")||html.hasClass("touch")||html.width()<979?(slidesVid=$("#sliderVid").find(".slides").find("li"),setSliderVid()):playVideo(),slides=$("#slider").find(".slides").find("li"),vignettes=$("#slider").find(".vignettes").find("li"),pagination=$("#bulle"),setSlider()),(body.hasClass("solution")||body.hasClass("page-template-solution-php"))&&animVisuSolution(),body.hasClass("partner")&&!html.hasClass("lt-ie9")&&tlRect.staggerFromTo(path,.8,{drawSVG:0},{drawSVG:"100%",ease:Power1.easeInOut},.7)});