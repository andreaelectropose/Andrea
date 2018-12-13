!function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n(2);var r=n(6),i=o(r),a=n(60),u=n(65),c=o(u),l=n(85),s=o(l);n(86);var d=n(87),f=o(d),p=n(100),h=o(p),v=n(101),y=o(v),m=n(104),A=o(m),g=n(121),b=o(g),w=n(189),_=o(w),x=n(190),E=o(x),k=n(191),S=o(k),T=n(192),L=o(T),O=n(193),M=o(O),P=n(194),j=o(P),C=n(195),R=o(C),I=n(103),F=o(I),V=n(196),N=o(V),D=n(199),B=o(D),G=n(200),U=o(G),H=n(207),z=o(H);i.default.register("AncillaryLayout",f.default),i.default.register("FooterBreakpoints",h.default),i.default.register("HashManager",y.default),i.default.register("IndexFirstSectionHeight",A.default),i.default.register("IndexGallery",b.default),i.default.register("IndexGalleryVideo",_.default),i.default.register("IndexNavigation",E.default),i.default.register("HeaderNavFolderTouch",S.default),i.default.register("HeaderOverlay",L.default),i.default.register("MobileClassname",M.default),i.default.register("MobileOverlayFolders",j.default),i.default.register("MobileOffset",R.default),i.default.register("MobileOverlayToggle",F.default),i.default.register("Parallax",N.default),i.default.register("ScrollIndicator",B.default),i.default.register("SiteLoader",U.default),i.default.register("UserAccountLink",z.default),i.default.register("VideoBackground",function(e){return(0,c.default)(e,function(e){var t=e.handleResize,n=e.handleTweak;(0,s.default)(t,105),a.Tweak.watch("tweak-overlay-parallax-enabled",n)})})},function(e,t,n){n(3).polyfill()},function(e,t,n){(function(t){for(var o=n(4),r="undefined"==typeof window?t:window,i=["moz","webkit"],a="AnimationFrame",u=r["request"+a],c=r["cancel"+a]||r["cancelRequest"+a],l=0;!u&&l<i.length;l++)u=r[i[l]+"Request"+a],c=r[i[l]+"Cancel"+a]||r[i[l]+"CancelRequest"+a];if(!u||!c){var s=0,d=0,f=[],p=1e3/60;u=function(e){if(0===f.length){var t=o(),n=Math.max(0,p-(t-s));s=n+t,setTimeout(function(){var e=f.slice(0);f.length=0;for(var t=0;t<e.length;t++)if(!e[t].cancelled)try{e[t].callback(s)}catch(e){setTimeout(function(){throw e},0)}},Math.round(n))}return f.push({handle:++d,callback:e,cancelled:!1}),d},c=function(e){for(var t=0;t<f.length;t++)f[t].handle===e&&(f[t].cancelled=!0)}}e.exports=function(e){return u.call(r,e)},e.exports.cancel=function(){c.apply(r,arguments)},e.exports.polyfill=function(){r.requestAnimationFrame=u,r.cancelAnimationFrame=c}}).call(t,function(){return this}())},function(e,t,n){(function(t){(function(){var n,o,r;"undefined"!=typeof performance&&null!==performance&&performance.now?e.exports=function(){return performance.now()}:"undefined"!=typeof t&&null!==t&&t.hrtime?(e.exports=function(){return(n()-r)/1e6},o=t.hrtime,n=function(){var e;return e=o(),1e9*e[0]+e[1]},r=n()):Date.now?(e.exports=function(){return Date.now()-r},r=Date.now()):(e.exports=function(){return(new Date).getTime()-r},r=(new Date).getTime())}).call(this)}).call(t,n(5))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function i(e){if(d===clearTimeout)return clearTimeout(e);if((d===o||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){v&&p&&(v=!1,p.length?h=p.concat(h):y=-1,h.length&&u())}function u(){if(!v){var e=r(a);v=!0;for(var t=h.length;t;){for(p=h,h=[];++y<t;)p&&p[y].run();y=-1,t=h.length}p=null,v=!1,i(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var s,d,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:o}catch(e){d=o}}();var p,h=[],v=!1,y=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||v||r(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.fn&&e.element?e.fn(e.element):null}function i(e,t){return!!(e.element&&t.element&&e.fn&&t.fn)&&(e.element===t.element&&e.fn===t.fn)}function a(e,t){s[e]=t}function u(){var e=(0,l.default)(document.querySelectorAll("[data-controller]")),t=[];e.forEach(function(e){var n=e.getAttribute("data-controller").split(",");n.forEach(function(n){n=n.trim();var o=s[n];o&&t.push({namespace:n,element:e,fn:o})})}),d=d.filter(function(e){var n=t.some(function(t){return i(e,t)});return n?(e.methods&&e.methods.sync&&e.methods.sync.apply(e.element,null),t=t.filter(function(t){return!i(e,t)})):e.methods&&e.methods.destroy&&e.methods.destroy.apply(e.element,null),n}),t.forEach(function(e){e.methods=r(e),d.push(e);var t=[];if(e.element.hasAttribute("data-controllers-bound")){var n=e.element.getAttribute("data-controllers-bound").split(", ");t=t.concat(n)}t.push(e.namespace),e.element.setAttribute("data-controllers-bound",t.join(", "))})}Object.defineProperty(t,"__esModule",{value:!0});var c=n(7),l=o(c),s={},d=[];document.addEventListener("DOMContentLoaded",u),t.default={refresh:u,register:a},e.exports=t.default},function(e,t,n){e.exports={default:n(8),__esModule:!0}},function(e,t,n){n(9),n(53),e.exports=n(17).Array.from},function(e,t,n){"use strict";var o=n(10)(!0);n(13)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=o(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var o=n(11),r=n(12);e.exports=function(e){return function(t,n){var i,a,u=String(r(t)),c=o(n),l=u.length;return c<0||c>=l?e?"":void 0:(i=u.charCodeAt(c),i<55296||i>56319||c+1===l||(a=u.charCodeAt(c+1))<56320||a>57343?e?u.charAt(c):i:e?u.slice(c,c+2):(i-55296<<10)+(a-56320)+65536)}}},function(e,t){var n=Math.ceil,o=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?o:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var o=n(14),r=n(15),i=n(31),a=n(20),u=n(32),c=n(33),l=n(49),s=n(51),d=n(50)("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",y=function(){return this};e.exports=function(e,t,n,m,A,g,b){c(n,t,m);var w,_,x,E=function(e){if(!f&&e in L)return L[e];switch(e){case h:return function(){return new n(this,e)};case v:return function(){return new n(this,e)}}return function(){return new n(this,e)}},k=t+" Iterator",S=A==v,T=!1,L=e.prototype,O=L[d]||L[p]||A&&L[A],M=O||E(A),P=A?S?E("entries"):M:void 0,j="Array"==t?L.entries||O:O;if(j&&(x=s(j.call(new e)),x!==Object.prototype&&x.next&&(l(x,k,!0),o||"function"==typeof x[d]||a(x,d,y))),S&&O&&O.name!==v&&(T=!0,M=function(){return O.call(this)}),o&&!b||!f&&!T&&L[d]||a(L,d,M),u[t]=M,u[k]=y,A)if(w={values:S?M:E(v),keys:g?M:E(h),entries:P},b)for(_ in w)_ in L||i(L,_,w[_]);else r(r.P+r.F*(f||T),t,w);return w}},function(e,t){e.exports=!0},function(e,t,n){var o=n(16),r=n(17),i=n(18),a=n(20),u=n(30),c="prototype",l=function(e,t,n){var s,d,f,p=e&l.F,h=e&l.G,v=e&l.S,y=e&l.P,m=e&l.B,A=e&l.W,g=h?r:r[t]||(r[t]={}),b=g[c],w=h?o:v?o[t]:(o[t]||{})[c];h&&(n=t);for(s in n)d=!p&&w&&void 0!==w[s],d&&u(g,s)||(f=d?w[s]:n[s],g[s]=h&&"function"!=typeof w[s]?n[s]:m&&d?i(f,o):A&&w[s]==f?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t[c]=e[c],t}(f):y&&"function"==typeof f?i(Function.call,f):f,y&&((g.virtual||(g.virtual={}))[s]=f,e&l.R&&b&&!b[s]&&a(b,s,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,e.exports=l},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.6.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var o=n(19);e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var o=n(21),r=n(29);e.exports=n(25)?function(e,t,n){return o.f(e,t,r(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var o=n(22),r=n(24),i=n(28),a=Object.defineProperty;t.f=n(25)?Object.defineProperty:function(e,t,n){if(o(e),t=i(t,!0),o(n),r)try{return a(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var o=n(23);e.exports=function(e){if(!o(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(25)&&!n(26)(function(){return 7!=Object.defineProperty(n(27)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(26)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var o=n(23),r=n(16).document,i=o(r)&&o(r.createElement);e.exports=function(e){return i?r.createElement(e):{}}},function(e,t,n){var o=n(23);e.exports=function(e,t){if(!o(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!o(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!o(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){e.exports=n(20)},function(e,t){e.exports={}},function(e,t,n){"use strict";var o=n(34),r=n(29),i=n(49),a={};n(20)(a,n(50)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=o(a,{next:r(1,n)}),i(e,t+" Iterator")}},function(e,t,n){var o=n(22),r=n(35),i=n(47),a=n(44)("IE_PROTO"),u=function(){},c="prototype",l=function(){var e,t=n(27)("iframe"),o=i.length,r="<",a=">";for(t.style.display="none",n(48).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(r+"script"+a+"document.F=Object"+r+"/script"+a),e.close(),l=e.F;o--;)delete l[c][i[o]];return l()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[c]=o(e),n=new u,u[c]=null,n[a]=e):n=l(),void 0===t?n:r(n,t)}},function(e,t,n){var o=n(21),r=n(22),i=n(36);e.exports=n(25)?Object.defineProperties:function(e,t){r(e);for(var n,a=i(t),u=a.length,c=0;u>c;)o.f(e,n=a[c++],t[n]);return e}},function(e,t,n){var o=n(37),r=n(47);e.exports=Object.keys||function(e){return o(e,r)}},function(e,t,n){var o=n(30),r=n(38),i=n(41)(!1),a=n(44)("IE_PROTO");e.exports=function(e,t){var n,u=r(e),c=0,l=[];for(n in u)n!=a&&o(u,n)&&l.push(n);for(;t.length>c;)o(u,n=t[c++])&&(~i(l,n)||l.push(n));return l}},function(e,t,n){var o=n(39),r=n(12);e.exports=function(e){return o(r(e))}},function(e,t,n){var o=n(40);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==o(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var o=n(38),r=n(42),i=n(43);e.exports=function(e){return function(t,n,a){var u,c=o(t),l=r(c.length),s=i(a,l);if(e&&n!=n){for(;l>s;)if(u=c[s++],u!=u)return!0}else for(;l>s;s++)if((e||s in c)&&c[s]===n)return e||s||0;return!e&&-1}}},function(e,t,n){var o=n(11),r=Math.min;e.exports=function(e){return e>0?r(o(e),9007199254740991):0}},function(e,t,n){var o=n(11),r=Math.max,i=Math.min;e.exports=function(e,t){return e=o(e),e<0?r(e+t,0):i(e,t)}},function(e,t,n){var o=n(45)("keys"),r=n(46);e.exports=function(e){return o[e]||(o[e]=r(e))}},function(e,t,n){var o=n(17),r=n(16),i="__core-js_shared__",a=r[i]||(r[i]={});(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:o.version,mode:n(14)?"pure":"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})},function(e,t){var n=0,o=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+o).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){var o=n(16).document;e.exports=o&&o.documentElement},function(e,t,n){var o=n(21).f,r=n(30),i=n(50)("toStringTag");e.exports=function(e,t,n){e&&!r(e=n?e:e.prototype,i)&&o(e,i,{configurable:!0,value:t})}},function(e,t,n){var o=n(45)("wks"),r=n(46),i=n(16).Symbol,a="function"==typeof i,u=e.exports=function(e){return o[e]||(o[e]=a&&i[e]||(a?i:r)("Symbol."+e))};u.store=o},function(e,t,n){var o=n(30),r=n(52),i=n(44)("IE_PROTO"),a=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),o(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?a:null}},function(e,t,n){var o=n(12);e.exports=function(e){return Object(o(e))}},function(e,t,n){"use strict";var o=n(18),r=n(15),i=n(52),a=n(54),u=n(55),c=n(42),l=n(56),s=n(57);r(r.S+r.F*!n(59)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,r,d,f=i(e),p="function"==typeof this?this:Array,h=arguments.length,v=h>1?arguments[1]:void 0,y=void 0!==v,m=0,A=s(f);if(y&&(v=o(v,h>2?arguments[2]:void 0,2)),void 0==A||p==Array&&u(A))for(t=c(f.length),n=new p(t);t>m;m++)l(n,m,y?v(f[m],m):f[m]);else for(d=A.call(f),n=new p;!(r=d.next()).done;m++)l(n,m,y?a(d,v,[r.value,m],!0):r.value);return n.length=m,n}})},function(e,t,n){var o=n(22);e.exports=function(e,t,n,r){try{return r?t(o(n)[0],n[1]):t(n)}catch(t){var i=e.return;throw void 0!==i&&o(i.call(e)),t}}},function(e,t,n){var o=n(32),r=n(50)("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[r]===e)}},function(e,t,n){"use strict";var o=n(21),r=n(29);e.exports=function(e,t,n){t in e?o.f(e,t,r(0,n)):e[t]=n}},function(e,t,n){var o=n(58),r=n(50)("iterator"),i=n(32);e.exports=n(17).getIteratorMethod=function(e){if(void 0!=e)return e[r]||e["@@iterator"]||i[o(e)]}},function(e,t,n){var o=n(40),r=n(50)("toStringTag"),i="Arguments"==o(function(){return arguments}()),a=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=a(t=Object(e),r))?n:i?o(t):"Object"==(u=o(t))&&"function"==typeof t.callee?"Arguments":u}},function(e,t,n){var o=n(50)("iterator"),r=!1;try{var i=[7][o]();i.return=function(){r=!0},Array.from(i,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!r)return!1;var n=!1;try{var i=[7],a=i[o]();a.next=function(){return{done:n=!0}},i[o]=function(){return a},e(i)}catch(e){}return n}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(61),i=o(r),a=n(62),u=o(a),c=n(63),l=o(c),s=n(64),d=o(s),f={ImageLoader:i.default,Lifecycle:u.default,Tweak:l.default,UserAccounts:d.default};t.default=f,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={load:function(e,t){return window.ImageLoader.load(e,t)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={init:function(){window.Squarespace.AFTER_BODY_LOADED=!1,window.Squarespace.afterBodyLoad()},destroy:function(){window.Squarespace.globalDestroy(Y)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Static.SQUARESPACE_CONTEXT.authenticatedAccount,o={all:{callbacks:[]}},r={getValue:function(e){return e&&"string"==typeof e?window.Static.SQUARESPACE_CONTEXT.tweakJSON[e]||window.Static.SQUARESPACE_CONTEXT.tweakJSON[e.replace("@","").replace(".","")]:(console.error("squarespace-core: Invalid tweak name "+e),null)},watch:function(){var e=arguments;if(n){if(0===arguments.length)return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");if(1===arguments.length)return void("function"==typeof arguments[0]&&o.all.callbacks.push(arguments[0]));if("string"==typeof arguments[0]&&"function"==typeof arguments[1]){var t=arguments[0];o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(arguments[1])}else arguments[0].constructor===Array&&"function"==typeof arguments[1]&&arguments[0].forEach(function(t){o[t]||(o[t]={callbacks:[]}),o[t].callbacks.push(e[1])})}}};n&&window.Y&&window.Y.Global&&window.Y.Global.on("tweak:change",function(e){var t=e.getName(),n={name:t,value:e.config&&e.config.value||e.value};o[t]&&o[t].callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}}),o.all.callbacks.length>0&&o.all.callbacks.forEach(function(e){try{e(n)}catch(e){console.error(e)}})}),t.default=r,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="UserAccounts API not available",o=window.UserAccountApi,r=function(){console.warn(n)},i=o?o.isUserAuthenticated:r,a=o?o.openAccountScreen:r;t.default={isUserAuthenticated:i,openAccountScreen:a},e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){var n=e.querySelector(".sqs-video-background"),o=(0,u.default)(n),r=new i.VideoBackground(o),a=function(){r.scaleVideo()},c=function(){r.destroy(),r=new i.VideoBackground(o)};return"function"==typeof t&&t({handleResize:a,handleTweak:c}),{destroy:function(){r.destroy()}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(66),a=n(84),u=o(a);t.default=r,e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.videoAutoplayTest=t.VideoFilterPropertyValues=t.VideoBackground=void 0,n(67);var o=n(68);t.VideoBackground=o.VideoBackground,t.VideoFilterPropertyValues=o.VideoFilterPropertyValues,t.videoAutoplayTest=o.videoAutoplayTest},function(e,t){!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.videoAutoplayTest=t.VideoFilterPropertyValues=t.VideoBackground=void 0;var r=n(69),i=o(r),a=n(83),u=n(72),c=o(u);t.VideoBackground=i.default,t.VideoFilterPropertyValues=a.filterProperties,t.videoAutoplayTest=c.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(70),u=o(a),c=n(72),l=o(c),s=n(74),d=n(82),f=n(76),p=n(83),h=n(75),v={vimeo:{api:s.initializeVimeoAPI,player:s.initializeVimeoPlayer},youtube:{api:d.initializeYouTubeAPI,player:d.initializeYouTubePlayer}},y=function(){function e(t){var n=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;r(this,e),this.windowContext=o,this.events=[],this.browserCanAutoPlay=!1,this.videoCanAutoPlay=!1,this.setInstanceProperties(t),(0,l.default)().then(function(e){n.logger(e),n.browserCanAutoPlay=!0,n.initializeVideoAPI()},function(e){n.logger(e),n.browserCanAutoPlay=!1,n.renderFallbackBehavior()}).then(function(){n.setDisplayEffects(),n.bindUI(),n.DEBUG.enabled===!0&&(window.vdbg=n)})}return i(e,[{key:"destroy",value:function(){this.events&&this.events.forEach(function(e){return e.target.removeEventListener(e.type,e.handler,!0)}),this.events=null,this.player&&"function"==typeof this.player.destroy&&(this.player.iframe.classList.remove("ready"),clearTimeout(this.playTimeout),this.playTimeout=null,this.player.destroy(),this.player={}),"number"==typeof this.timer&&(clearTimeout(this.timer),this.timer=null)}},{key:"bindUI",value:function(){var e=this,t=function(){e.windowContext.requestAnimationFrame(function(){e.scaleVideo()})};this.events.push({target:this.windowContext,type:"resize",handler:t}),this.windowContext.addEventListener("resize",t,!0)}},{key:"setInstanceProperties",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=(0,u.default)({},f.DEFAULT_PROPERTY_VALUES,e),1===e.container.nodeType?this.container=e.container:"string"==typeof e.container&&(this.container=document.querySelector(e.container)),this.container?(this.videoSource=(0,h.getVideoSource)(e.url),this.videoId=(0,h.getVideoID)(e.url,this.videoSource),this.customFallbackImage=(0,h.validatedImage)(e.customFallbackImage),this.filter=e.filter,this.filterStrength=e.filterStrength,this.fitMode=e.fitMode,this.scaleFactor=e.scaleFactor,this.playbackSpeed=parseFloat(e.playbackSpeed)<.5?1:parseFloat(e.playbackSpeed),this.timeCode={start:(0,h.getStartTime)(e.url,this.videoSource)||e.timeCode.start,end:e.timeCode.end},this.player={},void(this.DEBUG=e.DEBUG)):(console.error("Container "+e.container+" not found"),!1)}},{key:"setFallbackImage",value:function(){var e=this.customFallbackImage;if(!(!e||this.browserCanAutoPlay&&this.videoCanAutoPlay))return e.addEventListener("load",function(){e.classList.add("loaded")},{once:!0}),this.windowContext.ImageLoader?void this.windowContext.ImageLoader.load(e,{load:!0}):void(e.src=e.src)}},{key:"initializeVideoAPI",value:function(){var e=this;if(this.browserCanAutoPlay&&this.videoSource&&this.videoId){this.player.ready=!1;var t=v[this.videoSource].api,n=t(this.windowContext);n.then(function(t){e.logger(t),e.player.ready=!1,e.initializeVideoPlayer()}).catch(function(t){e.renderFallbackBehavior(),document.body.classList.add("ready"),e.logger(t)})}else this.renderFallbackBehavior(),document.body.classList.add("ready")}},{key:"initializeVideoPlayer",value:function(){var e=this;if(this.player.ready){try{this.player.destroy()}catch(e){}this.player.ready=!1}var t=v[this.videoSource].player,n=t({instance:this,container:this.container,win:this.windowContext,videoId:this.videoId,startTime:this.timeCode.start,speed:this.playbackSpeed,readyCallback:function(t,n){e.player.iframe.classList.add("background-video"),e.videoAspectRatio=(0,h.findPlayerAspectRatio)(e.container,e.player,e.videoSource),e.syncPlayer();var o=new CustomEvent("ready");e.container.dispatchEvent(o)},stateChangeCallback:function(t,n){switch(t){case"buffering":e.testVideoEmbedAutoplay();break;case"playing":null===e.playTimeout&&e.videoCanAutoPlay||e.testVideoEmbedAutoplay(!0)}t&&e.logger(t),n&&e.logger(n)}});n.then(function(t){e.player=t},function(t){e.logger(t),e.testVideoEmbedAutoplay(!1)})}},{key:"testVideoEmbedAutoplay",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return void 0===t&&(this.logger("test video autoplay: begin"),this.playTimeout&&(clearTimeout(this.playTimeout),this.playTimeout=null),this.playTimeout=setTimeout(function(){e.testVideoEmbedAutoplay(!1)},f.TIMEOUT)),t===!0?(clearTimeout(this.playTimeout),this.logger("test video autoplay: success"),this.playTimeout=null,this.videoCanAutoPlay=!0,this.player.ready=!0,this.player.iframe.classList.add("ready"),void this.container.classList.remove("mobile")):t===!1?(clearTimeout(this.playTimeout),this.logger("test video autoplay: failure"),this.playTimeout=null,this.videoCanAutoPlay=!1,void this.renderFallbackBehavior()):void 0}},{key:"renderFallbackBehavior",value:function(){this.setFallbackImage(),this.container.classList.add("mobile"),this.logger("added mobile")}},{key:"syncPlayer",value:function(){this.setDisplayEffects(),this.setSpeed(),this.scaleVideo()}},{key:"scaleVideo",value:function(e){this.setFallbackImage();var t=this.player.iframe;if(t){var n=e||this.scaleFactor;if("fill"!==this.fitMode)return t.style.width="",void(t.style.height="");var o=t.parentNode.clientWidth,r=t.parentNode.clientHeight,i=o/r,a=0,u=0;i>this.videoAspectRatio?(a=o*n,u=o*n/this.videoAspectRatio):this.videoAspectRatio>i?(a=r*n*this.videoAspectRatio,u=r*n):(a=o*n,u=r*n),t.style.width=a+"px",t.style.height=u+"px",t.style.left=0-(a-o)/2+"px",t.style.top=0-(u-r)/2+"px"}}},{key:"setSpeed",value:function(e){this.playbackSpeed=parseFloat(this.playbackSpeed),this.player.setPlaybackRate&&this.player.setPlaybackRate(this.playbackSpeed)}},{key:"setDisplayEffects",value:function(){this.setFilter()}},{key:"setFilter",value:function(){var e=this.container.style,t=p.filterOptions[this.filter-1],n="";"none"!==t&&(n=this.getFilterStyle(t,this.filterStrength));var o="blur"===t;e.webkitFilter=o?"":n,e.filter=o?"":n,this.container.classList.toggle("filter-blur",o),Array.prototype.slice.call(this.container.children).forEach(function(e){e.style.webkitFilter=o?n:"",e.style.filter=o?n:""})}},{key:"getFilterStyle",value:function(e,t){return e+"("+(p.filterProperties[e].modifier(t)+p.filterProperties[e].unit)+")"}},{key:"logger",value:function(e){this.DEBUG.enabled&&this.DEBUG.verbose&&this.windowContext.console.log(e)}}]),e}();t.default=y},function(e,t,n){(function(e,n){function o(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function r(e,t){for(var n=-1,o=Array(e);++n<e;)o[n]=t(n);return o}function i(e){return function(t){return e(t)}}function a(e,t){return null==e?void 0:e[t]}function u(e,t){return function(n){return e(t(n))}}function c(e,t){return"__proto__"==t?void 0:e[t]}function l(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function s(){this.__data__=Ht?Ht(null):{},this.size=0}function d(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}function f(e){var t=this.__data__;if(Ht){var n=t[e];return n===Te?void 0:n}return Et.call(t,e)?t[e]:void 0}function p(e){var t=this.__data__;return Ht?void 0!==t[e]:Et.call(t,e)}function h(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Ht&&void 0===t?Te:t,this}function v(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function y(){this.__data__=[],this.size=0}function m(e){var t=this.__data__,n=F(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():Ft.call(t,n,1),--this.size,!0}function A(e){var t=this.__data__,n=F(t,e);return n<0?void 0:t[n][1]}function g(e){return F(this.__data__,e)>-1}function b(e,t){var n=this.__data__,o=F(n,e);return o<0?(++this.size,n.push([e,t])):n[o][1]=t,this}function w(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function _(){this.size=0,this.__data__={hash:new l,map:new(Ut||v),string:new l}}function x(e){var t=$(this,e).delete(e);return this.size-=t?1:0,t}function E(e){return $(this,e).get(e)}function k(e){return $(this,e).has(e)}function S(e,t){var n=$(this,e),o=n.size;return n.set(e,t),this.size+=n.size==o?0:1,this}function T(e){var t=this.__data__=new v(e);this.size=t.size}function L(){this.__data__=new v,this.size=0}function O(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function M(e){return this.__data__.get(e)}function P(e){return this.__data__.has(e)}function j(e,t){var n=this.__data__;if(n instanceof v){var o=n.__data__;if(!Ut||o.length<Se-1)return o.push([e,t]),this.size=++n.size,this;n=this.__data__=new w(o)}return n.set(e,t),this.size=n.size,this}function C(e,t){var n=Zt(e),o=!n&&Qt(e),i=!n&&!o&&Xt(e),a=!n&&!o&&!i&&Jt(e),u=n||o||i||a,c=u?r(e.length,String):[],l=c.length;for(var s in e)!t&&!Et.call(e,s)||u&&("length"==s||i&&("offset"==s||"parent"==s)||a&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||oe(s,l))||c.push(s);return c}function R(e,t,n){(void 0===n||pe(e[t],n))&&(void 0!==n||t in e)||V(e,t,n)}function I(e,t,n){var o=e[t];Et.call(e,t)&&pe(o,n)&&(void 0!==n||t in e)||V(e,t,n)}function F(e,t){for(var n=e.length;n--;)if(pe(e[n][0],t))return n;return-1}function V(e,t,n){"__proto__"==t&&Nt?Nt(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function N(e){return null==e?void 0===e?We:Ge:Vt&&Vt in Object(e)?te(e):le(e)}function D(e){return ge(e)&&N(e)==Pe}function B(e){if(!Ae(e)||ae(e))return!1;var t=ye(e)?Lt:ut;return t.test(fe(e))}function G(e){return ge(e)&&me(e.length)&&!!lt[N(e)]}function U(e){if(!Ae(e))return ce(e);var t=ue(e),n=[];for(var o in e)("constructor"!=o||!t&&Et.call(e,o))&&n.push(o);return n}function H(e,t,n,o,r){e!==t&&Yt(t,function(i,a){if(Ae(i))r||(r=new T),z(e,t,a,n,H,o,r);else{var u=o?o(c(e,a),i,a+"",e,t,r):void 0;void 0===u&&(u=i),R(e,a,u)}},_e)}function z(e,t,n,o,r,i,a){var u=c(e,n),l=c(t,n),s=a.get(l);if(s)return void R(e,n,s);var d=i?i(u,l,n+"",e,t,a):void 0,f=void 0===d;if(f){var p=Zt(l),h=!p&&Xt(l),v=!p&&!h&&Jt(l);d=l,p||h||v?Zt(u)?d=u:ve(u)?d=Z(u):h?(f=!1,d=q(l,!0)):v?(f=!1,d=Q(l,!0)):d=[]:be(l)||Qt(l)?(d=u,Qt(u)?d=we(u):(!Ae(u)||o&&ye(u))&&(d=ne(l))):f=!1}f&&(a.set(l,d),r(d,l,o,i,a),a.delete(l)),R(e,n,d)}function Y(e,t){return Wt(se(e,t,Ee),e+"")}function q(e,t){if(t)return e.slice();var n=e.length,o=jt?jt(n):new e.constructor(n);return e.copy(o),o}function W(e){var t=new e.constructor(e.byteLength);return new Pt(t).set(new Pt(e)),t}function Q(e,t){var n=t?W(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Z(e,t){var n=-1,o=e.length;for(t||(t=Array(o));++n<o;)t[n]=e[n];return t}function X(e,t,n,o){var r=!n;n||(n={});for(var i=-1,a=t.length;++i<a;){var u=t[i],c=o?o(n[u],e[u],u,n,e):void 0;void 0===c&&(c=e[u]),r?V(n,u,c):I(n,u,c)}return n}function J(e){return Y(function(t,n){var o=-1,r=n.length,i=r>1?n[r-1]:void 0,a=r>2?n[2]:void 0;for(i=e.length>3&&"function"==typeof i?(r--,i):void 0,a&&re(n[0],n[1],a)&&(i=r<3?void 0:i,r=1),t=Object(t);++o<r;){var u=n[o];u&&e(t,u,o,i)}return t})}function K(e){return function(t,n,o){for(var r=-1,i=Object(t),a=o(t),u=a.length;u--;){var c=a[e?u:++r];if(n(i[c],c,i)===!1)break}return t}}function $(e,t){var n=e.__data__;return ie(t)?n["string"==typeof t?"string":"hash"]:n.map}function ee(e,t){var n=a(e,t);return B(n)?n:void 0}function te(e){var t=Et.call(e,Vt),n=e[Vt];try{e[Vt]=void 0;var o=!0}catch(e){}var r=St.call(e);return o&&(t?e[Vt]=n:delete e[Vt]),r}function ne(e){return"function"!=typeof e.constructor||ue(e)?{}:zt(Ct(e))}function oe(e,t){var n=typeof e;return t=null==t?Me:t,!!t&&("number"==n||"symbol"!=n&&ct.test(e))&&e>-1&&e%1==0&&e<t}function re(e,t,n){if(!Ae(n))return!1;var o=typeof t;return!!("number"==o?he(n)&&oe(t,n.length):"string"==o&&t in n)&&pe(n[t],e)}function ie(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function ae(e){return!!kt&&kt in e}function ue(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||wt;return e===n}function ce(e){var t=[];if(null!=e)for(var n in Object(e))t.push(n);return t}function le(e){
return St.call(e)}function se(e,t,n){return t=Bt(void 0===t?e.length-1:t,0),function(){for(var r=arguments,i=-1,a=Bt(r.length-t,0),u=Array(a);++i<a;)u[i]=r[t+i];i=-1;for(var c=Array(t+1);++i<t;)c[i]=r[i];return c[t]=n(u),o(e,this,c)}}function de(e){var t=0,n=0;return function(){var o=Gt(),r=Oe-(o-n);if(n=o,r>0){if(++t>=Le)return arguments[0]}else t=0;return e.apply(void 0,arguments)}}function fe(e){if(null!=e){try{return xt.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function pe(e,t){return e===t||e!==e&&t!==t}function he(e){return null!=e&&me(e.length)&&!ye(e)}function ve(e){return ge(e)&&he(e)}function ye(e){if(!Ae(e))return!1;var t=N(e);return t==Ve||t==Ne||t==Ce||t==He}function me(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Me}function Ae(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function ge(e){return null!=e&&"object"==typeof e}function be(e){if(!ge(e)||N(e)!=Ue)return!1;var t=Ct(e);if(null===t)return!0;var n=Et.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&xt.call(n)==Tt}function we(e){return X(e,_e(e))}function _e(e){return he(e)?C(e,!0):U(e)}function xe(e){return function(){return e}}function Ee(e){return e}function ke(){return!1}var Se=200,Te="__lodash_hash_undefined__",Le=800,Oe=16,Me=9007199254740991,Pe="[object Arguments]",je="[object Array]",Ce="[object AsyncFunction]",Re="[object Boolean]",Ie="[object Date]",Fe="[object Error]",Ve="[object Function]",Ne="[object GeneratorFunction]",De="[object Map]",Be="[object Number]",Ge="[object Null]",Ue="[object Object]",He="[object Proxy]",ze="[object RegExp]",Ye="[object Set]",qe="[object String]",We="[object Undefined]",Qe="[object WeakMap]",Ze="[object ArrayBuffer]",Xe="[object DataView]",Je="[object Float32Array]",Ke="[object Float64Array]",$e="[object Int8Array]",et="[object Int16Array]",tt="[object Int32Array]",nt="[object Uint8Array]",ot="[object Uint8ClampedArray]",rt="[object Uint16Array]",it="[object Uint32Array]",at=/[\\^$.*+?()[\]{}|]/g,ut=/^\[object .+?Constructor\]$/,ct=/^(?:0|[1-9]\d*)$/,lt={};lt[Je]=lt[Ke]=lt[$e]=lt[et]=lt[tt]=lt[nt]=lt[ot]=lt[rt]=lt[it]=!0,lt[Pe]=lt[je]=lt[Ze]=lt[Re]=lt[Xe]=lt[Ie]=lt[Fe]=lt[Ve]=lt[De]=lt[Be]=lt[Ue]=lt[ze]=lt[Ye]=lt[qe]=lt[Qe]=!1;var st="object"==typeof e&&e&&e.Object===Object&&e,dt="object"==typeof self&&self&&self.Object===Object&&self,ft=st||dt||Function("return this")(),pt="object"==typeof t&&t&&!t.nodeType&&t,ht=pt&&"object"==typeof n&&n&&!n.nodeType&&n,vt=ht&&ht.exports===pt,yt=vt&&st.process,mt=function(){try{return yt&&yt.binding&&yt.binding("util")}catch(e){}}(),At=mt&&mt.isTypedArray,gt=Array.prototype,bt=Function.prototype,wt=Object.prototype,_t=ft["__core-js_shared__"],xt=bt.toString,Et=wt.hasOwnProperty,kt=function(){var e=/[^.]+$/.exec(_t&&_t.keys&&_t.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),St=wt.toString,Tt=xt.call(Object),Lt=RegExp("^"+xt.call(Et).replace(at,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Ot=vt?ft.Buffer:void 0,Mt=ft.Symbol,Pt=ft.Uint8Array,jt=Ot?Ot.allocUnsafe:void 0,Ct=u(Object.getPrototypeOf,Object),Rt=Object.create,It=wt.propertyIsEnumerable,Ft=gt.splice,Vt=Mt?Mt.toStringTag:void 0,Nt=function(){try{var e=ee(Object,"defineProperty");return e({},"",{}),e}catch(e){}}(),Dt=Ot?Ot.isBuffer:void 0,Bt=Math.max,Gt=Date.now,Ut=ee(ft,"Map"),Ht=ee(Object,"create"),zt=function(){function e(){}return function(t){if(!Ae(t))return{};if(Rt)return Rt(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();l.prototype.clear=s,l.prototype.delete=d,l.prototype.get=f,l.prototype.has=p,l.prototype.set=h,v.prototype.clear=y,v.prototype.delete=m,v.prototype.get=A,v.prototype.has=g,v.prototype.set=b,w.prototype.clear=_,w.prototype.delete=x,w.prototype.get=E,w.prototype.has=k,w.prototype.set=S,T.prototype.clear=L,T.prototype.delete=O,T.prototype.get=M,T.prototype.has=P,T.prototype.set=j;var Yt=K(),qt=Nt?function(e,t){return Nt(e,"toString",{configurable:!0,enumerable:!1,value:xe(t),writable:!0})}:Ee,Wt=de(qt),Qt=D(function(){return arguments}())?D:function(e){return ge(e)&&Et.call(e,"callee")&&!It.call(e,"callee")},Zt=Array.isArray,Xt=Dt||ke,Jt=At?i(At):G,Kt=J(function(e,t,n){H(e,t,n)});n.exports=Kt}).call(t,function(){return this}(),n(71)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1),e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=!1,r=n(73),i=r.OggVideo,a=r.Mp4Video,u=function(){return new Promise(function(e,t){if("resolve"===o)return void e("resolved for debugging");if("reject"===o)return void t("rejected for debugging");var n=document.createElement("video");n.autoplay=!0,n.setAttribute("autoplay",!0),n.muted=!0,n.setAttribute("muted",!0),n.playsinline=!0,n.setAttribute("playsinline",!0),n.volume=0,n.setAttribute("data-is-playing","false"),n.setAttribute("style","width: 1px; height: 1px; position: fixed; top: 0; left: 0; z-index: 100;"),document.body.appendChild(n);var r=null,u=function(){r&&(clearTimeout(r),r=null);try{document.body.removeChild(n)}catch(e){return}};try{if(n.canPlayType('video/ogg; codecs="theora"').match(/^(probably)|(maybe)/))n.src=i;else{if(!n.canPlayType('video/mp4; codecs="avc1.42E01E"').match(/^(probably)|(maybe)/))return u(),void t("no autoplay: element does not support mp4 or ogg format");n.src=a}}catch(e){return u(),void t("no autoplay: "+e)}n.addEventListener("play",function(){n.setAttribute("data-is-playing","true"),r=setTimeout(function(){u(),t("no autoplay: unsure")},3e3)}),n.addEventListener("canplay",function(){return"true"===n.getAttribute("data-is-playing")?(u(),e("autoplay supported"),!0):(u(),t("no autoplay: browser does not support autoplay"),!1)}),n.load(),n.play()})};t.default=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="data:video/ogg;base64,T2dnUwACAAAAAAAAAABmnCATAAAAAHDEixYBKoB0aGVvcmEDAgEAAQABAAAQAAAQAAAAAAAFAAAAAQAAAAAAAAAAAGIAYE9nZ1MAAAAAAAAAAAAAZpwgEwEAAAACrA7TDlj///////////////+QgXRoZW9yYSsAAABYaXBoLk9yZyBsaWJ0aGVvcmEgMS4xIDIwMDkwODIyIChUaHVzbmVsZGEpAQAAABoAAABFTkNPREVSPWZmbXBlZzJ0aGVvcmEtMC4yOYJ0aGVvcmG+zSj3uc1rGLWpSUoQc5zmMYxSlKQhCDGMYhCEIQhAAAAAAAAAAAAAEW2uU2eSyPxWEvx4OVts5ir1aKtUKBMpJFoQ/nk5m41mUwl4slUpk4kkghkIfDwdjgajQYC8VioUCQRiIQh8PBwMhgLBQIg4FRba5TZ5LI/FYS/Hg5W2zmKvVoq1QoEykkWhD+eTmbjWZTCXiyVSmTiSSCGQh8PB2OBqNBgLxWKhQJBGIhCHw8HAyGAsFAiDgUCw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDw8PDAwPEhQUFQ0NDhESFRUUDg4PEhQVFRUOEBETFBUVFRARFBUVFRUVEhMUFRUVFRUUFRUVFRUVFRUVFRUVFRUVEAwLEBQZGxwNDQ4SFRwcGw4NEBQZHBwcDhATFhsdHRwRExkcHB4eHRQYGxwdHh4dGxwdHR4eHh4dHR0dHh4eHRALChAYKDM9DAwOExo6PDcODRAYKDlFOA4RFh0zV1A+EhYlOkRtZ00YIzdAUWhxXDFATldneXhlSFxfYnBkZ2MTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEhIVGRoaGhoSFBYaGhoaGhUWGRoaGhoaGRoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhESFh8kJCQkEhQYIiQkJCQWGCEkJCQkJB8iJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQREhgvY2NjYxIVGkJjY2NjGBo4Y2NjY2MvQmNjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRISEhUXGBkbEhIVFxgZGxwSFRcYGRscHRUXGBkbHB0dFxgZGxwdHR0YGRscHR0dHhkbHB0dHR4eGxwdHR0eHh4REREUFxocIBERFBcaHCAiERQXGhwgIiUUFxocICIlJRcaHCAiJSUlGhwgIiUlJSkcICIlJSUpKiAiJSUlKSoqEBAQFBgcICgQEBQYHCAoMBAUGBwgKDBAFBgcICgwQEAYHCAoMEBAQBwgKDBAQEBgICgwQEBAYIAoMEBAQGCAgAfF5cdH1e3Ow/L66wGmYnfIUbwdUTe3LMRbqON8B+5RJEvcGxkvrVUjTMrsXYhAnIwe0dTJfOYbWrDYyqUrz7dw/JO4hpmV2LsQQvkUeGq1BsZLx+cu5iV0e0eScJ91VIQYrmqfdVSK7GgjOU0oPaPOu5IcDK1mNvnD+K8LwS87f8Jx2mHtHnUkTGAurWZlNQa74ZLSFH9oF6FPGxzLsjQO5Qe0edcpttd7BXBSqMCL4k/4tFrHIPuEQ7m1/uIWkbDMWVoDdOSuRQ9286kvVUlQjzOE6VrNguN4oRXYGkgcnih7t13/9kxvLYKQezwLTrO44sVmMPgMqORo1E0sm1/9SludkcWHwfJwTSybR4LeAz6ugWVgRaY8mV/9SluQmtHrzsBtRF/wPY+X0JuYTs+ltgrXAmlk10xQHmTu9VSIAk1+vcvU4ml2oNzrNhEtQ3CysNP8UeR35wqpKUBdGdZMSjX4WVi8nJpdpHnbhzEIdx7mwf6W1FKAiucMXrWUWVjyRf23chNtR9mIzDoT/6ZLYailAjhFlZuvPtSeZ+2oREubDoWmT3TguY+JHPdRVSLKxfKH3vgNqJ/9emeEYikGXDFNzaLjvTeGAL61mogOoeG3y6oU4rW55ydoj0lUTSR/mmRhPmF86uwIfzp3FtiufQCmppaHDlGE0r2iTzXIw3zBq5hvaTldjG4CPb9wdxAme0SyedVKczJ9AtYbgPOzYKJvZZImsN7ecrxWZg5dR6ZLj/j4qpWsIA+vYwE+Tca9ounMIsrXMB4Stiib2SPQtZv+FVIpfEbzv8ncZoLBXc3YBqTG1HsskTTotZOYTG+oVUjLk6zhP8bg4RhMUNtfZdO7FdpBuXzhJ5Fh8IKlJG7wtD9ik8rWOJxy6iQ3NwzBpQ219mlyv+FLicYs2iJGSE0u2txzed++D61ZWCiHD/cZdQVCqkO2gJpdpNaObhnDfAPrT89RxdWFZ5hO3MseBSIlANppdZNIV/Rwe5eLTDvkfWKzFnH+QJ7m9QWV1KdwnuIwTNtZdJMoXBf74OhRnh2t+OTGL+AVUnIkyYY+QG7g9itHXyF3OIygG2s2kud679ZWKqSFa9n3IHD6MeLv1lZ0XyduRhiDRtrNnKoyiFVLcBm0ba5Yy3fQkDh4XsFE34isVpOzpa9nR8iCpS4HoxG2rJpnRhf3YboVa1PcRouh5LIJv/uQcPNd095ickTaiGBnWLKVWRc0OnYTSyex/n2FofEPnDG8y3PztHrzOLK1xo6RAml2k9owKajOC0Wr4D5x+3nA0UEhK2m198wuBHF3zlWWVKWLN1CHzLClUfuoYBcx4b1llpeBKmbayaR58njtE9onD66lUcsg0Spm2snsb+8HaJRn4dYcLbCuBuYwziB8/5U1C1DOOz2gZjSZtrLJk6vrLF3hwY4Io9xuT/ruUFRSBkNtUzTOWhjh26irLEPx4jPZL3Fo3QrReoGTTM21xYTT9oFdhTUIvjqTkfkvt0bzgVUjq/hOYY8j60IaO/0AzRBtqkTS6R5ellZd5uKdzzhb8BFlDdAcrwkE0rbXTOPB+7Y0FlZO96qFL4Ykg21StJs8qIW7h16H5hGiv8V2Cflau7QVDepTAHa6Lgt6feiEvJDM21StJsmOH/hynURrKxvUpQ8BH0JF7BiyG2qZpnL/7AOU66gt+reLEXY8pVOCQvSsBtqZTNM8bk9ohRcwD18o/WVkbvrceVKRb9I59IEKysjBeTMmmbA21xu/6iHadLRxuIzkLpi8wZYmmbbWi32RVAUjruxWlJ//iFxE38FI9hNKOoCdhwf5fDe4xZ81lgREhK2m1j78vW1CqkuMu/AjBNK210kzRUX/B+69cMMUG5bYrIeZxVSEZISmkzbXOi9yxwIfPgdsov7R71xuJ7rFcACjG/9PzApqFq7wEgzNJm2suWESPuwrQvejj7cbnQxMkxpm21lUYJL0fKmogPPqywn7e3FvB/FCNxPJ85iVUkCE9/tLKx31G4CgNtWTTPFhMvlu8G4/TrgaZttTChljfNJGgOT2X6EqpETy2tYd9cCBI4lIXJ1/3uVUllZEJz4baqGF64yxaZ+zPLYwde8Uqn1oKANtUrSaTOPHkhvuQP3bBlEJ/LFe4pqQOHUI8T8q7AXx3fLVBgSCVpMba55YxN3rv8U1Dv51bAPSOLlZWebkL8vSMGI21lJmmeVxPRwFlZF1CpqCN8uLwymaZyjbXHCRytogPN3o/n74CNykfT+qqRv5AQlHcRxYrC5KvGmbbUwmZY/29BvF6C1/93x4WVglXDLFpmbapmF89HKTogRwqqSlGbu+oiAkcWFbklC6Zhf+NtTLFpn8oWz+HsNRVSgIxZWON+yVyJlE5tq/+GWLTMutYX9ekTySEQPLVNQQ3OfycwJBM0zNtZcse7CvcKI0V/zh16Dr9OSA21MpmmcrHC+6pTAPHPwoit3LHHqs7jhFNRD6W8+EBGoSEoaZttTCZljfduH/fFisn+dRBGAZYtMzbVMwvul/T/crK1NQh8gN0SRRa9cOux6clC0/mDLFpmbarmF8/e6CopeOLCNW6S/IUUg3jJIYiAcDoMcGeRbOvuTPjXR/tyo79LK3kqqkbxkkMRAOB0GODPItnX3Jnxro/25Ud+llbyVVSN4ySGIgHA6DHBnkWzr7kz410f7cqO/Syt5KqpFVJwn6gBEvBM0zNtZcpGOEPiysW8vvRd2R0f7gtjhqUvXL+gWVwHm4XJDBiMpmmZtrLfPwd/IugP5+fKVSysH1EXreFAcEhelGmbbUmZY4Xdo1vQWVnK19P4RuEnbf0gQnR+lDCZlivNM22t1ESmopPIgfT0duOfQrsjgG4tPxli0zJmF5trdL1JDUIUT1ZXSqQDeR4B8mX3TrRro/2McGeUvLtwo6jIEKMkCUXWsLyZROd9P/rFYNtXPBli0z398iVUlVKAjFlY437JXImUTm2r/4ZYtMy61hf16RPJIU9nZ1MABAwAAAAAAAAAZpwgEwIAAABhp658BScAAAAAAADnUFBQXIDGXLhwtttNHDhw5OcpQRMETBEwRPduylKVB0HRdF0A",o="data:video/mp4;base64,AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAs1tZGF0AAACrgYF//+q3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0OCByMjYwMSBhMGNkN2QzIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNSAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MzoweDExMyBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MSBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0zIGJfcHlyYW1pZD0yIGJfYWRhcHQ9MSBiX2JpYXM9MCBkaXJlY3Q9MSB3ZWlnaHRiPTEgb3Blbl9nb3A9MCB3ZWlnaHRwPTIga2V5aW50PTI1MCBrZXlpbnRfbWluPTEwIHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAD2WIhAA3//728P4FNjuZQQAAAu5tb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAAZAABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAACGHRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAEAAAAAAAAAZAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAgAAAAIAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAGQAAAAAAAEAAAAAAZBtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAACgAAAAEAFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAE7bWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAA+3N0YmwAAACXc3RzZAAAAAAAAAABAAAAh2F2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAgACAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAxYXZjQwFkAAr/4QAYZ2QACqzZX4iIhAAAAwAEAAADAFA8SJZYAQAGaOvjyyLAAAAAGHN0dHMAAAAAAAAAAQAAAAEAAAQAAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAABRzdHN6AAAAAAAAAsUAAAABAAAAFHN0Y28AAAAAAAAAAQAAADAAAABidWR0YQAAAFptZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAAC1pbHN0AAAAJal0b28AAAAdZGF0YQAAAAEAAAAATGF2ZjU2LjQwLjEwMQ==";t.OggVideo=n,t.Mp4Video=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeVimeoPlayer=t.initializeVimeoAPI=void 0;var o=n(75),r=n(76),i=void 0,a="*",u=null,c=function(){return new Promise(function(e,t){e("no api needed")})},l=function(e,t){var n={method:e};t&&(n.value=t);var o=JSON.stringify(n);i.ownerDocument.defaultView.eval("(function(playerIframe){ playerIframe.contentWindow.postMessage("+o+", "+JSON.stringify(a)+") })")(i)},s=function(e){var t=e.win,n=e.instance,c=e.container,s=e.videoId,d=e.startTime,f=e.readyCallback,p=e.stateChangeCallback;return new Promise(function(e,h){var v=n.logger||function(){};i=t.document.createElement("iframe"),i.id="vimeoplayer";var y="&background=1";i.src="//player.vimeo.com/video/"+s+"?api=1"+y;var m=(0,o.getPlayerElement)(c);m.appendChild(i);var A={iframe:i,setPlaybackRate:function(){}};e(A);var g=function(){l("getDuration"),l("getVideoHeight"),l("getVideoWidth")},b=null,w=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(e||A.dimensions.width&&A.dimensions.height&&A.duration)&&(e&&g(),A.dimensions.width=A.dimensions.width||A.iframe.parentNode.offsetWidth,A.dimensions.height=A.dimensions.height||A.iframe.parentNode.offsetHeight,A.duration=A.duration||10,l("setVolume","0"),l("setLoop","true"),l("seekTo",d),l("addEventListener","playProgress"),f(A))},_=function(){u&&(clearTimeout(u),u=null),A.dimensions||(A.dimensions={},g(),p("buffering"),b=setTimeout(function(){v.call(n,"retrying"),w(!0)},.75*r.TIMEOUT))},x=function(e){if(!/^https?:\/\/player.vimeo.com/.test(e.origin))return!1;a=e.origin;var t=e.data;switch("string"==typeof t&&(t=JSON.parse(t)),t.event){case"ready":_(a);break;case"playProgress":case"timeupdate":b&&(clearTimeout(b),b=null),p("playing",t),l("setVolume","0"),t.data.percent>=.98&&d>0&&l("seekTo",d)}switch(t.method){case"getVideoHeight":v.call(n,t.method),A.dimensions.height=t.value,w();break;case"getVideoWidth":v.call(n,t.method),A.dimensions.width=t.value,w();break;case"getDuration":v.call(n,t.method),A.duration=t.value,d>=A.duration&&(d=0),w()}},E=function(e){x(e)};t.addEventListener("message",E,!1),A.destroy=function(){t.removeEventListener("message",E),A.iframe.parentElement&&A.iframe.parentElement.removeChild(A.iframe)},u=setTimeout(function(){h("Ran out of time")},r.TIMEOUT)})};t.initializeVimeoAPI=c,t.initializeVimeoPlayer=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.validatedImage=t.getVideoSource=t.getVideoID=t.getStartTime=t.getPlayerElement=t.findPlayerAspectRatio=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=n(76),a=n(77),u=o(a),c=n(81),l=o(c),s=function(e){var t=void 0,n=void 0;for(var o in e){var i=e[o];if("object"===("undefined"==typeof i?"undefined":r(i))&&i.width&&i.height){t=i.width,n=i.height;break}}return{w:t,h:n}},d=function(e){var t=void 0,n=void 0;return e.dimensions?(t=e.dimensions.width,n=e.dimensions.height):e.iframe&&(t=e.iframe.clientWidth,n=e.iframe.clientHeight),{w:t,h:n}},f={youtube:{parsePath:"query.t",timeRegex:/[hms]/,idRegex:i.YOUTUBE_REGEX,getDimensions:s},vimeo:{parsePath:null,timeRegex:/[#t=s]/,idRegex:i.VIMEO_REGEX,getDimensions:d}},p=function(e,t){return f[t].parsePath?(0,l.default)(e,f[t].parsePath):null},h=function(e,t){var n=new u.default(e,!0),o=p(n,t);if(o){var r=o.split(f[t].timeRegex).filter(Boolean),i=parseInt(r.pop(),10)||0,a=60*parseInt(r.pop(),10)||0,c=3600*parseInt(r.pop(),10)||0;return c+a+i}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.DEFAULT_PROPERTY_VALUES.url,t=e.match(i.YOUTUBE_REGEX);return t&&t[2].length?"youtube":(t=e.match(i.VIMEO_REGEX),t&&t[2].length?"vimeo":void console.error("Video source "+e+" does not match supported types"))},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.DEFAULT_PROPERTY_VALUES.url,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.match(f[t].idRegex);return n&&n[2].length?n[2]:void console.error("Video id at "+e+" is not valid")},m=function(e){if(!e)return!1;var t="IMG"===e.nodeName&&e;return t||console.warn("Element is not a valid image element."),t},A=function(e,t,n){var o=void 0,r=void 0;if(t){var i=f[n].getDimensions(t);o=i.w,r=i.h}return o&&r||(o=e.clientWidth,r=e.clientHeight,console.warn("No width and height found in "+n+" player "+t+". Using container dimensions.")),parseInt(o,10)/parseInt(r,10)},g=function(e){var t=e.querySelector("#player");return t||(t=e.ownerDocument.createElement("div"),t.id="player",e.appendChild(t)),t.setAttribute("style","position: absolute; top: 0; bottom: 0; left: 0; right: 0;"),t};t.findPlayerAspectRatio=A,t.getPlayerElement=g,t.getStartTime=h,t.getVideoID=y,t.getVideoSource=v,t.validatedImage=m},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={enabled:!0,verbose:!1},o={container:"body",url:"https://youtu.be/xkEmYQvJ_68",source:"youtube",fitMode:"fill",scaleFactor:1,playbackSpeed:1,filter:1,filterStrength:50,timeCode:{start:0,end:null},DEBUG:n},r=2500,i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]{11}).*/,a=/^.*(vimeo\.com\/)([0-9]{7,}(#t\=.*s)?)/;t.DEBUG=n,t.DEFAULT_PROPERTY_VALUES=o,t.TIMEOUT=r,t.YOUTUBE_REGEX=i,t.VIMEO_REGEX=a},function(e,t,n){"use strict";function o(e){var t=d.exec(e);return{protocol:t[1]?t[1].toLowerCase():"",slashes:!!t[2],rest:t[3]}}function r(e,t){for(var n=(t||"/").split("/").slice(0,-1).concat(e.split("/")),o=n.length,r=n[o-1],i=!1,a=0;o--;)"."===n[o]?n.splice(o,1):".."===n[o]?(n.splice(o,1),a++):a&&(0===o&&(i=!0),n.splice(o,1),a--);return i&&n.unshift(""),"."!==r&&".."!==r||n.push(""),n.join("/")}function i(e,t,n){if(!(this instanceof i))return new i(e,t,n);var a,u,d,p,h,v,y=f.slice(),m=typeof t,A=this,g=0;for("object"!==m&&"string"!==m&&(n=t,t=null),n&&"function"!=typeof n&&(n=s.parse),t=l(t),u=o(e||""),a=!u.protocol&&!u.slashes,A.slashes=u.slashes||a&&t.slashes,A.protocol=u.protocol||t.protocol||"",e=u.rest,u.slashes||(y[2]=[/(.*)/,"pathname"]);g<y.length;g++)p=y[g],d=p[0],v=p[1],d!==d?A[v]=e:"string"==typeof d?~(h=e.indexOf(d))&&("number"==typeof p[2]?(A[v]=e.slice(0,h),e=e.slice(h+p[2])):(A[v]=e.slice(h),e=e.slice(0,h))):(h=d.exec(e))&&(A[v]=h[1],e=e.slice(0,h.index)),A[v]=A[v]||(a&&p[3]?t[v]||"":""),p[4]&&(A[v]=A[v].toLowerCase());n&&(A.query=n(A.query)),a&&t.slashes&&"/"!==A.pathname.charAt(0)&&(""!==A.pathname||""!==t.pathname)&&(A.pathname=r(A.pathname,t.pathname)),c(A.port,A.protocol)||(A.host=A.hostname,A.port=""),A.username=A.password="",A.auth&&(p=A.auth.split(":"),A.username=p[0]||"",A.password=p[1]||""),A.origin=A.protocol&&A.host&&"file:"!==A.protocol?A.protocol+"//"+A.host:"null",A.href=A.toString()}function a(e,t,n){var o=this;switch(e){case"query":"string"==typeof t&&t.length&&(t=(n||s.parse)(t)),o[e]=t;break;case"port":o[e]=t,c(t,o.protocol)?t&&(o.host=o.hostname+":"+t):(o.host=o.hostname,o[e]="");break;case"hostname":o[e]=t,o.port&&(t+=":"+o.port),o.host=t;break;case"host":o[e]=t,/:\d+$/.test(t)?(t=t.split(":"),o.port=t.pop(),o.hostname=t.join(":")):(o.hostname=t,o.port="");break;case"protocol":o.protocol=t.toLowerCase(),o.slashes=!n;break;case"pathname":o.pathname=t.length&&"/"!==t.charAt(0)?"/"+t:t;break;default:o[e]=t}for(var r=0;r<f.length;r++){var i=f[r];i[4]&&(o[i[1]]=o[i[1]].toLowerCase())}return o.origin=o.protocol&&o.host&&"file:"!==o.protocol?o.protocol+"//"+o.host:"null",o.href=o.toString(),o}function u(e){e&&"function"==typeof e||(e=s.stringify);var t,n=this,o=n.protocol;o&&":"!==o.charAt(o.length-1)&&(o+=":");var r=o+(n.slashes?"//":"");return n.username&&(r+=n.username,n.password&&(r+=":"+n.password),r+="@"),r+=n.host+n.pathname,t="object"==typeof n.query?e(n.query):n.query,t&&(r+="?"!==t.charAt(0)?"?"+t:t),n.hash&&(r+=n.hash),r}var c=n(78),l=n(79),s=n(80),d=/^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,f=[["#","hash"],["?","query"],["/","pathname"],["@","auth",1],[NaN,"host",void 0,1,1],[/:(\d+)$/,"port",void 0,1],[NaN,"hostname",void 0,1,1]];i.prototype={set:a,toString:u},i.extractProtocol=o,i.location=l,i.qs=s,e.exports=i},function(e,t){"use strict";e.exports=function(e,t){if(t=t.split(":")[0],e=+e,!e)return!1;switch(t){case"http":case"ws":return 80!==e;case"https":case"wss":return 443!==e;case"ftp":return 21!==e;case"gopher":return 70!==e;case"file":return!1}return 0!==e}},function(e,t,n){(function(t){"use strict";var o,r=/^[A-Za-z][A-Za-z0-9+-.]*:\/\//,i={hash:1,query:1};e.exports=function(e){e=e||t.location||{},o=o||n(77);var a,u={},c=typeof e;if("blob:"===e.protocol)u=new o(unescape(e.pathname),{});else if("string"===c){u=new o(e,{});for(a in i)delete u[a]}else if("object"===c){for(a in e)a in i||(u[a]=e[a]);void 0===u.slashes&&(u.slashes=r.test(e.href))}return u}}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){for(var t,n=/([^=?&]+)=?([^&]*)/g,o={};t=n.exec(e);o[decodeURIComponent(t[1])]=decodeURIComponent(t[2]));return o}function o(e,t){t=t||"";var n=[];"string"!=typeof t&&(t="?");for(var o in e)r.call(e,o)&&n.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return n.length?t+n.join("&"):""}var r=Object.prototype.hasOwnProperty;t.stringify=o,t.parse=n},function(e,t){(function(t){function n(e,t){return null==e?void 0:e[t]}function o(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function r(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function i(){this.__data__=ye?ye(null):{}}function a(e){return this.has(e)&&delete this.__data__[e]}function u(e){var t=this.__data__;if(ye){var n=t[e];return n===H?void 0:n}return se.call(t,e)?t[e]:void 0}function c(e){var t=this.__data__;return ye?void 0!==t[e]:se.call(t,e)}function l(e,t){var n=this.__data__;return n[e]=ye&&void 0===t?H:t,this}function s(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function d(){this.__data__=[]}function f(e){var t=this.__data__,n=_(t,e);if(n<0)return!1;var o=t.length-1;return n==o?t.pop():he.call(t,n,1),!0}function p(e){var t=this.__data__,n=_(t,e);return n<0?void 0:t[n][1]}function h(e){return _(this.__data__,e)>-1}function v(e,t){var n=this.__data__,o=_(n,e);return o<0?n.push([e,t]):n[o][1]=t,this}function y(e){var t=-1,n=e?e.length:0;for(this.clear();++t<n;){var o=e[t];this.set(o[0],o[1])}}function m(){this.__data__={hash:new r,map:new(ve||s),string:new r}}function A(e){return T(this,e).delete(e)}function g(e){return T(this,e).get(e)}function b(e){return T(this,e).has(e)}function w(e,t){return T(this,e).set(e,t),this}function _(e,t){for(var n=e.length;n--;)if(I(e[n][0],t))return n;return-1}function x(e,t){t=O(t,e)?[t]:S(t);for(var n=0,o=t.length;null!=e&&n<o;)e=e[j(t[n++])];return n&&n==o?e:void 0}function E(e){if(!V(e)||P(e))return!1;var t=F(e)||o(e)?fe:ee;return t.test(C(e))}function k(e){if("string"==typeof e)return e;if(D(e))return Ae?Ae.call(e):"";var t=e+"";return"0"==t&&1/e==-z?"-0":t}function S(e){return be(e)?e:ge(e)}function T(e,t){var n=e.__data__;return M(t)?n["string"==typeof t?"string":"hash"]:n.map}function L(e,t){var o=n(e,t);return E(o)?o:void 0}function O(e,t){if(be(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!D(e))||(Z.test(e)||!Q.test(e)||null!=t&&e in Object(t))}function M(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}function P(e){return!!ce&&ce in e}function j(e){if("string"==typeof e||D(e))return e;var t=e+"";return"0"==t&&1/e==-z?"-0":t}function C(e){if(null!=e){try{return le.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function R(e,t){if("function"!=typeof e||t&&"function"!=typeof t)throw new TypeError(U);var n=function(){var o=arguments,r=t?t.apply(this,o):o[0],i=n.cache;if(i.has(r))return i.get(r);var a=e.apply(this,o);return n.cache=i.set(r,a),a};return n.cache=new(R.Cache||y),n}function I(e,t){return e===t||e!==e&&t!==t}function F(e){var t=V(e)?de.call(e):"";return t==Y||t==q}function V(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function N(e){return!!e&&"object"==typeof e}function D(e){return"symbol"==typeof e||N(e)&&de.call(e)==W}function B(e){return null==e?"":k(e)}function G(e,t,n){var o=null==e?void 0:x(e,t);return void 0===o?n:o}var U="Expected a function",H="__lodash_hash_undefined__",z=1/0,Y="[object Function]",q="[object GeneratorFunction]",W="[object Symbol]",Q=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Z=/^\w*$/,X=/^\./,J=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,K=/[\\^$.*+?()[\]{}|]/g,$=/\\(\\)?/g,ee=/^\[object .+?Constructor\]$/,te="object"==typeof t&&t&&t.Object===Object&&t,ne="object"==typeof self&&self&&self.Object===Object&&self,oe=te||ne||Function("return this")(),re=Array.prototype,ie=Function.prototype,ae=Object.prototype,ue=oe["__core-js_shared__"],ce=function(){var e=/[^.]+$/.exec(ue&&ue.keys&&ue.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),le=ie.toString,se=ae.hasOwnProperty,de=ae.toString,fe=RegExp("^"+le.call(se).replace(K,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),pe=oe.Symbol,he=re.splice,ve=L(oe,"Map"),ye=L(Object,"create"),me=pe?pe.prototype:void 0,Ae=me?me.toString:void 0;r.prototype.clear=i,r.prototype.delete=a,r.prototype.get=u,r.prototype.has=c,r.prototype.set=l,s.prototype.clear=d,s.prototype.delete=f,s.prototype.get=p,s.prototype.has=h,s.prototype.set=v,y.prototype.clear=m,y.prototype.delete=A,y.prototype.get=g,y.prototype.has=b,y.prototype.set=w;var ge=R(function(e){e=B(e);var t=[];return X.test(e)&&t.push(""),e.replace(J,function(e,n,o,r){t.push(o?r.replace($,"$1"):n||e)}),t});R.Cache=y;var be=Array.isArray;e.exports=G}).call(t,function(){return this}())},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initializeYouTubePlayer=t.initializeYouTubeAPI=void 0;var o=n(75),r=function(e){return new Promise(function(t,n){if(e.document.documentElement.querySelector('script[src*="www.youtube.com/iframe_api"].loaded'))return void t("already loaded");var o=e.document.createElement("script");o.src="https://www.youtube.com/iframe_api";var r=e.document.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r),o.addEventListener("load",function(e){e.currentTarget.classList.add("loaded"),t("api script tag created and loaded")},!0),o.addEventListener("error",function(e){n("Failed to load YouTube script: ",e)})})},i=function(e,t){var n=e.target;n.iframe=n.getIframe(),n.mute(),n.ready=!0,n.seekTo(t<n.getDuration()?t:0),n.playVideo()},a=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=e.target,i=(r.getDuration()-t)/o,a=function e(){r.getCurrentTime()+.1>=r.getDuration()&&(r.pauseVideo(),r.seekTo(t),r.playVideo()),requestAnimationFrame(e)};return e.data===n.YT.PlayerState.BUFFERING&&1!==r.getVideoLoadedFraction()&&(0===r.getCurrentTime()||r.getCurrentTime()>i- -.1)?"buffering":e.data===n.YT.PlayerState.PLAYING?(requestAnimationFrame(a),"playing"):void(e.data===n.YT.PlayerState.ENDED&&r.playVideo())},u=function(e){var t=e.container,n=e.win,r=e.videoId,u=e.startTime,c=e.speed,l=e.readyCallback,s=e.stateChangeCallback,d=(0,o.getPlayerElement)(t),f=function(){return new n.YT.Player(d,{videoId:r,playerVars:{autohide:1,autoplay:0,controls:0,enablejsapi:1,iv_load_policy:3,loop:0,modestbranding:1,playsinline:1,rel:0,showinfo:0,wmode:"opaque"},events:{onReady:function(e){i(e,u),l(e.target)},onStateChange:function(e){var t=a(e,u,n,c);s(t,t)}}})};return new Promise(function(e,t){var o=function t(){1===n.YT.loaded?e(f()):setTimeout(t,100)};o()})};t.initializeYouTubeAPI=r,t.initializeYouTubePlayer=u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=["none","blur","brightness","contrast","invert","opacity","saturate","sepia","drop-shadow","grayscale","hue-rotate"],o={blur:{modifier:function(e){return.3*e},unit:"px"},brightness:{modifier:function(e){return.009*e+.1},unit:""},contrast:{modifier:function(e){return.4*e+80},unit:"%"},grayscale:{modifier:function(e){return e},unit:"%"},"hue-rotate":{modifier:function(e){return 3.6*e},unit:"deg"},invert:{modifier:function(e){return 1},unit:""},opacity:{modifier:function(e){return e},unit:"%"},saturate:{modifier:function(e){return 2*e},unit:"%"},sepia:{modifier:function(e){return e},unit:"%"}};t.filterOptions=n,t.filterProperties=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t={container:e};return e.getAttribute("data-config-url")&&(t.url=e.getAttribute("data-config-url")),e.getAttribute("data-config-playback-speed")&&(t.playbackSpeed=e.getAttribute("data-config-playback-speed")),e.getAttribute("data-config-filter")&&(t.filter=e.getAttribute("data-config-filter")),e.getAttribute("data-config-filter-strength")&&(t.filterStrength=e.getAttribute("data-config-filter-strength")),t};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=void 0,o=function(){clearTimeout(n),n=setTimeout(function(){e()},t)};window.addEventListener("resize",o),window.addEventListener("mercury:unload",function(){window.removeEventListener("resize",o)})};t.default=n},function(e,t){"use strict";"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?!function(){var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var n,o=arguments.length;for(n=0;n<o;n++)e=arguments[n],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:n.call(this,e)}}e=null}():!function(e){if("Element"in e){var t="classList",n="prototype",o=e.Element[n],r=Object,i=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},a=Array[n].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1},u=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},c=function(e,t){if(""===t)throw new u("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new u("INVALID_CHARACTER_ERR","String contains an invalid character");return a.call(e,t)},l=function(e){for(var t=i.call(e.getAttribute("class")||""),n=t?t.split(/\s+/):[],o=0,r=n.length;o<r;o++)this.push(n[o]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},s=l[n]=[],d=function(){return new l(this)};if(u[n]=Error[n],s.item=function(e){return this[e]||null},s.contains=function(e){return e+="",c(this,e)!==-1},s.add=function(){var e,t=arguments,n=0,o=t.length,r=!1;do e=t[n]+"",c(this,e)===-1&&(this.push(e),r=!0);while(++n<o);r&&this._updateClassName()},s.remove=function(){var e,t,n=arguments,o=0,r=n.length,i=!1;do for(e=n[o]+"",t=c(this,e);t!==-1;)this.splice(t,1),i=!0,t=c(this,e);while(++o<r);i&&this._updateClassName()},s.toggle=function(e,t){e+="";var n=this.contains(e),o=n?t!==!0&&"remove":t!==!1&&"add";
return o&&this[o](e),t===!0||t===!1?t:!n},s.toString=function(){return this.join(" ")},r.defineProperty){var f={get:d,enumerable:!0,configurable:!0};try{r.defineProperty(o,t,f)}catch(e){e.number===-2146823252&&(f.enumerable=!1,r.defineProperty(o,t,f))}}else r[n].__defineGetter__&&o.__defineGetter__(t,d)}}(self))},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=new d.default(e,{debug:h.debug});if(e.classList.contains("Mobile")){var n=function(){t.sync(),e.classList.add("loaded")};return n(),l.Tweak.watch(v,n),{sync:n}}var o=e.getAttribute("data-nc-base"),r=(0,c.default)(e.querySelectorAll("[data-nc-group]")).reduce(function(e,t){var n=t.getAttribute("data-nc-group");if(!n)return e;var o=(0,c.default)(t.querySelectorAll("[data-nc-container]"));return e[n]={node:t,containers:o,breakpoint:{min:0,max:999999}},e},{}),i=function(e){for(var t=r[e],n=0;n<t.containers.length;n++)for(var i=t.containers[n],a=i.getAttribute("data-nc-container"),u=Math.ceil(parseFloat(window.getComputedStyle(i).width)),c=i.querySelectorAll("[data-nc-element]"),l=document.body.classList.contains("ancillary-"+o+"-"+a+"-layout-stacked"),s=0,d=0;d<c.length;d++){var f=c[d],p=f.offsetWidth;if(p>0&&!l&&(s+=p),l&&p>u||!l&&s>u)return window.innerWidth>t.breakpoint.min&&(t.breakpoint.min=window.innerWidth),!0}return window.innerWidth<t.breakpoint.max&&(t.breakpoint.max=window.innerWidth),!1},u=function(){return!document.body.classList.contains("is-mobile")},s=function(){u()&&(0,a.default)(r).forEach(function(e){var t=r[e];window.innerWidth>t.breakpoint.min&&window.innerWidth<=t.breakpoint.max?(t.node.removeAttribute("data-nc-collapse"),i(e)&&t.node.setAttribute("data-nc-collapse","")):window.innerWidth<=t.breakpoint.min?t.node.setAttribute("data-nc-collapse",""):window.innerWidth>t.breakpoint.max&&t.node.removeAttribute("data-nc-collapse")})},f=function(){t.sync(),s(),e.classList.add("loaded")};return(0,p.default)(function(){s()}),l.Tweak.watch(y,f),f(),{sync:f}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(88),a=o(i),u=n(7),c=o(u),l=n(60),s=n(92),d=o(s),f=n(85),p=o(f),h=n(99),v=["ancillary-mobile-bar-branding-position","ancillary-mobile-bar-menu-icon-position","ancillary-mobile-bar-search-icon-position","ancillary-mobile-bar-cart-position","ancillary-mobile-bar-account-position"],y=["ancillary-header-branding-position","ancillary-header-tagline-position","ancillary-header-primary-nav-position","ancillary-header-secondary-nav-position","ancillary-header-social-position","ancillary-header-search-position","ancillary-header-cart-position","ancillary-header-account-position"];t.default=r},function(e,t,n){e.exports={default:n(89),__esModule:!0}},function(e,t,n){n(90),e.exports=n(17).Object.keys},function(e,t,n){var o=n(52),r=n(36);n(91)("keys",function(){return function(e){return r(o(e))}})},function(e,t,n){var o=n(15),r=n(17),i=n(26);e.exports=function(e,t){var n=(r.Object||{})[e]||Object[e],a={};a[e]=t(n),o(o.S+o.F*i(function(){n(1)}),"Object",a)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(93),i=o(r),a=n(94),u=o(a),c=n(98),l=o(c),s=function(e,t){var n=new RegExp("ancillary-|"+t+"-","gi"),o=e.replace(n,"").toLowerCase().split(/-position-?/);return 2===o.length?{elementName:o[0],containerName:o[1]}:null},d=function(e){var t=new RegExp("ancillary-"+e+"-(.{1,20})-position-(.+?)(?=(\\s|$))","gi"),n=document.body.className.match(t),o=n.reduce(function(t,n){var o=s(n,e);return t[o.elementName]=o.containerName,t},{});return o},f=function(e){var t=(0,l.default)(e.querySelectorAll("[data-nc-element]")),n=t.reduce(function(e,t){var n=t.getAttribute("data-nc-element");return n.length>0&&(e[n]=t),e},{});return n},p=function(e){var t=(0,l.default)(e.querySelectorAll("[data-nc-container]")),n=t.reduce(function(e,t){var n=t.getAttribute("data-nc-container");return n.length>0&&(e[n]=t),e},{});return n},h=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,i.default)(this,e),this.baseName=t.getAttribute("data-nc-base").toLowerCase(),this.base=t,this.config=n,this.elements=f(this.base),this.containers=p(this.base)}return(0,u.default)(e,[{key:"sync",value:function(){this.positions=d(this.baseName);for(var e in this.elements)this.syncElement(e,this.positions[e])}},{key:"syncElement",value:function(e,t){var n=this.elements[e],o=this.containers[t];!n&&this.config.debug?console.error('Element "'+e+'"" not found.'):o?o.appendChild(n):n.parentNode&&(n.parentNode.removeChild(n),this.config.debug&&console.warn('Container "'+t+'" not found. Removing element "'+e+'".'))}}],[{key:"parse",value:function(e){return s(e,this.baseName)}}]),e}();t.default=h,e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(95),i=o(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},function(e,t,n){e.exports={default:n(96),__esModule:!0}},function(e,t,n){n(97);var o=n(17).Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},function(e,t,n){var o=n(15);o(o.S+o.F*!n(25),"Object",{defineProperty:n(21).f})},function(e,t,n){e.exports={default:n(8),__esModule:!0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.authenticated=""===document.documentElement.getAttribute("data-authenticated-account"),t.debug=!1,t.indexEditEvents={enabled:"sqs-flight-mode-enabled",disabled:"sqs-flight-mode-disabled",deleted:"sqs-stacked-items-dom-deleted",reorder:"sqs-stacked-items-dom-reorder"}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.querySelector(".Footer-nav");if(t){var n=(0,a.default)(t.querySelectorAll(".Footer-nav-group")),o={mid:Number.MAX_VALUE,full:Number.MAX_VALUE},r=function(){if(!o.mid)return!0;for(var r=parseFloat(window.getComputedStyle(t).width),i=0,a=0;a<n.length;a++){var u=e.classList.contains(s),c=n[a],l=c.offsetWidth;if(i+=l,u&&l>r||!u&&i>r)return!1}return!0},i=function(){var t="Columns"===u.Tweak.getValue("tweak-footer-layout");if(t){if(window.innerWidth>o.mid&&(e.classList.remove(d),window.innerWidth>o.full))return void e.classList.remove(s);e.classList.remove(d),e.classList.remove(s),r()?window.innerWidth<o.full&&(o.full=window.innerWidth):(e.classList.add(s),r()?window.innerWidth<o.mid&&(o.mid=window.innerWidth):e.classList.add(d))}};u.Tweak.watch(["tweak-footer-layout","tweak-footer-business-info-show","tweak-footer-business-hours-show"],function(e){o.mid=Number.MAX_VALUE,o.full=Number.MAX_VALUE,i()}),(0,l.default)(i),i()}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=o(i),u=n(60),c=n(85),l=o(c),s="Footer--mid",d="Footer--compact";t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=function(t){if(!d(t)){for(var n=t.target;n&&n!==document.body&&"A"!==n.tagName.toUpperCase();)n=n.parentElement;if(n&&n!==document.body){var o=s(n.href),r=o?e.querySelector(o):null;if(o&&r){t.preventDefault(),t.stopImmediatePropagation(),(0,l.isOverlayOpen)()&&(0,l.closeOverlay)(),window.history.replaceState(void 0,void 0,o);var i=Math.ceil(r.getBoundingClientRect().top);(0,a.default)(i,{duration:500})}}}};e.addEventListener("click",t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(102),a=o(i),u=n(77),c=o(u),l=n(103),s=function(e){var t=new c.default(e),n=new c.default(window.location.href);return t.host!==n.host||t.pathname!==n.pathname||""===t.hash||"#"===t.hash?"":t.hash},d=function(e){return e.metaKey||e.ctrlKey||e.altKey||e.shiftKey};t.default=r},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){"use strict";var e=function(e,t,n,o){return e/=o/2,e<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)},t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n=function(){function n(){return window.scrollY||window.pageYOffset}function o(e){return e.getBoundingClientRect().top+c}function r(e){v||(v=e),y=e-v,m=d(y,c,p,h),window.scrollTo(0,m),y<h?window.requestAnimationFrame(r):i()}function i(){window.scrollTo(0,c+p),u&&f&&(u.setAttribute("tabindex","-1"),u.focus()),"function"==typeof A&&A(),v=!1}function a(i){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(h=a.duration||1e3,s=a.offset||0,A=a.callback,d=a.easing||e,f=a.a11y||!1,c=n(),"undefined"==typeof i?"undefined":t(i)){case"number":u=void 0,f=!1,l=c+i;break;case"object":u=i,l=o(u);break;case"string":u=document.querySelector(i),l=o(u)}switch(p=l-c+s,t(a.duration)){case"number":h=a.duration;break;case"function":h=a.duration(p)}window.requestAnimationFrame(r)}var u=void 0,c=void 0,l=void 0,s=void 0,d=void 0,f=void 0,p=void 0,h=void 0,v=void 0,y=void 0,m=void 0,A=void 0;return a},o=n();return o})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=function(e){e.preventDefault(),d()?f():(s=document.documentElement.scrollTop||document.body.scrollTop,document.body.classList.add(c),document.body.style.top=-1*s+"px")},n=function(){document.body.classList.contains("is-mobile")||document.body.classList.remove(c)},o=function(){(0,u.default)(n),e.addEventListener("click",t)},r=function(){e.removeEventListener("click",t)};return i.Tweak.watch(function(e){var t=document.body.classList.contains("is-mobile")&&e.name&&l.indexOf(e.name)>=0;document.body.classList.toggle(c,t)}),o(),{destroy:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.closeOverlay=t.isOverlayOpen=t.mobileOverlayActiveClassname=void 0;var i=n(60),a=n(85),u=o(a),c=t.mobileOverlayActiveClassname="is-mobile-overlay-active",l=["slide-origin","back-color","close-show","close-background-color","close-icon-color","menu-color","menu-indicator-color","menu-primary-font","menu-primary-text-color","menu-primary-style-button","menu-primary-button-style","menu-primary-button-shape","menu-primary-button-font","menu-primary-button-color","menu-primary-button-text-color","menu-secondary-inherit","menu-secondary-font","menu-secondary-text-color","menu-secondary-style-button","menu-secondary-button-style","menu-secondary-button-shape","menu-secondary-button-font","menu-secondary-button-color","menu-secondary-button-text-color"].map(function(e){return"tweak-mobile-overlay-"+e}),s=void 0,d=t.isOverlayOpen=function(){return document.body.classList.contains(c)},f=t.closeOverlay=function(){document.body.classList.remove(c),document.body.style.top="",window.scrollTo(0,s)};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(!e.classList.contains("Index--empty")){var t=void 0,n=document.querySelector(".Site"),o=document.querySelector(".Header--top"),r=document.querySelector(".Header--bottom"),i=document.querySelector(".Mobile-bar--top"),u=document.querySelector(".sqs-announcement-bar-dropzone"),c=e.querySelector(".Index-page, .Index-gallery"),s=c.classList.contains("Index-gallery"),f=s&&(0,a.default)(c.querySelectorAll(".Index-gallery-item")),y=function(){if("true"!==l.Tweak.getValue("tweak-site-border-show"))return 0;if(parseFloat(l.Tweak.getValue("tweak-site-border-width"))<=0)return 0;var e=parseFloat(window.getComputedStyle(n).borderLeftWidth),t=parseFloat(window.getComputedStyle(n).borderTopWidth),o=e!==t&&0===t;if(o)return e;var r=s&&"true"===l.Tweak.getValue("tweak-index-gallery-apply-bottom-spacing"),i=!s&&"true"===l.Tweak.getValue("tweak-index-page-apply-bottom-spacing");return r||i?2*e:e},m=function(){var e="true"===l.Tweak.getValue("tweak-header-bottom-overlay-on-index-gallery"),t=r.classList.contains("Header--index-gallery");return!e&&t?r.offsetHeight:0},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[c],n=s?"height":"minHeight";if(!e)return void v(t,n,"");var r=y(),a=o.offsetHeight,l=m(),d=i.offsetHeight,f=u?u.offsetHeight:0,p=[r,a,l,d,f].reduce(function(e,t){return e+t},0);p>0?v(t,n,"calc("+e+" - "+p+"px)"):v(t,n,"")},g=function(){if(s){var e="Slideshow"===l.Tweak.getValue("tweak-index-gallery-layout"),t="true"===l.Tweak.getValue("tweak-index-gallery-fixed-height"),n=l.Tweak.getValue("tweak-index-gallery-height"),o=h(n),r=o.unit,i=c.querySelector(".Index-gallery-wrapper"),a=[i].concat(f);return e&&t&&"vh"===r?void A(n,a):void A(0,a)}var u=l.Tweak.getValue("tweak-index-page-fullscreen");if("None"===u)return void A(0);if("Pages with Backgrounds Only"===u&&!c.classList.contains("Index-page--has-image"))return void A(0);var d=l.Tweak.getValue("tweak-index-page-min-height");A(d)},b=function(){l.Tweak.watch(["tweak-header-bottom-overlay-on-index-gallery","tweak-index-page-fullscreen","tweak-index-page-min-height","tweak-index-page-apply-bottom-spacing","tweak-index-gallery-fixed-height","tweak-index-gallery-height","tweak-index-gallery-apply-bottom-spacing"],g),t=new d.default({targets:[".sqs-announcement-bar-dropzone"],callback:g}),t.init(),(0,p.default)(g)},w=function(){t.destroy(),t=null};return g(),b(),{sync:g,destroy:w}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=o(i),u=n(105),c=o(u),l=n(60),s=n(116),d=o(s),f=n(85),p=o(f),h=function(e){var t=e.match(/([\d\.])+|([A-Za-z])+/g),n=(0,c.default)(t,2),o=n[0],r=n[1];return{number:parseFloat(o),unit:r}},v=function(e,t,n){e.forEach(function(e){e.style[t]=n})};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(106),i=o(r),a=n(113),u=o(a);t.default=function(){function e(e,t){var n=[],o=!0,r=!1,i=void 0;try{for(var a,c=(0,u.default)(e);!(o=(a=c.next()).done)&&(n.push(a.value),!t||n.length!==t);o=!0);}catch(e){r=!0,i=e}finally{try{!o&&c.return&&c.return()}finally{if(r)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if((0,i.default)(Object(t)))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},function(e,t,n){e.exports={default:n(107),__esModule:!0}},function(e,t,n){n(108),n(9),e.exports=n(112)},function(e,t,n){n(109);for(var o=n(16),r=n(20),i=n(32),a=n(50)("toStringTag"),u="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),c=0;c<u.length;c++){var l=u[c],s=o[l],d=s&&s.prototype;d&&!d[a]&&r(d,a,l),i[l]=i.Array}},function(e,t,n){"use strict";var o=n(110),r=n(111),i=n(32),a=n(38);e.exports=n(13)(Array,"Array",function(e,t){this._t=a(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):"keys"==t?r(0,n):"values"==t?r(0,e[n]):r(0,[n,e[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(e,t){e.exports=function(){}},function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},function(e,t,n){var o=n(58),r=n(50)("iterator"),i=n(32);e.exports=n(17).isIterable=function(e){var t=Object(e);return void 0!==t[r]||"@@iterator"in t||i.hasOwnProperty(o(t))}},function(e,t,n){e.exports={default:n(114),__esModule:!0}},function(e,t,n){n(108),n(9),e.exports=n(115)},function(e,t,n){var o=n(22),r=n(57);e.exports=n(17).getIterator=function(e){var t=r(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return o(t.call(e))}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(117),u=o(a),c=n(118),l=o(c),s=n(120),d="This browser does not support MutationObserver",f=function(){function e(t){var n=t.callback,o=t.targets,r=void 0===o?[]:o;return(0,u.default)(this,e),this.MutationObserver=(0,s.checkForMutationObserver)(),this.MutationObserver?(this.callback=(0,s.validateCallback)(n),void(this.targets=r)):void console.error(d)}return(0,l.default)(e,[{key:"init",value:function(){return this.MutationObserver?(this.observer=this.createObserver(),void this.observeTargets()):void console.error(d)}},{key:"destroy",value:function(){return this.MutationObserver?(this.observer.disconnect(),this.observer=null,void document.removeEventListener("DOMContentLoaded",this.reactToMutations)):void console.error(d)}},{key:"createObserver",value:function(){var e=this;return new this.MutationObserver(function(t){e.evaluateMutations(t)})}},{key:"observeTargets",value:function(){var e=this;this.targets.forEach(function(t){(0,i.default)(document.querySelectorAll(t)).forEach(function(t){e.observer.observe(t,{childList:!0,subtree:!0,attributes:!0})})})}},{key:"evaluateMutations",value:function(e){e&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",this.reactToMutations):this.reactToMutations())}},{key:"reactToMutations",value:function(){this.timer&&clearTimeout(this.timer),this.timer=setTimeout(this.callback,150)}}]),e}();t.default=f,e.exports=t.default},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(119),i=o(r);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,i.default)(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}()},function(e,t,n){e.exports={default:n(96),__esModule:!0}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.checkForMutationObserver=function(){var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;return e},t.validateCallback=function(e){if("function"==typeof e)return e;var t="Darwin must receive a callback function, or there is nothing to run when mutations occur.";throw new Error(t)}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=(0,c.default)(e.querySelectorAll(".Index-gallery-item")),n=(0,c.default)(e.querySelectorAll(".Index-gallery-indicators-item")),o=e.querySelector(".Index-gallery-wrapper"),r=Math.ceil(t.length/g),i=_(t.length),u=(0,a.default)(i,2),l=u[0],p=u[1],v=void 0,b=void 0,x=[];if(0===t.length)return null;var E=(0,c.default)(e.querySelectorAll("img")),k=function(){var e=window.navigator.userAgent,t=document.body.classList.contains("tweak-index-gallery-hover-style-fade");t&&!(0,y.default)()&&e.match(/Safari/i)&&!e.match(/Chrome/i)&&E.forEach(function(e){e.style.webkitTransform="translatez(0)"})},S=function(e){return 1===r?t.length:e===r-2?l:e===r-1?p:g},T=function(e){var t=document.createElement("div");return t.className="Index-gallery-inner clear",t.setAttribute("data-index-gallery-images",e),t},L=function(){var e=document.createElement("div");return e.className="Index-gallery-items",e},O=function(){b=L();for(var e=[].concat(t),n=function(t){var n=S(t),o=T(n),r=e.splice(0,n);r.forEach(function(e){o.appendChild(e)}),b.appendChild(o),x.push(o)},i=0;i<r;i++)n(i);o.appendChild(b)},M=function(){t.forEach(function(e){o.appendChild(e)}),x.forEach(function(e){e.parentNode.removeChild(e)}),x=[],b.parentNode.removeChild(b),b=null},P=function(){E.forEach(function(e){d.ImageLoader.load(e,{load:!0,mode:"fill"})}),k()},j=function(){var t=d.Tweak.getValue("tweak-index-gallery-layout");if(v instanceof s.default&&(v.destroy(),v=null),x.length>0&&M(),"Packed"!==t&&"Split"!==t||O(),"Slideshow"===t){var r="Lines"===d.Tweak.getValue("tweak-index-gallery-indicators"),i="true"===d.Tweak.getValue("tweak-index-gallery-autoplay-enable"),a="None"!==d.Tweak.getValue("tweak-index-gallery-transition"),u=parseFloat(d.Tweak.getValue("tweak-index-gallery-transition-duration"));v=new s.default(o,{elementSelector:".Index-gallery-item",autoplay:{enabled:i,delay:1e3*parseFloat(d.Tweak.getValue("tweak-index-gallery-autoplay-duration"))},imageLoaderOptions:{load:!0,mode:"fill"},controls:{previous:".Index-gallery-control--left",next:".Index-gallery-control--right",indicators:".Index-gallery-indicators-item"},transitionDuration:a?u:null,afterInteractionEnd:function(){if(i&&r){var e=n[v.index];e.classList.add("animation-reset"),void e.offsetWidth,e.classList.remove("animation-reset")}}}),v.layout()}else P();e.classList.add("loaded"),(0,A.invalidateIndexSectionRectCache)(),w.forEach(function(e){return e()})},C=function(){v instanceof s.default&&v.stopAutoplay()},R=function(){v instanceof s.default&&v.startAutoplay()},I=function(){var e=["tweak-site-border-show","tweak-site-border-width","layout","items-per-row","min-item-width","spacing","spacing-sides-show","spacing-top-bottom-show","fixed-height","height","apply-bottom-spacing","aspect","controls","indicators","autoplay-enable","autoplay-duration","transition","transition-duration"].map(function(e){return 0===e.indexOf("tweak")?e:"tweak-index-gallery-"+e});f.authenticated&&d.Tweak.watch(e,j),(0,m.addScrollListener)("start",C),(0,m.addScrollListener)("end",R),(0,h.default)(P)},F=function(){w=[],(0,m.removeScrollListener)("start",C),(0,m.removeScrollListener)("end",R)};return j(),I(),{destroy:F}}Object.defineProperty(t,"__esModule",{value:!0}),t.removeIndexGalleryChangeListener=t.addIndexGalleryChangeListener=void 0;var i=n(105),a=o(i),u=n(7),c=o(u),l=n(122),s=o(l),d=n(60),f=n(99),p=n(85),h=o(p),v=n(186),y=o(v),m=n(187),A=n(188),g=9,b=3,w=[],_=function(e){var t=e%g;if(0===t)return[g,g];if(t<b&&e>=b){var n=g-b+t,o=b;return[n,o]}return[g,t]};t.addIndexGalleryChangeListener=function(e){var t=w.some(function(t){return w===e});t||w.push(e)},t.removeIndexGalleryChangeListener=function(e){w.some(function(t,n){var o=t===e;return o&&w.splice(n,1),o})};t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(123);var r=n(124),i=o(r);t.default=i.default,e.exports=t.default},function(e,t){!function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1})}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(125),i=o(r),a=n(7),u=o(a),c=n(130),l=o(c),s=n(131),d=o(s),f=n(136),p=o(f),h=n(117),v=o(h),y=n(118),m=o(y),A=n(139),g=o(A),b=n(157),w=o(b),_=n(165),x=o(_),E=n(181),k=n(185),S="active",T={loop:!0,imageLoaderOptions:{load:!0,mode:"fill"},autoplay:{enabled:!1}},L=function(e){function t(e,n){(0,v.default)(this,t);var o=(0,g.default)(this,(t.__proto__||(0,p.default)(t)).call(this,e,(0,d.default)({},T,n)));return o._index=0,o.eventHandlers=[],o}return(0,w.default)(t,e),(0,m.default)(t,[{key:"on",value:function(e,t,n){var o=n.bind(this);this.eventHandlers.push({node:e,event:t,boundCallback:o}),e.addEventListener(t,o)}},{key:"setStyles",value:function(){var e;this.rootNode.classList.add("gallery-root"),this.styleNode&&this.rootNode.removeChild(this.styleNode);var t=(e={".gallery-root":{position:"relative"}},(0,l.default)(e,this.config.elementSelector,{position:"absolute",top:0,left:0,width:"100%",height:"100%"}),(0,l.default)(e,this.config.elementSelector+":not(.active)",{opacity:0,"z-index":0}),(0,l.default)(e,this.config.elementSelector+".active",{opacity:1,"z-index":1}),e);this.styleNode=(0,k.createStyleNode)(t),this.rootNode.appendChild(this.styleNode)}},{key:"executeCallback",value:function(e){return"function"!=typeof e?void console.error("Callback is not a function"):void e()}},{key:"getElements",value:function(){var e=this.rootNode.querySelectorAll(this.config.elementSelector);return(0,u.default)(e)}},{key:"getIndicators",value:function(){if(!this.config.controls||!this.config.controls.indicators)return null;var e=this.rootNode.querySelectorAll(this.config.controls.indicators);return(0,u.default)(e)}},{key:"setActiveElement",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.elements.forEach(function(t,n){t.classList.toggle(S,n===e)}),this.indicators&&this.indicators.forEach(function(t,n){t.classList.toggle(S,n===e)})}},{key:"loadImages",value:function(){var e=this;this.elements.forEach(function(t){var n=t.querySelector("img[data-src]");E.ImageLoader.load(n,e.config.imageLoaderOptions)})}},{key:"setupAutoplay",value:function(){var e=this;this.config.autoplay&&this.config.autoplay.enabled&&(this.startAutoplay(),"ontouchstart"in document.documentElement||(this.on(this.rootNode,"mouseover",function(){e.isInteracting=!0,e.rootNode.classList.add("interacting"),e.stopAutoplay()}),this.on(this.rootNode,"mouseout",function(){e.isInteracting=!1,e.rootNode.classList.remove("interacting"),e.executeCallback(e.config.afterInteractionEnd),e.startAutoplay()})))}},{key:"startAutoplay",value:function(){var e=this;this.config.autoplay&&this.config.autoplay.enabled&&!this.autoplayTimeout&&(this.autoplayTimeout=setTimeout(function(){e.index++},this.config.autoplay.delay||5e3))}},{key:"stopAutoplay",value:function(){clearTimeout(this.autoplayTimeout),this.autoplayTimeout=null}},{key:"findAncestor",value:function(e,t){for(var n=function(e){return t.some(function(t){return e.matches(t)})},o=e;!n(o)&&o!==this.rootNode;)o=o.parentElement;return o&&o!==this.rootNode?o:null}},{key:"handleControlsClick",value:function(e){var t=this;if(!this.isTransitioning){var n=(0,i.default)(this.config.controls),o=this.findAncestor(e.target,n);if(o)if(e.preventDefault(),o.matches(this.config.controls.previous))this.index--;else if(o.matches(this.config.controls.next))this.index++;else{if(!o.matches(this.config.controls.indicators))return;this.indicators.forEach(function(e,n){o===e&&(t.index=n)})}}}},{key:"setupControls",value:function(){this.config.controls&&(this.indicators=this.getIndicators(),this.on(this.rootNode,"click",this.handleControlsClick))}},{key:"isInView",value:function(){var e=this.rootNode.getBoundingClientRect(),t=e.top,n=e.height;return!(t>=window.innerHeight||t+n<=0)}},{key:"handleKeydown",value:function(e){if(!this.isTransitioning&&this.isInView()){var t=37===e.keyCode,n=39===e.keyCode;if(t||n)return e.preventDefault(),e.stopImmediatePropagation(),n?this.index++:this.index--}}},{key:"setupKeydown",value:function(){this.on(window,"keydown",this.handleKeydown)}},{key:"handleResize",value:function(){this.loadImages(),"function"==typeof this.config.afterResize&&this.config.afterResize()}},{key:"layout",value:function(e){this.beforeLayout(e),this.setStyles(),this.elements=this.getElements(),this.setActiveElement(0),this.loadImages(),this.setupAutoplay(),this.setupControls(),this.setupKeydown(),this.on(window,"resize",this.handleResize),this.afterLayout()}},{key:"destroy",value:function(e){this.beforeDestroy(),this.stopAutoplay(),clearTimeout(this.transitionTimeout),this.eventHandlers.forEach(function(e){var t=e.node,n=e.event,o=e.boundCallback;t.removeEventListener(n,o)}),this.eventHandlers=[],this.styleNode.parentNode.removeChild(this.styleNode),this.afterDestroy()}},{key:"index",get:function(){return this._index},set:function(e){var t=this;if(e>this.elements.length-1){if(!this.config.loop)return;this._index=0}else if(e<0){if(!this.config.loop)return;this._index=this.elements.length-1}else this._index=e;this.setActiveElement(this._index),this.config.transitionDuration&&(this.isTransitioning=!0,this.transitionTimeout=setTimeout(function(){t.isTransitioning=!1},this.config.transitionDuration)),this.isInteracting||(this.stopAutoplay(),this.startAutoplay())}}]),t}(x.default);t.default=L,e.exports=t.default},function(e,t,n){e.exports={default:n(126),__esModule:!0}},function(e,t,n){n(127),e.exports=n(17).Object.values},function(e,t,n){var o=n(15),r=n(128)(!1);o(o.S,"Object",{values:function(e){return r(e)}})},function(e,t,n){var o=n(36),r=n(38),i=n(129).f;e.exports=function(e){return function(t){for(var n,a=r(t),u=o(a),c=u.length,l=0,s=[];c>l;)i.call(a,n=u[l++])&&s.push(e?[n,a[n]]:a[n]);return s}}},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(119),i=o(r);t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t,n){e.exports={default:n(132),__esModule:!0}},function(e,t,n){n(133),e.exports=n(17).Object.assign},function(e,t,n){var o=n(15);o(o.S+o.F,"Object",{assign:n(134)})},function(e,t,n){"use strict";var o=n(36),r=n(135),i=n(129),a=n(52),u=n(39),c=Object.assign;e.exports=!c||n(26)(function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach(function(e){t[e]=e}),7!=c({},e)[n]||Object.keys(c({},t)).join("")!=o})?function(e,t){for(var n=a(e),c=arguments.length,l=1,s=r.f,d=i.f;c>l;)for(var f,p=u(arguments[l++]),h=s?o(p).concat(s(p)):o(p),v=h.length,y=0;v>y;)d.call(p,f=h[y++])&&(n[f]=p[f]);return n}:c},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t,n){e.exports={default:n(137),__esModule:!0}},function(e,t,n){n(138),e.exports=n(17).Object.getPrototypeOf},function(e,t,n){var o=n(52),r=n(51);n(91)("getPrototypeOf",function(){return function(e){return r(o(e))}})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(140),i=o(r);t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":(0,i.default)(t))&&"function"!=typeof t?e:t}},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(141),i=o(r),a=n(144),u=o(a),c="function"==typeof u.default&&"symbol"==typeof i.default?function(e){return typeof e}:function(e){return e&&"function"==typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":typeof e};t.default="function"==typeof u.default&&"symbol"===c(i.default)?function(e){return"undefined"==typeof e?"undefined":c(e)}:function(e){return e&&"function"==typeof u.default&&e.constructor===u.default&&e!==u.default.prototype?"symbol":"undefined"==typeof e?"undefined":c(e)}},function(e,t,n){e.exports={default:n(142),__esModule:!0}},function(e,t,n){n(9),n(108),e.exports=n(143).f("iterator")},function(e,t,n){t.f=n(50)},function(e,t,n){e.exports={default:n(145),__esModule:!0}},function(e,t,n){n(146),n(154),n(155),n(156),e.exports=n(17).Symbol},function(e,t,n){"use strict";var o=n(16),r=n(30),i=n(25),a=n(15),u=n(31),c=n(147).KEY,l=n(26),s=n(45),d=n(49),f=n(46),p=n(50),h=n(143),v=n(148),y=n(149),m=n(150),A=n(22),g=n(23),b=n(38),w=n(28),_=n(29),x=n(34),E=n(151),k=n(153),S=n(21),T=n(36),L=k.f,O=S.f,M=E.f,P=o.Symbol,j=o.JSON,C=j&&j.stringify,R="prototype",I=p("_hidden"),F=p("toPrimitive"),V={}.propertyIsEnumerable,N=s("symbol-registry"),D=s("symbols"),B=s("op-symbols"),G=Object[R],U="function"==typeof P,H=o.QObject,z=!H||!H[R]||!H[R].findChild,Y=i&&l(function(){return 7!=x(O({},"a",{get:function(){return O(this,"a",{value:7}).a}})).a})?function(e,t,n){var o=L(G,t);o&&delete G[t],O(e,t,n),o&&e!==G&&O(G,t,o)}:O,q=function(e){var t=D[e]=x(P[R]);return t._k=e,t},W=U&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},Q=function(e,t,n){return e===G&&Q(B,t,n),
A(e),t=w(t,!0),A(n),r(D,t)?(n.enumerable?(r(e,I)&&e[I][t]&&(e[I][t]=!1),n=x(n,{enumerable:_(0,!1)})):(r(e,I)||O(e,I,_(1,{})),e[I][t]=!0),Y(e,t,n)):O(e,t,n)},Z=function(e,t){A(e);for(var n,o=y(t=b(t)),r=0,i=o.length;i>r;)Q(e,n=o[r++],t[n]);return e},X=function(e,t){return void 0===t?x(e):Z(x(e),t)},J=function(e){var t=V.call(this,e=w(e,!0));return!(this===G&&r(D,e)&&!r(B,e))&&(!(t||!r(this,e)||!r(D,e)||r(this,I)&&this[I][e])||t)},K=function(e,t){if(e=b(e),t=w(t,!0),e!==G||!r(D,t)||r(B,t)){var n=L(e,t);return!n||!r(D,t)||r(e,I)&&e[I][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=M(b(e)),o=[],i=0;n.length>i;)r(D,t=n[i++])||t==I||t==c||o.push(t);return o},ee=function(e){for(var t,n=e===G,o=M(n?B:b(e)),i=[],a=0;o.length>a;)!r(D,t=o[a++])||n&&!r(G,t)||i.push(D[t]);return i};U||(P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===G&&t.call(B,n),r(this,I)&&r(this[I],e)&&(this[I][e]=!1),Y(this,e,_(1,n))};return i&&z&&Y(G,e,{configurable:!0,set:t}),q(e)},u(P[R],"toString",function(){return this._k}),k.f=K,S.f=Q,n(152).f=E.f=$,n(129).f=J,n(135).f=ee,i&&!n(14)&&u(G,"propertyIsEnumerable",J,!0),h.f=function(e){return q(p(e))}),a(a.G+a.W+a.F*!U,{Symbol:P});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)p(te[ne++]);for(var oe=T(p.store),re=0;oe.length>re;)v(oe[re++]);a(a.S+a.F*!U,"Symbol",{for:function(e){return r(N,e+="")?N[e]:N[e]=P(e)},keyFor:function(e){if(!W(e))throw TypeError(e+" is not a symbol!");for(var t in N)if(N[t]===e)return t},useSetter:function(){z=!0},useSimple:function(){z=!1}}),a(a.S+a.F*!U,"Object",{create:X,defineProperty:Q,defineProperties:Z,getOwnPropertyDescriptor:K,getOwnPropertyNames:$,getOwnPropertySymbols:ee}),j&&a(a.S+a.F*(!U||l(function(){var e=P();return"[null]"!=C([e])||"{}"!=C({a:e})||"{}"!=C(Object(e))})),"JSON",{stringify:function(e){for(var t,n,o=[e],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=t=o[1],(g(t)||void 0!==e)&&!W(e))return m(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!W(t))return t}),o[1]=t,C.apply(j,o)}}),P[R][F]||n(20)(P[R],F,P[R].valueOf),d(P,"Symbol"),d(Math,"Math",!0),d(o.JSON,"JSON",!0)},function(e,t,n){var o=n(46)("meta"),r=n(23),i=n(30),a=n(21).f,u=0,c=Object.isExtensible||function(){return!0},l=!n(26)(function(){return c(Object.preventExtensions({}))}),s=function(e){a(e,o,{value:{i:"O"+ ++u,w:{}}})},d=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,o)){if(!c(e))return"F";if(!t)return"E";s(e)}return e[o].i},f=function(e,t){if(!i(e,o)){if(!c(e))return!0;if(!t)return!1;s(e)}return e[o].w},p=function(e){return l&&h.NEED&&c(e)&&!i(e,o)&&s(e),e},h=e.exports={KEY:o,NEED:!1,fastKey:d,getWeak:f,onFreeze:p}},function(e,t,n){var o=n(16),r=n(17),i=n(14),a=n(143),u=n(21).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=i?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||u(t,e,{value:a.f(e)})}},function(e,t,n){var o=n(36),r=n(135),i=n(129);e.exports=function(e){var t=o(e),n=r.f;if(n)for(var a,u=n(e),c=i.f,l=0;u.length>l;)c.call(e,a=u[l++])&&t.push(a);return t}},function(e,t,n){var o=n(40);e.exports=Array.isArray||function(e){return"Array"==o(e)}},function(e,t,n){var o=n(38),r=n(152).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(e){try{return r(e)}catch(e){return a.slice()}};e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?u(e):r(o(e))}},function(e,t,n){var o=n(37),r=n(47).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},function(e,t,n){var o=n(129),r=n(29),i=n(38),a=n(28),u=n(30),c=n(24),l=Object.getOwnPropertyDescriptor;t.f=n(25)?l:function(e,t){if(e=i(e),t=a(t,!0),c)try{return l(e,t)}catch(e){}if(u(e,t))return r(!o.f.call(e,t),e[t])}},function(e,t){},function(e,t,n){n(148)("asyncIterator")},function(e,t,n){n(148)("observable")},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(158),i=o(r),a=n(162),u=o(a),c=n(140),l=o(c);t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":(0,l.default)(t)));e.prototype=(0,u.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(i.default?(0,i.default)(e,t):e.__proto__=t)}},function(e,t,n){e.exports={default:n(159),__esModule:!0}},function(e,t,n){n(160),e.exports=n(17).Object.setPrototypeOf},function(e,t,n){var o=n(15);o(o.S,"Object",{setPrototypeOf:n(161).set})},function(e,t,n){var o=n(23),r=n(22),i=function(e,t){if(r(e),!o(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,o){try{o=n(18)(Function.call,n(153).f(Object.prototype,"__proto__").set,2),o(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:o(e,n),e}}({},!1):void 0),check:i}},function(e,t,n){e.exports={default:n(163),__esModule:!0}},function(e,t,n){n(164);var o=n(17).Object;e.exports=function(e,t){return o.create(e,t)}},function(e,t,n){var o=n(15);o(o.S,"Object",{create:n(34)})},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(7),i=o(r),a=n(166),u=o(a),c=n(131),l=o(c),s=n(117),d=o(s),f=n(118),p=o(f),h=n(169),v={resizeHandler:!0,resizeDebounceTime:250,resizeMaxWait:2500},y=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((0,d.default)(this,e),1!==t.nodeType)throw new Error("rootNode must be a DOM Node!");this.rootNode=t,this.document=this.rootNode.ownerDocument,this.window=this.document.defaultView;var o=v;if(Object.defineProperty(this,"config",{configurable:!1,enumerable:!0,get:function(){return o},set:function(e){o=(0,l.default)({},o,e),(0,u.default)(o)}}),this.config=n,this.childNodes=[],this.config.childSelector)try{var r=this.rootNode.querySelectorAll(this.config.childSelector);this.childNodes=(0,i.default)(r)}catch(e){throw new Error("childNode error: "+e)}this.config.resizeHandler&&(this._boundResize=this._handleResize.bind(this),this._createResizeListeners()),this.hasRunInitialLayout=!1}return(0,p.default)(e,[{key:"_createResizeListeners",value:function(){var e=this,t=function(){"function"==typeof e.beforeResize&&e.beforeResize(),"function"==typeof e.config.beforeResize&&e.config.beforeResize(e.layout.bind(e))},n=function(){"function"==typeof e.afterResize?e.afterResize():e.layout(),"function"==typeof e.config.afterResize&&e.config.afterResize(e.layout.bind(e))};this._boundBeforeResize=h(t,this.config.resizeDebounceTime,{leading:!0,trailing:!1}),this._boundAfterResize=h(n,this.config.resizeDebounceTime,{maxWait:this.config.resizeMaxWait,leading:!1,trailing:!0})}},{key:"_handleResize",value:function(){this._boundBeforeResize&&this._boundBeforeResize(),this._boundAfterResize&&this._boundAfterResize()}},{key:"beforeLayout",value:function(e){this.config=e,this.hasRunInitialLayout||this.beforeInitialLayout(),"function"==typeof this.config.beforeLayout&&this.config.beforeLayout.apply(this)}},{key:"beforeInitialLayout",value:function(){"function"==typeof this.config.beforeInitialLayout&&this.config.beforeInitialLayout.apply(this)}},{key:"afterLayout",value:function(){this.hasRunInitialLayout||(this.afterInitialLayout(),this.hasRunInitialLayout=!0),"function"==typeof this.config.afterLayout&&this.config.afterLayout.apply(this)}},{key:"afterInitialLayout",value:function(){"function"==typeof this.config.afterInitialLayout&&this.config.afterInitialLayout.apply(this),this.config.resizeHandler&&this.window.addEventListener("resize",this._boundResize)}},{key:"beforeDestroy",value:function(){this.config.resizeHandler&&this.window.removeEventListener("resize",this._boundResize),"function"==typeof this.config.beforeDestroy&&this.config.beforeDestroy.apply(this)}},{key:"afterDestroy",value:function(){"function"==typeof this.config.afterDestroy&&this.config.afterDestroy.apply(this)}}]),e}();t.default=y,e.exports=t.default},function(e,t,n){e.exports={default:n(167),__esModule:!0}},function(e,t,n){n(168),e.exports=n(17).Object.freeze},function(e,t,n){var o=n(23),r=n(147).onFreeze;n(91)("freeze",function(e){return function(t){return e&&o(t)?e(r(t)):t}})},function(e,t,n){function o(e,t,n){function o(t){var n=A,o=g;return A=g=void 0,E=t,w=e.apply(o,n)}function s(e){return E=e,_=setTimeout(p,t),k?o(e):w}function d(e){var n=e-x,o=e-E,r=t-n;return S?l(r,b-o):r}function f(e){var n=e-x,o=e-E;return void 0===x||n>=t||n<0||S&&o>=b}function p(){var e=i();return f(e)?h(e):void(_=setTimeout(p,d(e)))}function h(e){return _=void 0,T&&A?o(e):(A=g=void 0,w)}function v(){void 0!==_&&clearTimeout(_),E=0,A=x=g=_=void 0}function y(){return void 0===_?w:h(i())}function m(){var e=i(),n=f(e);if(A=arguments,g=this,x=e,n){if(void 0===_)return s(x);if(S)return _=setTimeout(p,t),o(x)}return void 0===_&&(_=setTimeout(p,t)),w}var A,g,b,w,_,x,E=0,k=!1,S=!1,T=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,r(n)&&(k=!!n.leading,S="maxWait"in n,b=S?c(a(n.maxWait)||0,t):b,T="trailing"in n?!!n.trailing:T),m.cancel=v,m.flush=y,m}var r=n(170),i=n(171),a=n(174),u="Expected a function",c=Math.max,l=Math.min;e.exports=o},function(e,t){function n(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}e.exports=n},function(e,t,n){var o=n(172),r=function(){return o.Date.now()};e.exports=r},function(e,t,n){var o=n(173),r="object"==typeof self&&self&&self.Object===Object&&self,i=o||r||Function("return this")();e.exports=i},function(e,t){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(t,function(){return this}())},function(e,t,n){function o(e){if("number"==typeof e)return e;if(i(e))return a;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=l.test(e);return n||s.test(e)?d(e.slice(2),n?2:8):c.test(e)?a:+e}var r=n(170),i=n(175),a=NaN,u=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt;e.exports=o},function(e,t,n){function o(e){return"symbol"==typeof e||i(e)&&r(e)==a}var r=n(176),i=n(180),a="[object Symbol]";e.exports=o},function(e,t,n){function o(e){return null==e?void 0===e?c:u:l&&l in Object(e)?i(e):a(e)}var r=n(177),i=n(178),a=n(179),u="[object Null]",c="[object Undefined]",l=r?r.toStringTag:void 0;e.exports=o},function(e,t,n){var o=n(172),r=o.Symbol;e.exports=r},function(e,t,n){function o(e){var t=a.call(e,c),n=e[c];try{e[c]=void 0;var o=!0}catch(e){}var r=u.call(e);return o&&(t?e[c]=n:delete e[c]),r}var r=n(177),i=Object.prototype,a=i.hasOwnProperty,u=i.toString,c=r?r.toStringTag:void 0;e.exports=o},function(e,t){function n(e){return r.call(e)}var o=Object.prototype,r=o.toString;e.exports=n},function(e,t){function n(e){return null!=e&&"object"==typeof e}e.exports=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(182),i=o(r),a=n(183),u=o(a),c=n(184),l=o(c),s={ImageLoader:i.default,Lifecycle:u.default,Tweak:l.default};t.default=s,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={load:function(e,t){return window.ImageLoader.load(e,t)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={init:function(){window.Squarespace.AFTER_BODY_LOADED=!1,window.Squarespace.afterBodyLoad()},destroy:function(){window.Squarespace.globalDestroy(Y)}};t.default=n,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={all:{callbacks:[]}},o={getValue:function(e){return e&&"string"==typeof e?Y.Squarespace.Template.getTweakValue(e):(console.error("squarespace-core: Invalid tweak name "+e),null)},watch:function(){var e=arguments;if(0===arguments.length)return void console.error("squarespace-core: Tweak.watch must be called with at least one parameter");if(1===arguments.length)return void("function"==typeof arguments[0]&&n.all.callbacks.push(arguments[0]));if("string"==typeof arguments[0]&&"function"==typeof arguments[1]){var t=arguments[0];n[t]||(n[t]={callbacks:[]}),n[t].callbacks.push(arguments[1])}else arguments[0].constructor===Array&&"function"==typeof arguments[1]&&arguments[0].forEach(function(t){n[t]||(n[t]={callbacks:[]}),n[t].callbacks.push(e[1])})}};window.Y.Global&&window.Y.Global.on("tweak:change",function(e){var t=e.getName(),o={name:t,value:e.config&&e.config.value||e.value};n[t]&&n[t].callbacks.forEach(function(e){try{e(o)}catch(e){console.error(e)}}),n.all.callbacks.length>0&&n.all.callbacks.forEach(function(e){try{e(o)}catch(e){console.error(e)}})}),t.default=o,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.createStyleNode=void 0;var r=n(88),i=o(r);t.createStyleNode=function(e){var t=document.createElement("style");return t.innerText=(0,i.default)(e).reduce(function(t,n,o){return t+=n+"{",(0,i.default)(e[n]).forEach(function(o){t+=o+":"+e[n][o]+";"}),t+="}"},""),t}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e={Android:function(){return window.navigator.userAgent.match(/Android/i)},BlackBerry:function(){return window.navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return window.navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return window.navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return window.navigator.userAgent.match(/IEMobile/i)}};return e.Android()||e.BlackBerry()||e.iOS()||e.Opera()||e.Windows()};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[],o=void 0,r=function(){var e=window.pageYOffset,t=!1,r=!1,i=function(){r=!1,n.forEach(function(t){var n=t.fn,o=t.type;"scroll"===o&&n(e)})},a=function(){r||window.requestAnimationFrame(i),r=!0};return function(){t===!1&&(t=!0,n.forEach(function(e){var t=e.fn,n=e.type;"start"===n&&t()})),e=window.pageYOffset,a(),o&&clearTimeout(o),o=setTimeout(function(){t=!1,n.forEach(function(e){var t=e.fn,n=e.type;"end"===n&&t()})},100)}},i=function(){clearTimeout(o)},a=function(){var e=r();window.addEventListener("scroll",e),window.addEventListener("mercury:unload",i)};a();var u=t.addScrollListener=function(e,t){n.push({type:e,fn:t})},c=t.removeScrollListener=function(e,t){n.some(function(o,r){var i=o.type===e&&o.fn===t;return!!i&&(n.splice(r,1),!0)})};t.default={addScrollListener:u,removeScrollListener:c}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={},o=t.getIndexSectionRect=function(e){var t=e.getAttribute("id");if(n[t])return n[t];var o=document.documentElement.scrollTop||document.body.scrollTop,r=e.getBoundingClientRect();return n[t]={top:Math.floor(r.top+o),right:r.right,bottom:Math.ceil(r.bottom+o),left:r.left,width:e.offsetWidth,height:e.offsetHeight+2},n[t]},r=t.invalidateIndexSectionRectCache=function(){n={}};t.default={getIndexSectionRect:o,invalidateIndexSectionRectCache:r}},function(e,t){"use strict";function n(e){var t=e.querySelector(".sqs-video-wrapper");if(!t)return null;var n=function(e){e.preventDefault();var n=new window.Y.Squarespace.Lightbox2({content:window.Y.one(t),controls:{previous:!1,next:!1}});n.render()},o=function(){e.addEventListener("click",n)},r=function(){e.removeEventListener("click",n)};return t.parentNode.removeChild(t),o(),{destroy:r}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){if(!e.classList.contains("Index--empty")){var t=void 0,n=window.innerHeight,o=(0,c.default)(e.querySelectorAll(".Index-page, .Index-gallery")),r=o.reduce(function(e,t){return e[t.getAttribute("id")]=t,e},{}),i=e.querySelector(".Index-nav"),u=(0,c.default)(i.querySelectorAll(".Index-nav-item")),f=u.reduce(function(e,t){return e[t.getAttribute("href")]=t,e},{}),v=u.filter(function(e){return e.classList.contains("active")})[0],y=v.getAttribute("href").substring(1),m=null,A=void 0,g=function(){return o.reduce(function(e,t){var n=(0,s.getIndexSectionRect)(t),o=n.top,r=n.bottom,i=n.left,a=n.right;return e[t.getAttribute("id")]={top:o,bottom:r,left:i,right:a},e},{})},b=function(e){var t=e.classList.contains("Index-gallery"),n=e.classList.contains("Index-page--has-image");return t||n},w=function(e){var o=e+n/2;(0,a.default)(t).forEach(function(n){var a=t[n],u=a.top,c=a.bottom;if(y!==n&&e>=u&&e<c){var l="#"+n;v.classList.remove("active");var s=f[l];s.classList.add("active"),y=n,v=s}if(A)return void i.classList.remove("overlay");if(m!==n&&o>=u&&o<c){var d=r[n];i.classList.toggle("overlay",b(d)),m=n}})},_=function(){t=g();var e=t[(0,a.default)(t)[0]].left,n=l.Tweak.getValue("tweak-index-nav-position").toLowerCase(),o=parseFloat(window.getComputedStyle(i)[n]);A=e>o,w(window.pageYOffset)},x=function(){(0,p.default)(function(){n=window.innerHeight,t=g()}),(0,d.addScrollListener)("scroll",w),(0,h.addIndexGalleryChangeListener)(_)},E=function(){(0,d.removeScrollListener)("scroll",w),(0,h.removeIndexGalleryChangeListener)(_)};return _(),x(),{destroy:E}}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(88),a=o(i),u=n(7),c=o(u),l=n(60),s=n(188),d=n(187),f=n(85),p=o(f),h=n(121);t.default=r},function(e,t){"use strict";function n(e){if(document.documentElement.classList.contains("touch")){var t=function(e){e.preventDefault(),e.stopImmediatePropagation()},n=function(){e.addEventListener("click",t)},o=function(){e.removeEventListener("click",t)};return n(),{destroy:o}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.querySelector(".Header--bottom"),n=function(e){document.body.classList.contains("is-mobile")?e.style.marginTop="":e.style.marginTop=t.offsetHeight+"px"},o=function(){var o="true"===u.Tweak.getValue("tweak-header-bottom-overlay-on-index-gallery"),r=t.classList.contains("Header--index-gallery");if(o&&r)return void t.classList.add(d);var i=e.querySelector(f),a=e.querySelector(p),c=i||a;return c?(t.classList.add(d),void n(c)):void t.classList.remove(d)},r=function(){(0,l.default)(o),(0,a.default)(s.indexEditEvents).forEach(function(e){window.addEventListener(e,o)}),u.Tweak.watch(["tweak-header-bottom-overlay-on-index-gallery"],function(){o()})},i=function(){(0,a.default)(s.indexEditEvents).forEach(function(e){window.removeEventListener(e,o)})};return r(),o(),{sync:o,destroy:i}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(125),a=o(i),u=n(60),c=n(85),l=o(c),s=n(99),d="Header--overlay",f=".Index-page--has-image:first-child .Index-page-content",p=".Intro--has-image .Intro-content";t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.querySelector(".Mobile"),n=function(){var n="none"!==window.getComputedStyle(t).display;e.classList.toggle("is-mobile",n)};return(0,a.default)(n),n(),{sync:n}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(85),a=o(i);t.default=r},function(e,t){"use strict";function n(e){var t=function(t){for(var n=t.target;n!==e&&null===n.getAttribute("data-controller-folder-toggle");)n=n.parentNode;var o=n.getAttribute("data-controller-folder-toggle");if(o){var r=e.querySelector('[data-controller-folder="'+o+'"]');r&&(r.classList.toggle("is-active-folder"),e.classList.toggle("has-active-folder"))}},n=function(){e.addEventListener("click",t)},o=function(){e.removeEventListener("click",t)};return n(),{destroy:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=document.querySelector(".sqs-mobile-info-bar"),n=function(){if(document.body.classList.contains("is-mobile")){var n=window.getComputedStyle(e),o="none"!==n.display&&"fixed"===n.position,r=o?e.offsetHeight:0;0===parseFloat(n.bottom)?(document.body.style.marginBottom=r+"px",t&&(t.style.bottom=r+"px")):document.body.style.marginTop=r+"px"}else document.body.style.marginTop="",document.body.style.marginBottom=""};return i.Tweak.watch(["tweak-mobile-bar-branding-position","tweak-mobile-bar-menu-icon-position","tweak-mobile-bar-cart-position","tweak-mobile-bar-search-icon-position","tweak-mobile-bar-top-fixed"],n),(0,u.default)(n),n(),{sync:n}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(60),a=n(85),u=o(a);t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){(0,f.invalidateIndexSectionRectCache)();var t=void 0,n=void 0,o=[],r=!1,i=(0,d.default)(),c=function(){document.body.classList.add("parallax-item-positioning-method-"+E)},s=function(){return!r&&"true"===u.Tweak.getValue("tweak-overlay-parallax-enabled")},h=function(){return"true"===u.Tweak.getValue("tweak-overlay-parallax-new-math")},y=function(){var t=null!==e.getAttribute("data-parallax-original-element"),n=(0,a.default)(e.querySelectorAll("[data-parallax-original-element]")),r=t?[e]:n;o=r.map(function(e){var t=e.querySelector("[data-parallax-image-wrapper]"),n=t.querySelector("img:not(.custom-fallback-image)")||t.querySelector("div.sqs-video-background"),o=n.getAttribute("data-image-focal-point"),r=o?parseFloat(o.split(",")[1]):.5;return{originalNode:e,mediaWrapper:t,mediaElement:n,focalPoint:r}})},m=function(e){var t=(0,f.getIndexSectionRect)(e.originalNode);for(var n in t)if(e[n]!==t[n])return e.top=t.top,e.right=t.right,e.bottom=t.bottom,e.left=t.left,e.width=t.width,e.height=t.height,!0;return!1},A=function(){var e=!1;return o.forEach(function(t){m(t)&&(e=!0)}),e},g=function(e){s()&&o.forEach(function(t){var o=t.parallaxItem,r=t.mediaWrapper,a=t.top,u=t.bottom,c=t.left,l=t.width,s=t.height,d=t.focalPoint;if(e+n>a&&e<u){var f=void 0;if(h())f=-1*_*(a-e);else{var p=s*d,v=1-(a+p-e)/n;f=v*x}var y="translate3d(0, "+f+"px, 0)";if(r.style[i]=y,"fixed"===E){var m="translate3d(0, "+-e+"px, 0)";o.style[i]=m}}else"fixed"===E&&(o.style[i]="translate3d("+(-l-c)+"px, 0, 0)")})},k=function(e){var t=e.classList.contains("sqs-video-background"),n=e.querySelector("img.custom-fallback-image"),o=e.hasAttribute("data-src"),r=t&&n||o&&e;r&&u.ImageLoader.load(r,{load:!0,mode:"fill"})},S=function(){var t=document.body.querySelector("[data-parallax-host]");o=o.filter(function(n){var o=n.originalNode,r=n.mediaWrapper,i=n.parallaxItem;if(!e.contains(o)){var u=(0,a.default)(t.children);return i&&u.indexOf(i)>=0&&t.removeChild(i),!1}if(s()){if(r.parentNode===o){var c=o.getAttribute("data-parallax-id");i=t.querySelector('[data-parallax-item][data-parallax-id="'+c+'"]'),n.parallaxItem=i,i.appendChild(r)}}else r.parentNode!==o&&o.appendChild(r);return!0})},T=function(){o.forEach(function(e){var t=e.mediaWrapper,n=e.mediaElement,o=e.top,r=e.left,i=e.width,a=e.height,u=e.parallaxItem;s()?(u.style.top=o+"px",u.style.left=r+"px",u.style.width=i+"px",u.style.height=a+"px",h()?(t.style.bottom=-1*_*(window.innerHeight-a)+"px",t.style.top=""):(t.style.top=-1*x+"px",t.style.bottom="")):(u&&(u.style.top="",u.style.left="",u.style.width="",u.style.height=""),t.style.top="",t.style.bottom="",t.style.webkitTransform="",t.style.msTransform="",t.style.transform=""),k(n),t.classList.add("loaded")})},L=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=document.documentElement.scrollTop||document.body.scrollTop;n=window.innerHeight;var o=A();(o||e!==!1)&&(S(),T(),s()&&g(t))},O=function(){(0,f.invalidateIndexSectionRectCache)(),L()},M=function(){r=!0,L(!0)},P=function(){r=!1,L(!0)},j=function(){L(!0)},C=function(){L(!0)},R=function(){(0,p.addScrollListener)("scroll",g),(0,w.addIndexGalleryChangeListener)(L),(0,v.default)(function(){(0,f.invalidateIndexSectionRectCache)(),L()}),window.addEventListener("load",O),window.addEventListener(b.indexEditEvents.enabled,M),window.addEventListener(b.indexEditEvents.disabled,P),window.addEventListener(b.indexEditEvents.deleted,j),window.addEventListener(b.indexEditEvents.reorder,C),u.Tweak.watch(["tweak-site-border-show","tweak-site-border-width","tweak-overlay-parallax-enabled","tweak-overlay-parallax-new-math","tweak-site-width-option","tweak-site-width","tweak-index-page-padding","tweak-index-page-overlay-padding","tweak-index-page-fullscreen","tweak-index-page-min-height","tweak-index-page-apply-bottom-spacing"],function(){(0,f.invalidateIndexSectionRectCache)(),L(!0)})},I=function(){c(),y(),S(),L(),R(),t=new l.default({targets:[".sqs-block-form",".sqs-block-tourdates",".sqs-block-code",".sqs-block-image",".sqs-block-product",".sqs-block-summary-v2",".Header",".sqs-announcement-bar-dropzone"],callback:function(){(0,f.invalidateIndexSectionRectCache)(),L()}}),t&&t.init()},F=function(){(0,p.removeScrollListener)("scroll",g),(0,w.removeIndexGalleryChangeListener)(L),t&&(t.destroy(),t=null),window.removeEventListener("load",O),window.removeEventListener(b.indexEditEvents.enabled,M),window.removeEventListener(b.indexEditEvents.disabled,P),window.removeEventListener(b.indexEditEvents.deleted,j),window.removeEventListener(b.indexEditEvents.reorder,C)};return I(),{destroy:F}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(7),a=o(i),u=n(60),c=n(116),l=o(c),s=n(197),d=o(s),f=n(188),p=n(187),h=n(85),v=o(h),y=n(186),m=o(y),A=n(198),g=o(A),b=n(99),w=n(121),_=.5,x=300,E=(0,m.default)()||(0,g.default)()?"absolute":"fixed";t.default=r},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=void 0,o=function(){if(n)return n;var e=["transform","webkitTransform","msTransform"],t=document.createElement("div");t.style.visibility="hidden",document.body.appendChild(t);var o=window.getComputedStyle(t);return e.some(function(e){return"string"==typeof o[e]&&(n=e,!0)}),n||(n="transform"),document.body.removeChild(t),n};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return window.navigator.userAgent.match(/Intel Mac OS X.+Version\/10.+Safari/i)};t.default=n},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=void 0,n=void 0,o=window.innerHeight,r=e.getBoundingClientRect().bottom,i=function(t){return r>o?void(t+o<r?(clearTimeout(n),n=null,e.classList.remove("hidden")):n||(n=setTimeout(function(){e.classList.add("hidden")},500))):(clearTimeout(n),n=null,void e.classList.toggle("hidden",t>0))},s=function(){(0,a.default)(e.getBoundingClientRect().bottom,{duration:500})},d=function(){o=window.innerHeight,r=window.pageYOffset+e.getBoundingClientRect().bottom},f=function(){(0,c.addScrollListener)("scroll",i),window.addEventListener("resize",d),e.addEventListener("click",s),u.Tweak.watch(function(t){l.indexOf(t.name)>=0&&e.classList.remove("hidden")})},p=function(){(0,c.removeScrollListener)("scroll",i),window.removeEventListener("resize",d),e.removeEventListener("click",s),clearTimeout(t),clearTimeout(n),t=null,n=null};return f(),t=setTimeout(function(){e.classList.remove("hidden")},1e3),{destroy:p}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(102),a=o(i),u=n(60),c=n(187),l=["indicator","indicator-icon","indicator-font","indicator-color"].map(function(e){return"tweak-index-page-scroll-"+e});t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(){var e="true"===a.Tweak.getValue("tweak-site-ajax-loading-enable");if(l.authenticated||!e)return!1;new c.default({enableCache:!0,updateMatrix:f,onClickExceptions:s,onRequestExceptions:d,timeout:1e4});window.addEventListener("mercury:load",function(){a.Lifecycle.init(),document.documentElement.setAttribute("data-mercury-loading","done"),setTimeout(function(){document.documentElement.removeAttribute("data-mercury-loading")},500)}),window.addEventListener("mercury:unload",function(){a.Lifecycle.destroy(),document.documentElement.setAttribute("data-mercury-loading","")}),window.addEventListener("mercury:load",i.refresh)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(6),a=n(60),u=n(201),c=o(u),l=n(99),s=["[data-no-ajax]"],d=["sqs-slide-container"],f=[{selector:"title",updateHTML:!0},{selector:'meta[property="og:title"]',updateAttrs:!0},{selector:'meta[property="og:latitude"]',updateAttrs:!0},{selector:'meta[property="og:longitude"]',updateAttrs:!0},{selector:'meta[property="og:url"]',updateAttrs:!0},{selector:'meta[property="og:type"]',updateAttrs:!0},{selector:'meta[property="og:description"]',updateAttrs:!0},{selector:'meta[property="og:image"]',updateAttrs:!0},{selector:'meta[itemprop="name"]',updateAttrs:!0},{selector:'meta[itemprop="url"]',updateAttrs:!0},{selector:'meta[itemprop="description"]',updateAttrs:!0},{selector:'meta[itemprop="thumbnailUrl"]',updateAttrs:!0},{selector:'meta[itemprop="image"]',updateAttrs:!0},{selector:'meta[name="twitter:title"]',updateAttrs:!0},{selector:'meta[name="twitter:image"]',updateAttrs:!0},{selector:'meta[name="twitter:url"]',updateAttrs:!0},{selector:'meta[name="twitter:card"]',updateAttrs:!0},{selector:'meta[name="twitter:description"]',updateAttrs:!0},{selector:'meta[name="twitter:url"]',updateAttrs:!0},{selector:'meta[name="description"]',updateAttrs:!0},{selector:'link[rel="canonical"]',updateAttrs:!0},{selector:'link[rel="image_src"]',updateAttrs:!0},{selector:'link[rel="alternate"]',updateAttrs:!0},{selector:"body",updateAttrs:!0},{selector:".Parallax-host-outer",updateHTML:!0},{selector:".Site-inner",updateAttrs:!0},{selector:".Header--bottom",updateAttrs:!0},{selector:".Header-nav--primary",updateHTML:!0},{selector:".Header-nav--secondary",updateHTML:!0},{selector:".Content-outer",updateHTML:!0},{selector:'script[data-name="static-context"]',updateScript:!0}];t.default=r},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),n(202);var r=n(203),i=o(r);t.default=i.default,e.exports=t.default},function(e,t){!function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}return"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,void(window.CustomEvent=e))}()},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(117),i=o(r),a=n(118),u=o(a),c=n(204),l=n(205),s=n(206),d=function(){function e(t){return(0,i.default)(this,e),window.history&&window.history.pushState&&document.querySelector?void(this.validateAndAssignConfig(t)&&("scrollRestoration"in window.history&&(window.history.scrollRestoration="manual"),this.enableCache&&(this.cache={}),this.loadEvent=new CustomEvent("mercury:load"),this.unloadEvent=new CustomEvent("mercury:unload"),this.navigateEvent=new CustomEvent("mercury:navigate"),this.boundOnClick=this.onClick.bind(this),this.boundOnPopState=this.onPopState.bind(this),this.bindListeners())):void console.error("Your browser does not support Mercury.")}return(0,u.default)(e,[{key:"validateAndAssignConfig",value:function(e){var t=e.updateMatrix,n=e.onClickExceptions,o=void 0===n?[]:n,r=e.onRequestExceptions,i=void 0===r?[]:r,a=e.enableCache,u=e.timeout,c=e.onLoad,d=e.onUnload,f=e.onNavigate,p=e.onLoadDelay;return!!(0,s.isValidUpdateMatrix)(t)&&(this.updateMatrix=t,this.timeout=(0,s.validateOptionalParam)(u,"number",5e3),this.enableCache=(0,s.validateOptionalParam)(a,"boolean",!1),this.onLoad=(0,s.validateOptionalParam)(c,"function",function(){}),this.onUnload=(0,s.validateOptionalParam)(d,"function",function(){}),this.onNavigate=(0,s.validateOptionalParam)(f,"function",function(){}),this.onLoadDelay=(0,s.validateOnLoadDelay)(p),Array.isArray(o)?this.onClickExceptionSelector=l.BASE_ON_CLICK_EXCEPTIONS.concat(o).join(","):this.onClickExceptionSelector=l.BASE_ON_CLICK_EXCEPTIONS.join(","),
Array.isArray(i)&&i.length&&(this.onRequestExceptionRegex=new RegExp(i.join("|"),"gi")),!0)}},{key:"replaceHistoryStateWithScrollPosition",value:function(){var e=window.location.pathname+window.location.search,t={url:e,scroll:{x:window.pageXOffset,y:window.pageYOffset},type:"mercury"};window.history.replaceState(t,document.title,e)}},{key:"updateDOM",value:function(e,t){var n=this,o=new DOMParser,r=o.parseFromString(t,"text/html");this.updateMatrix.forEach(function(t){var o=document.querySelector(t.selector),i=r.querySelector(t.selector);if(o&&i){if(t.updateHTML){var a=n.enableCache&&n.cache[e]&&n.cache[e][t.selector],u=a?n.cache[e][t.selector]:i.innerHTML;o.innerHTML=u}t.updateAttrs&&(0,c.replaceAttributes)(o,i),t.updateScript&&(0,c.replaceScript)(o,i)}else o&&o.parentNode.removeChild(o)}),window.scrollTo(0,0)}},{key:"makeRequest",value:function(e,t,n){var o=this;window.dispatchEvent(this.navigateEvent),this.onNavigate&&this.onNavigate(),this.replaceHistoryStateWithScrollPosition(),this.XHR=new XMLHttpRequest,this.XHR.onreadystatechange=function(r){if(r.target.readyState===XMLHttpRequest.DONE){if(200!==r.target.status)return void(window.location=e);try{var i=o.onRequestExceptionRegex&&o.onRequestExceptionRegex.constructor===RegExp,a=null!==r.target.responseText.match(o.onRequestExceptionRegex);if(i&&a)return void(window.location=e);window.dispatchEvent(o.unloadEvent),o.onLoadDelay?o.onLoadDelayTimeout=window.setTimeout(function(){o.modifyPageAndHistory(e,t,n,r.target.responseText)},o.onLoadDelay):o.modifyPageAndHistory(e,t,n,r.target.responseText)}catch(e){console.error(e)}}},this.XHR.ontimeout=function(){window.location=e},this.XHR.onerror=function(){window.location=e},this.XHR.open("GET",e,!0),this.XHR.timeout=this.timeout,this.XHR.send()}},{key:"modifyPageAndHistory",value:function(e,t,n,o){if(!t){var r={url:e,type:"mercury"};window.history.pushState(r,document.title,e)}this.updateDOM(e,o),n&&n(),window.dispatchEvent(this.loadEvent)}},{key:"isKeyModified",value:function(e){return e.metaKey||e.ctrlKey||e.altKey||e.shiftKey}},{key:"onClick",value:function(e){if(!this.isKeyModified(e)){for(var t=e.target;t&&t!==document.body&&"A"!==t.tagName.toUpperCase();)t=t.parentElement;t&&t!==document.body&&!t.matches(this.onClickExceptionSelector)&&(e.preventDefault(),this.XHR&&(this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout)),this.makeRequest(t.getAttribute("href"),!1,null))}}},{key:"onPopState",value:function(e){if(e.state&&"mercury"===e.state.type){var t=function(){e.state.scroll?window.scrollTo(e.state.scroll.x,e.state.scroll.y):window.scrollTo(0,0)};this.XHR&&(this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout)),this.makeRequest(e.state.url,!0,t)}}},{key:"commitCacheEntry",value:function(e,t){this.enableCache&&e&&t&&(this.cache[e]=this.cache[e]||{},this.cache[e][t]=document.querySelector(t).innerHTML)}},{key:"bindListeners",value:function(){document.body.addEventListener("click",this.boundOnClick),window.addEventListener("popstate",this.boundOnPopState),window.addEventListener(this.loadEvent.type,this.onLoad),window.addEventListener(this.unloadEvent.type,this.onUnload)}},{key:"destroy",value:function(){this.XHR&&this.XHR.abort(),window.clearTimeout(this.onLoadDelayTimeout),document.body.removeEventListener("click",this.boundOnClick),window.removeEventListener("popstate",this.boundOnPopState),window.removeEventListener(this.loadEvent.type,this.onLoad),window.removeEventListener(this.unloadEvent.type,this.onUnload)}}]),e}();t.default=d,e.exports=t.default},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.replaceScript=t.replaceAttributes=void 0;var r=n(7),i=o(r),a=t.replaceAttributes=function(e,t){for(var n=(0,i.default)(e.attributes),o=0;o<n.length;o++)e.removeAttribute(n[o].name);for(var r=0;r<t.attributes.length;r++)e.setAttribute(t.attributes[r].name,t.attributes[r].value)};t.replaceScript=function(e,t){var n=e.parentElement,o=document.createElement("script");o.innerHTML=t.innerHTML,a(o,e),n.removeChild(e),n.appendChild(o)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.BASE_ON_CLICK_EXCEPTIONS=["a:not([href])",'[href^="http"]','[href^="#"]','[href^="/#"]','[target="_blank"]','[href^="tel"]','[href^="mailto"]','[href^="javascript"]']},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.validateOnLoadDelay=t.validateOptionalParam=t.isValidUpdateMatrix=void 0;var r=n(140),i=o(r);t.isValidUpdateMatrix=function(e){return Array.isArray(e)?e.every(function(e){var t=e.selector,n=e.updateHTML,o=e.updateAttrs,r=e.updateScript;if("string"!=typeof t)return console.error(t+" is not a valid selector."),!1;var i="undefined"!=typeof n&&"boolean"!=typeof n,a="undefined"!=typeof o&&"boolean"!=typeof o,u="undefined"!=typeof r&&"boolean"!=typeof r;return!(i||a||u)||(console.error("Non-boolean updateHTML, updateAttrs, or updateScript provided for selector "+t+"."),!1)}):(console.error("updateMatrix is not an Array"),!1)},t.validateOptionalParam=function(e,t,n){return void 0===e?n:("undefined"==typeof e?"undefined":(0,i.default)(e))!==t?(console.error(e+" is not a "+t+"."),n):e},t.validateOnLoadDelay=function(e){return void 0===e?0:"number"!=typeof e?(console.error(e+" is not a number."),0):e<0?(console.error(e+" is less than 0."),0):e}},function(e,t,n){"use strict";function o(e){var t=function(){var t=r.UserAccounts.isUserAuthenticated()?".unauth":".auth",n=e.querySelector(".user-accounts-text-link"),o=n.querySelector(t);o&&n.removeChild(o),e.classList.add("loaded")},n=function(e){e.preventDefault(),r.UserAccounts.openAccountScreen()},o=function(){e.addEventListener("click",n)},i=function(){e.removeEventListener("click",n)};return t(),o(),{destroy:i}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(60);t.default=o}]);



<!doctype html>
<html xmlns:og="http://opengraphprotocol.org/schema/" xmlns:fb="http://www.facebook.com/2008/fbml" xmlns:website="http://ogp.me/ns/website" lang="en-US" itemscope itemtype="http://schema.org/WebPage" >
  <head>
	  
	  <meta name="viewport" content="width=device-width, initial-scale=1">
	  
    <!-- This is Squarespace. --><!-- stack-brooklyn-6g5d -->
<base href="">
<meta charset="utf-8" />
<title>Releases &mdash; Foreign Family Collective</title>
<link rel="shortcut icon" type="image/x-icon" href="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5824076c197aea06e0b9f65e/favicon.ico"/>
<link rel="canonical" href="https://www.foreignfamilycollective.com/releases/"/>
<meta property="og:site_name" content="Foreign Family Collective"/>
<meta property="og:title" content="Releases &mdash; Foreign Family Collective"/>
<meta property="og:url" content="https://www.foreignfamilycollective.com/releases/"/>
<meta property="og:type" content="website"/>
<meta property="og:image" content="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1478756251910/FFC+Logo_no+text+favicon-01.png?format=1500w"/>
<meta property="og:image:width" content="1500"/>
<meta property="og:image:height" content="1500"/>
<meta itemprop="name" content="Releases — Foreign Family Collective"/>
<meta itemprop="url" content="https://www.foreignfamilycollective.com/releases/"/>
<meta itemprop="thumbnailUrl" content="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1478756251910/FFC+Logo_no+text+favicon-01.png?format=1500w"/>
<link rel="image_src" href="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1478756251910/FFC+Logo_no+text+favicon-01.png?format=1500w" />
<meta itemprop="image" content="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1478756251910/FFC+Logo_no+text+favicon-01.png?format=1500w"/>
<meta name="twitter:title" content="Releases — Foreign Family Collective"/>
<meta name="twitter:image" content="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1478756251910/FFC+Logo_no+text+favicon-01.png?format=1500w"/>
<meta name="twitter:url" content="https://www.foreignfamilycollective.com/releases/"/>
<meta name="twitter:card" content="summary"/>
<meta name="description" content="" />
<script type="text/javascript" src="//use.typekit.net/ik/tXMtVZGhDinv_NohUZBpUvB4MraNLS0IhQG-jJqp4VqfeGb2fFHN4UJLFRbh52jhWD9twRF8FRbkwQmqFAsKFcJUwAja5Qgyws7aMPG0SasyjhClj14zdhlCpAtlFcSuZfoDSWmyScmDSeBRZPoRdhXCZcNkZA81dcZydA8CpAFzdeU8jasTic90jhNlOeUzjhBC-eNDifUDieBR-kuKScNz-hUodKXhZDmqO1FUiABkZWF3jAF8OcFzdPUaiaS0ZcNkZA81dcZydA8CpAFzdeU8jasTic90jhNlOYiaikoDieBR-kuKScNz-hUodKXhZDmqO1FUiABkZWF3jAF8OcFzdPJwSY4zpe8ljPu0daZyJ6UyiY4ydAm0ifuaZAJKIAsTdKuRdhoqZAoDZAblihmKH6qJ73IbMg6gJMJ7fbKzMsMMeMb6MKGHfO2IMsMMeM96MKG4fH3gIMMjfkMfH6qJK3IbMg6YJMJ7fbKTMsMMeM66MKG4f5w7IMMj2PMfH6qJRMIbMg6sJMJ7fbKjOyMgeMw6MKG4fVl9IMJjgfMfqMY1o4R-gb.js"></script>
<script type="text/javascript">try{Typekit.load();}catch(e){}</script>
<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Roboto:400,700,700i,300i,300,500"/>
<script type="text/javascript">SQUARESPACE_ROLLUPS = {};</script>
<script>(function(rollups, name) { if (!rollups[name]) { rollups[name] = {}; } rollups[name].js = ["//static.squarespace.com/universal/scripts-compressed/common-7ea097753c166c6673f8-min.en-US.js"]; })(SQUARESPACE_ROLLUPS, 'squarespace-common');</script>
<script crossorigin="anonymous" src="//static.squarespace.com/universal/scripts-compressed/common-7ea097753c166c6673f8-min.en-US.js" ></script><script crossorigin="anonymous" src="//static.squarespace.com/universal/scripts-compressed/performance-87d56c068e3d7f0006b1-min.en-US.js" defer ></script><script data-name="static-context">Static = window.Static || {}; Static.SQUARESPACE_CONTEXT = {"facebookAppId":"314192535267336","rollups":{"squarespace-announcement-bar":{"css":"//static.squarespace.com/universal/styles-compressed/announcement-bar-d41d8cd98f00b204e9800998ecf8427e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/announcement-bar-1792af93a3c5792fc113-min.en-US.js"},"squarespace-audio-player":{"css":"//static.squarespace.com/universal/styles-compressed/audio-player-a57b8f3aa31918104f57a068648fbc63-min.css","js":"//static.squarespace.com/universal/scripts-compressed/audio-player-3d96b22b58aca806b71f-min.en-US.js"},"squarespace-blog-collection-list":{"css":"//static.squarespace.com/universal/styles-compressed/blog-collection-list-d41d8cd98f00b204e9800998ecf8427e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/blog-collection-list-e44b44c341a1cc9c62f0-min.en-US.js"},"squarespace-calendar-block-renderer":{"css":"//static.squarespace.com/universal/styles-compressed/calendar-block-renderer-61a327b8527a1fbf9b1fe569505ed5ae-min.css","js":"//static.squarespace.com/universal/scripts-compressed/calendar-block-renderer-4a613817c7e57840caff-min.en-US.js"},"squarespace-chartjs-helpers":{"css":"//static.squarespace.com/universal/styles-compressed/chartjs-helpers-9935a41d63cf08ca108505d288c1712e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/chartjs-helpers-3b06e487e60139639797-min.en-US.js"},"squarespace-comments":{"css":"//static.squarespace.com/universal/styles-compressed/comments-bfcda0f17dd987db5206c1d15e83fd19-min.css","js":"//static.squarespace.com/universal/scripts-compressed/comments-1ab655194c748e948786-min.en-US.js"},"squarespace-commerce-cart":{"js":"//static.squarespace.com/universal/scripts-compressed/commerce-cart-68b3f0a5db6f3e6fb1aa-min.en-US.js"},"squarespace-dialog":{"css":"//static.squarespace.com/universal/styles-compressed/dialog-b548cc83dd846f17dd31de0760e67bc5-min.css","js":"//static.squarespace.com/universal/scripts-compressed/dialog-cca5233994db9da6f06e-min.en-US.js"},"squarespace-events-collection":{"css":"//static.squarespace.com/universal/styles-compressed/events-collection-61a327b8527a1fbf9b1fe569505ed5ae-min.css","js":"//static.squarespace.com/universal/scripts-compressed/events-collection-4623a058171f94158ddf-min.en-US.js"},"squarespace-form-rendering-utils":{"js":"//static.squarespace.com/universal/scripts-compressed/form-rendering-utils-30b1436a54d682efc2b7-min.en-US.js"},"squarespace-forms":{"css":"//static.squarespace.com/universal/styles-compressed/forms-ac7917c174031c937e3df4b3a2005b34-min.css","js":"//static.squarespace.com/universal/scripts-compressed/forms-5c1b92c51d2ff7889175-min.en-US.js"},"squarespace-gallery-collection-list":{"css":"//static.squarespace.com/universal/styles-compressed/gallery-collection-list-d41d8cd98f00b204e9800998ecf8427e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/gallery-collection-list-c654e38363068846e082-min.en-US.js"},"squarespace-image-zoom":{"css":"//static.squarespace.com/universal/styles-compressed/image-zoom-72b0ab7796582588032aa6472e2e2f14-min.css","js":"//static.squarespace.com/universal/scripts-compressed/image-zoom-5beedf759ad5663e7812-min.en-US.js"},"squarespace-pinterest":{"css":"//static.squarespace.com/universal/styles-compressed/pinterest-d41d8cd98f00b204e9800998ecf8427e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/pinterest-c22740bb4c7fbf209d3b-min.en-US.js"},"squarespace-popup-overlay":{"css":"//static.squarespace.com/universal/styles-compressed/popup-overlay-7b48efeab9b323dfdb524a256cf61595-min.css","js":"//static.squarespace.com/universal/scripts-compressed/popup-overlay-47366ae9df141b4dd900-min.en-US.js"},"squarespace-product-quick-view":{"css":"//static.squarespace.com/universal/styles-compressed/product-quick-view-bc8694b75a40e4bd969b662b80ebafb5-min.css","js":"//static.squarespace.com/universal/scripts-compressed/product-quick-view-6325dc0ae0ceaac53e8a-min.en-US.js"},"squarespace-products-collection-item-v2":{"css":"//static.squarespace.com/universal/styles-compressed/products-collection-item-v2-72b0ab7796582588032aa6472e2e2f14-min.css","js":"//static.squarespace.com/universal/scripts-compressed/products-collection-item-v2-10a9761f57ebf6cd9ac0-min.en-US.js"},"squarespace-products-collection-list-v2":{"css":"//static.squarespace.com/universal/styles-compressed/products-collection-list-v2-72b0ab7796582588032aa6472e2e2f14-min.css","js":"//static.squarespace.com/universal/scripts-compressed/products-collection-list-v2-7d8509dc4e145d2826b3-min.en-US.js"},"squarespace-search-page":{"css":"//static.squarespace.com/universal/styles-compressed/search-page-ea3e98edb84abbc5e758884f69149027-min.css","js":"//static.squarespace.com/universal/scripts-compressed/search-page-3b3b474208934a705340-min.en-US.js"},"squarespace-search-preview":{"js":"//static.squarespace.com/universal/scripts-compressed/search-preview-6466adabd50365ece107-min.en-US.js"},"squarespace-share-buttons":{"js":"//static.squarespace.com/universal/scripts-compressed/share-buttons-e76c5e03db1b4f5b85f3-min.en-US.js"},"squarespace-simple-liking":{"css":"//static.squarespace.com/universal/styles-compressed/simple-liking-310d0b18e112f708f91339b11fd55714-min.css","js":"//static.squarespace.com/universal/scripts-compressed/simple-liking-bd22574b7185d4a57cb9-min.en-US.js"},"squarespace-social-buttons":{"css":"//static.squarespace.com/universal/styles-compressed/social-buttons-26106f808f7e9c739a7f862a408ed039-min.css","js":"//static.squarespace.com/universal/scripts-compressed/social-buttons-d5b1daa619d6d2b0be0b-min.en-US.js"},"squarespace-tourdates":{"css":"//static.squarespace.com/universal/styles-compressed/tourdates-d41d8cd98f00b204e9800998ecf8427e-min.css","js":"//static.squarespace.com/universal/scripts-compressed/tourdates-3e39b9d5f1dac341c90f-min.en-US.js"},"squarespace-website-overlays-manager":{"css":"//static.squarespace.com/universal/styles-compressed/website-overlays-manager-0db5c7c60d1d79fe731ced48ff0cc7c0-min.css","js":"//static.squarespace.com/universal/scripts-compressed/website-overlays-manager-3ce1f080decf20fb7c3c-min.en-US.js"}},"pageType":2,"website":{"id":"5823e64215d5db6b11f790a1","identifier":"stack-brooklyn-6g5d","websiteType":1,"contentModifiedOn":1542756010189,"cloneable":false,"siteStatus":{},"language":"en-US","timeZone":"America/New_York","machineTimeZoneOffset":-18000000,"timeZoneOffset":-18000000,"timeZoneAbbr":"EST","siteTitle":"Foreign Family Collective","fullSiteTitle":"Releases \u2014 Foreign Family Collective","siteDescription":"","logoImageId":"5878fd0b1b631b3e38fde2c2","socialLogoImageId":"582407992e69cfc8ac1bd2d6","shareButtonOptions":{"4":true,"1":true,"8":true,"3":true,"2":true,"6":true,"7":true,"5":true},"logoImageUrl":"//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5878fd0b1b631b3e38fde2c2/1542756010189/","socialLogoImageUrl":"//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/582407992e69cfc8ac1bd2d6/1542756010189/","authenticUrl":"https://www.foreignfamilycollective.com","internalUrl":"https://stack-brooklyn-6g5d.squarespace.com","baseUrl":"https://www.foreignfamilycollective.com","primaryDomain":"www.foreignfamilycollective.com","sslSetting":3,"socialAccounts":[{"serviceId":20,"userId":"hello@foreignfamilycollective.com","screenname":"hello@foreignfamilycollective.com","addedOn":1478880185149,"profileUrl":"mailto:hello@foreignfamilycollective.com","iconEnabled":true,"serviceName":"email"},{"serviceId":2,"userId":"1936727679949012","screenname":"Mark Roberts","addedOn":1502205289997,"profileUrl":"http://www.facebook.com/foreignfamily","iconUrl":"http://graph.facebook.com/1936727679949012/picture?type=square","metaData":{"service":"facebook"},"iconEnabled":true,"serviceName":"facebook"},{"serviceId":10,"userId":"1601726217","userName":"foreignfamily","screenname":"Foreign Family Collective","addedOn":1502205424807,"profileUrl":"http://instagram.com/foreignfamily","iconUrl":"https://scontent.cdninstagram.com/t51.2885-19/s150x150/20582369_116725368926217_1636024193474625536_a.jpg","collectionId":"5989d5f1a5790a3d1562716b","iconEnabled":true,"serviceName":"instagram"},{"serviceId":4,"userId":"2929621235","userName":"ForeignFam","screenname":"Foreign Family","addedOn":1502205620601,"profileUrl":"https://twitter.com/ForeignFam","iconUrl":"http://pbs.twimg.com/profile_images/893558463653003264/2Tm0qYWn_normal.jpg","collectionId":"5989d6b4d2b857f1fa7fdf58","iconEnabled":true,"serviceName":"twitter"},{"serviceId":27,"userName":"iTunes Store","screenname":"iTunes Store","addedOn":1502205817039,"profileUrl":"https://itunes.apple.com/us/curator/foreign-family-collective/id1146634561","iconEnabled":true,"serviceName":"itunes"},{"serviceId":25,"userId":"128082007","userName":"foreignfamily","screenname":"Foreign Family Collective","addedOn":1502205888848,"profileUrl":"http://soundcloud.com/foreignfamily","iconUrl":"https://i1.sndcdn.com/avatars-000135133455-m3fvcz-large.jpg","iconEnabled":true,"serviceName":"soundcloud"},{"serviceId":11,"userId":"UCAuFghi1ubOPTjvghHn-9Ow","screenname":"Foreign Family Collective","addedOn":1502205922246,"profileUrl":"https://www.youtube.com/channel/UCAuFghi1ubOPTjvghHn-9Ow","iconUrl":"https://yt3.ggpht.com/-hUUHN3rwCAA/AAAAAAAAAAI/AAAAAAAAAAA/qsfC78DWmuk/s88-c-k-no-mo-rj-c0xffffff/photo.jpg","iconEnabled":true,"serviceName":"youtube"}],"typekitId":"","statsMigrated":false,"imageMetadataProcessingEnabled":false,"screenshotId":"2648e7610f3b75cd546e219eb6c9eb73dc0f3e0c8030e2b5738b8ae881be39bb","showOwnerLogin":false},"websiteSettings":{"id":"5823e64215d5db6b11f790a4","websiteId":"5823e64215d5db6b11f790a1","subjects":[],"country":"US","state":"NY","simpleLikingEnabled":true,"mobileInfoBarSettings":{"isContactEmailEnabled":false,"isContactPhoneNumberEnabled":false,"isLocationEnabled":false,"isBusinessHoursEnabled":false},"commentLikesAllowed":true,"commentAnonAllowed":true,"commentThreaded":true,"commentApprovalRequired":false,"commentAvatarsOn":true,"commentSortType":2,"commentFlagThreshold":0,"commentFlagsAllowed":true,"commentEnableByDefault":true,"commentDisableAfterDaysDefault":0,"disqusShortname":"","commentsEnabled":false,"contactPhoneNumber":"","storeSettings":{"returnPolicy":null,"termsOfService":null,"privacyPolicy":null,"paymentSettings":{},"expressCheckout":false,"continueShoppingLinkUrl":"/","useLightCart":false,"showNoteField":false,"shippingCountryDefaultValue":"US","billToShippingDefaultValue":false,"showShippingPhoneNumber":true,"isShippingPhoneRequired":false,"showBillingPhoneNumber":true,"isBillingPhoneRequired":false,"multipleQuantityAllowedForServices":true,"currenciesSupported":["CHF","HKD","MXN","EUR","DKK","USD","CAD","MYR","NOK","THB","AUD","SGD","ILS","PLN","GBP","CZK","SEK","NZD","PHP","RUB"],"defaultCurrency":"USD","selectedCurrency":"USD","measurementStandard":1,"showCustomCheckoutForm":false,"enableMailingListOptInByDefault":false,"sameAsRetailLocation":false,"isLive":false},"useEscapeKeyToLogin":true,"ssBadgeType":1,"ssBadgePosition":4,"ssBadgeVisibility":1,"ssBadgeDevices":1,"pinterestOverlayOptions":{"mode":"disabled"},"ampEnabled":false},"cookieSettings":{"isCookieBannerEnabled":false,"isRestrictiveCookiePolicyEnabled":false,"isRestrictiveCookiePolicyAbsolute":false,"cookieBannerText":"","cookieBannerTheme":"","cookieBannerVariant":"","cookieBannerPosition":"","cookieBannerCtaVariant":"","cookieBannerCtaText":""},"websiteCloneable":false,"collection":{"title":"Releases","id":"587cf06b725e25c8c7cd4dc9","fullUrl":"/releases/","type":10},"subscribed":false,"appDomain":"squarespace.com","templateTweakable":true,"tweakJSON":{"aspect-ratio":"Auto","gallery-arrow-style":"Round Corners","gallery-aspect-ratio":"3:2 Standard","gallery-auto-crop":"true","gallery-autoplay":"false","gallery-design":"Slideshow","gallery-info-overlay":"Always Show","gallery-loop":"false","gallery-navigation":"Thumbnails","gallery-show-arrows":"true","gallery-transitions":"Fade","galleryArrowBackground":"rgba(34,34,34,1)","galleryArrowColor":"rgba(255,255,255,1)","galleryAutoplaySpeed":"3","galleryCircleColor":"rgba(255,255,255,1)","galleryInfoBackground":"rgba(0, 0, 0, .7)","galleryThumbnailSize":"100px","gridSize":"350px","gridSpacing":"20px","hdr-bg-image":"{background-image:none;background-position:center center;background-size:auto;background-attachment:fixed;background-repeat:repeat}","product-gallery-auto-crop":"true","product-image-auto-crop":"true"},"templateId":"503ba86de4b04953d0f49846","pageFeatures":[1,2,4],"googleMapsStaticApiKey":"AIzaSyBQdch5IcgcQaKNG76sbMQv1MEBEKLeQ-8","impersonatedSession":false,"isFacebookTab":false,"tzData":{"zones":[[-300,"US","E%sT",null]],"rules":{"US":[[1967,2006,null,"Oct","lastSun","2:00","0","S"],[1987,2006,null,"Apr","Sun>=1","2:00","1:00","D"],[2007,"max",null,"Mar","Sun>=8","2:00","1:00","D"],[2007,"max",null,"Nov","Sun>=1","2:00","0","S"]]}}};</script><script type="text/javascript"> SquarespaceFonts.loadViaContext(); Squarespace.load(window);</script><script type="application/ld+json">{"url":"https://www.foreignfamilycollective.com","name":"Foreign Family Collective","description":"","image":"//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5878fd0b1b631b3e38fde2c2/1542756010189/","@context":"http://schema.org","@type":"WebSite"}</script><!--[if gte IE 9]> <link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&part=1"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&part=2"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&part=3"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&part=4"/><![endif]-->
<!--[if lt IE 9]><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&noMedia=true&part=1"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&noMedia=true&part=2"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&noMedia=true&part=3"/><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false&noMedia=true&part=4"/><![endif]-->
<!--[if !IE]> --><link rel="stylesheet" type="text/css" href="//static1.squarespace.com/static/sitecss/5823e64215d5db6b11f790a1/395/503ba86de4b04953d0f49846/5823e64215d5db6b11f790a7/1659-05142015/1542819133903/site.css?&filterFeatures=false"/><!-- <![endif]-->
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>
<script>
  $(document).ready(function(){
    start();
    
    function start() {
      add_odesza_logo();
      move_subscribe_form();
      add_socials_to_mobile_menu();
    }
    
    function add_odesza_logo() {
      var odesza_url = 'http://www.odesza.com';
      $('#sqs-social').append('<a href="' + odesza_url + '" target="_blank" class="sqs-svg-icon--wrapper odesza"></a>');
    }
    
    function add_socials_to_mobile_menu() {
      var social_icons = [];
      $('#navigation-top .horizontal-navigation-bar #sqs-social > a').each(function() {
        var icon = $(this)[0].outerHTML;
        social_icons.push(icon);
      });
      var sub_html = $('.horizontal-navigation-bar .sqs-block-form')[0].outerHTML;
      
      var $menu = $('#mobile-navigation ul');
      for (var i=0; i<social_icons.length; i++) {
        $menu.append('<li class="social">' + social_icons[i] + '</li>');
      }
      $menu.append('<li class="sub">' + sub_html + '</li>');
    }
    
    function move_subscribe_form() {
      var form_html = $('#page-footer .sqs-block-form')[0].outerHTML;
      $('#page-footer .sqs-block-form').remove();
      $('.horizontal-navigation-bar').append(form_html);
      var $form = $('.horizontal-navigation-bar .sqs-block-form');
      $('form', $form).attr('autocomplete', 'off');
      $('.field-element.text', $form).attr('placeholder', 'Get FFC Updates');
    }
    
  });
</script><style>
  #banner-area-wrapper { display: none }
</style>

<script src="//ajax.googleapis.com/ajax/libs/jquery/2.2.3/jquery.min.js"></script>

<script>
  $(function(){
    $(".image-slide-title, .summary-title").each(function(){
      $(this).html($(this).text());
    });
  });
</script>

<audio id='customAudio' src="" controls style='display:none'></audio>

<script>
  $(document).ready(function(){

    function inject_play_buttons() {
      $('.sqs-block-audio').each(function(index) {
        if(!($(this).hasClass('completed'))){
          $(this).addClass('completed');
          if (index != 0) {
            var audio_html = $(this)[0].outerHTML;
            $('.sqs-block-gallery .slide:nth-child(' + index + ') .image-slide-anchor').prepend(audio_html);
            $(this).remove();
          }
        }
      });
    }

    function inject_featured_play_button() {
      var $audio = $('.sqs-block-audio').last();
      var audio_html = $audio[0].outerHTML;
      $('.sqs-block-summary-v2 .summary-item .summary-thumbnail')
        .prepend(audio_html);
      $audio.remove();
    }

    function inject_featured_stream_download_buttons() {
      $('.summary-excerpt').append('<div>Stream</div><div id="f-stream-buttons"><a href="" target="_blank" id="f-stream-spotify" class="f-icon"></a><a href="" target="_blank" id="f-stream-itunes" class="f-icon"></a><a href="" target="_blank" id="f-stream-soundcloud" class="f-icon"></a><a href="" target="_blank" id="f-stream-deezer" class="f-icon"></a><a href="" target="_blank" id="f-stream-youtube" class="f-icon"></a></div><div>Download</div><div id="f-download-buttons"><a href="" target="_blank" id="f-download-itunes" class="f-icon"></a><a href="" target="_blank" id="f-download-beatport" class="f-icon"></a><a href="" target="_blank" id="f-download-amazon" class="f-icon"></a><a href="" target="_blank" id="f-download-googleplay" class="f-icon"></a></div>');
      console.log('done');
    }

    function inject_stream_download_buttons() {
      $('.image-slide-title').each(function() {
        if(!($(this).hasClass('completed'))){
          $(this).addClass('completed');
          var sid = $('.sid', this).text();
          $(this).append('<div class="stream-download-buttons"><div class="stream-button" data-sid="' + sid + '">Stream ˘</div><div class="download-button" data-sid="' + sid + '">Download ˘</div></div>');
        }
      });
    }

    function remove_first_from_gallery() {
      $('.sqs-block-gallery .slide:eq(0)').remove();
      // GRID REFRESH CODE
      if (document.createEvent) {
        var ev = document.createEvent('Event');
        ev.initEvent('resize', true, true);
        window.dispatchEvent(ev);
      }
      else { // IE
        element=document.documentElement;
        var event=document.createEventObject();
        element.fireEvent("onresize",event);
      }
    }
    function start1() {
      remove_first_from_gallery();
      inject_stream_download_buttons();
      inject_play_buttons();
    }
    setTimeout(function(){
      inject_featured_stream_download_buttons();
      inject_featured_play_button();
    },1000)

    //hacky iteration
    start1();
  });
</script>

<!-- STREAM/DOWNLOAD POPUPS -->
<div id="sst-stream-popup">
  <a href="" target="_blank" id="stream-spotify" class="popup-icon"></a>
  <a href="" target="_blank" id="stream-itunes" class="popup-icon"></a>
  <a href="" target="_blank" id="stream-soundcloud" class="popup-icon"></a>
  <a href="" target="_blank" id="stream-deezer" class="popup-icon"></a>
  <a href="" target="_blank" id="stream-youtube" class="popup-icon"></a>
</div>
<div id="sst-download-popup">
  <a href="" target="_blank" id="download-itunes" class="popup-icon"></a>
  <a href="" target="_blank" id="download-beatport" class="popup-icon"></a>
  <a href="" target="_blank" id="download-amazon" class="popup-icon"></a>
  <a href="" target="_blank" id="download-googleplay" class="popup-icon"></a>
</div>


<script>
  $(function(){
    //this is a workaround to make the first audio play
    //get audio url
    setTimeout(function(){
      var src = $('a.summary-thumbnail-container:eq(0) .sqs-audio-embed').attr('data-url');
      console.log(src);
      $('#customAudio').attr('src', src);
      //play
      var myAudio = document.getElementById("customAudio");
      function togglePlay() {
        return myAudio.paused ? myAudio.play() : myAudio.pause();
      };
      $("a.summary-thumbnail-container:eq(0)").click(function(){
        console.log('click');
        togglePlay();
        $(this).find('.sqs-widget').toggleClass('playing');
      });
      //when click first
      $('.summary-v2-block .player').click(function(){
        $('.sqs-block-gallery .playing .pause-button').trigger('click');
      })
      //when click others
      $('.sqs-block-gallery .player').click(function(){
        myAudio.pause();
        $('a.summary-thumbnail-container:eq(0) .sqs-widget').removeClass('playing');
      })
    },1000)

  });
</script><script>Static.COOKIE_BANNER_CAPABLE = true;</script>
<!-- End of Squarespace Headers -->
    <script src="https://static1.squarespace.com/static/ta/5016d42984ae3ecc9e018d91/1659/scripts/site-bundle.js" type="text/javascript"></script>
  </head>
  
  <body class="canvas-setting-full-width hide-delimiter  banner-content-page-title-description banner-alignment-left page-thumbnail-as-banner stretch-page-thumbnail top-navigation-position-above-banner top-navigation-alignment-left disable-navigation-border  sidebar-position-right underline-sidebar-h3  footer-alignment-left disable-footer-border social-icon-style-normal social-icon-placement-top-only  blog-list-display-full blog-byline-hidden blog-dateline-top disable-pagination-border    show-products-category-navigation hide-album-share-link  event-show-past-events event-thumbnails event-thumbnail-size-32-standard event-date-label  event-list-show-cats event-list-date event-list-time event-list-address   event-icalgcal-links  event-excerpts      gallery-design-slideshow aspect-ratio-auto lightbox-style-dark gallery-navigation-thumbnails gallery-info-overlay-always-show gallery-aspect-ratio-32-standard gallery-arrow-style-round-corners gallery-transitions-fade gallery-show-arrows gallery-auto-crop   product-list-titles-under product-list-alignment-center product-item-size-43-four-thirds product-image-auto-crop product-gallery-size-32-standard product-gallery-auto-crop show-product-price show-product-item-nav product-social-sharing newsletter-style-light hide-opentable-icons opentable-style-dark small-button-style-outline small-button-shape-square medium-button-style-solid medium-button-shape-square large-button-style-solid large-button-shape-rounded image-block-poster-text-alignment-center image-block-card-dynamic-font-sizing image-block-card-content-position-center image-block-card-text-alignment-left image-block-overlap-dynamic-font-sizing image-block-overlap-content-position-center image-block-overlap-text-alignment-left image-block-collage-dynamic-font-sizing image-block-collage-content-position-top image-block-collage-text-alignment-left image-block-stack-dynamic-font-sizing image-block-stack-text-alignment-left button-style-outline button-corner-style-square tweak-product-quick-view-button-style-floating tweak-product-quick-view-button-position-bottom tweak-product-quick-view-lightbox-excerpt-display-truncate tweak-product-quick-view-lightbox-show-arrows tweak-product-quick-view-lightbox-show-close-button tweak-product-quick-view-lightbox-controls-weight-light native-currency-code-usd collection-type-page collection-layout-full-width collection-587cf06b725e25c8c7cd4dc9 mobile-style-available has-logo-image" id="collection-587cf06b725e25c8c7cd4dc9" ontouchstart="">

		
		
<!--MOBILE-->
<nav id="mobile-navigation">
  <span id="mobile-navigation-title"><a href="/">Foreign Family Collective</a></span>
  <span id="mobile-navigation-label"></span>
  <ul>
    
      <li class="">
        
          
            <a href="/">News</a>
          
          
        
      </li>
    
      <li class="">
        
          
            <a href="/music-artists/">Artist</a>
          
          
        
      </li>
    
      <li class=" active-link">
        
          
            <a href="/releases/">Releases</a>
          
          
        
      </li>
    
      <li class="">
        
          <input type="checkbox" name="folder-toggle-5b0e12a7aa4a99acd251c77e" id="folder-toggle-5b0e12a7aa4a99acd251c77e" class="folder-toggle-box hidden" />
          <label for="folder-toggle-5b0e12a7aa4a99acd251c77e" class="folder-toggle-label">Projects</label>
          
            
                <a href="/ffc-projects/" class="">Projects</a>
            
            
          
            
                <a href="/amomentaparttour2017/" class="">ODESZA - A MOMENT APART TOUR</a>
            
            
          
            
                <a href="/odesza_coachella_2018/" class="">ODESZA - COACHELLA 2018</a>
            
            
          
            
                <a href="/big-wild-ascension/" class="">BIG WILD - ASCENSION</a>
            
            
          
        
      </li>
    
      <li class="">
        
          
          
            <a href="http://store.foreignfamilycollective.com/" target="_blank">Store</a>
          
        
      </li>
    
      <li class="">
        
          
            <a href="/connect/">Connect</a>
          
          
        
      </li>
    
    
  </ul>
</nav>


		

	  <div id="canvas-wrapper">
	  	<div id="canvas">


				<div id="page-header-wrapper">
					<div id="page-header">

				    <div id="navigation-top">
				    	<div class="horizontal-navigation-bar clear with-logo">

				    		<!-- // logo or site title markup in nav area -->
					      
					      	
						      <div id="banner-wrapper" data-content-field="site-title">
						        <a href="/"><img id="banner" src="//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5878fd0b1b631b3e38fde2c2/1542756010189/?format=1500w" alt="Foreign Family Collective" /></a>
						      </div>
					        

					    		
<nav id="main-navigation" class="main-nav" data-content-field="navigation">
  <ul>
  

    

    <li class="blog-collection"><a href="/">News</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection"><a href="/music-artists/">Artist</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection active-link"><a href="/releases/">Releases</a><span class="delimiter">/</span></li>
  

    

    <li aria-haspopup="true" class="folder-collection folder"><a href="#" onClick="return false;">Projects</a><span class="delimiter">/</span><div class="subnav"><ul><li class="page-collection"><a href="/ffc-projects/">Projects</a></li><li class="page-collection"><a href="/amomentaparttour2017/">ODESZA - A MOMENT APART TOUR</a></li><li class="page-collection"><a href="/odesza_coachella_2018/">ODESZA - COACHELLA 2018</a></li><li class="page-collection"><a href="/big-wild-ascension/">BIG WILD - ASCENSION</a></li></ul></div></li>
  

    

    <li class="external-link"><a href="http://store.foreignfamilycollective.com/" target="_blank">Store</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection"><a href="/connect/">Connect</a><span class="delimiter">/</span></li>
  
     
  </ul>
</nav>


				          
			            <div id="sqs-social" class="social-links sqs-svg-icon--list" data-content-field="connected-accounts">
        						
  <a href="mailto:hello@foreignfamilycollective.com" target="_blank" class="sqs-svg-icon--wrapper email">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#email-icon"></use>
        <use class="sqs-use--mask" xlink:href="#email-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://www.facebook.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper facebook">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#facebook-icon"></use>
        <use class="sqs-use--mask" xlink:href="#facebook-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://instagram.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper instagram">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#instagram-icon"></use>
        <use class="sqs-use--mask" xlink:href="#instagram-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://twitter.com/ForeignFam" target="_blank" class="sqs-svg-icon--wrapper twitter">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#twitter-icon"></use>
        <use class="sqs-use--mask" xlink:href="#twitter-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://itunes.apple.com/us/curator/foreign-family-collective/id1146634561" target="_blank" class="sqs-svg-icon--wrapper itunes">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#itunes-icon"></use>
        <use class="sqs-use--mask" xlink:href="#itunes-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://soundcloud.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper soundcloud">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#soundcloud-icon"></use>
        <use class="sqs-use--mask" xlink:href="#soundcloud-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://www.youtube.com/channel/UCAuFghi1ubOPTjvghHn-9Ow" target="_blank" class="sqs-svg-icon--wrapper youtube">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#youtube-icon"></use>
        <use class="sqs-use--mask" xlink:href="#youtube-mask"></use>
      </svg>
    </div>
  </a>

			            </div>
				          
					      

				    	</div>
				    </div><!-- navigation-top -->

						<div id="banner-area-wrapper">
							<div id="banner-area">

							<!-- // page thumbnail image as banner image -->
							
                
                  
                
							

							<div class="banner-overlay"></div>

				      <!-- // logo or site title markup in banner area -->
				      
				      	
					      <div id="banner-wrapper" data-content-field="site-title">
					        <a href="/" rel="bookmark">
					        	<img id="banner" src="//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5878fd0b1b631b3e38fde2c2/1542756010189/?format=1500w" alt="Foreign Family Collective" />
						        
						      </a>
					      </div>
				        
				      

							<!-- // page title markup in banner area -->
				      
					      <div id="page-title-wrapper" class="js-text-shrink" data-collection-id="587cf06b725e25c8c7cd4dc9" data-edit-main-image="Page Banner">
				          <h1 id="page-title" class="page-title">Releases</h1>
				      		
				        </div>
				      

				      </div>
				    </div><!-- banner-area-wrapper -->

				    <div id="navigation-bottom">
				    	<div class="horizontal-navigation-bar clear with-logo">

				    		<!-- // logo or site title markup in nav area -->
					      
					      	
						      <div id="banner-wrapper" data-content-field="site-title">
						        <a href="/"><img id="banner" src="//static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5878fd0b1b631b3e38fde2c2/1542756010189/?format=1500w" alt="Foreign Family Collective" /></a>
						      </div>
					        

									
<nav id="main-navigation" class="main-nav" data-content-field="navigation">
  <ul>
  

    

    <li class="blog-collection"><a href="/">News</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection"><a href="/music-artists/">Artist</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection active-link"><a href="/releases/">Releases</a><span class="delimiter">/</span></li>
  

    

    <li aria-haspopup="true" class="folder-collection folder"><a href="#" onClick="return false;">Projects</a><span class="delimiter">/</span><div class="subnav"><ul><li class="page-collection"><a href="/ffc-projects/">Projects</a></li><li class="page-collection"><a href="/amomentaparttour2017/">ODESZA - A MOMENT APART TOUR</a></li><li class="page-collection"><a href="/odesza_coachella_2018/">ODESZA - COACHELLA 2018</a></li><li class="page-collection"><a href="/big-wild-ascension/">BIG WILD - ASCENSION</a></li></ul></div></li>
  

    

    <li class="external-link"><a href="http://store.foreignfamilycollective.com/" target="_blank">Store</a><span class="delimiter">/</span></li>
  

    

    <li class="page-collection"><a href="/connect/">Connect</a><span class="delimiter">/</span></li>
  
     
  </ul>
</nav>



				          
                  <div id="sqs-social" class="social-links sqs-svg-icon--list" data-content-field="connected-accounts">
        						
  <a href="mailto:hello@foreignfamilycollective.com" target="_blank" class="sqs-svg-icon--wrapper email">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#email-icon"></use>
        <use class="sqs-use--mask" xlink:href="#email-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://www.facebook.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper facebook">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#facebook-icon"></use>
        <use class="sqs-use--mask" xlink:href="#facebook-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://instagram.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper instagram">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#instagram-icon"></use>
        <use class="sqs-use--mask" xlink:href="#instagram-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://twitter.com/ForeignFam" target="_blank" class="sqs-svg-icon--wrapper twitter">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#twitter-icon"></use>
        <use class="sqs-use--mask" xlink:href="#twitter-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://itunes.apple.com/us/curator/foreign-family-collective/id1146634561" target="_blank" class="sqs-svg-icon--wrapper itunes">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#itunes-icon"></use>
        <use class="sqs-use--mask" xlink:href="#itunes-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://soundcloud.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper soundcloud">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#soundcloud-icon"></use>
        <use class="sqs-use--mask" xlink:href="#soundcloud-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://www.youtube.com/channel/UCAuFghi1ubOPTjvghHn-9Ow" target="_blank" class="sqs-svg-icon--wrapper youtube">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#youtube-icon"></use>
        <use class="sqs-use--mask" xlink:href="#youtube-mask"></use>
      </svg>
    </div>
  </a>

			            </div>
				          
					      

				    	</div>
				    </div><!-- navigation-bottom -->

				  </div>
				</div><!-- page-header-wrapper -->


			<div id="page-body-wrapper" class="full-width">
				<div id="page-body">

					<div id="content-wrapper">
						<div id="content">

							<div id="page-body-header" class="extra-wrapper">
								<div class="sqs-layout sqs-grid-12 columns-12 empty" data-layout-label="Releases Header Content" data-type="block-field" id="page-header-587cf06b725e25c8c7cd4dc9"><div class="row sqs-row"><div class="col sqs-col-12 span-12"></div></div></div>
							</div>

					    <!-- // CATEGORY NAV -->
					    

					    <div class="main-content" data-content-field="main-content" data-collection-id="587cf06b725e25c8c7cd4dc9" data-edit-main-image="Page Banner">
								<div class="sqs-layout sqs-grid-12 columns-12" data-type="page" data-updated-on="1542406000643" id="page-587cf06b725e25c8c7cd4dc9"><div class="row sqs-row"><div class="col sqs-col-12 span-12"><div class="sqs-block code-block sqs-block-code" data-block-type="23" id="block-yui_3_17_2_10_1484671610559_7996"><div class="sqs-block-content">
<script>
  $(document).ready(function() {

    var links = {

      /* TEMPLATE - copy and paste the following to add
         new song, make sure to change FFC number and
         download links. Note: not all streaming/downloading
         sites need to be included.

      FFC0XX: {
        stream_spotify: "https://spotify.com",
        stream_itunes: "https://apple.com",
        stream_soundcloud: "https://soundcloud.com",
        stream_deezer: "https://deezer.com",
        stream_youtube: "https://youtube.com",
        download_itunes: "https://apple.com",
        download_beatport: "https://beatport.com",
        download_amazon: "https://amazon.com",
        download_googleplay: "https://google.com",
      },                                                         */

        FFC040: {
        stream_spotify: "https://spoti.fi/2PX1gWT",
        stream_itunes: "https://apple.co/2OItWy5",
        stream_soundcloud: "https://bit.ly/2zZBLdq",
        stream_deezer: "https://bit.ly/2BcdtOV",
        stream_youtube: "https://bit.ly/2JhzGhg",
        download_itunes: "hhttps://apple.co/2RYToBo",
        download_beatport: "https://bit.ly/2DHUP3Z",
        download_amazon: "https://amzn.to/2qOkhwa",
        download_googleplay: "https://play.google.com/store/music/album/ford_Evening?id=B6mrbtl3vkoqjoohrkw23hqdtju&hl=en",
      },            
      
      FFC039: {
        stream_spotify: "https://spoti.fi/2O561sp", 
        stream_itunes: "https://itunes.apple.com/us/album/crash-single/1439539610?app=music",
        stream_soundcloud: "https://soundcloud.com/oheymaila/crash",
        stream_deezer: "https://www.deezer.com/us/album/76098712",
        stream_youtube: "https://www.youtube.com/watch?v=PoFZ8lRpwv0&feature=youtu.be",
        download_itunes: "https://itunes.apple.com/us/album/crash-single/1439539610?app=itunes",
        download_beatport: "https://www.beatport.com/release/crash/2420226",
        download_amazon: "hhttps://music.amazon.com/albums/B07JK251ZN/CATALOG?ref=dm_wcp_af_ex",
        download_googleplay: "https://play.google.com/store/music/artist/mai_la?id=Ahsej62jrbvkfjwwrslobn3qa24&hl=en",
      },    

      FFC038: {
        stream_spotify: "https://spoti.fi/2O561sp",
        stream_itunes: "https://apple.co/2AsOFln",
        stream_soundcloud: "https://soundcloud.com",
        stream_deezer: "https://deezer.com",
        stream_youtube: "https://bit.ly/2JhzGhg",
        download_itunes: "https://apple.co/2PRhtJI",
        download_beatport: "https://bit.ly/2OZhU8m",
        download_amazon: "https://amzn.to/2PBOvkb",
        download_googleplay: "https://play.google.com/store/music/album/Running_Touch_My_Hands?id=Bp4h7wl2l2ssk5gchuxhzfb5u5q",
      },            

      FFC037: {
        stream_spotify: "https://spoti.fi/2EVQStZ",
        stream_itunes: "https://apple.co/2SCKaMq",
        stream_soundcloud: "https://bit.ly/2OX7Fl0",
        stream_deezer: "https://bit.ly/2PA5O52",
        stream_youtube: "https://bit.ly/2SxlBQL",
        download_itunes: "https://apple.co/2PtysVA",
        download_beatport: "https://bit.ly/2AAYNsC",
        download_amazon: "hhttps://amzn.to/2JrXQpo",
        download_googleplay: "https://play.google.com/store/music/album/Mild_Minds_SWIM?id=B4t3k5s3sfk5cmwgooqdi3b7foq",
      }, 


      FFC036: {
        stream_spotify: "https://spoti.fi/2p21NaE",
        stream_itunes: "https://apple.co/2p3Am04",
        stream_soundcloud: "https://bit.ly/2CPtSMe",
        stream_deezer: "https://bit.ly/2x5Gr0C",
        stream_youtube: "https://bit.ly/2MolH99",
        download_itunes: "https://apple.co/2x2SfAI",
        download_beatport: "www.beatport.com",
        download_amazon: "/",
        download_googleplay: "/",
      }, 


      FFC035: {
        stream_spotify: "https://spoti.fi/2NlnOzT",
        stream_itunes: "https://apple.co/2QHBdk2",
        stream_soundcloud: "https://bit.ly/2Np9hTIe",
        stream_deezer: "/",
        stream_youtube: "https://bit.ly/2MIHokp",
        download_itunes: "https://apple.co/2D8Qyal",
        download_beatport: "www.beatport.com",
        download_amazon: "https://amzn.to/2xkugxd",
        download_googleplay: "/",
      }, 


      FFC034: {
        stream_spotify: "https://goo.gl/x5o1oh",
        stream_itunes: "https://goo.gl/prcv9e",
        stream_soundcloud: "https://goo.gl/vWBEu8",
        stream_deezer: "http://www.deezer.com/us/",
        stream_youtube: "https://goo.gl/tMgGJH",
        download_itunes: "https://goo.gl/JY6tXn",
        download_beatport: "www.beatport.com",
        download_amazon: "https://goo.gl/Yv8tAF",
        download_googleplay: "https://goo.gl/phVGHV",
      }, 


      FFC033: {
        stream_spotify: "https://open.spotify.com/album/4fJiv6HBprRHpxMeP1P1qU?si=WZ53EE1JTfaHL7wwWOm2VA",
        stream_itunes: "https://itunes.apple.com/us/album/l-o-v-e/1416874360?i=1416874489&app=music",
        stream_soundcloud: "https://soundcloud.com/plukomusic/l-o-v-e",
        stream_deezer: "http://www.deezer.com/us/",
        stream_youtube: "foreignf.am/love-yt",
        download_itunes: "https://itunes.apple.com/us/album/l-o-v-e/1416874360?i=1416874489&app=itunes",
        download_beatport: "http://foreignf.am/",
        download_amazon: "https://www.amazon.com/l-o-v-e/dp/B07FT9JLLJ/ref=sr_1_22?s=dmusic&ie=UTF8&qid=1533044382&sr=1-22&keywords=pluko&tag=smarturl-20",
        download_googleplay: "https://play.google.com/store/music/album?id=Bv3aaho2kekaqksbx3wpkapzja4&tid=song-Tjfte2wzfh43z7h2rk2234n6hmm&hl=en",
      }, 



      FFC032: {
        stream_spotify: "foreignf.am/idlyf-spotify",
        stream_itunes: "foreignf.am/idlyf-apple",
        stream_soundcloud: "foreignf.am/idlyf-sc",
        stream_deezer: "http://www.deezer.com/us/",
        stream_youtube: "foreignf.am/idlyf-yt",
        download_itunes: "foreignf.am/idlyf-itunes",
        download_beatport: "http://foreignf.am/",
        download_amazon: "foreignf.am/idlyf-amazon",
        download_googleplay: "foreignf.am/idlyf-google",
      }, 


      FFC031: {
        stream_spotify: "https://spoti.fi/2M7ue1a",
        stream_itunes: "https://foreignf.am/needya-pink-apple",
        stream_soundcloud: "http://foreignf.am/needya-pink-sc",
        stream_deezer: "http://www.deezer.com/us/",
        stream_youtube: "foreignf.am/needya-yt",
        download_itunes: "https://apple.co/2HrxwZP",
        download_beatport: "http://foreignf.am/",
        download_amazon: "http://foreignf.am/needya-pink-amazon",
        download_googleplay: "http://foreignf.am/needya-pink-google",
      }, 


      FFC030: {
        stream_spotify: "http://foreignf.am/ascension-spotify",
        stream_itunes: "http://foreignf.am/ascension-apple",
        stream_soundcloud: "http://foreignf.am/ascension-sc",
        stream_deezer: "http://www.deezer.com/us/",
        stream_youtube: "http://foreignf.am/ascension-yt",
        download_itunes: "http://foreignf.am/ascension-itunes",
        download_beatport: "http://foreignf.am/ascension-beatport",
        download_amazon: "http://foreignf.am/ascension-amazon",
        download_googleplay: "http://foreignf.am/ascension-google",
      }, 

      FFC029: {
        stream_spotify: "foreignf.am/asleep-spotify",
        stream_itunes: "foreignf.am/asleep-apple",
        stream_soundcloud: "foreignf.am/asleep-sc",
        stream_deezer: "https://www.deezer.com/us/",
        stream_youtube: "foreignf.am/asleep-yt",
        download_itunes: "foreignf.am/asleep-itunes",
        download_beatport: "foreignf.am/asleep-beatport",
        download_amazon: "foreignf.am/asleep-amazon",
        download_googleplay: "foreignf.am/asleep-google",
      }, 

      FFC028: {
        stream_spotify: "foreignf.am/pwdk",
        stream_itunes: "foreignf.am/pwdk",
        stream_soundcloud: "foreignf.am/pwdk",
        stream_deezer: "foreignf.am/pwdk",
        stream_youtube: "foreignf.am/pwdk",
        download_itunes: "foreignf.am/pwdk",
        download_beatport: "foreignf.am/pwdk",
        download_amazon: "foreignf.am/pwdk",
        download_googleplay: "foreignf.am/pwdk",
      }, 


      FFC027: {
        stream_spotify: "http://spoti.fi/2pfPDuv",
        stream_itunes: "https://apple.co/2FIQr2j",
        stream_soundcloud: "http://bit.ly/2GwaS3G",
        stream_deezer: "http://foreignf.am/westworld-deezer",
        stream_youtube: "http://bit.ly/2FOGqUz",
        download_itunes: "https://apple.co/2FIQr2j",
        download_beatport: "http://bit.ly/2pc1VVx",
        download_amazon: "http://amzn.to/2pagxoi",
        download_googleplay: "https://play.google.com/store/music/album/Kasbo_Over_You?id=By4tcpf7vva5gx3y7hsrzh3dl2u",
      }, 


      FFC026: {
        stream_spotify: "http://spoti.fi/2I7H1iu",
        stream_itunes: "http://foreignf.am/westworld-apple",
        stream_soundcloud: "http://foreignf.am/westworld-sc",
        stream_deezer: "http://foreignf.am/westworld-deezer",
        stream_youtube: "http://foreignf.am/westworld-yt",
        download_itunes: "http://foreignf.am/westworld-itunes",
        download_beatport: "http://foreignf.am/westworld-beatport",
        download_amazon: "http://foreignf.am/westworld-amazon",
        download_googleplay: "http://foreignf.am/westworld-google",
      }, 

      FFC025: {
        stream_spotify: "http://spoti.fi/2F1j7DV",
        stream_itunes: "hhttps://apple.co/2EjGebF",
        stream_soundcloud: "http://foreignf.am/aldrig-mer-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "http://bit.ly/2EopBvJ",
        download_itunes: "https://apple.co/2EjGebF",
        download_beatport: "https://www.beatport.com/release/aldrig-mer/2201293",
        download_amazon: "http://amzn.to/2EojTd3",
        download_googleplay: "http://bit.ly/2BY7gYD",
      }, 

      FFC024: {
        stream_spotify: "http://foreignf.am/heart-start-on-call-spotify",
        stream_itunes: "http://foreignf.am/heart-start-on-call-apple",
        stream_soundcloud: "http://foreignf.am/heart-start-on-call-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/watch?v=9uVamP3EsbA",
        download_itunes: "http://foreignf.am/heart-start-on-call-itunes",
        download_beatport: "https://beatport.com",
        download_amazon: "http://foreignf.am/heart-start-on-call-amazon",
        download_googleplay: "http://foreignf.am/heart-start-on-call-google",
      }, 

      FFC023: {
        stream_spotify: "http://foreignf.am/aldrig-mer-spotify",
        stream_itunes: "http://foreignf.am/aldrig-mer-apple",
        stream_soundcloud: "http://foreignf.am/aldrig-mer-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/watch?v=fFi7WuAfzEc",
        download_itunes: "http://foreignf.am/aldrig-mer-itunes",
        download_beatport: "https://www.beatport.com/release/aldrig-mer/2201293",
        download_amazon: "http://foreignf.am/aldrig-mer-amazon",
        download_googleplay: "http://foreignf.am/aldrig-mer-google",
      }, 

      FFC022: {
        stream_spotify: "http://foreignf.am/sig-spotify",
        stream_itunes: "http://foreignf.am/sig-apple",
        stream_soundcloud: "http://foreignf.am/sig-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "",
        download_itunes: "http://foreignf.am/sig-itunes",
        download_beatport: "",
        download_amazon: "http://foreignf.am/sig-amazon",
        download_googleplay: "http://foreignf.am/sig-google",
      }, 

      FFC021: {
        stream_spotify: "http://foreignf.am/restless-sea-spotify",
        stream_itunes: "https://itunes.apple.com/us/album/restless-sea-single-feat-opia-single/1310287867",
        stream_soundcloud: "",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "",
        download_itunes: "http://foreignf.am/restless-sea-itunes",
        download_beatport: "",
        download_amazon: "https://www.amazon.com/Restless-Louis-Futon-feat-Opia/dp/B077979KV3/ref=sr_1_1",
        download_googleplay: "https://play.google.com/store/music/album/Louis_Futon_Restless_Sea?id=Bimz7ei7kgdsilayvm3ykuxeqm4",
      }, 

      FFC020: {
        stream_spotify: "https://open.spotify.com/album/71xBtXvFnO6q5HRF3fRnVb",
        stream_itunes: "https://itunes.apple.com/us/album/bleed-it-out-feat-nea-single/id1293256967?ls=1&app=music&at=11lEW&ct=1uofui",
        stream_soundcloud: "https://soundcloud.com/kasbomusic/bleed-it-out-feat-nea",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/watch?v=gWxuy-SHXd4",
        download_itunes: "https://itunes.apple.com/us/album/bleed-it-out-feat-nea-single/id1293256967",
        download_beatport: "https://www.beatport.com/release/bleed-it-out/2142234",
        download_amazon: "https://www.amazon.com/Bleed-Out-feat-Nea-Kasbo/dp/B076DM2V3P/ref=sr_1_1",
        download_googleplay: "https://play.google.com/store/music/album/Kasbo_Bleed_It_Out?id=Bmjboruuorcfnrvasdpednvwdxy",
      }, 

      FFC019: {
        stream_spotify: "https://open.spotify.com/album/2FgS1KHblcOFOiAhN7nJNH",
        stream_itunes: "https://itunes.apple.com/us/album/show-me-feat-hundred-waters-single/id1288854275?ls=1&app=music&at=11lEW&ct=fjyhcc",
        stream_soundcloud: "https://soundcloud.com/bigwild/hundred-waters-show-me-love-big-wild-remix",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "",
        download_itunes: "https://itunes.apple.com/us/album/show-me-feat-hundred-waters-single/id1288854275?ls=1&app=itunes",
        download_beatport: "https://www.beatport.com/release/show-me/2129268",
        download_amazon: "https://www.amazon.com/Show-Wild-feat-Hundred-Waters/dp/B07671FQ4H/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1507556686&sr=1-1-mp3-albums-bar-strip-0&keywords=show+me+big+wild&tag=smarturl-20",
        download_googleplay: "https://play.google.com/store/music/album?id=Bs2br4unqradd5hgntqakxp2uyu&tid=song-T4dkrx6f76esuf4hbg34exq33aq&hl=en",
      }, 

      FFC018: {
        stream_spotify: "https://open.spotify.com/track/4fvIyN0CH6uZm4A7YnKHq7",
        stream_itunes: "https://itunes.apple.com/us/album/someone-else-feat-savoi/id1265533790?i=1265533794",
        stream_soundcloud: "https://soundcloud.com/yahtzel/someone-else-feat-savoi",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/watch?v=lc0eMRilfHA",
        download_itunes: "https://itunes.apple.com/us/album/someone-else-feat-savoi-single/id1265533790?ls=1&app=itunes",
        download_beatport: "https://www.beatport.com/release/someone-else/2080630",
        download_amazon: "https://www.amazon.com/Someone-Else-Yahtzel-feat-Savoi/dp/B074BCT14S/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1503498271&sr=1-1-mp3-albums-bar-strip-0&keywords=someone+else+yahtzel&tag=smarturl-20",
        download_googleplay: "https://play.google.com/store/music/album/Yahtzel_Someone_Else?id=Bxqtf2io4l7txzb4jvia5akztoy&hl=en",
      }, 

      FFC017: {
        stream_spotify: "https://open.spotify.com/album/0IQn4dKzcsFw1N0Xne5R6x",
        stream_itunes: "http://foreignf.am/invincible-ep-apple",
        stream_soundcloud: "http://foreignf.am/invincible-ep-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/playlist?list=PLMQF6QOeS0W_lR47eSgA08rDEUy6CzxBT",
        download_itunes: "http://foreignf.am/invincible-ep-itunes",
        download_beatport: "http://foreignf.am/invincible-ep-beatport",
        download_amazon: "http://foreignf.am/invincible-ep-amazon",
        download_googleplay: "http://foreignf.am/invincible-ep-google",
      },

      FFC014: {
        stream_spotify: "https://open.spotify.com/album/1dllmGKwnEnj7mCPW1APlD",
        stream_itunes: "http://foreignf.am/wolfie-funeral-apple",
        stream_soundcloud: "http://foreignf.am/wolfie-funeral-sc",
        stream_deezer: "https://www.deezer.com/",
        stream_youtube: "https://www.youtube.com/watch?v=MgYpY76Cejw",
        download_itunes: "http://foreignf.am/wolfie-funeral-itunes",
        download_beatport: "http://foreignf.am/wolfie-funeral-beatport",
        download_amazon: "http://foreignf.am/wolfie-funeral-amazon",
        download_googleplay: "http://foreignf.am/wolfie-funeral-google",
      },

      FFC013: {
        stream_spotify: "https://open.spotify.com/album/1dllmGKwnEnj7mCPW1APlD",
        stream_itunes: "http://foreignf.am/offoffoff-apple",
        stream_soundcloud: "http://foreignf.am/offoffoff-sc",
        stream_deezer: "https://www.deezer.com/album/14230788",
        stream_youtube: "https://www.youtube.com/watch?v=1Py1uROG1qs",
        download_itunes: "http://foreignf.am/offoffoff-itunes",
        download_beatport: "http://foreignf.am/offoffoff-beatport",
        download_amazon: "http://foreignf.am/offoffoff-amazon",
        download_googleplay: "http://foreignf.am/offoffoff-google",
      },

      FFC012: {
        stream_spotify: "https://open.spotify.com/album/2GHYm7xV9KEhNgeCXY4KsE",
        stream_itunes: "http://foreignf.am/invincible-apple",
        stream_soundcloud: "http://foreignf.am/invincible-sc",
        stream_deezer: "http://www.deezer.com/album/14788755",
        stream_youtube: "https://www.youtube.com/watch?v=ufOOrt3gTtY",
        download_itunes: "http://foreignf.am/invincible-itunes",
        download_beatport: "http://foreignf.am/invincible-beatport",
        download_amazon: "http://foreignf.am/invincible-amazon",
        download_googleplay: "http://foreignf.am/invincible-google",
      },

      FFC011: {
        stream_spotify: "https://open.spotify.com/album/0EpvOJWX82nFsll8xfOow5",
        stream_itunes: "http://foreignf.am/stay-apple",
        stream_soundcloud: "http://foreignf.am/stay-sc",
        stream_deezer: "http://www.deezer.com/album/13815132",
        stream_youtube: "https://www.youtube.com/watch?v=uLYzTMb7P04",
        download_itunes: "http://foreignf.am/stay-itunes",
        download_beatport: "http://foreignf.am/stay-beatport",
        download_amazon: "http://foreignf.am/stay-amazon",
        download_googleplay: "http://foreignf.am/stay-google",
      },

      FFC010: {
        stream_spotify: "https://open.spotify.com/album/5Ojm8NrCwdEI2cWVMArA60",
        stream_itunes: "http://foreignf.am/drive-apple",
        stream_soundcloud: "http://foreignf.am/drive-sc",
        stream_deezer: "https://www.deezer.com/artist/6666336",
        stream_youtube: "https://www.youtube.com/watch?v=eW8u_epFVlY",
        download_itunes: "http://foreignf.am/drive-itunes",
        download_beatport: "http://foreignf.am/drive-beatport",
        download_amazon: "http://foreignf.am/drive-amazon",
        download_googleplay: "http://foreignf.am/drive-google",
      },                          

      FFC009: {
        stream_spotify: "http://foreignf.am/bw-ts-aftergold-spotify",
        stream_itunes: "http://foreignf.am/bw-ts-aftergold-apple",
        stream_soundcloud: "http://foreignf.am/big-wild-aftergold-sc",
        stream_deezer: "https://www.deezer.com/track/120740710",
        stream_youtube: "https://www.youtube.com/watch?v=71GmDRcQqog",
        download_itunes: "http://foreignf.am/bw-ts-aftergold-itunes",
        download_beatport: "http://foreignf.am/bw-ts-aftergold-beatport",
        download_amazon: "http://foreignf.am/bw-ts-aftergold-amazon",
        download_googleplay: "http://foreignf.am/bw-ts-aftergold-google",
      },                          

      FFC008: {
        stream_spotify: "https://open.spotify.com/album/0zpBqmibTypYQok5jd0ahu",
        stream_itunes: "http://foreignf.am/woy-beats",
        stream_soundcloud: "http://foreignf.am/woy-sc",
        stream_deezer: "https://www.deezer.com/album/12273792",
        stream_youtube: "https://www.youtube.com/watch?v=MDG1mg7bngo",
        download_itunes: "http://foreignf.am/woy-itunes",
        download_beatport: "http://foreignf.am/woy-beatport",
        download_amazon: "http://foreignf.am/woy-amazon",
        download_googleplay: "http://foreignf.am/woy-google",
      },            

      FFC007: {
        stream_spotify: "http://foreignf.am/bloom-spotify",
        stream_itunes: "http://foreignf.am/bloom-beats",
        stream_soundcloud: "http://foreignf.am/bloom-sc",
        stream_deezer: "https://www.deezer.com/album/13258679",
        stream_youtube: "https://www.youtube.com/playlist?list=PLMQF6QOeS0W9aPX3Divlx5gfDR2MIJceT",
        download_itunes: "http://foreignf.am/bloom-itunes",
        download_beatport: "http://foreignf.am/bloom-beatport",
        download_amazon: "http://foreignf.am/bloom-amazon",
        download_googleplay: "http://foreignf.am/bloom-google",
      },            

      FFC006: {
        stream_spotify: "https://open.spotify.com/album/13hd6seavBU9PCZt19Jzrl",
        stream_itunes: "http://foreignf.am/sapfm-beats",
        stream_soundcloud: "http://foreignf.am/sapfm-sc",
        stream_deezer: "https://www.deezer.com/artist/5501574",
        stream_youtube: "https://www.youtube.com/watch?v=iUkXe0bRjsg",
        download_itunes: "http://foreignf.am/bloom-itunes",
        download_beatport: "http://foreignf.am/sapfm-beatport",
        download_amazon: "https://www.amazon.com/Say-Prayer-Me-R%C3%9CF%C3%9CS-SOL/dp/B01APVX1JK/ref=sr_1_1?s=dmusic&ie=UTF8&qid=1487102945&sr=1-1-mp3-albums-bar-strip-0&keywords=say+a+prayer+for+me+rufus+du+sol",
        download_googleplay: "http://foreignf.am/sapfm-google",
      },

      FFC005: {
        stream_spotify: "https://open.spotify.com/album/6GNoIyABRVTyQiRqkV26at",
        stream_itunes: "https://itun.es/us/2ask-?i=1042882615",
        stream_soundcloud: "http://foreignf.am/world-away-sc",
        stream_deezer: "https://www.deezer.com/album/11276080",
        stream_youtube: "https://www.youtube.com/watch?v=sFqHaH1Ujrs",
        download_itunes: "http://foreignf.am/world-away-itunes",
        download_beatport: "http://foreignf.am/world-away-beatport",
        download_amazon: "http://foreignf.am/world-away-amazon",
        download_googleplay: "http://foreignf.am/world-away-google",
      },

      FFC004: {
        stream_spotify: "https://open.spotify.com/album/5CdLfTg6XMqkAB3VvnQvVH",
        stream_itunes: "https://itun.es/us/OZiQ8?i=1017679083",
        stream_soundcloud: "http://foreignf.am/glider-sc",
        stream_deezer: "https://www.deezer.com/artist/5256519",
        stream_youtube: "https://www.youtube.com/watch?v=GChWL4_hCtk",
        download_itunes: "http://foreignf.am/glider-itunes",
        download_beatport: "http://foreignf.am/glider-beatport",
        download_amazon: "http://foreignf.am/glider-amazon",
        download_googleplay: "http://foreignf.am/glider-google",
      },     

      FFC003: {
        stream_spotify: "https://open.spotify.com/album/2afNG92zO2m0WT1FvU8PvA",
        stream_itunes: "https://itun.es/us/aXgL7?i=999582847",
        stream_soundcloud: "http://foreignf.am/indian-summer-sc",
        stream_deezer: "https://www.deezer.com/album/12499432",
        stream_youtube: "https://www.youtube.com/watch?v=Zrhj8vwyEp8",
        download_itunes: "http://foreignf.am/indiansummer-itunes",
        download_beatport: "http://foreignf.am/indiansummer-beatport",
        download_amazon: "http://foreignf.am/indiansummer-amazon",
        download_googleplay: "http://foreignf.am/indiansummer-google",
      }, 

      FFC002: {
        stream_spotify: "https://open.spotify.com/album/0UNXK41aoqUDhSayFVKchE",
        stream_itunes: "https://itun.es/us/fEk_ab?i=1090300307",
        stream_soundcloud: "http://foreignf.am/aftergold-sc",
        stream_deezer: "https://www.deezer.com/album/12555830",
        stream_youtube: "https://youtu.be/EiC64FbbaTc",
        download_itunes: "http://foreignf.am/aftergold-itunes",
        download_beatport: "https://pro.beatport.com/release/aftergold/1510881",
        download_amazon: "http://www.amazon.com/Aftergold-Big-Wild/dp/B00VR4VHMI",
        download_googleplay: "https://play.google.com/store/music/album?id=Biwcnszpttxo4lsu7dwcndcqnqu&tid=song-T4fz3yq7rtuu6a6ejblqj3rwabu&hl=en",
      },     

      FFC001: {
        stream_spotify: "https://open.spotify.com/album/1bcd3OO9M0ZIall1gLbhVJ",
        stream_itunes: "https://itun.es/us/VOB_5?i=972929648",
        stream_soundcloud: "http://foreignf.am/fiend-sc",
        stream_deezer: "https://www.deezer.com/album/9780654",
        stream_youtube: "https://youtu.be/N5ya493uK30",
        download_itunes: "http://foreignf.am/fiend-itunes",
        download_beatport: "http://foreignf.am/fiend-beatport",
        download_amazon: "http://foreignf.am/fiend-amazon",
        download_googleplay: "http://foreignf.am/fiend-google",
      },

    };

    start();
    function start() {
      fill_featured_links();
      hide_popups();
      detect_stream_hover();
      detect_download_hover();
      hide_on_scroll();
    }

    function hide_on_scroll() {
      $(window).scroll(hide_popups);
    }

    /*NEW*/

    function fill_featured_links() {
      setTimeout(function(){
        console.log('first function');
        var local_sid = $('.summary-title .sid').first().text();
        var l = links[local_sid];

        if (l) {
          console.log('first if');
          if (l.stream_spotify) {
            console.log('second if');
            $('#f-stream-spotify').attr('href', l.stream_spotify);
            console.log('third if');
          }
          else $('#f-stream-spotify').hide();
          if (l.stream_itunes) 
            $('#f-stream-itunes').attr('href', l.stream_itunes);
          else $('#f-stream-itunes').hide();
          if (l.stream_soundcloud) 
            $('#f-stream-soundcloud').attr('href', l.stream_soundcloud);
          else $('#f-stream-soundcloud').hide();
          if (l.stream_deezer) 
            $('#f-stream-deezer').attr('href', l.stream_deezer);
          else $('#f-stream-deezer').hide();
          if (l.stream_youtube) 
            $('#f-stream-youtube').attr('href', l.stream_youtube);
          else $('#f-stream-youtube').hide();
          if (l.download_itunes) 
            $('#f-download-itunes').attr('href', l.download_itunes);
          else $('#f-download-itunes').hide();
          if (l.download_beatport) 
            $('#f-download-beatport').attr('href', l.download_beatport);
          else $('#f-download-beatport').hide();
          if (l.download_amazon) 
            $('#f-download-amazon').attr('href', l.download_amazon);
          else $('#f-download-amazon').hide();
          if (l.download_googleplay) 
            $('#f-download-googleplay').attr('href', l.download_googleplay);
          else $('#f-download-googleplay').hide();
        }
        else {
          $('#f-stream-spotify').hide();
          $('#f-stream-itunes').hide();
          $('#f-stream-soundcloud').hide();
          $('#f-stream-deezer').hide();
          $('#f-stream-youtube').hide();
          $('#f-download-itunes').hide();
          $('#f-download-beatport').hide();
          $('#f-download-amazon').hide();
          $('#f-download-googleplay').hide();
        }
      },1000)
    }

    function hide_popups() {
      $('#sst-stream-popup, #sst-download-popup').hide();
    }

    function detect_stream_hover() {
      $('.stream-button').mouseenter(show_stream_popup);
    }

    function show_stream_popup() {
      $('#sst-download-popup').hide();

      var is_mouse_leave_text = false;
      var is_mouse_leave_popup = true;
      $('#sst-stream-popup .popup-icon').show();
      var local_sid = $(this).attr('data-sid');
      var sl = links[local_sid];
      var n = 0;

      if (sl) {
        if (sl.stream_spotify) {
          $('#stream-spotify').attr('href', sl.stream_spotify);
          n++;
        }
        else $('#stream-spotify').hide();
        if (sl.stream_itunes) {
          $('#stream-itunes').attr('href', sl.stream_itunes);
          n++;
        }
        else $('#stream-itunes').hide();
        if (sl.stream_soundcloud) {
          $('#stream-soundcloud').attr('href', sl.stream_soundcloud);
          n++;
        }
        else $('#stream-soundcloud').hide();
        if (sl.stream_deezer) {
          $('#stream-deezer').attr('href', sl.stream_deezer);
          n++;
        }
        else $('#stream-deezer').hide();
        if (sl.stream_youtube) {
          $('#stream-youtube').attr('href', sl.stream_youtube);
          n++;
        }
        else $('#stream-youtube').hide();
      }
      else {
        $('#stream-spotify').hide();
        $('#stream-itunes').hide();
        $('#stream-soundcloud').hide();
        $('#stream-deezer').hide();
        $('#stream-youtube').hide();
      }

      // get popup position
      var left = $(this).offset().left;
      var top = $(this).offset().top + $(this).height();
      var popup_width = 20 + (36*n);
      if (left + popup_width > $(window).width())
        left = left + $(this).width() - popup_width;
      $('#sst-stream-popup').css({
        left: left + 'px',
        top: top + 'px',
      });

      $('#sst-stream-popup').show();

      $(this).mouseenter(function() {
        is_mouse_leave_text = false;
      });
      $('#sst-stream-popup').mouseenter(function() {
        is_mouse_leave_popup = false;
      });
      $(this).mouseleave(function() {
        is_mouse_leave_text = true;
        setTimeout(function() {
          if (is_mouse_leave_popup) hide_stream_popup();
        }, 100);
      });
      $('#sst-stream-popup').mouseleave(function() {
        is_mouse_leave_popup = true;
        setTimeout(function() {
          if (is_mouse_leave_text) hide_stream_popup();
        }, 100);
      });
    }

    function hide_stream_popup() {
      $('#sst-stream-popup').hide();
    }



    function detect_download_hover() {
      $('.download-button').mouseenter(show_download_popup);
    }

    function show_download_popup() {
      $('#sst-stream-popup').hide();

      var is_mouse_leave_text = false;
      var is_mouse_leave_popup = true;
      $('#sst-download-popup .popup-icon').show();
      var local_sid = $(this).attr('data-sid');
      var dl = links[local_sid];
      var n = 0;

      if (dl) {
        if (dl.download_itunes) {
          $('#download-itunes').attr('href', dl.download_itunes);
          n++;
        }
        else $('#download-itunes').hide();
        if (dl.download_beatport) {
          $('#download-beatport').attr('href', dl.download_beatport);
          n++;
        }
        else $('#download-beatport').hide();
        if (dl.download_amazon) {
          $('#download-amazon').attr('href', dl.download_amazon);
          n++;
        }
        else $('#download-amazon').hide();
        if (dl.download_googleplay) {
          $('#download-googleplay').attr('href', dl.download_googleplay);
          n++;
        }
        else $('#download-googleplay').hide();
      }
      else {
        $('#download-itunes').hide();
        $('#download-beatport').hide();
        $('#download-amazon').hide();
        $('#download-googleplay').hide();
      }

      // get popup position
      var left = $(this).offset().left;
      var top = $(this).offset().top + $(this).height();
      var popup_width = 20 + (36*n);
      if (left + popup_width > $(window).width())
        left = left + $(this).width() - popup_width;
      $('#sst-download-popup').css({
        left: left + 'px',
        top: top + 'px',
      });

      $('#sst-download-popup').show();

      $(this).mouseenter(function() {
        is_mouse_leave_text = false;
      });
      $('#sst-download-popup').mouseenter(function() {
        is_mouse_leave_popup = false;
      });
      $(this).mouseleave(function() {
        is_mouse_leave_text = true;
        setTimeout(function() {
          if (is_mouse_leave_popup) hide_download_popup();
        }, 100);
      });
      $('#sst-download-popup').mouseleave(function() {
        is_mouse_leave_popup = true;
        setTimeout(function() {
          if (is_mouse_leave_text) hide_download_popup();
        }, 100);
      });
    }

    function hide_download_popup() {
      $('#sst-download-popup').hide();
    }


  });
</script></div></div><div class="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_30_1484584209303_31516"><div class="sqs-block-content"><hr /></div></div><div class="sqs-block summary-v2-block sqs-block-summary-v2" data-block-json="&#123;&quot;hSize&quot;:null,&quot;floatDir&quot;:null,&quot;collectionId&quot;:&quot;587cf45ed1758e3cef0e1351&quot;,&quot;design&quot;:&quot;autogrid&quot;,&quot;headerText&quot;:&quot;Featured&quot;,&quot;textSize&quot;:&quot;medium&quot;,&quot;pageSize&quot;:1,&quot;imageAspectRatio&quot;:&quot;1&quot;,&quot;columnWidth&quot;:400,&quot;gutter&quot;:0,&quot;listImageSize&quot;:30,&quot;listImageAlignment&quot;:&quot;left&quot;,&quot;slidesPerRow&quot;:3,&quot;textAlignment&quot;:&quot;left&quot;,&quot;showTitle&quot;:true,&quot;showThumbnail&quot;:true,&quot;showExcerpt&quot;:true,&quot;showReadMoreLink&quot;:false,&quot;showPrice&quot;:true,&quot;productQuickViewEnabled&quot;:false,&quot;showPastOrUpcomingEvents&quot;:&quot;Upcoming&quot;,&quot;metadataPosition&quot;:&quot;below-content&quot;,&quot;primaryMetadata&quot;:&quot;none&quot;,&quot;secondaryMetadata&quot;:&quot;none&quot;,&quot;filter&quot;:&#123;&quot;featured&quot;:false&#125;,&quot;autoCrop&quot;:true,&quot;lightbox&quot;:true,&quot;mixedContent&quot;:true,&quot;blockId&quot;:&quot;be14eb1078db1cccae2f&quot;&#125;" data-block-type="55" id="block-yui_3_17_2_26_1484584209303_18904"><div class="sqs-block-content">

<div class="
  summary-block-wrapper

  summary-block-collection-type-gallery
  
  summary-block-setting-text-size-medium
  summary-block-setting-text-align-left

  summary-block-setting-design-autogrid
  summary-block-setting-design-list-thumbnail-left

  summary-block-setting-metadata-position-below-content
  summary-block-setting-primary-metadata-none
  summary-block-setting-secondary-metadata-none

  summary-block-setting-show-thumbnail
  summary-block-setting-show-title
  summary-block-setting-show-price
  summary-block-setting-show-excerpt
  

  

  sqs-gallery-design-autogrid

  
  "

  
>

  <div class="summary-item-list-container sqs-gallery-container">

    <header class="summary-block-header">

      <!-- Collection Title -->
      <div class="summary-heading">
        
          <span class="summary-header-text">Featured</span>
        
      </div>

      <!-- Carousel Nav -->
      <div class="summary-carousel-pager sqs-gallery-controls">
        <span class="summary-carousel-pager-next next"></span>
        <span class="summary-carousel-pager-prev previous"></span>
      </div>

    </header>

    <div class="summary-item-list sqs-gallery">

      

        <div class="
          summary-item
          summary-item-record-type-image
          sqs-gallery-design-autogrid-slide
          
           summary-item-has-thumbnail
           summary-item-has-excerpt
          
          
          summary-item-has-author
          
          "
          >

          
            <!-- Thumbnail -->
            

  
  <div class="summary-thumbnail-outer-container">
    <a href="/music-gallery/2018/11/16/uora5ka2lpwram5elgpxc4w3uax9au" class="summary-thumbnail-container sqs-gallery-image-container" data-title="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC040&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;FORD. - '(THE) EVENING'&amp;lt;/p&amp;gt;" data-description="&lt;p&gt;THE DEBUT LP FROM FORD. IS OUT NOW&lt;/p&gt;&lt;p&gt;&lt;/p&gt;">
      <div class="summary-thumbnail img-wrapper">
  

    

        <!-- Main Image -->
        <img data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bef3cad4d7a9c258101e51c/1542405472164/Ford+The+Evening+LP+Final.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bef3cad4d7a9c258101e51c/1542405472164/Ford+The+Evening+LP+Final.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC040&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;FORD. - '(THE) EVENING'&amp;lt;/p&amp;gt;"  data-load="false" class="summary-thumbnail-image"/>

    

    

        

        

      </div>
    </a>

    <!-- Products: Quick View -->
    

  </div>
  



          

          <div class="summary-content sqs-gallery-meta-container">

            <!-- Metadata (Above Title) -->
            <div class="summary-metadata-container summary-metadata-container--above-title">
                          
              <div class="summary-metadata summary-metadata--primary">

	











</div>
              
              <div class="summary-metadata summary-metadata--secondary">

	











</div>
            </div>

            
              <!-- Title -->
              <div class="summary-title">
                <a 
                
                  
                    href="/music-gallery/2018/11/16/uora5ka2lpwram5elgpxc4w3uax9au"
                  
                
                class="summary-title-link">&lt;p class="sid"&gt;FFC040&lt;/p&gt;&lt;p&gt;FORD. - '(THE) EVENING'&lt;/p&gt;</a></div>
            

            <!-- Metadata (Below Title) -->
            <div class="summary-metadata-container summary-metadata-container--below-title">
            
              <div class="summary-metadata summary-metadata--primary">

	











</div>
              
              <div class="summary-metadata summary-metadata--secondary">

	











</div>
            </div>

            
              
            
            
            
              

              
              <!--- Gallery: Caption Description -->
                <div class="summary-excerpt"><p>THE DEBUT LP FROM FORD. IS OUT NOW</p><p></p></div>
              

              
            

            <!-- Metadata (Below Content) -->
            <div class="summary-metadata-container summary-metadata-container--below-content">
              
              <div class="summary-metadata summary-metadata--primary">

	











</div>
              
              <div class="summary-metadata summary-metadata--secondary">

	











</div>
            </div>

          </div> <!-- End .summary-content -->

        </div> <!-- End .summary-item -->

      

    </div> <!-- End .summary-item-list -->

  </div> <!-- End .summary-item-list-container -->

</div></div></div><div class="sqs-block gallery-block sqs-block-gallery" data-block-json="&#123;&quot;hSize&quot;:null,&quot;floatDir&quot;:null,&quot;methodOption&quot;:&quot;existing&quot;,&quot;existingGallery&quot;:&quot;587cf45ed1758e3cef0e1351&quot;,&quot;newWindow&quot;:false,&quot;aspect-ratio&quot;:&quot;square&quot;,&quot;aspectRatio&quot;:null,&quot;auto-crop&quot;:true,&quot;collectionId&quot;:&quot;587cf45ed1758e3cef0e1351&quot;,&quot;design&quot;:&quot;grid&quot;,&quot;existingGalleryId&quot;:&quot;587cf45ed1758e3cef0e1351&quot;,&quot;lightbox&quot;:false,&quot;padding&quot;:40,&quot;show-meta&quot;:true,&quot;show-meta-basic&quot;:true,&quot;show-meta-only-title&quot;:true,&quot;show-meta-only-description&quot;:false,&quot;square-thumbs&quot;:true,&quot;thumbnails-per-row&quot;:4,&quot;vSize&quot;:null&#125;" data-block-type="8" id="block-yui_3_17_2_26_1484584209303_6352"><div class="sqs-block-content">



  

  


<div class="
  sqs-gallery-container
  sqs-gallery-block-grid
  sqs-gallery-aspect-ratio-square
  sqs-gallery-thumbnails-per-row-4
  
  

  
    
    
  
  sqs-gallery-block-show-meta
  
  sqs-gallery-block-meta-only-title

  
  

  

  clear"
  
  
>
  <div class="sqs-gallery">
    
      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bef3cad4d7a9c258101e51c/1542405472164/Ford+The+Evening+LP+Final.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC040&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;FORD. - '(THE) EVENING'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC040&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;FORD. - '(THE) EVENING'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bef3cad4d7a9c258101e51c/1542405472164/Ford+The+Evening+LP+Final.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bef3cad4d7a9c258101e51c/1542405472164/Ford+The+Evening+LP+Final.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bef3cad4d7a9c258101e51c" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC040&lt;/p&gt;&lt;p&gt;FORD. - '(THE) EVENING'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bdb3a140ebbe8a5aa27eeba/1542374187519/Crash_cover_art_1440.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC039&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;MAI.LA - &quot;CRASH&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC039&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;MAI.LA - &quot;CRASH&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bdb3a140ebbe8a5aa27eeba/1542374187519/Crash_cover_art_1440.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bdb3a140ebbe8a5aa27eeba/1542374187519/Crash_cover_art_1440.jpg" data-image-dimensions="1440x1440" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bdb3a140ebbe8a5aa27eeba" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC039&lt;/p&gt;&lt;p&gt;MAI.LA - "CRASH"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bd2629c24a694f490c7b5f5/1540946938132/RT_FINAL.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC038&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RUNNING TOUCH - &quot;My Hands&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC038&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RUNNING TOUCH - &quot;My Hands&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bd2629c24a694f490c7b5f5/1540946938132/RT_FINAL.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bd2629c24a694f490c7b5f5/1540946938132/RT_FINAL.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bd2629c24a694f490c7b5f5" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC038&lt;/p&gt;&lt;p&gt;RUNNING TOUCH - "My Hands"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b3b5c830254e00397ba2/1540947140386/Mild-Minds_Swim-EP_Cover_3000.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC037&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;MILD MINDS - 'SWIM EP'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC037&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;MILD MINDS - 'SWIM EP'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b3b5c830254e00397ba2/1540947140386/Mild-Minds_Swim-EP_Cover_3000.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b3b5c830254e00397ba2/1540947140386/Mild-Minds_Swim-EP_Cover_3000.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bb7b3b5c830254e00397ba2" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC037&lt;/p&gt;&lt;p&gt;MILD MINDS - 'SWIM EP'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b2c1e4966b36edb80600/1540389103402/LOYAL_Final.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC036&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;ODESZA - 'LOYAL'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC036&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;ODESZA - 'LOYAL'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b2c1e4966b36edb80600/1540389103402/LOYAL_Final.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b2c1e4966b36edb80600/1540389103402/LOYAL_Final.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bb7b2c1e4966b36edb80600" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC036&lt;/p&gt;&lt;p&gt;ODESZA - 'LOYAL'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b246b208fc9168b00ffa/1540389092345/ford_Craving-Dust_Cover-art_3000.jpeg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC035&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;ford. - 'Craving / Dusk'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC035&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;ford. - 'Craving / Dusk'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b246b208fc9168b00ffa/1540389092345/ford_Craving-Dust_Cover-art_3000.jpeg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5bb7b246b208fc9168b00ffa/1540389092345/ford_Craving-Dust_Cover-art_3000.jpeg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5bb7b246b208fc9168b00ffa" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC035&lt;/p&gt;&lt;p&gt;ford. - 'Craving / Dusk'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b765e554ae237e0a20105bf/1541094002606/pluko-sixteen-cover-3000.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC034&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - 'SIXTEEN'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC034&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - 'SIXTEEN'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b765e554ae237e0a20105bf/1541094002606/pluko-sixteen-cover-3000.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b765e554ae237e0a20105bf/1541094002606/pluko-sixteen-cover-3000.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5b765e554ae237e0a20105bf" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC034&lt;/p&gt;&lt;p&gt;PLUKO - 'SIXTEEN'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b608f5503ce64a12d0cc744/1540946201319/pluko-sixteen-cover-3000.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC033&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - L O V E&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC033&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - L O V E&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b608f5503ce64a12d0cc744/1540946201319/pluko-sixteen-cover-3000.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b608f5503ce64a12d0cc744/1540946201319/pluko-sixteen-cover-3000.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5b608f5503ce64a12d0cc744" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC033&lt;/p&gt;&lt;p&gt;PLUKO - L O V E&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b294035575d1fb17b453d59/1542374159967/IDLYF-FINAL-COVER_3000.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC032&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;EVAN GIIA - &quot;I DON'T LIKE UR FRIENDS&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC032&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;EVAN GIIA - &quot;I DON'T LIKE UR FRIENDS&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b294035575d1fb17b453d59/1542374159967/IDLYF-FINAL-COVER_3000.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b294035575d1fb17b453d59/1542374159967/IDLYF-FINAL-COVER_3000.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5b294035575d1fb17b453d59" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC032&lt;/p&gt;&lt;p&gt;EVAN GIIA - "I DON'T LIKE UR FRIENDS"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b1a1e92352f538f30907506/1542405406436/PLKO_Single-2_Final_3000.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC031&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - 'need ya / pink.'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC031&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;PLUKO - 'need ya / pink.'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b1a1e92352f538f30907506/1542405406436/PLKO_Single-2_Final_3000.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b1a1e92352f538f30907506/1542405406436/PLKO_Single-2_Final_3000.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5b1a1e92352f538f30907506" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC031&lt;/p&gt;&lt;p&gt;PLUKO - 'need ya / pink.'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b05d86e88251b0f2123539d/1542405406257/Big-Wild_Ascension_FINAL.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC030&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Big Wild - &quot;Ascension&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC030&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Big Wild - &quot;Ascension&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b05d86e88251b0f2123539d/1542405406257/Big-Wild_Ascension_FINAL.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5b05d86e88251b0f2123539d/1542405406257/Big-Wild_Ascension_FINAL.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5b05d86e88251b0f2123539d" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC030&lt;/p&gt;&lt;p&gt;Big Wild - "Ascension"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae374958a922dba9d12261f/1542405406225/FFC029_PLUKO_Asleep.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC029&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;pluko - &quot;asleep (feat. MOONZz)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC029&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;pluko - &quot;asleep (feat. MOONZz)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae374958a922dba9d12261f/1542405406225/FFC029_PLUKO_Asleep.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae374958a922dba9d12261f/1542405406225/FFC029_PLUKO_Asleep.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5ae374958a922dba9d12261f" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC029&lt;/p&gt;&lt;p&gt;pluko - "asleep (feat. MOONZz)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae35bca2b6a2837317560d9/1542405406177/a0003322898_10.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC028&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Kasbo - 'Places We Don't Know' &amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC028&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Kasbo - 'Places We Don't Know' &amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae35bca2b6a2837317560d9/1542405406177/a0003322898_10.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5ae35bca2b6a2837317560d9/1542405406177/a0003322898_10.jpg" data-image-dimensions="1200x1200" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5ae35bca2b6a2837317560d9" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC028&lt;/p&gt;&lt;p&gt;Kasbo - 'Places We Don't Know' &lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5aa8095171c10b9167173e76/1542405406203/OverYouFinal_Web.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC027&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Kasbo - &quot;Over You (feat. Frida Sundemo)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC027&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;Kasbo - &quot;Over You (feat. Frida Sundemo)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5aa8095171c10b9167173e76/1542405406203/OverYouFinal_Web.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5aa8095171c10b9167173e76/1542405406203/OverYouFinal_Web.jpg" data-image-dimensions="1200x1200" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5aa8095171c10b9167173e76" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC027&lt;/p&gt;&lt;p&gt;Kasbo - "Over You (feat. Frida Sundemo)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a9e50ba71c10b81e42758cf/1542405406176/EvanGiia_Westworld_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC026&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;EVAN GIIA - &quot;WESTWORLD&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC026&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;EVAN GIIA - &quot;WESTWORLD&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a9e50ba71c10b81e42758cf/1542405406176/EvanGiia_Westworld_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a9e50ba71c10b81e42758cf/1542405406176/EvanGiia_Westworld_1600.jpg" data-image-dimensions="1600x1600" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a9e50ba71c10b81e42758cf" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC026&lt;/p&gt;&lt;p&gt;EVAN GIIA - "WESTWORLD"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a831dbc24a6941873484055/1542405406184/YourTempoFinal_Web.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC025&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Your Tempo&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC025&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Your Tempo&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a831dbc24a6941873484055/1542405406184/YourTempoFinal_Web.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a831dbc24a6941873484055/1542405406184/YourTempoFinal_Web.jpg" data-image-dimensions="1200x1200" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a831dbc24a6941873484055" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC025&lt;/p&gt;&lt;p&gt;KASBO - "Your Tempo"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a679051652deabc92e804ef/1542405406175/FFC024_White-Cliffs_Heart-Start_On-Call_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC024&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;WHITE CLIFFS - 'Heart Start / On Call'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC024&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;WHITE CLIFFS - 'Heart Start / On Call'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a679051652deabc92e804ef/1542405406175/FFC024_White-Cliffs_Heart-Start_On-Call_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a679051652deabc92e804ef/1542405406175/FFC024_White-Cliffs_Heart-Start_On-Call_1600.jpg" data-image-dimensions="1600x1600" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a679051652deabc92e804ef" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC024&lt;/p&gt;&lt;p&gt;WHITE CLIFFS - 'Heart Start / On Call'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a60e46608522995442931d8/1542405406389/AldrigMerFinal_web_preview.jpeg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC023&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Aldrig Mer (feat. TENDER)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC023&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Aldrig Mer (feat. TENDER)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a60e46608522995442931d8/1542405406389/AldrigMerFinal_web_preview.jpeg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a60e46608522995442931d8/1542405406389/AldrigMerFinal_web_preview.jpeg" data-image-dimensions="1200x1200" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a60e46608522995442931d8" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC023&lt;/p&gt;&lt;p&gt;KASBO - "Aldrig Mer (feat. TENDER)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a2ffbdc8165f5f9bf7b5a74/1542405406384/FFC022_SnowInGothenburg_800.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC022&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Snow In Gothenburg&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC022&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Snow In Gothenburg&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a2ffbdc8165f5f9bf7b5a74/1542405406384/FFC022_SnowInGothenburg_800.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a2ffbdc8165f5f9bf7b5a74/1542405406384/FFC022_SnowInGothenburg_800.jpg" data-image-dimensions="800x800" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a2ffbdc8165f5f9bf7b5a74" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC022&lt;/p&gt;&lt;p&gt;KASBO - "Snow In Gothenburg"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a0da8d5ec212d0e7effbb35/1542405406452/FFC021_Louis-Futon-Restless_Sea_1440.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC021&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;LOUIS FUTON - &quot;Restless Sea (feat. Opia)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC021&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;LOUIS FUTON - &quot;Restless Sea (feat. Opia)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a0da8d5ec212d0e7effbb35/1542405406452/FFC021_Louis-Futon-Restless_Sea_1440.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5a0da8d5ec212d0e7effbb35/1542405406452/FFC021_Louis-Futon-Restless_Sea_1440.jpg" data-image-dimensions="1440x1440" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5a0da8d5ec212d0e7effbb35" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC021&lt;/p&gt;&lt;p&gt;LOUIS FUTON - "Restless Sea (feat. Opia)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59f1fc6ee9bfdff97984540b/1542405406410/BleedItOutFinal.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC020&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Bleed It Out (feat. Nea)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC020&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;Bleed It Out (feat. Nea)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59f1fc6ee9bfdff97984540b/1542405406410/BleedItOutFinal.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59f1fc6ee9bfdff97984540b/1542405406410/BleedItOutFinal.jpg" data-image-dimensions="2500x2500" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="59f1fc6ee9bfdff97984540b" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC020&lt;/p&gt;&lt;p&gt;KASBO - "Bleed It Out (feat. Nea)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59db80a0edaed846531ef64d/1542405406424/Big+Wild_Show+Me+Cover_800.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt; FFC019&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Show Me (feat. Hundred Waters)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt; FFC019&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Show Me (feat. Hundred Waters)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59db80a0edaed846531ef64d/1542405406424/Big+Wild_Show+Me+Cover_800.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/59db80a0edaed846531ef64d/1542405406424/Big+Wild_Show+Me+Cover_800.jpg" data-image-dimensions="800x800" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="59db80a0edaed846531ef64d" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt; FFC019&lt;/p&gt;&lt;p&gt;BIG WILD - "Show Me (feat. Hundred Waters)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/599da22fccc5c5ac9997d73e/1542405406471/FFC018_Yahtzel+Cover_800.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC018&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;YAHTZEL - &quot;Someone Else (feat. Savoi)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC018&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;YAHTZEL - &quot;Someone Else (feat. Savoi)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/599da22fccc5c5ac9997d73e/1542405406471/FFC018_Yahtzel+Cover_800.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/599da22fccc5c5ac9997d73e/1542405406471/FFC018_Yahtzel+Cover_800.jpg" data-image-dimensions="800x800" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="599da22fccc5c5ac9997d73e" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC018&lt;/p&gt;&lt;p&gt;YAHTZEL - "Someone Else (feat. Savoi)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f94bbf629a210801adee/1542405406584/BigWild_Invincible+EP_1440.JPG"  alt=" &amp;lt;p class=&quot;sid&quot;&amp;gt;FFC017&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - 'Invincible' EP&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt=" &amp;lt;p class=&quot;sid&quot;&amp;gt;FFC017&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - 'Invincible' EP&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f94bbf629a210801adee/1542405406584/BigWild_Invincible+EP_1440.JPG" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f94bbf629a210801adee/1542405406584/BigWild_Invincible+EP_1440.JPG" data-image-dimensions="1440x1440" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5989f94bbf629a210801adee" data-type="image" />
                </a>
                
                  <div class="image-slide-title"> &lt;p class="sid"&gt;FFC017&lt;/p&gt;&lt;p&gt;BIG WILD - 'Invincible' EP&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f2b9cd0f68f31483c272/1542405406589/FFC014_Golden+Features_Cover_1440.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC014&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;GOLDEN FEATURES - 'Wolfie/Funeral'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC014&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;GOLDEN FEATURES - 'Wolfie/Funeral'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f2b9cd0f68f31483c272/1542405406589/FFC014_Golden+Features_Cover_1440.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/5989f2b9cd0f68f31483c272/1542405406589/FFC014_Golden+Features_Cover_1440.jpg" data-image-dimensions="1440x1440" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="5989f2b9cd0f68f31483c272" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC014&lt;/p&gt;&lt;p&gt;GOLDEN FEATURES - 'Wolfie/Funeral'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf491d482e9504a356ce1/1542405406620/download.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC013&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;AUTOLASER - &quot;OffOffOff&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC013&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;AUTOLASER - &quot;OffOffOff&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf491d482e9504a356ce1/1542405406620/download.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf491d482e9504a356ce1/1542405406620/download.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf491d482e9504a356ce1" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC013&lt;/p&gt;&lt;p&gt;AUTOLASER - "OffOffOff"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf532ebbd1ab22e0e747d/1542405406639/FFC012_big-wild-feat-ida-hawk_invincible_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC012&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Invincible (feat. iDA HAWK)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC012&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Invincible (feat. iDA HAWK)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf532ebbd1ab22e0e747d/1542405406639/FFC012_big-wild-feat-ida-hawk_invincible_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf532ebbd1ab22e0e747d/1542405406639/FFC012_big-wild-feat-ida-hawk_invincible_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf532ebbd1ab22e0e747d" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC012&lt;/p&gt;&lt;p&gt;BIG WILD - "Invincible (feat. iDA HAWK)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49c37c5818cdacfaee1/1542405406690/FFC011_chet-porter-chelsea-cutler_stay_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC011&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;CHET PORTER - &quot;Stay (feat. Chelsea Cutler)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC011&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;CHET PORTER - &quot;Stay (feat. Chelsea Cutler)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49c37c5818cdacfaee1/1542405406690/FFC011_chet-porter-chelsea-cutler_stay_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49c37c5818cdacfaee1/1542405406690/FFC011_chet-porter-chelsea-cutler_stay_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf49c37c5818cdacfaee1" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC011&lt;/p&gt;&lt;p&gt;CHET PORTER - "Stay (feat. Chelsea Cutler)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae6f2e1f8d7a81711/1542405406783/FFC010_jai-wolf-chain-gang-of-1974_Drive_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC010&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;JAI WOLF - &quot;Drive (feat. Chain Gang of 1974)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC010&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;JAI WOLF - &quot;Drive (feat. Chain Gang of 1974)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae6f2e1f8d7a81711/1542405406783/FFC010_jai-wolf-chain-gang-of-1974_Drive_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae6f2e1f8d7a81711/1542405406783/FFC010_jai-wolf-chain-gang-of-1974_Drive_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf49ae6f2e1f8d7a81711" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC010&lt;/p&gt;&lt;p&gt;JAI WOLF - "Drive (feat. Chain Gang of 1974)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4925016e17a1d452665/1542405406733/FFC009_Big-WIld-feat-Tove-Styrke_Cover_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC009&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Aftergold (feat. Tove Styrke)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC009&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Aftergold (feat. Tove Styrke)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4925016e17a1d452665/1542405406733/FFC009_Big-WIld-feat-Tove-Styrke_Cover_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4925016e17a1d452665/1542405406733/FFC009_Big-WIld-feat-Tove-Styrke_Cover_1600.jpg" data-image-dimensions="1600x1600" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf4925016e17a1d452665" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC009&lt;/p&gt;&lt;p&gt;BIG WILD - "Aftergold (feat. Tove Styrke)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf498ff7c50c9f5f665e7/1542405406883/FFC008_louis-futon-feat-rozes_wasted-on-you_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC008&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;LOUIS FUTON - &quot;Wasted On You (feat. ROZES)&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC008&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;LOUIS FUTON - &quot;Wasted On You (feat. ROZES)&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf498ff7c50c9f5f665e7/1542405406883/FFC008_louis-futon-feat-rozes_wasted-on-you_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf498ff7c50c9f5f665e7/1542405406883/FFC008_louis-futon-feat-rozes_wasted-on-you_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf498ff7c50c9f5f665e7" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC008&lt;/p&gt;&lt;p&gt;LOUIS FUTON - "Wasted On You (feat. ROZES)"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4962994ca2394a215bd/1542405406823/FFC007_rufus_Bloom_2400+%281%29.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC007&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RÜFÜS DU SOL - 'Bloom'&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC007&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RÜFÜS DU SOL - 'Bloom'&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4962994ca2394a215bd/1542405406823/FFC007_rufus_Bloom_2400+%281%29.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4962994ca2394a215bd/1542405406823/FFC007_rufus_Bloom_2400+%281%29.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf4962994ca2394a215bd" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC007&lt;/p&gt;&lt;p&gt;RÜFÜS DU SOL - 'Bloom'&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4965016e17a1d4526a9/1542405406851/FFC006_rufus-du-sol_say-a-prayer1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC006&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RÜFÜS DU SOL - &quot;Say a Prayer For Me&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC006&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;RÜFÜS DU SOL - &quot;Say a Prayer For Me&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4965016e17a1d4526a9/1542405406851/FFC006_rufus-du-sol_say-a-prayer1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4965016e17a1d4526a9/1542405406851/FFC006_rufus-du-sol_say-a-prayer1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf4965016e17a1d4526a9" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC006&lt;/p&gt;&lt;p&gt;RÜFÜS DU SOL - "Say a Prayer For Me"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4953a0411c5029a1b65/1542405406864/FFC004_greyhat_glider_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC005&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;World Away&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC005&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;KASBO - &quot;World Away&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4953a0411c5029a1b65/1542405406864/FFC004_greyhat_glider_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4953a0411c5029a1b65/1542405406864/FFC004_greyhat_glider_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf4953a0411c5029a1b65" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC005&lt;/p&gt;&lt;p&gt;KASBO - "World Away"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4919f745611b90c741b/1542405406910/FFC001-troy-samuela-moonsiren-cover_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC001&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;TROY SAMUELA &amp;amp; MONSOONSIREN - &quot;Fiend&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC001&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;TROY SAMUELA &amp;amp; MONSOONSIREN - &quot;Fiend&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4919f745611b90c741b/1542405406910/FFC001-troy-samuela-moonsiren-cover_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf4919f745611b90c741b/1542405406910/FFC001-troy-samuela-moonsiren-cover_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf4919f745611b90c741b" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC001&lt;/p&gt;&lt;p&gt;TROY SAMUELA &amp; MONSOONSIREN - "Fiend"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf494ebbd1ab22e0e6a7c/1542405406974/FFC003_jai-wolf_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC003&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;JAI WOLF - &quot;Indian Summer&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC003&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;JAI WOLF - &quot;Indian Summer&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf494ebbd1ab22e0e6a7c/1542405406974/FFC003_jai-wolf_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf494ebbd1ab22e0e6a7c/1542405406974/FFC003_jai-wolf_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf494ebbd1ab22e0e6a7c" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC003&lt;/p&gt;&lt;p&gt;JAI WOLF - "Indian Summer"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf495414fb52b57011aa7/1542405406997/FFC004_greyhat_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC004&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;GREYHAT - &quot;Glider&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC004&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;GREYHAT - &quot;Glider&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf495414fb52b57011aa7/1542405406997/FFC004_greyhat_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf495414fb52b57011aa7/1542405406997/FFC004_greyhat_1600.jpg" data-image-dimensions="1000x1000" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf495414fb52b57011aa7" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC004&lt;/p&gt;&lt;p&gt;GREYHAT - "Glider"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      

        

        

        
          
            <div class="slide" data-type="image">
              <div class="margin-wrapper">
                <a
                  
                      
                  

                  class="image-slide-anchor content-fill"
                >
                  <noscript><img src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae58c62d26c2b9fac/1542405407076/FFC002_Big-WIld_Cover_1600.jpg"  alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC002&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Aftergold&quot;&amp;lt;/p&amp;gt;"  /></noscript><img class="thumb-image" alt="&amp;lt;p class=&quot;sid&quot;&amp;gt;FFC002&amp;lt;/p&amp;gt;&amp;lt;p&amp;gt;BIG WILD - &quot;Aftergold&quot;&amp;lt;/p&amp;gt;" data-src="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae58c62d26c2b9fac/1542405407076/FFC002_Big-WIld_Cover_1600.jpg" data-image="https://static1.squarespace.com/static/5823e64215d5db6b11f790a1/587cf45ed1758e3cef0e1351/587cf49ae58c62d26c2b9fac/1542405407076/FFC002_Big-WIld_Cover_1600.jpg" data-image-dimensions="1600x1600" data-image-focal-point="0.5,0.5" data-load="false" data-image-id="587cf49ae58c62d26c2b9fac" data-type="image" />
                </a>
                
                  <div class="image-slide-title">&lt;p class="sid"&gt;FFC002&lt;/p&gt;&lt;p&gt;BIG WILD - "Aftergold"&lt;/p&gt;</div>
                
              </div>
            </div>
          

          
        

      
    
  </div>

  

</div>




<style type="text/css" id="design-grid-css">
#block-yui_3_17_2_26_1484584209303_6352 .sqs-gallery-block-grid .sqs-gallery-design-grid { margin-right: -40px; }
#block-yui_3_17_2_26_1484584209303_6352 .sqs-gallery-block-grid .sqs-gallery-design-grid-slide .margin-wrapper { margin-right: 40px; margin-bottom: 40px; }
</style>


</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1542405476447_25677"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5bef3d9e2b6a2873484612e6/1542405559002/07+%28The%29+Evening+%28feat.+Sonn%29.mp3/original/07+%28The%29+Evening+%28feat.+Sonn%29.mp3"
  data-mime-type=""
  data-title="(The) Evening (feat. Sonn)"
  data-author="ford."
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="183000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1541094046770_45892"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5bdb3cb54ae237cd89fba3d2/1541094605050/mai.la+-+Crash+-+%5BFINAL+MASTER%5D.mp3/original/mai.la+-+Crash+-+%5BFINAL+MASTER%5D.mp3"
  data-mime-type=""
  data-title="Crash"
  data-author="mai.la"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="206000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1540947153211_24747"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5bd8fd4a4d7a9cf0e8da81e7/1540947291807/RunningTouch_MyHands01_mastered_2444.mp3/original/RunningTouch_MyHands01_mastered_2444.mp3"
  data-mime-type=""
  data-title="My Hands"
  data-author="Running Touch"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="221000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1538606698741_24209"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5bb546f11905f45e252d380b/1538606850869/1_Swim.mp3/original/1_Swim.mp3"
  data-mime-type=""
  data-title="Swim"
  data-author="Mild Minds"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="279000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1536771170840_22999"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b99458f21c67caa961bad4b/1536771485478/Loyal_MFiT-Master_29Aug2018.mp3/original/Loyal_MFiT-Master_29Aug2018.mp3"
  data-mime-type=""
  data-title="Loyal"
  data-author="ODESZA"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="207000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1537252280375_23783"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5ba09bf7562fa7deee5f3251/1537252363387/Craving+-+ford..mp3/original/Craving+-+ford..mp3"
  data-mime-type=""
  data-title="Craving "
  data-author="ford."
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="172000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1534484305663_22623"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b765f972b6a284fbdef3298/1534484421102/07+pluko+-+pink..mp3/original/07+pluko+-+pink..mp3"
  data-mime-type=""
  data-title="pink."
  data-author="pluko"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="220000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1533057308313_40197"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b609ab9f950b7af56889dc8/1533057769027/02+pluko+-+l+o+v+e.mp3/original/02+pluko+-+l+o+v+e.mp3"
  data-mime-type=""
  data-title="l o v e"
  data-author="pluko"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="166000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1529430823963_21404"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b294348575d1fee862afd1e/1529430883230/I+DONT+LIKE+UR+FRIENDS+-+EVAN+GIIA+%5BPROD+MEMBA%5D.mp3/original/I+DONT+LIKE+UR+FRIENDS+-+EVAN+GIIA+%5BPROD+MEMBA%5D.mp3"
  data-mime-type=""
  data-title="I DON'T LIKE UR FRIENDS"
  data-author="EVAN GIIA"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="179000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1528438621372_20924"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b1a1f91f950b7075fb20768/1528438689790/need+ya+%28feat.+Nevve%29.mp3/original/need+ya+%28feat.+Nevve%29.mp3"
  data-mime-type=""
  data-title="need ya (feat. Nevve)"
  data-author="pluko"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="187000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1527110314924_20502"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5b05dad2758d4649fa917aca/1527110387956/Ascension.mp3/original/Ascension.mp3"
  data-mime-type=""
  data-title="Ascension"
  data-author="Big Wild"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="250000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1524857732928_20429"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5ae37c0b0e2e72edfa7ace22/1524857890423/asleep+%28feat.+MOONZz%29.mp3/original/asleep+%28feat.+MOONZz%29.mp3"
  data-mime-type=""
  data-title="asleep (feat. MOONZz)"
  data-author="pluko"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="206000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1524857732928_19472"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5ae37bd20e2e72edfa7ac28a/1524857836529/11_Kasbo_Places_We_Don_t_Know.mp3/original/11_Kasbo_Places_We_Don_t_Know.mp3"
  data-mime-type=""
  data-title="Places We Don’t Know"
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="204000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1521047106394_18864"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5aa9569424a69460f54c9fe7/1521047208649/08_Kasbo_Over_You__feat__Frida_Sundemo_.mp3/original/08_Kasbo_Over_You__feat__Frida_Sundemo_.mp3"
  data-mime-type=""
  data-title="Over You (feat. Frida Sundemo)"
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="233000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_1_1520324932527_18781"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a9e535e085229725b25e0b2/1520325491499/WESTWORLD+-+EVAN+GIIA.mp3/original/WESTWORLD+-+EVAN+GIIA.mp3"
  data-mime-type=""
  data-title="WESTWORLD"
  data-author="EVAN GIIA"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="209000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_18_1518542207856_17861"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a8323fbe4966bf15f1804cf/1518543886150/02_Kasbo_Your_Tempo.mp3/original/02_Kasbo_Your_Tempo.mp3"
  data-mime-type=""
  data-title="Your Tempo"
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="199000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_14_1516733497338_17208"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a67a260e4966bfd48cc4308/1516741238148/01+White+Cliffs+-+Heart+Start+%28feat.+Ricky+James%29.mp3/original/01+White+Cliffs+-+Heart+Start+%28feat.+Ricky+James%29.mp3"
  data-mime-type=""
  data-title="Heart Start (feat. Ricky James)"
  data-author="White Cliffs"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="206000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_3_1516320328575_42533"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a61381b8165f505d9801ac2/1516320835390/03+Aldrig+Mer+%28feat.+TENDER%29.mp3/original/03+Aldrig+Mer+%28feat.+TENDER%29.mp3"
  data-mime-type=""
  data-title="Aldrig Mer (feat. TENDER)"
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="243000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_7_1513094065072_17375"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a2fff6f53450aa142ac4acf/1513095035738/Kasbo_Snow_In_Gothenburg.mp3/original/Kasbo_Snow_In_Gothenburg.mp3"
  data-mime-type=""
  data-title="Snow In Gothenburg "
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="223000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_6_1510844595320_16785"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5a0daa379140b703bd591deb/1510845010443/Louis+Futon+-+Restless+Sea+%28feat.+Opia%29.mp3/original/Louis+Futon+-+Restless+Sea+%28feat.+Opia%29.mp3"
  data-mime-type=""
  data-title="Restless Sea (feat. Opia)"
  data-author="Louis Futon"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="183000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_9_1509030807727_27093"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/59f2016af43b5595b0aca557/1509032314311/Kasbo+-+Bleed+It+Out+%28feat.+Nea%29.mp3/original/Kasbo+-+Bleed+It+Out+%28feat.+Nea%29.mp3"
  data-mime-type=""
  data-title="Bleed It Out (feat. Nea)"
  data-author="Kasbo"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="218000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_9_1507557228648_15157"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/59db83a4e45a7c08738c7e69/1507558322851/Big+Wild+-+Show+Me+%28feat.+Hundred+Waters%29.mp3/original/Big+Wild+-+Show+Me+%28feat.+Hundred+Waters%29.mp3"
  data-mime-type=""
  data-title="Show Me (feat. Hundred Waters)"
  data-author="Big Wild"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="227000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_12_1503501803203_13986"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/599dc1309f745632e6849c04/1503510845842/Yahtzel+-+Someone+Else+%28feat.+Savoi%29.mp3/original/Yahtzel+-+Someone+Else+%28feat.+Savoi%29.mp3"
  data-mime-type=""
  data-title="Someone Else (feat. Savoi)"
  data-author="Yahtzel"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="182000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_5_1502214458911_23661"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5989fb48f7e0ab837d05cb6b/1502214999093/04+Big+Wild+-+Invincible+%28feat.+iDA+HAWK%29.mp3/original/04+Big+Wild+-+Invincible+%28feat.+iDA+HAWK%29.mp3"
  data-mime-type=""
  data-title="Invincible (feat. iDA HAWK)"
  data-author="Big Wild"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="218000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_13_1502212541243_12737"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/5989f63de58c6247207d8171/1502213710759/01+Wolfie+%28feat.+Julia+Stone%29.mp3/original/01+Wolfie+%28feat.+Julia+Stone%29.mp3"
  data-mime-type=""
  data-title="Wolfie (feat. Julia Stone)"
  data-author="Golden Features"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="203000"
  data-color-theme="dark"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_3_1485614724963_8638"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/588caf67579fb35be4e9fc05/1485615000251/Autolaser+-+OffOffOff.mp3/original/Autolaser+-+OffOffOff.mp3"
  data-mime-type=""
  data-title="FFC013"
  data-author="Autolaser"
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="227000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_5_1485614724963_8969"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/588cc67e17bffc6e424166ea/1485620906840/Big+Wild+-+Invincible+%28feat.+iDA+HAWK%29.mp3/original/Big+Wild+-+Invincible+%28feat.+iDA+HAWK%29.mp3"
  data-mime-type=""
  data-title="FFC012"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="217000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_18_1485614724963_9553"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/588cc636ff7c5011346b70ef/1485620841804/Chet+Porter+-+Stay+%28ft.+Chelsea+Cutler%29.mp3/original/Chet+Porter+-+Stay+%28ft.+Chelsea+Cutler%29.mp3"
  data-mime-type=""
  data-title="FFC011"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="246000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_13006"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc938cc534a5a98870aeab/1490850710299/jai+wolf+-+drive+feat+chain+gang+of+1974.mp3/original/jai+wolf+-+drive+feat+chain+gang+of+1974.mp3"
  data-mime-type=""
  data-title="FFC010"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="298000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_14881"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc93c6ebbd1af180559c8e/1490850765582/big+wild+-+aftergold+feat+tove+styrke.mp3/original/big+wild+-+aftergold+feat+tove+styrke.mp3"
  data-mime-type=""
  data-title="FFC009"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="191000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_16341"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc93e4b3db2bd0511353b9/1490850796513/louis+futon+-+wasted+on+you+feat+rozes.mp3/original/louis+futon+-+wasted+on+you+feat+rozes.mp3"
  data-mime-type=""
  data-title="FFC008"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="224000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_17758"><div class="sqs-block-content">
  
<div class="sqs-blockStatus sqs-blockStatus--overlayMode" data-state="uninitialized">

  <div class="sqs-blockStatus-disclosure"></div>

  <div class="sqs-blockStatus-box">
    <div class="sqs-blockStatus-box-title">audio Block</div>
    
      <div class="sqs-blockStatus-box-message">
        Double-click here to upload or link to a .mp3.
        
          <a class="sqs-blockStatus-box-kbArticleLink" href="https://support.squarespace.com/hc/articles/206543197" target="_blank">Learn more</a>
        
      </div>
    
  </div>

</div>




<div 
  class="sqs-audio-embed sqs-block-is-placeholder"
  data-url=""
  data-mime-type=""
  data-title="FFC007"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms=""
  data-color-theme="light"

  data-block-state="uninitialized"
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_18745"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc9414f5e231f1af8b03c2/1490850842975/RU%CC%88FU%CC%88S+DU+SOL+-+say+a+prayer+for+me.mp3/original/RU%CC%88FU%CC%88S+DU+SOL+-+say+a+prayer+for+me.mp3"
  data-mime-type=""
  data-title="FFC006"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="219000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_19814"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc942ee6f2e19e0fd31376/1490850869274/kasbo+-+world+away.mp3/original/kasbo+-+world+away.mp3"
  data-mime-type=""
  data-title="FFC005"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="204000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_20883"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc944aebbd1af18055a089/1490850897547/greyhat+-+glider.mp3/original/greyhat+-+glider.mp3"
  data-mime-type=""
  data-title="FFC004"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="232000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_21860"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc9462be65945ca29e8e94/1490850922513/jai+wolf+-+indian+summer.mp3/original/jai+wolf+-+indian+summer.mp3"
  data-mime-type=""
  data-title="FFC003"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="248000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_23403"><div class="sqs-block-content">

<div 
  class="sqs-audio-embed"
  data-url="http://static1.squarespace.com/static/5823e64215d5db6b11f790a1/t/58dc947ebebafb06e995ada3/1490850950704/big+wild+-+aftergold.mp3/original/big+wild+-+aftergold.mp3"
  data-mime-type=""
  data-title="FFC002"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms="229000"
  data-color-theme="light"

  
>
</div>
</div></div><div class="sqs-block audio-block sqs-block-audio" data-block-type="41" id="block-yui_3_17_2_2_1490849387285_24472"><div class="sqs-block-content">
  
<div class="sqs-blockStatus sqs-blockStatus--overlayMode" data-state="uninitialized">

  <div class="sqs-blockStatus-disclosure"></div>

  <div class="sqs-blockStatus-box">
    <div class="sqs-blockStatus-box-title">audio Block</div>
    
      <div class="sqs-blockStatus-box-message">
        Double-click here to upload or link to a .mp3.
        
          <a class="sqs-blockStatus-box-kbArticleLink" href="https://support.squarespace.com/hc/articles/206543197" target="_blank">Learn more</a>
        
      </div>
    
  </div>

</div>




<div 
  class="sqs-audio-embed sqs-block-is-placeholder"
  data-url=""
  data-mime-type=""
  data-title="FFC001"
  data-author=""
  data-show-download="false"
  data-design-style="minimal"
  data-duration-in-ms=""
  data-color-theme="light"

  data-block-state="uninitialized"
>
</div>
</div></div></div></div></div>
							</div>

							<div id="page-body-footer" class="extra-wrapper">
								<div class="sqs-layout sqs-grid-12 columns-12 empty" data-layout-label="Releases Footer Content" data-type="block-field" id="page-footer-587cf06b725e25c8c7cd4dc9"><div class="row sqs-row"><div class="col sqs-col-12 span-12"></div></div></div>
							</div>

						</div>
					</div> <!-- content-wrapper -->

					<div class="clearer" id="body-clearer"></div>

	      </div>
	    </div> <!-- page-body-wrapper -->


		    <div id="page-footer-wrapper">
		      <div id="page-footer">
		        
		          
							<div id="sqs-social"class="social-links sqs-svg-icon--list" data-content-field="connected-accounts">
								
  <a href="mailto:hello@foreignfamilycollective.com" target="_blank" class="sqs-svg-icon--wrapper email">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#email-icon"></use>
        <use class="sqs-use--mask" xlink:href="#email-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://www.facebook.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper facebook">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#facebook-icon"></use>
        <use class="sqs-use--mask" xlink:href="#facebook-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://instagram.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper instagram">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#instagram-icon"></use>
        <use class="sqs-use--mask" xlink:href="#instagram-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://twitter.com/ForeignFam" target="_blank" class="sqs-svg-icon--wrapper twitter">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#twitter-icon"></use>
        <use class="sqs-use--mask" xlink:href="#twitter-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://itunes.apple.com/us/curator/foreign-family-collective/id1146634561" target="_blank" class="sqs-svg-icon--wrapper itunes">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#itunes-icon"></use>
        <use class="sqs-use--mask" xlink:href="#itunes-mask"></use>
      </svg>
    </div>
  </a>

  <a href="http://soundcloud.com/foreignfamily" target="_blank" class="sqs-svg-icon--wrapper soundcloud">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#soundcloud-icon"></use>
        <use class="sqs-use--mask" xlink:href="#soundcloud-mask"></use>
      </svg>
    </div>
  </a>

  <a href="https://www.youtube.com/channel/UCAuFghi1ubOPTjvghHn-9Ow" target="_blank" class="sqs-svg-icon--wrapper youtube">
    <div>
      <svg class="sqs-svg-icon--social" viewBox="0 0 64 64">
        <use class="sqs-use--icon" xlink:href="#youtube-icon"></use>
        <use class="sqs-use--mask" xlink:href="#youtube-mask"></use>
      </svg>
    </div>
  </a>

							</div>
		          
		        
		        <div class="sqs-layout sqs-grid-12 columns-12" data-layout-label="Footer Content" data-type="block-field" data-updated-on="1538145769933" id="footer-blocks"><div class="row sqs-row"><div class="col sqs-col-12 span-12"><div class="sqs-block form-block sqs-block-form" data-block-type="9" id="block-yui_3_17_2_6_1484324317045_8364"><div class="sqs-block-content">



<div class="form-wrapper" >

  

  <div class="form-inner-wrapper">

    <form autocomplete="on" action="https://stack-brooklyn-6g5d.squarespace.com" method="POST" onsubmit="
      return (function(form) {
        Y.use('squarespace-form-submit', 'node', function(Y){
          (new Y.Squarespace.FormSubmit({
            formNode: Y.Node(form)
          })).submit('587908f12e69cf12b3431b95', '', 'footer-blocks');
        });
        return false;
      })(this)" data-form-id="587908f12e69cf12b3431b95">

      

        <div class="field-list clear">

        

            

            

            
              <div id="text-yui_3_17_2_1_1484324317045_18851" class="form-item field text">
                <label class="title" for="text-yui_3_17_2_1_1484324317045_18851-field">Email</label>
                
                <input class="field-element text" type="text" id="text-yui_3_17_2_1_1484324317045_18851-field" />
              </div>
            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

            

        

        </div>

      

      

      
      <div class="form-button-wrapper form-button-wrapper--align-left">
        <input class="button sqs-system-button sqs-editable-button" type="submit" value="SUBSCRIBE"/>
      </div>
      

      

      <div class="hidden form-submission-text">Thank you!</div>

      <div class="hidden form-submission-html" data-submission-html=""></div>
    </form>

  </div>

</div>
</div></div><div class="sqs-block spacer-block sqs-block-spacer sized vsize-1" data-block-type="21" id="block-yui_3_17_2_4_1481125422228_17230"><div class="sqs-block-content">&nbsp;</div></div><div class="sqs-block horizontalrule-block sqs-block-horizontalrule" data-block-type="47" id="block-yui_3_17_2_10_1478841878747_46050"><div class="sqs-block-content"><hr /></div></div><div class="row sqs-row"><div class="col sqs-col-4 span-4"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_50_1478759560897_13983"><div class="sqs-block-content"><p style="white-space: pre-wrap;">Foreign Family Collective is an outlet for musicians and visual artists alike curated by the duo behind <a href="http://odesza.com/" target="_blank">ODESZA</a>.</p></div></div></div><div class="col sqs-col-3 span-3"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_50_1478759560897_15320"><div class="sqs-block-content"><p style="white-space: pre-wrap;"><a href="mailto:hello@foreignfamilycollective.com" target="_blank">General Inquiries</a><br><a href="http://foreignfamilycollective.com/request.html" target="_blank">Licensing Request</a></p></div></div></div><div class="col sqs-col-5 span-5"><div class="row sqs-row"><div class="col sqs-col-3 span-3"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_4_1478786954310_26808"><div class="sqs-block-content"><p style="white-space: pre-wrap;">Ⓒ Foreign Family Collective.<br>All rights reserved.</p></div></div></div><div class="col sqs-col-2 span-2"><div class="sqs-block html-block sqs-block-html" data-block-type="2" id="block-yui_3_17_2_2_1500316607514_7163"><div class="sqs-block-content"><p style="white-space: pre-wrap;">Design by <a href="http://stackbk.com" target="_blank">Stack</a></p></div></div></div></div></div></div></div></div></div>
		      </div>
		    </div><!-- page-footer-wrapper -->


		  </div>
		</div> <!-- canvas-wrapper -->

		<script type="text/javascript" data-sqs-type="imageloader-bootstrapper">(function() {if(window.ImageLoader) { window.ImageLoader.bootstrap({}, document); }})();</script><script>Squarespace.afterBodyLoad(Y);</script><svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display:none"><symbol id="email-icon" viewBox="0 0 64 64"><path d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"/></symbol><symbol id="email-mask" viewBox="0 0 64 64"><path d="M41.1,25H22.9l9.1,7.1L41.1,25z M44,26.6l-12,9.3l-12-9.3V39h24V26.6z M0,0v64h64V0H0z M47,42H17V22h30V42z"/></symbol><symbol id="facebook-icon" viewBox="0 0 64 64"><path d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"/></symbol><symbol id="facebook-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M39.6,22l-2.8,0c-2.2,0-2.6,1.1-2.6,2.6V28h5.3l-0.7,5.3h-4.6V47h-5.5V33.3H24V28h4.6V24 c0-4.6,2.8-7,6.9-7c2,0,3.6,0.1,4.1,0.2V22z"/></symbol><symbol id="instagram-icon" viewBox="0 0 64 64"><path d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"/></symbol><symbol id="instagram-mask" viewBox="0 0 64 64"><path d="M43.693,23.153c-0.272-0.7-0.597-1.2-1.122-1.725c-0.525-0.525-1.025-0.85-1.725-1.122c-0.529-0.205-1.323-0.45-2.785-0.517c-1.582-0.072-2.056-0.087-6.061-0.087s-4.48,0.015-6.061,0.087c-1.462,0.067-2.257,0.311-2.785,0.517c-0.7,0.272-1.2,0.597-1.725,1.122c-0.525,0.525-0.85,1.025-1.122,1.725c-0.205,0.529-0.45,1.323-0.516,2.785c-0.072,1.582-0.087,2.056-0.087,6.061s0.015,4.48,0.087,6.061c0.067,1.462,0.311,2.257,0.516,2.785c0.272,0.7,0.597,1.2,1.122,1.725s1.025,0.85,1.725,1.122c0.529,0.205,1.323,0.45,2.785,0.516c1.581,0.072,2.056,0.087,6.061,0.087s4.48-0.015,6.061-0.087c1.462-0.067,2.257-0.311,2.785-0.516c0.7-0.272,1.2-0.597,1.725-1.122s0.85-1.025,1.122-1.725c0.205-0.529,0.45-1.323,0.516-2.785c0.072-1.582,0.087-2.056,0.087-6.061s-0.015-4.48-0.087-6.061C44.143,24.476,43.899,23.682,43.693,23.153z M32,39.703c-4.254,0-7.703-3.449-7.703-7.703s3.449-7.703,7.703-7.703s7.703,3.449,7.703,7.703S36.254,39.703,32,39.703z M40.007,25.793c-0.994,0-1.8-0.806-1.8-1.8c0-0.994,0.806-1.8,1.8-1.8c0.994,0,1.8,0.806,1.8,1.8C41.807,24.987,41.001,25.793,40.007,25.793z M0,0v64h64V0H0z M46.91,38.184c-0.073,1.597-0.326,2.687-0.697,3.641c-0.383,0.986-0.896,1.823-1.73,2.657c-0.834,0.834-1.67,1.347-2.657,1.73c-0.954,0.371-2.044,0.624-3.641,0.697C36.585,46.983,36.074,47,32,47s-4.585-0.017-6.184-0.09c-1.597-0.073-2.687-0.326-3.641-0.697c-0.986-0.383-1.823-0.896-2.657-1.73c-0.834-0.834-1.347-1.67-1.73-2.657c-0.371-0.954-0.624-2.044-0.697-3.641C17.017,36.585,17,36.074,17,32c0-4.074,0.017-4.585,0.09-6.185c0.073-1.597,0.326-2.687,0.697-3.641c0.383-0.986,0.896-1.823,1.73-2.657c0.834-0.834,1.67-1.347,2.657-1.73c0.954-0.371,2.045-0.624,3.641-0.697C27.415,17.017,27.926,17,32,17s4.585,0.017,6.184,0.09c1.597,0.073,2.687,0.326,3.641,0.697c0.986,0.383,1.823,0.896,2.657,1.73c0.834,0.834,1.347,1.67,1.73,2.657c0.371,0.954,0.624,2.044,0.697,3.641C46.983,27.415,47,27.926,47,32C47,36.074,46.983,36.585,46.91,38.184z M32,27c-2.761,0-5,2.239-5,5s2.239,5,5,5s5-2.239,5-5S34.761,27,32,27z"/></symbol><symbol id="twitter-icon" viewBox="0 0 64 64"><path d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"/></symbol><symbol id="twitter-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M44.7,25.5c0,0.3,0,0.6,0,0.8C44.7,35,38.1,45,26.1,45c-3.7,0-7.2-1.1-10.1-2.9 c0.5,0.1,1,0.1,1.6,0.1c3.1,0,5.9-1,8.2-2.8c-2.9-0.1-5.3-2-6.1-4.6c0.4,0.1,0.8,0.1,1.2,0.1c0.6,0,1.2-0.1,1.7-0.2 c-3-0.6-5.3-3.3-5.3-6.4c0,0,0-0.1,0-0.1c0.9,0.5,1.9,0.8,3,0.8c-1.8-1.2-2.9-3.2-2.9-5.5c0-1.2,0.3-2.3,0.9-3.3 c3.2,4,8.1,6.6,13.5,6.9c-0.1-0.5-0.2-1-0.2-1.5c0-3.6,2.9-6.6,6.6-6.6c1.9,0,3.6,0.8,4.8,2.1c1.5-0.3,2.9-0.8,4.2-1.6 c-0.5,1.5-1.5,2.8-2.9,3.6c1.3-0.2,2.6-0.5,3.8-1C47.1,23.4,46,24.5,44.7,25.5z"/></symbol><symbol id="itunes-icon" viewBox="0 0 64 64"><path d="M41.784,28.836c0,3.5,0.002,7-0.002,10.499c0,0.767-0.105,1.519-0.446,2.217c-0.53,1.086-1.399,1.768-2.55,2.095c-0.642,0.183-1.297,0.288-1.965,0.318c-1.749,0.083-3.261-1.103-3.574-2.823c-0.26-1.419,0.419-2.984,1.91-3.715c0.595-0.294,1.23-0.458,1.871-0.596c0.695-0.15,1.393-0.282,2.084-0.441c0.504-0.116,0.84-0.424,0.939-0.948c0.023-0.116,0.033-0.236,0.033-0.355c0.002-3.336,0.002-6.67-0.002-10.005c0-0.114-0.019-0.23-0.047-0.34c-0.072-0.277-0.274-0.446-0.559-0.43c-0.294,0.017-0.584,0.064-0.873,0.122c-1.397,0.275-2.793,0.559-4.189,0.84c-1.425,0.286-2.851,0.576-4.278,0.864c-0.842,0.171-1.684,0.34-2.525,0.51c-0.03,0.006-0.059,0.016-0.088,0.023c-0.509,0.141-0.693,0.374-0.717,0.9c-0.003,0.08-0.002,0.16-0.002,0.241c-0.002,4.782,0,9.565-0.003,14.345c0,0.773-0.086,1.537-0.396,2.255c-0.512,1.18-1.416,1.914-2.636,2.269c-0.645,0.186-1.307,0.293-1.976,0.316c-1.762,0.066-3.225-1.105-3.527-2.838c-0.261-1.494,0.422-3.098,2.119-3.816c0.656-0.275,1.344-0.427,2.036-0.571c0.527-0.111,1.056-0.211,1.582-0.324c0.703-0.153,1.07-0.595,1.1-1.313c0.003-0.094,0.002-0.183,0.002-0.277c0-5.44,0-10.882,0.003-16.323c0-0.227,0.023-0.46,0.077-0.681c0.128-0.524,0.502-0.823,1.003-0.953c0.469-0.122,0.947-0.207,1.422-0.304c1.347-0.272,2.694-0.543,4.042-0.814c1.393-0.282,2.784-0.562,4.176-0.843c1.23-0.249,2.46-0.501,3.693-0.743c0.404-0.08,0.814-0.161,1.22-0.194c0.57-0.045,0.961,0.313,1.019,0.886c0.014,0.136,0.022,0.274,0.022,0.412C41.786,21.814,41.786,25.325,41.784,28.836L41.784,28.836z"/></symbol><symbol id="itunes-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M41.783,39.335c0,0.767-0.105,1.519-0.446,2.217c-0.53,1.086-1.399,1.768-2.55,2.095c-0.641,0.183-1.297,0.288-1.965,0.318c-1.749,0.083-3.261-1.103-3.574-2.823c-0.26-1.419,0.419-2.984,1.911-3.715c0.595-0.294,1.23-0.458,1.871-0.596c0.695-0.15,1.393-0.282,2.084-0.441c0.504-0.116,0.84-0.424,0.939-0.948c0.023-0.116,0.033-0.236,0.033-0.355c0.002-3.336,0.002-6.67-0.002-10.005c0-0.114-0.019-0.23-0.047-0.34c-0.072-0.277-0.274-0.446-0.559-0.43c-0.294,0.017-0.584,0.064-0.873,0.122c-1.397,0.275-2.793,0.559-4.189,0.84c-1.425,0.286-2.851,0.576-4.278,0.864c-0.842,0.171-1.684,0.34-2.525,0.51c-0.03,0.006-0.059,0.016-0.088,0.023c-0.509,0.141-0.693,0.374-0.717,0.9c-0.003,0.08-0.002,0.16-0.002,0.241c-0.002,4.782,0,9.565-0.003,14.345c0,0.773-0.086,1.536-0.396,2.255c-0.512,1.18-1.416,1.914-2.636,2.269c-0.645,0.186-1.307,0.293-1.976,0.316c-1.762,0.066-3.225-1.105-3.527-2.838c-0.261-1.494,0.422-3.098,2.119-3.816c0.656-0.275,1.344-0.427,2.036-0.571c0.527-0.111,1.056-0.211,1.582-0.324c0.703-0.153,1.07-0.595,1.1-1.313c0.003-0.094,0.002-0.183,0.002-0.277c0-5.44,0-10.882,0.003-16.323c0-0.227,0.023-0.46,0.077-0.681c0.128-0.524,0.502-0.823,1.003-0.953c0.469-0.122,0.947-0.207,1.422-0.304c1.347-0.272,2.694-0.543,4.042-0.814c1.393-0.282,2.784-0.562,4.176-0.843c1.23-0.249,2.46-0.501,3.693-0.743c0.404-0.08,0.814-0.161,1.22-0.194c0.57-0.045,0.961,0.313,1.019,0.886c0.014,0.136,0.022,0.274,0.022,0.411c0.003,3.513,0.003,7.024,0.002,10.535C41.784,32.336,41.786,35.836,41.783,39.335z"/></symbol><symbol id="soundcloud-icon" viewBox="0 0 64 64"><path d="M43.6,30c-0.6,0-1.2,0.1-1.7,0.3c-0.3-4-3.7-7.1-7.7-7.1c-1,0-2,0.2-2.8,0.5 C31.1,23.9,31,24,31,24.3v13.9c0,0.3,0.2,0.5,0.5,0.5c0,0,12.2,0,12.2,0c2.4,0,4.4-1.9,4.4-4.4C48,31.9,46,30,43.6,30z M27.2,25.1 c-0.7,0-1.2,0.5-1.2,1.1v11.3c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2V26.2C28.4,25.6,27.8,25.1,27.2,25.1z M22.2,27.8 c-0.7,0-1.2,0.5-1.2,1.1v8.5c0,0.7,0.6,1.2,1.2,1.2s1.2-0.6,1.2-1.2V29C23.4,28.3,22.9,27.8,22.2,27.8z M17.2,30.2 c-0.7,0-1.2,0.5-1.2,1.1v4.9c0,0.7,0.6,1.2,1.2,1.2c0.7,0,1.2-0.6,1.2-1.2v-4.9C18.5,30.7,17.9,30.2,17.2,30.2z"/></symbol><symbol id="soundcloud-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M18.5,36.3c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2v-4.9c0-0.6,0.6-1.1,1.2-1.1 c0.7,0,1.2,0.5,1.2,1.1V36.3z M23.4,37.5c0,0.7-0.6,1.2-1.2,1.2S21,38.2,21,37.5V29c0-0.6,0.6-1.1,1.2-1.1s1.2,0.5,1.2,1.1V37.5z  M28.4,37.5c0,0.7-0.6,1.2-1.2,1.2c-0.7,0-1.2-0.6-1.2-1.2V26.2c0-0.6,0.6-1.1,1.2-1.1c0.7,0,1.2,0.5,1.2,1.1V37.5z M43.6,38.7 c0,0-12.1,0-12.2,0c-0.3,0-0.5-0.2-0.5-0.5V24.3c0-0.3,0.1-0.4,0.4-0.5c0.9-0.3,1.8-0.5,2.8-0.5c4,0,7.4,3.1,7.7,7.1 c0.5-0.2,1.1-0.3,1.7-0.3c2.4,0,4.4,2,4.4,4.4C48,36.8,46,38.7,43.6,38.7z"/></symbol><symbol id="youtube-icon" viewBox="0 0 64 64"><path d="M46.7,26c0,0-0.3-2.1-1.2-3c-1.1-1.2-2.4-1.2-3-1.3C38.3,21.4,32,21.4,32,21.4h0 c0,0-6.3,0-10.5,0.3c-0.6,0.1-1.9,0.1-3,1.3c-0.9,0.9-1.2,3-1.2,3S17,28.4,17,30.9v2.3c0,2.4,0.3,4.9,0.3,4.9s0.3,2.1,1.2,3 c1.1,1.2,2.6,1.2,3.3,1.3c2.4,0.2,10.2,0.3,10.2,0.3s6.3,0,10.5-0.3c0.6-0.1,1.9-0.1,3-1.3c0.9-0.9,1.2-3,1.2-3s0.3-2.4,0.3-4.9 v-2.3C47,28.4,46.7,26,46.7,26z M28.9,35.9l0-8.4l8.1,4.2L28.9,35.9z"/></symbol><symbol id="youtube-mask" viewBox="0 0 64 64"><path d="M0,0v64h64V0H0z M47,33.1c0,2.4-0.3,4.9-0.3,4.9s-0.3,2.1-1.2,3c-1.1,1.2-2.4,1.2-3,1.3 C38.3,42.5,32,42.6,32,42.6s-7.8-0.1-10.2-0.3c-0.7-0.1-2.2-0.1-3.3-1.3c-0.9-0.9-1.2-3-1.2-3S17,35.6,17,33.1v-2.3 c0-2.4,0.3-4.9,0.3-4.9s0.3-2.1,1.2-3c1.1-1.2,2.4-1.2,3-1.3c4.2-0.3,10.5-0.3,10.5-0.3h0c0,0,6.3,0,10.5,0.3c0.6,0.1,1.9,0.1,3,1.3 c0.9,0.9,1.2,3,1.2,3s0.3,2.4,0.3,4.9V33.1z M28.9,35.9l8.1-4.2l-8.1-4.2L28.9,35.9z"/></symbol></svg>

	</body>
</html>
