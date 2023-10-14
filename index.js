// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).isMostlySafeCast=n()}(this,(function(){"use strict";function t(t){return Object.keys(Object(t))}var n=void 0!==Object.keys;var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var i=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&o.call(t,n)}var c="function"==typeof Symbol?Symbol:void 0,a="function"==typeof c?c.toStringTag:"";var l,f=r()?function(t){var n,e,r;if(null==t)return i.call(t);e=t[a],n=u(t,a);try{t[a]=void 0}catch(n){return i.call(t)}return r=i.call(t),n?t[a]=e:delete t[a],r}:function(t){return i.call(t)};function p(t){return"[object Arguments]"===f(t)}l=function(){return p(arguments)}();var s=l,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var g=Object.defineProperty;function b(t){return"number"==typeof t}function v(t){var n,e="";for(n=0;n<t;n++)e+="0";return e}function m(t,n,e){var r=!1,i=n-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(r=!0,t=t.substr(1)),t=e?t+v(i):v(i)+t,r&&(t="-"+t)),t}var d=String.prototype.toLowerCase,h=String.prototype.toUpperCase;function w(t){var n,e,r;switch(t.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(e=t.arg,r=parseInt(e,10),!isFinite(r)){if(!b(e))throw new Error("invalid integer. Value: "+e);r=0}return r<0&&("u"===t.specifier||10!==n)&&(r=4294967295+r+1),r<0?(e=(-r).toString(n),t.precision&&(e=m(e,t.precision,t.padRight)),e="-"+e):(e=r.toString(n),r||t.precision?t.precision&&(e=m(e,t.precision,t.padRight)):e="",t.sign&&(e=t.sign+e)),16===n&&(t.alternate&&(e="0x"+e),e=t.specifier===h.call(t.specifier)?h.call(e):d.call(e)),8===n&&t.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function j(t){return"string"==typeof t}var _=Math.abs,O=String.prototype.toLowerCase,x=String.prototype.toUpperCase,S=String.prototype.replace,E=/e\+(\d)$/,T=/e-(\d)$/,I=/^(\d+)$/,P=/^(\d+)e/,A=/\.0$/,k=/\.0*e/,V=/(\..*[^0])0*e/;function N(t){var n,e,r=parseFloat(t.arg);if(!isFinite(r)){if(!b(t.arg))throw new Error("invalid floating-point number. Value: "+e);r=t.arg}switch(t.specifier){case"e":case"E":e=r.toExponential(t.precision);break;case"f":case"F":e=r.toFixed(t.precision);break;case"g":case"G":_(r)<1e-4?((n=t.precision)>0&&(n-=1),e=r.toExponential(n)):e=r.toPrecision(t.precision),t.alternate||(e=S.call(e,V,"$1e"),e=S.call(e,k,"e"),e=S.call(e,A,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return e=S.call(e,E,"e+0$1"),e=S.call(e,T,"e-0$1"),t.alternate&&(e=S.call(e,I,"$1."),e=S.call(e,P,"$1.e")),r>=0&&t.sign&&(e=t.sign+e),e=t.specifier===x.call(t.specifier)?x.call(e):O.call(e)}function F(t){var n,e="";for(n=0;n<t;n++)e+=" ";return e}function B(t,n,e){var r=n-t.length;return r<0?t:t=e?t+F(r):F(r)+t}var L=String.fromCharCode,C=isNaN,G=Array.isArray;function Y(t){var n={};return n.specifier=t.specifier,n.precision=void 0===t.precision?1:t.precision,n.width=t.width,n.flags=t.flags||"",n.mapping=t.mapping,n}function M(t){var n,e,r,i,o,u,c,a,l;if(!G(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,a=0;a<t.length;a++)if(j(r=t[a]))u+=r;else{if(n=void 0!==r.precision,!(r=Y(r)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+a+"`. Value: `"+r+"`.");for(r.mapping&&(c=r.mapping),e=r.flags,l=0;l<e.length;l++)switch(i=e.charAt(l)){case" ":r.sign=" ";break;case"+":r.sign="+";break;case"-":r.padRight=!0,r.padZeros=!1;break;case"0":r.padZeros=e.indexOf("-")<0;break;case"#":r.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===r.width){if(r.width=parseInt(arguments[c],10),c+=1,C(r.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+r.width+"`.");r.width<0&&(r.padRight=!0,r.width=-r.width)}if(n&&"*"===r.precision){if(r.precision=parseInt(arguments[c],10),c+=1,C(r.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+r.precision+"`.");r.precision<0&&(r.precision=1,n=!1)}switch(r.arg=arguments[c],r.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(r.padZeros=!1),r.arg=w(r);break;case"s":r.maxWidth=n?r.precision:-1;break;case"c":if(!C(r.arg)){if((o=parseInt(r.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+r.arg);r.arg=C(o)?String(r.arg):L(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(r.precision=6),r.arg=N(r);break;default:throw new Error("invalid specifier: "+r.specifier)}r.maxWidth>=0&&r.arg.length>r.maxWidth&&(r.arg=r.arg.substring(0,r.maxWidth)),r.padZeros?r.arg=m(r.arg,r.width||r.precision,r.padRight):r.width&&(r.arg=B(r.arg,r.width,r.padRight)),u+=r.arg||"",c+=1}return u}var X=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function W(t){var n={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(n.precision="1"),n}function $(t){var n,e,r,i;for(e=[],i=0,r=X.exec(t);r;)(n=t.slice(i,X.lastIndex-r[0].length)).length&&e.push(n),e.push(W(r)),i=X.lastIndex,r=X.exec(t);return(n=t.slice(i)).length&&e.push(n),e}function R(t){return"string"==typeof t}function H(t){var n,e,r;if(!R(t))throw new TypeError(H("invalid argument. First argument must be a string. Value: `%s`.",t));for(n=$(t),(e=new Array(arguments.length))[0]=n,r=1;r<e.length;r++)e[r]=arguments[r];return M.apply(null,e)}var U,Z=Object.prototype,D=Z.toString,z=Z.__defineGetter__,q=Z.__defineSetter__,J=Z.__lookupGetter__,K=Z.__lookupSetter__;U=function(){try{return y({},"x",{}),!0}catch(t){return!1}}()?g:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===D.call(t))throw new TypeError(H("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(H("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(J.call(t,n)||K.call(t,n)?(r=t.__proto__,t.__proto__=Z,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&z&&z.call(t,n,e.get),u&&q&&q.call(t,n,e.set),t};var Q=U;function tt(t,n,e){Q(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function nt(t){return"string"==typeof t}var et=String.prototype.valueOf;var rt=r();function it(t){return"object"==typeof t&&(t instanceof String||(rt?function(t){try{return et.call(t),!0}catch(t){return!1}}(t):"[object String]"===f(t)))}function ot(t){return nt(t)||it(t)}function ut(t){return"number"==typeof t}tt(ot,"isPrimitive",nt),tt(ot,"isObject",it);var ct=Number,at=ct.prototype.toString;var lt=r();function ft(t){return"object"==typeof t&&(t instanceof ct||(lt?function(t){try{return at.call(t),!0}catch(t){return!1}}(t):"[object Number]"===f(t)))}function pt(t){return ut(t)||ft(t)}function st(t){return t!=t}function yt(t){return ut(t)&&st(t)}function gt(t){return ft(t)&&st(t.valueOf())}function bt(t){return yt(t)||gt(t)}tt(pt,"isPrimitive",ut),tt(pt,"isObject",ft),tt(bt,"isPrimitive",yt),tt(bt,"isObject",gt);var vt=Number.POSITIVE_INFINITY,mt=ct.NEGATIVE_INFINITY,dt=Math.floor;function ht(t){return dt(t)===t}function wt(t){return t<vt&&t>mt&&ht(t)}function jt(t){return ut(t)&&wt(t)}function _t(t){return ft(t)&&wt(t.valueOf())}function Ot(t){return jt(t)||_t(t)}tt(Ot,"isPrimitive",jt),tt(Ot,"isObject",_t);var xt=Object.prototype.propertyIsEnumerable;var St=!xt.call("beep","0");function Et(t,n){var e;return null!=t&&(!(e=xt.call(t,n))&&St&&ot(t)?!yt(n=+n)&&jt(n)&&n>=0&&n<t.length:e)}var Tt=Array.isArray?Array.isArray:function(t){return"[object Array]"===f(t)};var It=s?p:function(t){return null!==t&&"object"==typeof t&&!Tt(t)&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=4294967295&&u(t,"callee")&&!Et(t,"callee")},Pt=Array.prototype.slice;function At(t){return null!==t&&"object"==typeof t}tt(At,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(H("invalid argument. Must provide a function. Value: `%s`.",t));return function(n){var e,r;if(!Tt(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(At));var kt=Et((function(){}),"prototype"),Vt=!Et({toString:null},"toString");function Nt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&ht(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,n,e){var r,i;if(!Nt(t)&&!nt(t))throw new TypeError(H("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(r=t.length))return-1;if(3===arguments.length){if(!jt(e))throw new TypeError(H("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(bt(n)){for(;i<r;i++)if(bt(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Bt=/./;function Lt(t){return"boolean"==typeof t}var Ct=Boolean,Gt=Boolean.prototype.toString;var Yt=r();function Mt(t){return"object"==typeof t&&(t instanceof Ct||(Yt?function(t){try{return Gt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===f(t)))}function Xt(t){return Lt(t)||Mt(t)}function Wt(){return new Function("return this;")()}tt(Xt,"isPrimitive",Lt),tt(Xt,"isObject",Mt);var $t="object"==typeof self?self:null,Rt="object"==typeof window?window:null,Ht="object"==typeof global?global:null,Ut="object"==typeof globalThis?globalThis:null;var Zt=function(t){if(arguments.length){if(!Lt(t))throw new TypeError(H("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return Wt()}if(Ut)return Ut;if($t)return $t;if(Rt)return Rt;if(Ht)return Ht;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Zt.document&&Zt.document.childNodes,zt=Int8Array;function qt(){return/^\s*function\s*([^(]*)/i}var Jt=/^\s*function\s*([^(]*)/i;function Kt(t){var n,e,r,i;if(("Object"===(e=f(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Jt.exec(r.toString()))return n[1]}return At(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}tt(qt,"REGEXP",Jt);var Qt="function"==typeof Bt||"object"==typeof zt||"function"==typeof Dt?function(t){return Kt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Kt(t).toLowerCase():n};function tn(t){return t.constructor&&t.constructor.prototype===t}var nn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],en="undefined"==typeof window?void 0:window;var rn=function(){var t;if("undefined"===Qt(en))return!1;for(t in en)try{-1===Ft(nn,t)&&u(en,t)&&null!==en[t]&&"object"===Qt(en[t])&&tn(en[t])}catch(t){return!0}return!1}(),on="undefined"!=typeof window;var un,cn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];un=n?function(){return 2!==(t(arguments)||"").length}(1,2)?function(n){return It(n)?t(Pt.call(n)):t(n)}:t:function(t){var n,e,r,i,o,c,a;if(i=[],It(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!u(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!At(t))return i;e=kt&&r}for(o in t)e&&"prototype"===o||!u(t,o)||i.push(String(o));if(Vt)for(n=function(t){if(!1===on&&!rn)return tn(t);try{return tn(t)}catch(t){return!1}}(t),a=0;a<cn.length;a++)c=cn[a],n&&"constructor"===c||!u(t,c)||i.push(String(c));return i};var an=un;function ln(t){return Object.keys(Object(t))}var fn=void 0!==Object.keys;var pn="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function sn(){return pn&&"symbol"==typeof Symbol.toStringTag}var yn=Object.prototype.toString;var gn=Object.prototype.hasOwnProperty;function bn(t,n){return null!=t&&gn.call(t,n)}var vn="function"==typeof Symbol?Symbol.toStringTag:"";var mn,dn=sn()?function(t){var n,e,r;if(null==t)return yn.call(t);e=t[vn],n=bn(t,vn);try{t[vn]=void 0}catch(n){return yn.call(t)}return r=yn.call(t),n?t[vn]=e:delete t[vn],r}:function(t){return yn.call(t)};function hn(t){return"[object Arguments]"===dn(t)}mn=function(){return hn(arguments)}();var wn=mn,jn="function"==typeof Object.defineProperty?Object.defineProperty:null;var _n,On=Object.defineProperty,xn=Object.prototype,Sn=xn.toString,En=xn.__defineGetter__,Tn=xn.__defineSetter__,In=xn.__lookupGetter__,Pn=xn.__lookupSetter__;_n=function(){try{return jn({},"x",{}),!0}catch(t){return!1}}()?On:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Sn.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Sn.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(In.call(t,n)||Pn.call(t,n)?(r=t.__proto__,t.__proto__=xn,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&En&&En.call(t,n,e.get),u&&Tn&&Tn.call(t,n,e.set),t};var An=_n;function kn(t,n,e){An(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Vn(t){return"string"==typeof t}var Nn=String.prototype.valueOf;var Fn=sn();function Bn(t){return"object"==typeof t&&(t instanceof String||(Fn?function(t){try{return Nn.call(t),!0}catch(t){return!1}}(t):"[object String]"===dn(t)))}function Ln(t){return Vn(t)||Bn(t)}function Cn(t){return"number"==typeof t}kn(Ln,"isPrimitive",Vn),kn(Ln,"isObject",Bn);var Gn=Number,Yn=Gn.prototype.toString;var Mn=sn();function Xn(t){return"object"==typeof t&&(t instanceof Gn||(Mn?function(t){try{return Yn.call(t),!0}catch(t){return!1}}(t):"[object Number]"===dn(t)))}function Wn(t){return Cn(t)||Xn(t)}function $n(t){return t!=t}function Rn(t){return Cn(t)&&$n(t)}function Hn(t){return Xn(t)&&$n(t.valueOf())}function Un(t){return Rn(t)||Hn(t)}kn(Wn,"isPrimitive",Cn),kn(Wn,"isObject",Xn),kn(Un,"isPrimitive",Rn),kn(Un,"isObject",Hn);var Zn=Number.POSITIVE_INFINITY,Dn=Gn.NEGATIVE_INFINITY,zn=Math.floor;function qn(t){return zn(t)===t}function Jn(t){return t<Zn&&t>Dn&&qn(t)}function Kn(t){return Cn(t)&&Jn(t)}function Qn(t){return Xn(t)&&Jn(t.valueOf())}function te(t){return Kn(t)||Qn(t)}kn(te,"isPrimitive",Kn),kn(te,"isObject",Qn);var ne=Object.prototype.propertyIsEnumerable;var ee=!ne.call("beep","0");function re(t,n){var e;return null!=t&&(!(e=ne.call(t,n))&&ee&&Ln(t)?!Rn(n=+n)&&Kn(n)&&n>=0&&n<t.length:e)}var ie=Array.isArray?Array.isArray:function(t){return"[object Array]"===dn(t)};var oe=wn?hn:function(t){return null!==t&&"object"==typeof t&&!ie(t)&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=4294967295&&bn(t,"callee")&&!re(t,"callee")},ue=Array.prototype.slice;function ce(t){return null!==t&&"object"==typeof t}kn(ce,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!ie(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(ce));var ae=re((function(){}),"prototype"),le=!re({toString:null},"toString");function fe(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&qn(t.length)&&t.length>=0&&t.length<=9007199254740991}function pe(t,n,e){var r,i;if(!fe(t)&&!Vn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Kn(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Un(n)){for(;i<r;i++)if(Un(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var se=/./;function ye(t){return"boolean"==typeof t}var ge=Boolean.prototype.toString;var be=sn();function ve(t){return"object"==typeof t&&(t instanceof Boolean||(be?function(t){try{return ge.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===dn(t)))}function me(t){return ye(t)||ve(t)}function de(){return new Function("return this;")()}kn(me,"isPrimitive",ye),kn(me,"isObject",ve);var he="object"==typeof self?self:null,we="object"==typeof window?window:null,je="object"==typeof global?global:null;var _e=function(t){if(arguments.length){if(!ye(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return de()}if(he)return he;if(we)return we;if(je)return je;throw new Error("unexpected error. Unable to resolve global object.")}(),Oe=_e.document&&_e.document.childNodes,xe=Int8Array;function Se(){return/^\s*function\s*([^(]*)/i}var Ee=/^\s*function\s*([^(]*)/i;function Te(t){var n,e,r,i;if(("Object"===(e=dn(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=Ee.exec(r.toString()))return n[1]}return ce(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}kn(Se,"REGEXP",Ee);var Ie="function"==typeof se||"object"==typeof xe||"function"==typeof Oe?function(t){return Te(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Te(t).toLowerCase():n};function Pe(t){return t.constructor&&t.constructor.prototype===t}var Ae=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ke="undefined"==typeof window?void 0:window;var Ve=function(){var t;if("undefined"===Ie(ke))return!1;for(t in ke)try{-1===pe(Ae,t)&&bn(ke,t)&&null!==ke[t]&&"object"===Ie(ke[t])&&Pe(ke[t])}catch(t){return!0}return!1}(),Ne="undefined"!=typeof window;var Fe,Be=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Fe=fn?function(){return 2!==(ln(arguments)||"").length}(1,2)?function(t){return oe(t)?ln(ue.call(t)):ln(t)}:ln:function(t){var n,e,r,i,o,u,c;if(i=[],oe(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!bn(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!ce(t))return i;e=ae&&r}for(o in t)e&&"prototype"===o||!bn(t,o)||i.push(String(o));if(le)for(n=function(t){if(!1===Ne&&!Ve)return Pe(t);try{return Pe(t)}catch(t){return!1}}(t),c=0;c<Be.length;c++)u=Be[c],n&&"constructor"===u||!bn(t,u)||i.push(String(u));return i};var Le=Fe;function Ce(t){return"function"===Ie(t)}var Ge,Ye=Object.getPrototypeOf;Ge=Ce(Object.getPrototypeOf)?Ye:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===dn(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Me=Ge;var Xe=Object.prototype;function We(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!ie(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Me(t))}(t),!n||!bn(t,"constructor")&&bn(n,"constructor")&&Ce(n.constructor)&&"[object Function]"===dn(n.constructor)&&bn(n,"isPrototypeOf")&&Ce(n.isPrototypeOf)&&(n===Xe||function(t){var n;for(n in t)if(!bn(t,n))return!1;return!0}(t)))}var $e="function"==typeof Object.defineProperty?Object.defineProperty:null;var Re,He=Object.defineProperty,Ue=Object.prototype,Ze=Ue.toString,De=Ue.__defineGetter__,ze=Ue.__defineSetter__,qe=Ue.__lookupGetter__,Je=Ue.__lookupSetter__;Re=function(){try{return $e({},"x",{}),!0}catch(t){return!1}}()?He:function(t,n,e){var r,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===Ze.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===Ze.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((i="value"in e)&&(qe.call(t,n)||Je.call(t,n)?(r=t.__proto__,t.__proto__=Ue,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),o="get"in e,u="set"in e,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&De&&De.call(t,n,e.get),u&&ze&&ze.call(t,n,e.set),t};var Ke=Re;function Qe(t,n,e){Ke(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var tr=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function nr(){return tr.slice()}var er=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function rr(){return er.slice()}function ir(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function or(t,n,e){Ke(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function ur(t){return Object.keys(Object(t))}var cr=void 0!==Object.keys;var ar="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function lr(){return ar&&"symbol"==typeof Symbol.toStringTag}var fr=Object.prototype.toString;var pr=Object.prototype.hasOwnProperty;function sr(t,n){return null!=t&&pr.call(t,n)}var yr="function"==typeof Symbol?Symbol.toStringTag:"";var gr,br=lr()?function(t){var n,e,r;if(null==t)return fr.call(t);e=t[yr],n=sr(t,yr);try{t[yr]=void 0}catch(n){return fr.call(t)}return r=fr.call(t),n?t[yr]=e:delete t[yr],r}:function(t){return fr.call(t)};function vr(t){return"[object Arguments]"===br(t)}gr=function(){return vr(arguments)}();var mr=gr;function dr(t){return"string"==typeof t}var hr=String.prototype.valueOf;var wr=lr();function jr(t){return"object"==typeof t&&(t instanceof String||(wr?function(t){try{return hr.call(t),!0}catch(t){return!1}}(t):"[object String]"===br(t)))}function _r(t){return dr(t)||jr(t)}function Or(t){return"number"==typeof t}Qe(_r,"isPrimitive",dr),Qe(_r,"isObject",jr);var xr=Number,Sr=xr.prototype.toString;var Er=lr();function Tr(t){return"object"==typeof t&&(t instanceof xr||(Er?function(t){try{return Sr.call(t),!0}catch(t){return!1}}(t):"[object Number]"===br(t)))}function Ir(t){return Or(t)||Tr(t)}function Pr(t){return t!=t}function Ar(t){return Or(t)&&Pr(t)}function kr(t){return Tr(t)&&Pr(t.valueOf())}function Vr(t){return Ar(t)||kr(t)}Qe(Ir,"isPrimitive",Or),Qe(Ir,"isObject",Tr),Qe(Vr,"isPrimitive",Ar),Qe(Vr,"isObject",kr);var Nr=Number.POSITIVE_INFINITY,Fr=xr.NEGATIVE_INFINITY,Br=Math.floor;function Lr(t){return Br(t)===t}function Cr(t){return t<Nr&&t>Fr&&Lr(t)}function Gr(t){return Or(t)&&Cr(t)}function Yr(t){return Tr(t)&&Cr(t.valueOf())}function Mr(t){return Gr(t)||Yr(t)}Qe(Mr,"isPrimitive",Gr),Qe(Mr,"isObject",Yr);var Xr=Object.prototype.propertyIsEnumerable;var Wr=!Xr.call("beep","0");function $r(t,n){var e;return null!=t&&(!(e=Xr.call(t,n))&&Wr&&_r(t)?!Ar(n=+n)&&Gr(n)&&n>=0&&n<t.length:e)}var Rr=Array.isArray?Array.isArray:function(t){return"[object Array]"===br(t)};var Hr=mr?vr:function(t){return null!==t&&"object"==typeof t&&!Rr(t)&&"number"==typeof t.length&&Lr(t.length)&&t.length>=0&&t.length<=4294967295&&sr(t,"callee")&&!$r(t,"callee")},Ur=Array.prototype.slice;function Zr(t){return null!==t&&"object"==typeof t}Qe(Zr,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Rr(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(Zr));var Dr=$r((function(){}),"prototype"),zr=!$r({toString:null},"toString");function qr(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&Lr(t.length)&&t.length>=0&&t.length<=9007199254740991}function Jr(t,n,e){var r,i;if(!qr(t)&&!dr(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!Gr(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(Vr(n)){for(;i<r;i++)if(Vr(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var Kr=/./;function Qr(t){return"boolean"==typeof t}var ti=Boolean.prototype.toString;var ni=lr();function ei(t){return"object"==typeof t&&(t instanceof Boolean||(ni?function(t){try{return ti.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===br(t)))}function ri(t){return Qr(t)||ei(t)}function ii(){return new Function("return this;")()}Qe(ri,"isPrimitive",Qr),Qe(ri,"isObject",ei);var oi="object"==typeof self?self:null,ui="object"==typeof window?window:null,ci="object"==typeof global?global:null;var ai=function(t){if(arguments.length){if(!Qr(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return ii()}if(oi)return oi;if(ui)return ui;if(ci)return ci;throw new Error("unexpected error. Unable to resolve global object.")}(),li=ai.document&&ai.document.childNodes,fi=Int8Array;function pi(){return/^\s*function\s*([^(]*)/i}var si=/^\s*function\s*([^(]*)/i;function yi(t){var n,e,r,i;if(("Object"===(e=br(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=si.exec(r.toString()))return n[1]}return Zr(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}Qe(pi,"REGEXP",si);var gi="function"==typeof Kr||"object"==typeof fi||"function"==typeof li?function(t){return yi(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?yi(t).toLowerCase():n};function bi(t){return t.constructor&&t.constructor.prototype===t}var vi=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],mi="undefined"==typeof window?void 0:window;var di=function(){var t;if("undefined"===gi(mi))return!1;for(t in mi)try{-1===Jr(vi,t)&&sr(mi,t)&&null!==mi[t]&&"object"===gi(mi[t])&&bi(mi[t])}catch(t){return!0}return!1}(),hi="undefined"!=typeof window;var wi,ji=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];wi=cr?function(){return 2!==(ur(arguments)||"").length}(1,2)?function(t){return Hr(t)?ur(Ur.call(t)):ur(t)}:ur:function(t){var n,e,r,i,o,u,c;if(i=[],Hr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!sr(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!Zr(t))return i;e=Dr&&r}for(o in t)e&&"prototype"===o||!sr(t,o)||i.push(String(o));if(zr)for(n=function(t){if(!1===hi&&!di)return bi(t);try{return bi(t)}catch(t){return!1}}(t),c=0;c<ji.length;c++)u=ji[c],n&&"constructor"===u||!sr(t,u)||i.push(String(u));return i};var _i=wi;Qe(rr,"enum",ir),function(t,n){var e,r,i;for(e=_i(n),i=0;i<e.length;i++)or(t,r=e[i],n[r])}(rr,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Oi={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function xi(){return{bool:Oi.bool,int8:Oi.int8,uint8:Oi.uint8,uint8c:Oi.uint8c,int16:Oi.int16,uint16:Oi.uint16,int32:Oi.int32,uint32:Oi.uint32,int64:Oi.int64,uint64:Oi.uint64,float32:Oi.float32,float64:Oi.float64,complex64:Oi.complex64,complex128:Oi.complex128,binary:Oi.binary,generic:Oi.generic,notype:Oi.notype,userdefined_type:Oi.userdefined_type}}Qe(nr,"enum",xi),function(t,n){var e,r,i;for(e=_i(n),i=0;i<e.length;i++)or(t,r=e[i],n[r])}(nr,xi());var Si=function(t,n){var e,r,i,o,u,c,a,l=!0;if(!ce(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!We(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(bn(n,"duplicates")&&!ye(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Le(t)).length,u={},l)for(a=0;a<r;a++)bn(u,o=t[i=e[a]])?(c=u[o],ie(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(a=0;a<r;a++)u[t[i=e[a]]]=i;return u}(xi(),{duplicates:!1});var Ei={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function Ti(){var t;return 0===arguments.length?Ei.all.slice():(t=Ei[arguments[0]])?t.slice():[]}function Ii(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Pi(t,n,e){Q(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}tt(Ti,"enum",Ii),function(t,n){var e,r,i;for(e=an(n),i=0;i<e.length;i++)Pi(t,r=e[i],n[r])}(Ti,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Ai={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function ki(t){var n=typeof t;return"string"===n?null===function(t){var n=Ai[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Si[t];return"string"==typeof n?n:null}(t):null}var Vi,Ni={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Fi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=an(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Bi(){var t,n,e,r,i,o,u,c,a;for(e={},n=(t=an(Ni)).length,a=0;a<n;a++){for(i=t[a],u=Ni[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Li=function(t){return 0===arguments.length?Fi():(void 0===Vi&&(Vi=Bi()),t=ki(t),u(Vi,t)?Vi[t].slice():null)}();return function(t,n){return t===n||Li[t][n]>0}}));
//# sourceMappingURL=index.js.map
