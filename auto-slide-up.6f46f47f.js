parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fXTw":[function(require,module,exports) {
(function(){for(var e=document.querySelectorAll("[data-x]"),t=0;t<e.length;t++)e[t].classList.add("offSet");function o(){for(var e=document.querySelectorAll("[data-x]"),t=0,o=1;o<e.length;o++)Math.abs(e[o].offsetTop-window.scrollY)<Math.abs(e[t].offsetTop-window.scrollY)&&(t=o);e[t].classList.remove("offSet");for(var r=e[t].id,l=document.querySelector('a[href="#'+r+'"]').parentNode,n=l.parentNode.children,a=0;a<n.length;a++)n[a].classList.remove("highLight");l.classList.add("highLight")}setTimeout(function(){o()},1500),window.addEventListener("scroll",function(){o()});for(var r=document.querySelectorAll("nav > ul > li"),l=0;l<r.length;l++)r[l].onmouseenter=function(e){li=e.currentTarget.classList.add("active")};for(var n=0;n<r.length;n++)r[n].onmouseleave=function(e){li=e.currentTarget.classList.remove("active")}}).call();
},{}]},{},["fXTw"], null)
//# sourceMappingURL=/CSS_resume/auto-slide-up.6f46f47f.js.map