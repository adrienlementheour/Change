function detectTouchDevice(){isMobile.phone||isMobile.tablet||isMobile.seven_inch||isMobile.other_blackberry||isMobile.other_opera?html.hasClass("no-touch")&&html.removeClass("no-touch").addClass("touch"):html.hasClass("touch")&&html.removeClass("touch").addClass("no-touch")}function moveBurgerMenu(e,t){var i=0;"open"===t&&(i=200),e.animate({marginLeft:-i,marginRight:i},"ease-in-out")}function setBurgerMenu(){burger.find("a").click(function(){return burger.hasClass("burgerOn")?("fixed"!=menuMain.css("position")?moveBurgerMenu(header,"close"):menuMain.animate({right:"-200px"},"ease-in-out"),moveBurgerMenu(body,"close"),masque.fadeOut(),burger.removeClass("burgerOn"),header.removeClass("on"),html.hasClass("no-touch")&&"fixed"!=menuMain.css("position")&&header.on("mouseleave",disappearHeader)):("fixed"!=menuMain.css("position")?moveBurgerMenu(header,"open"):menuMain.animate({right:0},"ease-in-out"),moveBurgerMenu(body,"open"),masque.fadeIn(),burger.addClass("burgerOn"),header.addClass("on"),html.hasClass("no-touch")&&"fixed"!=menuMain.css("position")&&(header.off("mouseleave",disappearHeader),hoverHeader())),!1}),masque.click(function(){moveBurgerMenu(header,"close"),moveBurgerMenu(body,"close"),menuMain.animate({right:"-200px"},"ease-in-out"),$(this).fadeOut(),burger.removeClass("burgerOn")})}function adjustBurgerMenu(){burger.hasClass("burgerOn")&&windowWidth>979&&(moveBurgerMenu(header,"close"),moveBurgerMenu(body,"close"),masque.fadeOut(),$(this).removeClass("burgerOn"))}function setSizeBugerMenu(e){if(e>windowWidth){var t=windowHeight+100;menuMain.css("height",t+"px")}else menuMain.css("height","auto")}function hoverHeader(){header.on("mouseenter",function(){topHeader.hasClass("on")&&topHeader.removeClass("on")}).on("mouseleave",function(){topHeader.hasClass("on")||topHeader.addClass("on")})}function setFooter(){var e=html.height(),t=$("footer");t.hasClass("bottom")&&(e+=t.height(),e>=windowHeight&&t.removeClass("bottom")),windowHeight>e&&t.addClass("bottom")}function setFirstStrong(){function e(e,t){var i=e.eq(0),s=i.closest("p").html().indexOf(t);0===s&&i.addClass("maj")}var t=$(".content").find("p");if(t.length){var i=t.eq(0),s=i.find("strong"),o=i.find("b");s.length&&e(s,"<strong>"),o.length&&e(o,"<b>")}}function scroll(){function e(e){function t(e){var t=subMenu.find("li").eq(e);t.siblings().find("a").removeClass("actif"),t.find("a").addClass("actif"),i.css("left",t.offset().left+t.width()/2+15)}var i=subMenu.find(".bulleMenu");myScroll<=e[0]-valOffset[8]&&i.css("left","-50px");for(var s=0;s<e.length;s++)myScroll>e[s]-valOffset[6]&&myScroll<=e[s+1]-valOffset[6]&&t(s);myScroll<=e[0]-valOffset[6]&&subMenu.find("a").removeClass("actif"),myScroll>e[3]-valOffset[7]&&t(3)}var t=1.9,i=9,s=Math.ceil(myScroll/i);if("fixed"!=menuMain.css("position")&&(myScroll>50?topHeader.hasClass("on")||topHeader.addClass("on"):topHeader.hasClass("on")&&topHeader.removeClass("on"),body.hasClass("home")&&(myScroll>50?(header.addClass("on"),header.off("mouseleave",disappearHeader),hoverHeader()):(disappearHeader(),header.on("mouseleave",disappearHeader))),topHeader.hasClass("on")&&!body.hasClass("home")&&hoverHeader()),!html.hasClass("lt-ie9")){if(body.hasClass("home")){windowHeight>900&&(t=1.5),windowHeight>950&&(t=1.4),windowHeight>1050&&(t=1.2),windowHeight>1200&&(t=1);var o=-Math.ceil(myScroll/t);$("video").css("bottom",o+"px")}if($("#shop").length&&(windowWidth>978?($("#screen-solution").css("margin-bottom",s+"px"),myScroll>600&&$("#shop").css("top",-s+"px"),myScroll>2470&&($("#nuage1").css("margin-top",-s/1.7+"px"),$("#nuage2").css("margin-top",-s+"px"))):($("#screen-solution").css("margin-bottom","0"),$("#shop").css("top","0"),$("#nuage1").css("margin-top","0"),$("#nuage2").css("margin-top","0"))),subMenu.length&&e(body.hasClass("partner")?sectionsPartner:sectionsEnt),body.hasClass("partner")){var n=windowHeight-150;myScroll>=t1.offset().top-n&&!drawTitre1&&(drawTitre1=!0,tlTitre1.staggerTo(titre1,.8,{drawSVG:"100%",ease:Power1.easeInOut})),myScroll>=t2.offset().top-n&&!drawTitre2&&(drawTitre2=!0,tlTitre2.staggerTo(titre2,.8,{drawSVG:"100%",ease:Power1.easeInOut})),myScroll>=t3.offset().top-n&&!drawTitre3&&(drawTitre3=!0,tlTitre3.staggerTo(titre3,.8,{drawSVG:"100%",ease:Power1.easeInOut}))}}if($("#svgWorld").length&&(myScroll>$("#svgWorld").offset().top-valOffset[9]&&!animWorld&&(animWorld=!0,animSvgEnt($("#svgWorld"),700,260)),myScroll>$("#svgSchema").offset().top-valOffset[9]&&!animSchema)){animSchema=!0,animSvgEnt($("#svgSchema"),130,570);var a=$("#blockSchema").find("li"),l=a.length,r=0,d=0;for(r;l>r;r++)a.eq(r).delay(d).animate({opacity:1},300),d+=430}}function setPlayAgainIndic(){$("#mask").css("cursor","pointer"),indic.fadeIn()}function gonePlayAgainIndic(){$("#mask").css("cursor","auto"),indic.fadeOut()}function onVideoEnd(e){e.bind("ended",function(){e.fadeOut(),setPlayAgainIndic(),$("#mask").click(function(){e[0].play(),setTimeout(function(){e.fadeIn()},10),gonePlayAgainIndic()})})}function setVideoContainer(){var e=windowHeight-100;containerVid.find(".container").css("height",e+"px"),751>e&&containerVid.find("br").css("display","block"),html.hasClass("no-touch")&&windowWidth>980&&(containerVid.find("video").length&&onVideoEnd(containerVid.find("video")),containerVid.find("embed").length&&onVideoEnd(containerVid.find("embed")))}function playVideo(){var e;containerVid.find("video").length&&(e=containerVid.find("video")),containerVid.find("embed").length&&(e=containerVid.find("embed")),e[0].play(),setTimeout(function(){e.fadeIn()},10)}function resetSlideVid(e){for(var t=0;t<slidesVid.length;t++)t!==e&&slidesVid.eq(t).css("z-index","1");slidesVid.eq(e).css("z-index","2")}function setSlideVid(e){"2"!==slidesVid.eq(e).css("z-index")&&(slidesVid.eq(e).css({"z-index":"3",opacity:"0"}),TweenMax.to(slidesVid.eq(e),.5,{opacity:"1",onComplete:resetSlideVid,onCompleteParams:[e]}))}function slideshowVid(){countSlideVid++,countSlideVid===slidesVid.length-1&&(TweenMax.to($("#sliderVid"),.4,{opacity:"0"}),html.hasClass("no-touch")&&setPlayAgainIndic()),setSlideVid(countSlideVid),TweenMax.delayedCall(timerSlideVid,slideshowVid),$("#mask").click(function(){countSlideVid=-2,setSlideVid(countSlideVid),TweenMax.killTweensOf(slideshowVid),slideshowVid(),TweenMax.to($("#sliderVid"),.4,{opacity:"1"}),html.hasClass("no-touch")&&gonePlayAgainIndic()})}function setSliderVid(){for(var e=0;e<slidesVid.length;e++){var t=slidesVid.eq(e).data("img");slidesVid.eq(e).css("background-image","url("+t+")")}TweenMax.delayedCall(timerSlideVid,slideshowVid)}function resetSlide(e){for(var t=0;t<slides.length;t++)t!==e&&slides.eq(t).css("z-index","1");slides.eq(e).css("z-index","2")}function setSlide(e){if("2"!==slides.eq(e).css("z-index")){slides.eq(e).css({"z-index":"3",opacity:"0"});var t=vignettes.eq(e).position();TweenMax.to(pagination,.2,{left:t.left+5+"px",top:t.top+110+"px",ease:Quad.easeIn}),TweenMax.to(slides.eq(e),.5,{opacity:"1",onComplete:resetSlide,onCompleteParams:[e]})}}function slideshow(){countSlide++,countSlide===slides.length&&(countSlide=0),setSlide(countSlide),TweenMax.delayedCall(timerSlide,slideshow)}function setSlider(){for(var e=0;e<slides.length;e++)slides.eq(e).find(".img").css("background-image","url("+slides.eq(e).data("img")+")");for(var t=0;t<vignettes.length-1;t++)vignettes.eq(t).mouseover(function(){TweenMax.killTweensOf(slideshow),setSlide($(this).index())}).mouseout(function(){countSlide=$(this).index(),TweenMax.delayedCall(timerSlide,slideshow)});TweenMax.delayedCall(timerSlide,slideshow)}function initMap(){var e;e=body.hasClass("lt-ie9")&&window.matchMedia("(min-width: 1150px)").matches?7:6;var t={zoom:e,center:new google.maps.LatLng(48.416715,4.9383584),panControl:!1,zoomControl:!1,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,overviewMapControl:!1,styles:[{elementType:"labels.text",stylers:[{visibility:"off"}]},{featureType:"landscape.natural",elementType:"geometry.fill",stylers:[{color:"#f5f5f2"},{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"administrative.city",stylers:[{visibility:"simplified",color:"#34343c"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi.attraction",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"geometry.fill",stylers:[{color:"#ffffff"},{visibility:"on"}]},{featureType:"poi.business",stylers:[{visibility:"off"}]},{featureType:"poi.medical",stylers:[{visibility:"off"}]},{featureType:"poi.place_of_worship",stylers:[{visibility:"off"}]},{featureType:"poi.school",stylers:[{visibility:"off"}]},{featureType:"poi.sports_complex",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#ffffff"},{visibility:"simplified"}]},{featureType:"road.arterial",stylers:[{visibility:"simplified"},{color:"#ffffff"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{color:"#ffffff"},{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",stylers:[{color:"#ffffff"}]},{featureType:"road.local",stylers:[{color:"#ffffff"}]},{featureType:"poi.park",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"landscape",stylers:[{color:"#efebe2"}]},{featureType:"poi.park",stylers:[{visibility:"off"}]},{featureType:"road",stylers:[{color:"#ffffff"}]},{featureType:"poi.sports_complex",elementType:"geometry",stylers:[{color:"#c7c7c7"},{visibility:"off"}]},{featureType:"water",stylers:[{color:"#54b8e7"}]},{featureType:"poi.park",stylers:[{color:"#91b65d"}]},{featureType:"poi.park",stylers:[{gamma:1.51}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"poi.government",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",stylers:[{visibility:"simplified"}]},{featureType:"road"},{featureType:"road"},{},{featureType:"road.highway"}]},i=document.getElementById("map"),s=new google.maps.Map(i,t),o=new google.maps.Marker({position:new google.maps.LatLng(locations[0][1],locations[0][2]),title:locations[0][0],url:locations[0][3],icon:pin,map:s});google.maps.event.addListener(o,"click",function(){window.open(o.url)});var n=new google.maps.Marker({position:new google.maps.LatLng(locations[1][1],locations[1][2]),title:locations[1][0],url:locations[1][3],icon:pin,map:s});google.maps.event.addListener(n,"click",function(){window.open(n.url)})}function openForm(){$("#contactMail").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#contactMail").offset().top-valOffset[3]},500),$("#contactTel").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#contactTel").offset().top-valOffset[3]},500),$("#soumettre").click(function(){return $("#contactMail").slideDown(100),$("#contactTel").slideUp(100,function(){htmlBody.animate({scrollTop:$("#contactMail").offset().top-valOffset[3]},600)}),!1}),$("#consultant").click(function(){return $("#contactTel").slideDown(100),$("#contactMail").slideUp(100,function(){htmlBody.animate({scrollTop:$("#contactTel").offset().top-valOffset[3]},600)}),!1}),setSizeBugerMenu(979)}function openFormDossier(){$("#formDossier").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#formDossier").offset().top+valOffset[5]},500),$("#formDossier").find(".container").hasClass("success")&&htmlBody.animate({scrollTop:$("#formDossier").offset().top-valOffset[3]},500),$("#dossier").click(function(){return $(this).fadeOut(100,function(){$("#formDossier").find("form").slideDown(200,function(){htmlBody.animate({scrollTop:$(this).offset().top-valOffset[4]},600)})}),!1}),setSizeBugerMenu(979)}function openFormClub(){$("#inscription").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:$("#inscription").offset().top-valOffset[4]},500),$("#btnClub").click(function(){return htmlBody.animate({scrollTop:$("#inscription").offset().top-valOffset[3]},600),!1})}function appendSvg(){function e(){tlRect=new TimelineLite,path="none"!==t.css("display")?t.find("path"):i.find("path"),tlRect.set(path,{drawSVG:0}),tlTitre1=new TimelineLite,titre1=t1.find("rect"),tlTitre1.set(titre1,{drawSVG:0}),tlTitre2=new TimelineLite,titre2=t2.find("rect"),tlTitre2.set(titre2,{drawSVG:0}),tlTitre3=new TimelineLite,titre3=t3.find("rect"),tlTitre1.set(titre3,{drawSVG:0})}var t=$(".bigSvg"),i=$(".smallSvg");"none"===t.css("display")?i.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="508px" height="208px">\n									<path d="M 465 4 500 4 500 200 480 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n									<path d="M 160 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n								</svg>'):t.append('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="768px" height="208px">\n								<path d="M 490 4 760 4 760 200 730 200" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n								<path d="M 385 200 4 200 4 4 24 4" stroke="#fff" stroke-width="4" fill="none" stroke-linejoin="round"/>\n							</svg>');var s='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="233px" height="144px">\n						<rect x="3" y="3" stroke="#47acdc" stroke-width="3" width="227" height="138" fill="none" stroke-linejoin="round"/>\n					</svg>';t1.append(s),t2.append(s),t3.append(s),e()}function openFormPartner(){function e(){return htmlBody.animate({scrollTop:sectionsPartner[3]-valOffset[1]},600),!1}$("#partenaire").hasClass("opened")&&htmlBody.delay(300).animate({scrollTop:sectionsPartner[3]-valOffset[2]},500),$("#partnerSol").click(e),$("#partnerTech").click(e)}function clickSubMenu(e){function t(t,i){htmlBody.animate({scrollTop:e[t]-i},600)}subMenu.find("a").eq(0).click(function(){return t(0,valOffset[0]),!1}),subMenu.find("a").eq(1).click(function(){return t(1,valOffset[0]),!1}),subMenu.find("a").eq(2).click(function(){return t(2,valOffset[1]),!1}),subMenu.find("a").eq(3).click(function(){return t(3,valOffset[1]),!1})}function animVisuSolution(){TweenMax.to($("#screen-solution"),2,{y:0,opacity:1,ease:Cubic.easeIn})}function visuSolution(){TweenMax.set($("#screen-solution"),{y:50,opacity:0})}function ploup(){var e=$(".ploup");e.spriteanim();var t=Math.floor(Math.random()*e.length);e.eq(t).spriteanim("play").one("frame-10-shown",function(){$(this).spriteanim("stop"),ploup()})}function openRef(){var e=$(".ref").find(".first");windowWidth>850?e.mouseout(function(){$(this).removeClass("openRef")}):e.removeClass("openRef")}function openSearchInput(e){e.preventDefault();var t=$("#searchInput"),i=t.val(),s=i.length;0!==s&&t.hasClass("open")?$("#searchform").submit():t.toggleClass("open").focus()}function setSliderEntreprise(e){function t(e){function t(e,i,o){for(e;i>e;e++)if(o++,-1==s.eq(e).index()){s.eq(0).addClass("v"+o);var n=i-o;t(1,n,o)}else s.eq(e).addClass("v"+o)}var i=$('[data-slide="'+e+'"]').index()+1;s.removeClass().addClass("middle"),$('[data-slide="'+e+'"]').addClass("on v1"),t(i,s.length+1,1),setTimeout(function(){s.removeClass("middle")},300)}function i(t,i){o=!0,equipe.find(".sliderEnt").css("height",$("#"+t).height()),i?$("#"+t).css({display:"block",right:"auto",left:"-600px"}).animate({left:e+"px",opacity:1},600).siblings().css("right","auto").animate({left:"1200px",opacity:0},600,function(){$("#"+t).siblings().css({right:"auto",left:"-600px",display:"none"}),o=!1}):$("#"+t).css({display:"block",left:"auto",right:"-600px"}).animate({right:0,opacity:1},600).siblings().css("left","auto").animate({right:"1200px",opacity:0},600,function(){$("#"+t).siblings().css({left:"auto",right:"-600px",display:"none"}),o=!1})}var s=equipe.find(".vignettesEnt").find("li"),o=!1;s.on("click keypress",function(e){if(13===e.which||"click"===e.type&&!o){var s=$(this).attr("data-slide");t(s),i(s,!0)}}),$("#navEnt").find("button").on("click",function(){if(!o){var e=equipe.find(".vignettesEnt").find(".on").index(),n;$(this).hasClass("next")?(n=3==e?s.eq(0).attr("data-slide"):s.eq(e).next().attr("data-slide"),i(n,!0)):(n=0==e?s.eq(3).attr("data-slide"):s.eq(e).prev().attr("data-slide"),i(n,!1)),t(n)}})}function animSvgEnt(e,t,i){var s=6,o=6,n=0,a=new SteppedEase(s-1),l=new TimelineMax;for(e.animate({opacity:1},300),n;o>n;n++)l.add(TweenMax.fromTo(e,.4,{backgroundPosition:"0 -"+i*n+"px"},{backgroundPosition:"-"+t*(s-1)+"px -"+i*n+"px",ease:a}))}function disappearHeader(){header.removeClass("on")}var countSlide=0,slides,timerSlide=5,pagination,vignettes,countSlideVid=0,slidesVid,timerSlideVid=2.2,indic,myScroll,sectionsPartner,sectionsEnt,tlRect,path,tlTitre1,titre1,drawTitre1=!1,tlTitre2,titre2,drawTitre2=!1,tlTitre3,titre3,drawTitre3=!1,valOffset,body=$("body"),html=$("html"),burger=$(".hamburger"),header=$("header"),masque=$("#masque"),menuMain,subMenu=$("#subMenu"),containerVid=$("#containerVid"),htmlBody=$("html, body"),topHeader=$(".top-header"),t1=$(".titreRect1"),t2=$(".titreRect2"),t3=$(".titreRect3"),equipe=$("#equipe"),animWorld=!1,animSchema=!1,windowHeight=$(window).height(),windowWidth=$(window).width();$(function(){if(detectTouchDevice(),setFooter(),menuMain=$("#menu-main").length?$("#menu-main"):$(".menuBlog"),setSizeBugerMenu(body.hasClass("blog")?768:979),setBurgerMenu(),body.hasClass("home")||setFirstStrong(),valOffset=[100,150,140,70,120,80,160,190,200,400],html.hasClass("touch")){for(var e=0;e<valOffset.length;e++)valOffset[e]-=80;menuMain.find("a").on("click touchend",function(e){window.location=$(this).attr("href")})}body.hasClass("home")&&(indic=containerVid.find(".rejouer"),html.hasClass("lt-ie9")?containerVid.find(".container").css("height","700px"):setVideoContainer(),windowWidth>978&&html.hasClass("no-touch")&&"fixed"!=menuMain.css("position")&&(burger.on("mouseenter",function(){header.addClass("on")}),header.on("mouseleave",disappearHeader))),(body.hasClass("solution")||body.hasClass("page-template-solution-php"))&&(visuSolution(),ploup()),(body.hasClass("contactPage")||body.hasClass("page-template-contact-php"))&&openForm(),(body.hasClass("presse")||body.hasClass("page-template-presse-php"))&&openFormDossier(),(body.hasClass("club")||body.hasClass("page-template-club-php"))&&openFormClub(),(body.hasClass("references")||body.hasClass("page-template-references-php"))&&openRef(),body.hasClass("partner")&&(!html.hasClass("lt-ie9")&&html.hasClass("svg")&&appendSvg(),sectionsPartner=[$("#solution").offset().top,$("#technologiques").offset().top,$("#ensemble").offset().top,$("#partenaire").offset().top],subMenu.find(".bulleMenu").css("left","-50px"),clickSubMenu(sectionsPartner),openFormPartner()),equipe.length&&(sectionsEnt=[$("#vision").offset().top,$("#histoire").offset().top,$("#partenaires").offset().top,equipe.offset().top],clickSubMenu(sectionsEnt),equipe.find(".sliderEnt").css("height",equipe.find(".firstSlide").height()),windowWidth>979?setSliderEntreprise(50):(setSliderEntreprise(0),$("#philip").css("left",0))),windowWidth>767&&($("#search").on("click",openSearchInput),$("#btnCat").on("click",function(){$("#cats").slideToggle(300);var e=$(this).find("a");return e.hasClass("close")&&e.blur(),e.toggleClass("close"),!1})),$(".share").on("click",function(){var e=$(this).siblings(".socialm");return e.toggleClass("open"),e.hasClass("open")?windowWidth>610?e.animate({height:"109px",overflow:"visible"},300):e.animate({width:"91px",overflow:"visible"},300):(windowWidth>610?e.animate({height:0,overflow:"hidden"},300):e.animate({width:0,overflow:"hidden"},300),$(this).blur()),!1}),$(document).scroll(function(){myScroll=$(this).scrollTop(),scroll(),setFooter()}),$(window).resize(function(){windowHeight=$(window).height(),windowWidth=$(window).width(),body.hasClass("home")&&(setVideoContainer(),html.hasClass("no-touch")&&"fixed"!=menuMain.css("position")&&(978>windowWidth?burger.off("mouseenter"):burger.on("mouseenter",function(){header.addClass("on")}))),setFooter(),setSizeBugerMenu(body.hasClass("blog")?768:979),adjustBurgerMenu()}),$(window).load(function(){body.hasClass("home")&&(html.hasClass("lt-ie9")||html.hasClass("touch")||html.width()<979?(slidesVid=$("#sliderVid").find(".slides").find("li"),setSliderVid()):playVideo(),slides=$("#slider").find(".slides").find("li"),vignettes=$("#slider").find(".vignettes").find("li"),pagination=$("#bulle"),setSlider()),(body.hasClass("solution")||body.hasClass("page-template-solution-php"))&&animVisuSolution(),body.hasClass("partner")&&!html.hasClass("lt-ie9")&&tlRect.staggerFromTo(path,.8,{drawSVG:0},{drawSVG:"100%",ease:Power1.easeInOut},.7),$("#svgShop").length&&(animSvgEnt($("#svgShop"),450,400),html.hasClass("lt-ie9")&&(animSvgEnt($("#svgWorld"),700,260),animSvgEnt($("#svgSchema"),130,570)))})});