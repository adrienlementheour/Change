function detectTouchDevice(){isMobile.phone||isMobile.tablet||isMobile.seven_inch||isMobile.other_blackberry||isMobile.other_opera?$("html").hasClass("no-touch")&&$("html").removeClass("no-touch").addClass("touch"):$("html").hasClass("touch")&&$("html").removeClass("touch").addClass("no-touch")}function moveBurgerMenu(e,i){var o=0;"open"===i&&(o=200),e.animate({"margin-left":-o,"margin-right":o},"ease-in-out")}function setBurgerMenu(){$(".hamburger").find("a").click(function(){return $(this).parent(".hamburger").hasClass("burgerOn")?($("html").hasClass("no-touch")?moveBurgerMenu($("header"),"close"):$("#menu-main").animate({right:"-200px"},"ease-in-out"),moveBurgerMenu($("body"),"close"),$("#masque").fadeOut(),$(this).parent(".hamburger").removeClass("burgerOn")):($("html").hasClass("no-touch")?moveBurgerMenu($("header"),"open"):$("#menu-main").animate({right:"0"},"ease-in-out"),moveBurgerMenu($("body"),"open"),$("#masque").fadeIn(),$(this).parent(".hamburger").addClass("burgerOn")),!1}),$("#masque").click(function(){moveBurgerMenu($("header"),"close"),moveBurgerMenu($("body"),"close"),$("#menu-main").animate({right:"-200px"},"ease-in-out"),$(this).fadeOut(),$(".hamburger").removeClass("burgerOn")})}function adjustBurgerMenu(){$(".hamburger").hasClass("burgerOn")&&$(window).width()>979&&(moveBurgerMenu($("header"),"close"),moveBurgerMenu($("body"),"close"),$("#masque").fadeOut(),$(this).removeClass("burgerOn"))}function setSizeBugerMenu(){if($(window).width()<979){var e=$(window).height()+100;$("#menu-main").css("height",e+"px")}else $("#menu-main").css("height","auto")}function setFooter(){var e=$("html").height();$("footer").hasClass("bottom")&&(e=$("html").height()+$("footer").height(),e>=$(window).height()&&$("footer").removeClass("bottom")),e<$(window).height()&&$("footer").addClass("bottom")}function setFirstStrong(){if($(".content").find("p").length>0){var e=$(".content").find("p").eq(0),i=e.find("strong"),o=e.find("b");if(i.length>0){var t=i.eq(0),s=t.closest("p").html().indexOf("<strong>");0===s&&t.addClass("maj")}if(o.length>0){var n=o.eq(0),l=n.closest("p").html().indexOf("<b>");0===l&&n.addClass("maj")}}}function scroll(){var e=1.9,i=10,o=Math.ceil(myScroll/i);if(!$("html").hasClass("lt-ie9")){if($("body").hasClass("home")){$(window).height()>900&&(e=1.5),$(window).height()>950&&(e=1.4),$(window).height()>1050&&(e=1.2),$(window).height()>1200&&(e=1);var t=-Math.ceil(myScroll/e);$("video").css("bottom",t+"px")}($("body").hasClass("solution")||$("body").hasClass("page-template-solution-php"))&&($(window).width()>978?($("#screen-solution").css("margin-bottom",o+"px"),myScroll>600&&$("#shop").css("top",-o/1.05+"px"),myScroll>2470&&($("#nuage1").css("margin-top",-o/1.7+"px"),$("#nuage2").css("margin-top",-o+"px"))):($("#screen-solution").css("margin-bottom","0px"),$("#shop").css("top","0px"),$("#nuage1").css("margin-top","0px"),$("#nuage2").css("margin-top","0px")))}}function setPlayAgainIndic(){$("#mask").css("cursor","pointer"),indic.fadeIn()}function gonePlayAgainIndic(){$("#mask").css("cursor","auto"),indic.fadeOut()}function onVideoEnd(e){e.bind("ended",function(){e.fadeOut(),setPlayAgainIndic(),$("#mask").click(function(){e[0].play(),setTimeout(function(){e.fadeIn()},10),gonePlayAgainIndic()})})}function setVideoContainer(){var e=$(window).height()-100;$("#containerVid").find(".container").css("height",e+"px"),751>e&&$("#containerVid").find("br").css("display","block"),$("html").hasClass("no-touch")&&$(window).width()>980&&($("#containerVid").find("video").length>0&&onVideoEnd($("#containerVid").find("video")),$("#containerVid").find("embed").length>0&&onVideoEnd($("#containerVid").find("embed")))}function playVideo(){var e;$("#containerVid").find("video").length>0&&(e=$("#containerVid").find("video")),$("#containerVid").find("embed").length>0&&(e=$("#containerVid").find("embed")),e[0].play(),setTimeout(function(){e.fadeIn()},10)}function resetSlideVid(e){for(var i=0;i<slidesVid.length;i++)i!==e&&slidesVid.eq(i).css("z-index","1");slidesVid.eq(e).css("z-index","2")}function setSlideVid(e){"2"!==slidesVid.eq(e).css("z-index")&&(slidesVid.eq(e).css({"z-index":"3",opacity:"0"}),TweenMax.to(slidesVid.eq(e),.5,{opacity:"1",onComplete:resetSlideVid,onCompleteParams:[e]}))}function slideshowVid(){countSlideVid++,countSlideVid===slidesVid.length-1&&(TweenMax.to($("#sliderVid"),.4,{opacity:"0"}),$("html").hasClass("no-touch")&&setPlayAgainIndic()),setSlideVid(countSlideVid),TweenMax.delayedCall(timerSlideVid,slideshowVid),$("#mask").click(function(){countSlideVid=-2,setSlideVid(countSlideVid),TweenMax.killTweensOf(slideshowVid),slideshowVid(),TweenMax.to($("#sliderVid"),.4,{opacity:"1"}),$("html").hasClass("no-touch")&&gonePlayAgainIndic()})}function setSliderVid(){for(var e=0;e<slidesVid.length;e++){var i=slidesVid.eq(e).data("img");slidesVid.eq(e).css("background-image","url("+i+")")}TweenMax.delayedCall(timerSlideVid,slideshowVid)}function resetSlide(e){for(var i=0;i<slides.length;i++)i!==e&&slides.eq(i).css("z-index","1");slides.eq(e).css("z-index","2")}function setSlide(e){if("2"!==slides.eq(e).css("z-index")){slides.eq(e).css({"z-index":"3",opacity:"0"});var i=vignettes.eq(e).position();TweenMax.to(pagination,.2,{left:i.left+5+"px",top:i.top+110+"px",ease:Quad.easeIn}),TweenMax.to(slides.eq(e),.5,{opacity:"1",onComplete:resetSlide,onCompleteParams:[e]})}}function slideshow(){countSlide++,countSlide===slides.length&&(countSlide=0),setSlide(countSlide),TweenMax.delayedCall(timerSlide,slideshow)}function setSlider(){for(var e=0;e<slides.length;e++){var i=slides.eq(e).data("img");slides.eq(e).find(".img").css("background-image","url("+i+")")}for(var o=0;o<vignettes.length-1;o++)vignettes.eq(o).mouseover(function(){TweenMax.killTweensOf(slideshow);var e=$(this).index();setSlide(e)}).mouseout(function(){countSlide=$(this).index(),TweenMax.delayedCall(timerSlide,slideshow)});TweenMax.delayedCall(timerSlide,slideshow)}function initMap(){var e;e=$("body").hasClass("lt-ie9")&&window.matchMedia("(min-width: 1150px)").matches?7:6;var i={zoom:e,center:new google.maps.LatLng(48.416715,4.9383584),panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,styles:[{elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f5f5f2"},{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"administrative.city",stylers:[{visibility:"simplified",color:"#34343c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{color:"#ffffff"},{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{color:"#ffffff"}]},{featureType:"road.local",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"landscape",stylers:[{color:"#efebe2"}]},{featureType:"poi.park",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#c7c7c7"},{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"poi.park",stylers:[{color:"#91b65d"}]},{featureType:"poi.park",stylers:[{gamma:1.51}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",stylers:[{visibility:"simplified"}]},{featureType:"road"},{featureType:"road"},{},{featureType:"road.highway"}]},o=document.getElementById("map"),t=new google.maps.Map(o,i),s=new google.maps.Marker({position:new google.maps.LatLng(locations[0][1],locations[0][2]),title:locations[0][0],url:locations[0][3],icon:pin,map:t});google.maps.event.addListener(s,"click",function(){window.open(s.url)});var n=new google.maps.Marker({position:new google.maps.LatLng(locations[1][1],locations[1][2]),title:locations[1][0],url:locations[1][3],icon:pin,map:t});google.maps.event.addListener(n,"click",function(){window.open(n.url)})}function openForm(){$("#contactMail").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#contactMail").offset().top-70},500),$("#contactTel").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#contactTel").offset().top-70},500),$("#soumettre").click(function(){return $("#contactMail").slideDown(100),$("#contactTel").slideUp(100,function(){$("html, body").animate({scrollTop:$("#contactMail").offset().top-70},600)}),!1}),$("#consultant").click(function(){return $("#contactTel").slideDown(100),$("#contactMail").slideUp(100,function(){$("html, body").animate({scrollTop:$("#contactTel").offset().top-70},600)}),!1}),setSizeBugerMenu()}function openFormDossier(){$("#formDossier").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#formDossier").offset().top+80},500),$("#formDossier").find(".container").hasClass("success")&&$("html, body").animate({scrollTop:$("#formDossier").offset().top-70},500),$("#dossier").click(function(){return $(this).fadeOut(100,function(){$("#formDossier").find("form").slideDown(200,function(){$("html, body").animate({scrollTop:$(this).offset().top-120},600)})}),!1}),setSizeBugerMenu()}function openFormClub(){$("#inscription").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#inscription").offset().top-120},500),$("#btnClub").click(function(){return $("html, body").animate({scrollTop:$("#inscription").offset().top-70},600),!1})}function animVisuSolution(){TweenMax.to($("#screen-solution"),2,{y:0,opacity:1,ease:Cubic.easeIn})}function visuSolution(){TweenMax.set($("#screen-solution"),{y:50,opacity:0})}function ploup(){$(".ploup").spriteanim();var e=Math.floor(Math.random()*$(".ploup").length);$(".ploup").eq(e).spriteanim("play").one("frame-10-shown",function(){$(this).spriteanim("stop"),ploup()})}function openRef(){var e=$(".ref").find(".first");$(window).width()>850?e.mouseout(function(){$(this).removeClass("openRef")}):e.removeClass("openRef")}var countSlide=0,slides,timerSlide=5,pagination,vignettes,countSlideVid=0,slidesVid,timerSlideVid=2.2,indic,myScroll;$(function(){detectTouchDevice(),setFooter(),setSizeBugerMenu(),setBurgerMenu(),setFirstStrong(),$("html").hasClass("touch")&&$("#menu-main").find("a").on("click touchend",function(e){var i=$(this),o=i.attr("href");window.location=o}),$("body").hasClass("home")&&(indic=$("#containerVid").find(".rejouer"),$("html").hasClass("lt-ie9")?$("#containerVid").find(".container").css("height","700px"):setVideoContainer()),($("body").hasClass("solution")||$("body").hasClass("page-template-solution-php"))&&(visuSolution(),ploup()),($("body").hasClass("contactPage")||$("body").hasClass("page-template-contact-php"))&&openForm(),($("body").hasClass("presse")||$("body").hasClass("page-template-presse-php"))&&openFormDossier(),($("body").hasClass("club")||$("body").hasClass("page-template-club-php"))&&openFormClub(),($("body").hasClass("references")||$("body").hasClass("page-template-references-php"))&&openRef(),$(document).scroll(function(){myScroll=$(document).scrollTop(),scroll(),setFooter()})}),$(window).load(function(){$("body").hasClass("home")&&($("html").hasClass("lt-ie9")||$("html").hasClass("touch")||$("html").width()<979?(slidesVid=$("#sliderVid").find(".slides").find("li"),setSliderVid()):playVideo(),slides=$("#slider").find(".slides").find("li"),vignettes=$("#slider").find(".vignettes").find("li"),pagination=$("#bulle"),setSlider()),($("body").hasClass("solution")||$("body").hasClass("page-template-solution-php"))&&animVisuSolution()}),$(window).resize(function(){$("body").hasClass("home")&&setVideoContainer(),setFooter(),setSizeBugerMenu(),adjustBurgerMenu()});