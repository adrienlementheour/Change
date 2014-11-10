window.Modernizr=function(e,t,n){function r(e){v.cssText=e}function o(e,t){return r(x.join(e+";")+(t||""))}function a(e,t){return typeof e===t}function i(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!i(o,"-")&&v[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var i=t[e[o]];if(i!==n)return r===!1?e[o]:a(i,"function")?i.bind(r||t):i}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+S.join(r+" ")+r).split(" ");return a(t,"string")||a(t,"undefined")?c(o,t):(o=(e+" "+C.join(r+" ")+r).split(" "),s(o,t,n))}function l(){f.input=function(n){for(var r=0,o=n.length;o>r;r++)M[n[r]]=!!(n[r]in y);return M.list&&(M.list=!(!t.createElement("datalist")||!e.HTMLDataListElement)),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(e){for(var r=0,o,a,i,c=e.length;c>r;r++)y.setAttribute("type",a=e[r]),o="text"!==y.type,o&&(y.value=b,y.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(a)&&y.style.WebkitAppearance!==n?(p.appendChild(y),i=t.defaultView,o=i.getComputedStyle&&"textfield"!==i.getComputedStyle(y,null).WebkitAppearance&&0!==y.offsetHeight,p.removeChild(y)):/^(search|tel)$/.test(a)||(o=/^(url|email)$/.test(a)?y.checkValidity&&y.checkValidity()===!1:y.value!=b)),N[e[r]]=!!o;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.8.3",f={},m=!0,p=t.documentElement,h="modernizr",g=t.createElement(h),v=g.style,y=t.createElement("input"),b=":)",E={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),w="Webkit Moz O ms",S=w.split(" "),C=w.toLowerCase().split(" "),k={svg:"http://www.w3.org/2000/svg"},T={},N={},M={},P=[],j=P.slice,D,F=function(e,n,r,o){var a,i,c,s,u=t.createElement("div"),l=t.body,d=l||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:h+(r+1),u.appendChild(c);return a=["&#173;",'<style id="s',h,'">',e,"</style>"].join(""),u.id=h,(l?u:d).innerHTML+=a,d.appendChild(u),l||(d.style.background="",d.style.overflow="hidden",s=p.style.overflow,p.style.overflow="hidden",p.appendChild(d)),i=n(u,e),l?u.parentNode.removeChild(u):(d.parentNode.removeChild(d),p.style.overflow=s),!!i},z=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return F("@media "+t+" { #"+h+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},A=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var i=e in o;return i||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),i=a(o[e],"function"),a(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,i}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),L={}.hasOwnProperty,H;H=a(L,"undefined")||a(L.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return L.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(j.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(j.call(arguments)))};return r}),T.flexbox=function(){return u("flexWrap")},T.flexboxlegacy=function(){return u("boxDirection")},T.canvas=function(){var e=t.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))},T.canvastext=function(){return!(!f.canvas||!a(t.createElement("canvas").getContext("2d").fillText,"function"))},T.webgl=function(){return!!e.WebGLRenderingContext},T.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:F(["@media (",x.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!e.postMessage},T.websqldatabase=function(){return!!e.openDatabase},T.indexedDB=function(){return!!u("indexedDB",e)},T.hashchange=function(){return A("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},T.history=function(){return!(!e.history||!history.pushState)},T.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},T.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},T.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),i(v.backgroundColor,"rgba")},T.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),i(v.backgroundColor,"rgba")||i(v.backgroundColor,"hsla")},T.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(v.background)},T.backgroundsize=function(){return u("backgroundSize")},T.borderimage=function(){return u("borderImage")},T.borderradius=function(){return u("borderRadius")},T.boxshadow=function(){return u("boxShadow")},T.textshadow=function(){return""===t.createElement("div").style.textShadow},T.opacity=function(){return o("opacity:.55"),/^0.55$/.test(v.opacity)},T.cssanimations=function(){return u("animationName")},T.csscolumns=function(){return u("columnCount")},T.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+x.join(n+e)).slice(0,-e.length)),i(v.backgroundImage,"gradient")},T.cssreflections=function(){return u("boxReflect")},T.csstransforms=function(){return!!u("transform")},T.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in p.style&&F("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},T.csstransitions=function(){return u("transition")},T.fontface=function(){var e;return F('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),a=o.sheet||o.styleSheet,i=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";e=/src/i.test(i)&&0===i.indexOf(r.split(" ")[0])}),e},T.generatedcontent=function(){var e;return F(["#",h,"{font:0/0 a}#",h,':after{content:"',b,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},T.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},T.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},T.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(e){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(e){return!1}},T.webworkers=function(){return!!e.Worker},T.applicationcache=function(){return!!e.applicationCache},T.svg=function(){return!!t.createElementNS&&!!t.createElementNS(k.svg,"svg").createSVGRect},T.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==k.svg},T.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS(k.svg,"animate")))},T.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS(k.svg,"clipPath")))};for(var I in T)H(T,I)&&(D=I.toLowerCase(),f[D]=T[I](),P.push((f[D]?"":"no-")+D));return f.input||l(),f.addTest=function(e,t){if("object"==typeof e)for(var r in e)H(e,r)&&f.addTest(r,e[r]);else{if(e=e.toLowerCase(),f[e]!==n)return f;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(p.className+=" "+(t?"":"no-")+e),f[e]=t}return f},r(""),g=y=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[p]];return t||(t={},h++,e[p]=h,g[h]=t),t}function a(e,n,r){if(n||(n=t),v)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():f.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||d.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),v)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),s=c.length;s>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function s(e){e||(e=t);var r=o(e);return!y.shivCSS||m||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),v||c(e,r),e}var u="3.7.0",l=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m,p="_html5shiv",h=0,g={},v;!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",m="hidden"in e,v=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){m=!0,v=!0}}();var y={elements:l.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:u,shivCSS:l.shivCSS!==!1,supportsUnknownElements:v,shivMethods:l.shivMethods!==!1,type:"default",shivDocument:s,createElement:a,createDocumentFragment:i};e.html5=y,s(t)}(this,t),f._version=d,f._prefixes=x,f._domPrefixes=C,f._cssomPrefixes=S,f.mq=z,f.hasEvent=A,f.testProp=function(e){return c([e])},f.testAllProps=u,f.testStyles=F,f.prefixed=function(e,t,n){return t?u(e,t,n):u(e,"pfx")},p.className=p.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+P.join(" "):""),f}(this,this.document);