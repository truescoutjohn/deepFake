(()=>{"use strict";var e,r,t,n,o,i,a,c={211:(e,r,t)=>{t(344);const n=document.querySelector(".sidebar"),o=document.querySelector(".main"),i=[],a=function(){let e=null,r=1;return{mouseEnterHandler:function(t){t.stopPropagation(),e=setInterval((()=>{r>=1443?clearInterval(e):(r+=16,t.target.style.filter=`drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)\n          sepia(100%) brightness(106%) saturate(${r}%) hue-rotate(11deg) contrast(103%)`)}),1)},mouseOutHandler:function(t){t.stopPropagation(),clearInterval(e),e=setInterval((()=>{r<=1?(clearInterval(e),r=1):(r-=16,t.target.style.filter=`drop-shadow(0px 0px 10px #e2ff00) brightness(0) invert(84%)\n          sepia(100%) brightness(106%) saturate(${r}%) hue-rotate(11deg) contrast(103%)`)}),1)}}};document.addEventListener("DOMContentLoaded",(function(){const e=[...document.querySelectorAll(".socials__link img")],r=document.querySelector(".sidebar__switcher-mode-image"),t=document.querySelector(".sidebar__lang-item_en"),c=document.querySelector(".sidebar__lang-item_ua");t.addEventListener("click",(function(e){document.querySelector("#english").style.display="block",document.querySelector("#ukrainian").style.display="none"})),c.addEventListener("click",(function(e){document.querySelector("#ukrainian").style.display="block",document.querySelector("#english").style.display="none"})),r.addEventListener("click",(function(){n.classList.toggle("sidebar_night-mode"),i.forEach((function(e){e.element.style.filter="",e.element.removeEventListener("mouseenter",e.mouseEnterHandler),e.element.removeEventListener("mouseout",e.mouseOutHandler)})),i.length=0,n.classList.contains("sidebar_night-mode")?(document.querySelector(".sidebar__logo").src="./assets/img/logoNightMode.svg",e.forEach((e=>{const{mouseEnterHandler:r,mouseOutHandler:t}=function(){let e=null,r=97;return{mouseEnterHandler:function(t){t.stopPropagation(),e=setInterval((()=>{r<=1?clearInterval(e):(r-=3,t.target.style.filter=`drop-shadow(0 0 10px #ffffff) brightness(${r}%)`)}),1)},mouseOutHandler:function(t){t.stopPropagation(),clearInterval(e),e=setInterval((()=>{r>=97?clearInterval(e):(r+=3,t.target.style.filter=`drop-shadow(0 0 10px #ffffff) brightness(${r}%)`)}),1)}}}();e.addEventListener("mouseenter",r),e.addEventListener("mouseout",t),i.push({element:e,mouseEnterHandler:r,mouseOutHandler:t})}))):(document.querySelector(".sidebar__logo").src="./assets/img/logo.svg",document.querySelector(".logo").style.filter="",e.forEach((e=>{const{mouseEnterHandler:r,mouseOutHandler:t}=a();e.addEventListener("mouseenter",r),e.addEventListener("mouseout",t),i.push({element:e,mouseEnterHandler:r,mouseOutHandler:t})}))),document.querySelector(".logo").style.filter="brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)",o.classList.toggle("main_night-mode")})),document.querySelector(".logo").style.filter="brightness(0) saturate(100%) invert(91%) sepia(100%) saturate(0%) hue-rotate(306deg) brightness(108%) contrast(101%)",e.forEach((e=>{const{mouseEnterHandler:r,mouseOutHandler:t}=a();e.addEventListener("mouseenter",r),e.addEventListener("mouseout",t),i.push({element:e,mouseEnterHandler:r,mouseOutHandler:t})}))}))},783:(e,r,t)=>{var n=t(618),o=Object.create(null),i="undefined"==typeof document,a=Array.prototype.forEach;function c(){}function d(e,r){if(!r){if(!e.href)return;r=e.href.split("?")[0]}if(l(r)&&!1!==e.isLoaded&&r&&r.indexOf(".css")>-1){e.visited=!0;var t=e.cloneNode();t.isLoaded=!1,t.addEventListener("load",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.addEventListener("error",(function(){t.isLoaded||(t.isLoaded=!0,e.parentNode.removeChild(e))})),t.href="".concat(r,"?").concat(Date.now()),e.nextSibling?e.parentNode.insertBefore(t,e.nextSibling):e.parentNode.appendChild(t)}}function s(){var e=document.querySelectorAll("link");a.call(e,(function(e){!0!==e.visited&&d(e)}))}function l(e){return!!/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(e)}e.exports=function(e,r){if(i)return console.log("no window.document found, will not HMR CSS"),c;var t,u,f=function(e){var r=o[e];if(!r){if(document.currentScript)r=document.currentScript.src;else{var t=document.getElementsByTagName("script"),i=t[t.length-1];i&&(r=i.src)}o[e]=r}return function(e){if(!r)return null;var t=r.split(/([^\\/]+)\.js$/),o=t&&t[1];return o&&e?e.split(",").map((function(e){var t=new RegExp("".concat(o,"\\.js$"),"g");return n(r.replace(t,"".concat(e.replace(/{fileName}/g,o),".css")))})):[r.replace(".js",".css")]}}(e);return t=function(){var e=f(r.filename),t=function(e){if(!e)return!1;var r=document.querySelectorAll("link"),t=!1;return a.call(r,(function(r){if(r.href){var o=function(e,r){var t;return e=n(e),r.some((function(n){e.indexOf(r)>-1&&(t=n)})),t}(r.href,e);l(o)&&!0!==r.visited&&o&&(d(r,o),t=!0)}})),t}(e);if(r.locals)return console.log("[HMR] Detected local css modules. Reload all css"),void s();t?console.log("[HMR] css reload %s",e.join(" ")):(console.log("[HMR] Reload all css"),s())},50,u=0,function(){var e=this,r=arguments,n=function(){return t.apply(e,r)};clearTimeout(u),u=setTimeout(n,50)}}},618:e=>{e.exports=function(e){if(e=e.trim(),/^data:/i.test(e))return e;var r=-1!==e.indexOf("//")?e.split("//")[0]+"//":"",t=e.replace(new RegExp(r,"i"),"").split("/"),n=t[0].toLowerCase().replace(/\.$/,"");return t[0]="",r+n+t.reduce((function(e,r){switch(r){case"..":e.pop();break;case".":break;default:e.push(r)}return e}),[]).join("/")}},344:(e,r,t)=>{var n=t(783)(e.id,{locals:!1});e.hot.dispose(n),e.hot.accept(void 0,n)}},d={};function s(e){var r=d[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var t=d[e]={id:e,exports:{}};try{var n={id:e,module:t,factory:c[e],require:s};s.i.forEach((function(e){e(n)})),t=n.module,n.factory.call(t.exports,t,t.exports,n.require)}catch(e){throw t.error=e,e}return t.exports}s.m=c,s.c=d,s.i=[],s.hu=e=>e+"."+s.h()+".hot-update.js",s.miniCssF=e=>{},s.hmrF=()=>"main."+s.h()+".hot-update.json",s.h=()=>"6f299b6d7d0bcc1423b7",s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="solution:",s.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var u=d[l];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==r+o){a=u;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var f=(r,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},(()=>{var e,r,t,n,o={},i=s.c,a=[],c=[],d="idle";function l(e){d=e;for(var r=[],t=0;t<c.length;t++)r[t]=c[t].call(null,e);return Promise.all(r)}function u(e){if(0===r.length)return e();var t=r;return r=[],Promise.all(t).then((function(){return u(e)}))}function f(e){if("idle"!==d)throw new Error("check() is only allowed in idle status");return l("check").then(s.hmrM).then((function(n){return n?l("prepare").then((function(){var o=[];return r=[],t=[],Promise.all(Object.keys(s.hmrC).reduce((function(e,r){return s.hmrC[r](n.c,n.r,n.m,e,t,o),e}),[])).then((function(){return u((function(){return e?h(e):l("ready").then((function(){return o}))}))}))})):l(m()?"ready":"idle").then((function(){return null}))}))}function p(e){return"ready"!==d?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},m();var r=t.map((function(r){return r(e)}));t=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var a,c=l("apply"),d=function(e){a||(a=e)},s=[];return r.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var t=0;t<r.length;t++)s.push(r[t])}})),Promise.all([i,c]).then((function(){return a?l("fail").then((function(){throw a})):n?h(e).then((function(e){return s.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return s}))}))}function m(){if(n)return t||(t=[]),Object.keys(s.hmrI).forEach((function(e){n.forEach((function(r){s.hmrI[e](r,t)}))})),n=void 0,!0}s.hmrD=o,s.i.push((function(h){var m,v,g,y,E=h.module,b=function(t,n){var o=i[n];if(!o)return t;var c=function(r){if(o.hot.active){if(i[r]){var c=i[r].parents;-1===c.indexOf(n)&&c.push(n)}else a=[n],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+n),a=[];return t(r)},s=function(e){return{configurable:!0,enumerable:!0,get:function(){return t[e]},set:function(r){t[e]=r}}};for(var f in t)Object.prototype.hasOwnProperty.call(t,f)&&"e"!==f&&Object.defineProperty(c,f,s(f));return c.e=function(e){return function(e){switch(d){case"ready":return l("prepare"),r.push(e),u((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(t.e(e))},c}(h.require,h.id);E.hot=(m=h.id,v=E,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:g=e!==m,_requireSelf:function(){a=v.parents.slice(),e=g?void 0:m,s(m)},active:!0,accept:function(e,r,t){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._acceptedDependencies[e[n]]=r||function(){},y._acceptedErrorHandlers[e[n]]=t;else y._acceptedDependencies[e]=r||function(){},y._acceptedErrorHandlers[e]=t},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)y._declinedDependencies[e[r]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=y._disposeHandlers.indexOf(e);r>=0&&y._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,d){case"idle":t=[],Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)})),l("ready");break;case"ready":Object.keys(s.hmrI).forEach((function(e){s.hmrI[e](m,t)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:f,apply:p,status:function(e){if(!e)return d;c.push(e)},addStatusHandler:function(e){c.push(e)},removeStatusHandler:function(e){var r=c.indexOf(e);r>=0&&c.splice(r,1)},data:o[m]},e=void 0,y),E.parents=a,E.children=[],a=[],h.require=b})),s.hmrC={},s.hmrI={}})(),(()=>{var e;s.g.importScripts&&(e=s.g.location+"");var r=s.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),s.p=e})(),t=(e,r,t,n)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)t();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),n(d)}},o.href=r,document.head.appendChild(o),o},n=(e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(a=t[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===r)return a}},o=[],i=[],a=e=>({dispose:()=>{for(var e=0;e<o.length;e++){var r=o[e];r.parentNode&&r.parentNode.removeChild(r)}o.length=0},apply:()=>{for(var e=0;e<i.length;e++)i[e].rel="stylesheet";i.length=0}}),s.hmrC.miniCss=(e,r,c,d,l,u)=>{l.push(a),e.forEach((e=>{var r=s.miniCssF(e),a=s.p+r,c=n(r,a);c&&d.push(new Promise(((r,n)=>{var d=t(e,a,(()=>{d.as="style",d.rel="preload",r()}),n);o.push(c),i.push(d)})))}))},(()=>{var e,r,t,n,o=s.hmrS_jsonp=s.hmrS_jsonp||{179:0},i={};function a(e){return new Promise(((r,t)=>{i[e]=r;var n=s.p+s.hu(e),o=new Error;s.l(n,(r=>{if(i[e]){i[e]=void 0;var n=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+n+": "+a+")",o.name="ChunkLoadError",o.type=n,o.request=a,t(o)}}))}))}function c(i){function a(e){for(var r=[e],t={},n=r.map((function(e){return{chain:[e],id:e}}));n.length>0;){var o=n.pop(),i=o.id,a=o.chain,d=s.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<d.parents.length;l++){var u=d.parents[l],f=s.c[u];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([u]),moduleId:i,parentId:u};-1===r.indexOf(u)&&(f.hot._acceptedDependencies[i]?(t[u]||(t[u]=[]),c(t[u],[i])):(delete t[u],r.push(u),n.push({chain:a.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:t}}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];-1===e.indexOf(n)&&e.push(n)}}s.f&&delete s.f.jsonpHmr,e=void 0;var d={},l=[],u={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in r)if(s.o(r,p)){var h,m=r[p],v=!1,g=!1,y=!1,E="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(E="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+E));break;case"declined":i.onDeclined&&i.onDeclined(h),i.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+E));break;case"unaccepted":i.onUnaccepted&&i.onUnaccepted(h),i.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+E));break;case"accepted":i.onAccepted&&i.onAccepted(h),g=!0;break;case"disposed":i.onDisposed&&i.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(g)for(p in u[p]=m,c(l,h.outdatedModules),h.outdatedDependencies)s.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));y&&(c(l,[h.moduleId]),u[p]=f)}r=void 0;for(var b,_=[],w=0;w<l.length;w++){var H=l[w],I=s.c[H];I&&(I.hot._selfAccepted||I.hot._main)&&u[H]!==f&&!I.hot._selfInvalidated&&_.push({module:H,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete o[e]})),t=void 0;for(var r,n=l.slice();n.length>0;){var i=n.pop(),a=s.c[i];if(a){var c={},u=a.hot._disposeHandlers;for(w=0;w<u.length;w++)u[w].call(null,c);for(s.hmrD[i]=c,a.hot.active=!1,delete s.c[i],delete d[i],w=0;w<a.children.length;w++){var f=s.c[a.children[w]];f&&(e=f.parents.indexOf(i))>=0&&f.parents.splice(e,1)}}}for(var p in d)if(s.o(d,p)&&(a=s.c[p]))for(b=d[p],w=0;w<b.length;w++)r=b[w],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(e){for(var r in u)s.o(u,r)&&(s.m[r]=u[r]);for(var t=0;t<n.length;t++)n[t](s);for(var o in d)if(s.o(d,o)){var a=s.c[o];if(a){b=d[o];for(var c=[],f=[],p=[],h=0;h<b.length;h++){var m=b[h],v=a.hot._acceptedDependencies[m],g=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(g),p.push(m)}}for(var y=0;y<c.length;y++)try{c[y].call(null,b)}catch(r){if("function"==typeof f[y])try{f[y](r,{moduleId:o,dependencyId:p[y]})}catch(t){i.onErrored&&i.onErrored({type:"accept-error-handler-errored",moduleId:o,dependencyId:p[y],error:t,originalError:r}),i.ignoreErrored||(e(t),e(r))}else i.onErrored&&i.onErrored({type:"accept-errored",moduleId:o,dependencyId:p[y],error:r}),i.ignoreErrored||e(r)}}}for(var E=0;E<_.length;E++){var w=_[E],H=w.module;try{w.require(H)}catch(r){if("function"==typeof w.errorHandler)try{w.errorHandler(r,{moduleId:H,module:s.c[H]})}catch(t){i.onErrored&&i.onErrored({type:"self-accept-error-handler-errored",moduleId:H,error:t,originalError:r}),i.ignoreErrored||(e(t),e(r))}else i.onErrored&&i.onErrored({type:"self-accept-errored",moduleId:H,error:r}),i.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdatesolution=(e,t,o)=>{for(var a in t)s.o(t,a)&&(r[a]=t[a]);o&&n.push(o),i[e]&&(i[e](),i[e]=void 0)},s.hmrI.jsonp=function(e,o){r||(r={},n=[],t=[],o.push(c)),s.o(r,e)||(r[e]=s.m[e])},s.hmrC.jsonp=function(i,d,l,u,f,p){f.push(c),e={},t=d,r=l.reduce((function(e,r){return e[r]=!1,e}),{}),n=[],i.forEach((function(r){s.o(o,r)&&void 0!==o[r]&&(u.push(a(r)),e[r]=!0)})),s.f&&(s.f.jsonpHmr=function(r,t){e&&!s.o(e,r)&&s.o(o,r)&&void 0!==o[r]&&(t.push(a(r)),e[r]=!0)})},s.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(s.p+s.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))}})(),s(211)})();