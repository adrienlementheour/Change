function detectTouchDevice(){isMobile.phone||isMobile.tablet||isMobile.seven_inch||isMobile.other_blackberry||isMobile.other_opera?$("html").hasClass("no-touch")&&$("html").removeClass("no-touch").addClass("touch"):$("html").hasClass("touch")&&$("html").removeClass("touch").addClass("no-touch")}function moveBurgerMenu(e,i){var t=0;"open"===i&&(t=200),e.animate({"margin-left":-t,"margin-right":t},"ease-in-out")}function setBurgerMenu(){$(".hamburger").find("a").click(function(){return $(this).parent(".hamburger").hasClass("burgerOn")?($("html").hasClass("no-touch")?moveBurgerMenu($("header"),"close"):$("#menu-header").animate({right:"-200px"},"ease-in-out"),moveBurgerMenu($("body"),"close"),$("#masque").fadeOut(),$(this).parent(".hamburger").removeClass("burgerOn")):($("html").hasClass("no-touch")?moveBurgerMenu($("header"),"open"):$("#menu-header").animate({right:"0"},"ease-in-out"),moveBurgerMenu($("body"),"open"),$("#masque").fadeIn(),$(this).parent(".hamburger").addClass("burgerOn")),!1}),$("#masque").click(function(){moveBurgerMenu($("header"),"close"),moveBurgerMenu($("body"),"close"),$("#menu-header").animate({right:"-200px"},"ease-in-out"),$(this).fadeOut(),$(".hamburger").removeClass("burgerOn")})}function adjustBurgerMenu(){$(".hamburger").hasClass("burgerOn")&&$(window).width()>979&&(moveBurgerMenu($("header"),"close"),moveBurgerMenu($("body"),"close"),$("#masque").fadeOut(),$(this).removeClass("burgerOn"))}function setSizeBugerMenu(){if($(window).width()<979){var e=$(window).height()+100;$("#menu-header").css("height",e+"px")}else $("#menu-header").css("height","auto")}function setFooter(){var e=$("html").height();$("footer").hasClass("bottom")&&(e=$("html").height()+$("footer").height(),e>=$(window).height()&&$("footer").removeClass("bottom")),e<$(window).height()&&$("footer").addClass("bottom")}function setFirstStrong(){if($(".content").find("p").length>0){var e=$(".content").find("p").eq(0),i=e.find("strong"),t=e.find("b");if(i.length>0){var o=i.eq(0),n=o.closest("p").html().indexOf("<strong>");0===n&&o.addClass("maj")}if(t.length>0){var s=t.eq(0),a=s.closest("p").html().indexOf("<b>");0===a&&s.addClass("maj")}}}function scroll(){var e=1.9,i=10;if(!$("html").hasClass("lt-ie9")){if(myScroll>100?$("html").hasClass("no-touch")&&$("#header").addClass("scrolled"):$("html").hasClass("no-touch")&&$("#header").removeClass("scrolled"),$("body").hasClass("home")){$(window).height()>900&&(e=1.5),$(window).height()>950&&(e=1.4),$(window).height()>1050&&(e=1.2),$(window).height()>1200&&(e=1);var t=-Math.ceil(myScroll/e);$("video").css("bottom",t+"px")}if($("body").hasClass("solution")){var o=Math.ceil(myScroll/i);$(window).width()>978?($("#screen-solution").css("margin-bottom",o+"px"),myScroll>600&&$("#shop").css("top",-o+"px"),myScroll>2470&&($("#nuage1").css("margin-top",-o/1.7+"px"),$("#nuage2").css("margin-top",-o+"px"))):($("#screen-solution").css("margin-bottom","0px"),$("#shop").css("top","0px"),$("#nuage1").css("margin-top","0px"),$("#nuage2").css("margin-top","0px"))}}}function setAnimHomeenCours(){animHencours=animHencours===!1?!0:!1}function setTimingSpan(e,i,t){e.css("-webkit-animation-duration",i),e.css("animation-duration",i),e.css("-webkit-animation-delay",t),e.css("animation-delay",t)}function animTxt(){setAnimHomeenCours();var e="customZoom animated big",i="1s",t="3s";$(".sentence").addClass("discret"),setTimingSpan($(".produits"),i,"1s"),$(".produits").addClass(e),$(".produits").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".produits").removeClass(e),setTimingSpan($(".vente"),i,"1s"),$(".vente").addClass(e)}),$(".vente").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".vente").removeClass(e),setTimingSpan($(".marque"),i,"1s"),$(".marque").addClass(e)}),$(".marque").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".marque").removeClass(e),setTimingSpan($(".ecommerce"),i,"1s"),$(".ecommerce").addClass(e)}),$(".ecommerce").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){$(".ecommerce").removeClass(e),$(".sentence").removeClass("discret"),setAnimHomeenCours()})}function setPlayAgainIndic(){$("#mask").css("cursor","pointer"),indic.fadeIn()}function gonePlayAgainIndic(){$("#mask").css("cursor","auto"),indic.fadeOut()}function onVideoEnd(e){e.bind("ended",function(){e.fadeOut(),setPlayAgainIndic(),$("#mask").click(function(){e[0].play(),animTxt(),setTimeout(function(){e.fadeIn()},10),gonePlayAgainIndic()})})}function setVideoContainer(){var e=$(window).height()-100;$("#containerVid").find(".container").css("height",e+"px"),751>e&&$("#containerVid").find("br").css("display","block"),$("html").hasClass("no-touch")&&$(window).width()>980&&($("#containerVid").find("video").length>0&&onVideoEnd($("#containerVid").find("video")),$("#containerVid").find("embed").length>0&&onVideoEnd($("#containerVid").find("embed")))}function playVideo(){var e;$("#containerVid").find("video").length>0&&(e=$("#containerVid").find("video")),$("#containerVid").find("embed").length>0&&(e=$("#containerVid").find("embed")),e[0].play(),setTimeout(function(){e.fadeIn()},10)}function resetSlideVid(e){for(var i=0;i<slidesVid.length;i++)i!==e&&slidesVid.eq(i).css("z-index","1");slidesVid.eq(e).css("z-index","2")}function setSlideVid(e){"2"!==slidesVid.eq(e).css("z-index")&&(slidesVid.eq(e).css({"z-index":"3",opacity:"0"}),TweenMax.to(slidesVid.eq(e),.5,{opacity:"1",onComplete:resetSlideVid,onCompleteParams:[e]}))}function slideshowVid(){countSlideVid++,countSlideVid===slidesVid.length-1&&(TweenMax.to($("#sliderVid"),.4,{opacity:"0"}),$("html").hasClass("no-touch")&&setPlayAgainIndic()),setSlideVid(countSlideVid),TweenMax.delayedCall(timerSlideVid,slideshowVid),$("#mask").click(function(){countSlideVid=-2,setSlideVid(countSlideVid),TweenMax.killTweensOf(slideshowVid),slideshowVid(),animTxt(),TweenMax.to($("#sliderVid"),.4,{opacity:"1"}),$("html").hasClass("no-touch")&&gonePlayAgainIndic()})}function setSliderVid(){for(var e=0;e<slidesVid.length;e++){var i=slidesVid.eq(e).data("img");slidesVid.eq(e).css("background-image","url("+i+")")}TweenMax.delayedCall(timerSlideVid,slideshowVid)}function resetSlide(e){for(var i=0;i<slides.length;i++)i!==e&&slides.eq(i).css("z-index","1");slides.eq(e).css("z-index","2")}function setSlide(e){if("2"!==slides.eq(e).css("z-index")){slides.eq(e).css({"z-index":"3",opacity:"0"});var i=vignettes.eq(e).position();TweenMax.to(pagination,.2,{left:i.left+5+"px",top:i.top+110+"px",ease:Quad.easeIn}),TweenMax.to(slides.eq(e),.5,{opacity:"1",onComplete:resetSlide,onCompleteParams:[e]})}}function slideshow(){countSlide++,countSlide===slides.length&&(countSlide=0),setSlide(countSlide),TweenMax.delayedCall(timerSlide,slideshow)}function setSlider(){for(var e=0;e<slides.length;e++){var i=slides.eq(e).data("img");slides.eq(e).css("background-image","url("+i+")")}for(var t=0;t<vignettes.length-1;t++)vignettes.eq(t).mouseover(function(){TweenMax.killTweensOf(slideshow);var e=$(this).index();setSlide(e)}).mouseout(function(){countSlide=$(this).index(),TweenMax.delayedCall(timerSlide,slideshow)});TweenMax.delayedCall(timerSlide,slideshow)}function initMap(){var e=[["Paris",48.8597311,2.3793472,"https://www.google.fr/maps/place/16+Bis+Avenue+Parmentier/@48.8597149,2.3792576,17z/data=!3m1!4b1!4m2!3m1!1s0x47e66df744c37131:0xd60d5e672814a3e9"],["Strasbourg",48.5809678,7.7543122,"https://www.google.fr/maps/place/30+Quai+des+Bateliers/@48.5809678,7.7543122,17z/data=!3m1!4b1!4m2!3m1!1s0x4796c854f4ca5601:0x7c8b5e817e4619b0"]],i;i=$("body").hasClass("lt-ie9")&&window.matchMedia("(min-width: 1150px)").matches?7:6;var t={zoom:i,center:new google.maps.LatLng(48.416715,4.9383584),panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,styles:[{elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f5f5f2"},{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"administrative.city",stylers:[{visibility:"simplified",color:"#34343c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{color:"#ffffff"},{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{color:"#ffffff"}]},{featureType:"road.local",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"landscape",stylers:[{color:"#efebe2"}]},{featureType:"poi.park",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#c7c7c7"},{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"poi.park",stylers:[{color:"#91b65d"}]},{featureType:"poi.park",stylers:[{gamma:1.51}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",stylers:[{visibility:"simplified"}]},{featureType:"road"},{featureType:"road"},{},{featureType:"road.highway"}]},o=document.getElementById("map"),n=new google.maps.Map(o,t),s="layoutImg/pin.png",a=new google.maps.Marker({position:new google.maps.LatLng(e[0][1],e[0][2]),title:e[0][0],url:e[0][3],icon:s,map:n});google.maps.event.addListener(a,"click",function(){window.open(a.url)});var l=new google.maps.Marker({position:new google.maps.LatLng(e[1][1],e[1][2]),title:e[1][0],url:e[1][3],icon:s,map:n});google.maps.event.addListener(l,"click",function(){window.open(l.url)})}function openForm(){$("#contactMail").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#contactMail").offset().top-70},500),$("#contactTel").hasClass("opened")&&$("html, body").delay(300).animate({scrollTop:$("#contactTel").offset().top-70},500),$("#contactMail").find("medium").hasClass("success")&&$("html, body").animate({scrollTop:$("#contactMail").offset().top-70},500),$("#contactTel").find("medium").hasClass("success")&&$("html, body").animate({scrollTop:$("#contactTel").offset().top-70},500),$("#soumettre").click(function(){return $("#contactMail").slideDown(100),$("#contactTel").slideUp(100,function(){$("html, body").animate({scrollTop:$("#contactMail").offset().top-70},600)}),!1}),$("#consultant").click(function(){return $("#contactTel").slideDown(100),$("#contactMail").slideUp(100,function(){$("html, body").animate({scrollTop:$("#contactTel").offset().top-70},600)}),!1}),setSizeBugerMenu()}function animVisuSolution(){TweenMax.to($("#screen-solution"),2,{y:0,opacity:1,ease:Cubic.easeIn})}function visuSolution(){TweenMax.set($("#screen-solution"),{y:50,opacity:0}),animVisuSolution()}function animTabFonc(){animTab=!0,TweenMax.to($("#tab1"),1,{y:0,opacity:1,transform:"rotate(-15deg)",ease:Cubic.easeIn}),TweenMax.to($("#tab2"),2,{y:0,opacity:1,transform:"rotate(5deg)",ease:Cubic.easeIn})}function tabFonc(){animTab===!1&&(TweenMax.set($("#tab1"),{y:100,opacity:0}),TweenMax.set($("#tab2"),{y:600,opacity:0}),myScroll>550&&animTabFonc())}var countSlide=0,slides,timerSlide=5,pagination,vignettes,countSlideVid=0,slidesVid,timerSlideVid=2.2,indic,animHencours=!1,myScroll,animTab=!1;$(function(){detectTouchDevice(),setFooter(),setSizeBugerMenu(),setBurgerMenu(),setFirstStrong(),$("body").hasClass("home")&&(indic=$("#containerVid").find(".rejouer"),$("html").hasClass("lt-ie9")?$("#containerVid").find(".container").css("height","700px"):setVideoContainer()),$("body").hasClass("solution")&&visuSolution(),$("body").hasClass("fonctionnalites")&&tabFonc(),$("body").hasClass("contactPage")&&(openForm(),google.maps.event.addDomListener(window,"load",initMap)),$(document).scroll(function(){myScroll=$(document).scrollTop(),scroll(),setFooter(),$("body").hasClass("fonctionnalites")&&tabFonc()})}),$(window).load(function(){$("body").hasClass("home")&&($("html").hasClass("lt-ie9")||$("html").hasClass("touch")||$("html").width()<979?(slidesVid=$("#sliderVid").find(".slides").find("li"),animTxt(),setSliderVid()):(animTxt(),playVideo()),slides=$("#slider").find(".slides").find("li"),vignettes=$("#slider").find(".vignettes").find("li"),pagination=$("#bulle"),setSlider())}),$(window).resize(function(){$("body").hasClass("home")&&setVideoContainer(),setFooter(),setSizeBugerMenu(),adjustBurgerMenu()});