// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).ndarray=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,i=n.toString,o=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,s=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var f,c,l,h;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((c="value"in r)&&(u.call(t,e)||s.call(t,e)?(f=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=f):t[e]=r.value),l="get"in r,h="set"in r,c&&(l||h))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(t,e,r.get),h&&a&&a.call(t,e,r.set),t};var f=e;function c(t,e,r){f(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var l=Math.floor;function h(t){return l(t)===t}function p(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&h(t.length)&&t.length>=0&&t.length<=9007199254740991}function g(t){return"number"==typeof t}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return d&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function b(t,e){return null!=t&&_.call(t,e)}var v="function"==typeof Symbol?Symbol.toStringTag:"";var w=y()?function(t){var e,r,n;if(null==t)return m.call(t);r=t[v],e=b(t,v);try{t[v]=void 0}catch(e){return m.call(t)}return n=m.call(t),e?t[v]=r:delete t[v],n}:function(t){return m.call(t)},E=Number,O=E.prototype.toString;var j=y();function A(t){return"object"==typeof t&&(t instanceof E||(j?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function I(t){return g(t)||A(t)}c(I,"isPrimitive",g),c(I,"isObject",A);var T=Number.POSITIVE_INFINITY,x=E.NEGATIVE_INFINITY;function S(t){return t<T&&t>x&&h(t)}function U(t){return g(t)&&S(t)}function N(t){return A(t)&&S(t.valueOf())}function R(t){return U(t)||N(t)}function V(t){return U(t)&&t>=0}function F(t){return N(t)&&t.valueOf()>=0}function L(t){return V(t)||F(t)}c(R,"isPrimitive",U),c(R,"isObject",N),c(L,"isPrimitive",V),c(L,"isObject",F);function M(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&h(t.length)&&t.length>=0&&t.length<=4294967295}(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}var B=M(L.isPrimitive),k=M(L.isObject),P=M(L);c(P,"primitives",B),c(P,"objects",k);var C=M(R.isPrimitive),D=M(R.isObject),Y=M(R);c(Y,"primitives",C),c(Y,"objects",D);var G=/./;function $(t){return"boolean"==typeof t}var J=Boolean.prototype.toString;var W=y();function X(t){return"object"==typeof t&&(t instanceof Boolean||(W?function(t){try{return J.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function Z(t){return $(t)||X(t)}function z(){return new Function("return this;")()}c(Z,"isPrimitive",$),c(Z,"isObject",X);var q="object"==typeof self?self:null,H="object"==typeof window?window:null,K="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Q="object"==typeof K?K:null;function tt(t){if(arguments.length){if(!$(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return z()}if(q)return q;if(H)return H;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")}var et=tt(),rt=et.document&&et.document.childNodes,nt=Int8Array;function it(){return/^\s*function\s*([^(]*)/i}var ot=/^\s*function\s*([^(]*)/i;c(it,"REGEXP",ot);var at=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};function ut(t){return null!==t&&"object"==typeof t}var st=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!at(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(ut);function ft(t){var e,r,n,i;if(("Object"===(r=w(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=ot.exec(n.toString()))return e[1]}return ut(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}c(ut,"isObjectLikeArray",st);var ct="function"==typeof G||"object"==typeof nt||"function"==typeof rt?function(t){return ft(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?ft(t).toLowerCase():e};function lt(t){return"function"===ct(t)}var ht=["row-major","column-major"];function pt(){return ht.slice()}function gt(){return{"row-major":1,"column-major":2}}c(pt,"enum",gt);var dt=pt(),yt=dt.length;function mt(t){var e;for(e=0;e<yt;e++)if(t===dt[e])return!0;return!1}var _t=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function bt(){return _t.slice()}function vt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function wt(t,e,r){f(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}function Et(t){return Object.keys(Object(t))}var Ot,jt=void 0!==Object.keys;function At(t){return"[object Arguments]"===w(t)}Ot=function(){return At(arguments)}();var It=Ot;function Tt(t){return"string"==typeof t}var xt=String.prototype.valueOf;var St=y();function Ut(t){return"object"==typeof t&&(t instanceof String||(St?function(t){try{return xt.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function Nt(t){return Tt(t)||Ut(t)}function Rt(t){return t!=t}function Vt(t){return g(t)&&Rt(t)}function Ft(t){return A(t)&&Rt(t.valueOf())}function Lt(t){return Vt(t)||Ft(t)}c(Nt,"isPrimitive",Tt),c(Nt,"isObject",Ut),c(Lt,"isPrimitive",Vt),c(Lt,"isObject",Ft);var Mt=Object.prototype.propertyIsEnumerable;var Bt=!Mt.call("beep","0");function kt(t,e){var r;return null!=t&&(!(r=Mt.call(t,e))&&Bt&&Nt(t)?!Vt(e=+e)&&U(e)&&e>=0&&e<t.length:r)}var Pt=It?At:function(t){return null!==t&&"object"==typeof t&&!at(t)&&"number"==typeof t.length&&h(t.length)&&t.length>=0&&t.length<=4294967295&&b(t,"callee")&&!kt(t,"callee")},Ct=Array.prototype.slice;var Dt=kt((function(){}),"prototype"),Yt=!kt({toString:null},"toString");function Gt(t,e,r){var n,i;if(!p(t)&&!Tt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!U(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=n)return-1;i=r}else(i=n+r)<0&&(i=0)}else i=0;if(Lt(e)){for(;i<n;i++)if(Lt(t[i]))return i}else for(;i<n;i++)if(t[i]===e)return i;return-1}function $t(t){return t.constructor&&t.constructor.prototype===t}var Jt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Wt="undefined"==typeof window?void 0:window;var Xt=function(){var t;if("undefined"===ct(Wt))return!1;for(t in Wt)try{-1===Gt(Jt,t)&&b(Wt,t)&&null!==Wt[t]&&"object"===ct(Wt[t])&&$t(Wt[t])}catch(t){return!0}return!1}(),Zt="undefined"!=typeof window;var zt,qt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];zt=jt?function(){return 2!==(Et(arguments)||"").length}(1,2)?function(t){return Pt(t)?Et(Ct.call(t)):Et(t)}:Et:function(t){var e,r,n,i,o,a,u;if(i=[],Pt(t)){for(u=0;u<t.length;u++)i.push(u.toString());return i}if("string"==typeof t){if(t.length>0&&!b(t,"0"))for(u=0;u<t.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof t)&&!ut(t))return i;r=Dt&&n}for(o in t)r&&"prototype"===o||!b(t,o)||i.push(String(o));if(Yt)for(e=function(t){if(!1===Zt&&!Xt)return $t(t);try{return $t(t)}catch(t){return!1}}(t),u=0;u<qt.length;u++)a=qt[u],e&&"constructor"===a||!b(t,a)||i.push(String(a));return i};var Ht=zt;c(bt,"enum",vt),function(t,e){var r,n,i;for(r=Ht(e),i=0;i<r.length;i++)wt(t,n=r[i],e[n])}(bt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Kt=bt(),Qt=Kt.length;function te(t){var e;for(e=0;e<Qt;e++)if(t===Kt[e])return!0;return!1}function ee(t,e,r){var n,i,o,a,u;for(n=t.length,i=r,o=r,u=0;u<n;u++){if(0===t[u])return[r,r];(a=e[u])>0?o+=a*(t[u]-1):a<0&&(i+=a*(t[u]-1))}return[i,o]}function re(t,e,r,n){var i=ee(e,r,n);return i[0]>=0&&i[1]<t}function ne(t){var e,r,n;if(0===(e=t.length))return 0;for(r=1,n=0;n<e;n++)r*=t[n];return r}c(ee,"assign",(function(t,e,r,n){var i,o,a,u,s;for(i=t.length,o=r,a=r,s=0;s<i;s++){if(0===t[s])return n[0]=r,n[1]=r,n;(u=e[s])>0?a+=u*(t[s]-1):u<0&&(o+=u*(t[s]-1))}return n[0]=o,n[1]=a,n}));var ie=tt();function oe(t,e,r){f(t,e,{configurable:!1,enumerable:!1,get:r})}var ae={binary:1,bool:1,complex64:8,complex128:16,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32};function ue(t){return Math.abs(t)}function se(t,e){return e&&(2===t||3===t)}function fe(t,e){return e&&(1===t||3===t)}function ce(t){return t.re}function le(t){return t.im}function he(t){return"number"==typeof t}function pe(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function ge(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+pe(i):pe(i)+t,n&&(t="-"+t)),t}var de=String.prototype.toLowerCase,ye=String.prototype.toUpperCase;function me(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!he(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=ge(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=ge(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===ye.call(t.specifier)?ye.call(r):de.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}function _e(t){return"string"==typeof t}var be=Math.abs,ve=String.prototype.toLowerCase,we=String.prototype.toUpperCase,Ee=String.prototype.replace,Oe=/e\+(\d)$/,je=/e-(\d)$/,Ae=/^(\d+)$/,Ie=/^(\d+)e/,Te=/\.0$/,xe=/\.0*e/,Se=/(\..*[^0])0*e/;function Ue(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!he(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":be(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=Ee.call(r,Se,"$1e"),r=Ee.call(r,xe,"e"),r=Ee.call(r,Te,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=Ee.call(r,Oe,"e+0$1"),r=Ee.call(r,je,"e-0$1"),t.alternate&&(r=Ee.call(r,Ae,"$1."),r=Ee.call(r,Ie,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===we.call(t.specifier)?we.call(r):ve.call(r)}function Ne(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}function Re(t,e,r){var n=e-t.length;return n<0?t:t=r?t+Ne(n):Ne(n)+t}var Ve=String.fromCharCode,Fe=isNaN,Le=Array.isArray;function Me(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function Be(t){var e,r,n,i,o,a,u,s,f;if(!Le(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(a="",u=1,s=0;s<t.length;s++)if(_e(n=t[s]))a+=n;else{if(e=void 0!==n.precision,!(n=Me(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),r=n.flags,f=0;f<r.length;f++)switch(i=r.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Fe(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,Fe(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=me(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Fe(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Fe(o)?String(n.arg):Ve(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=Ue(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=ge(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=Re(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var ke=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Pe(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function Ce(t){var e,r,n,i;for(r=[],i=0,n=ke.exec(t);n;)(e=t.slice(i,ke.lastIndex-n[0].length)).length&&r.push(e),r.push(Pe(n)),i=ke.lastIndex,n=ke.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function De(t){return"string"==typeof t}function Ye(t){var e,r,n;if(!De(t))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=Ce(t),(r=new Array(arguments.length))[0]=e,n=1;n<r.length;n++)r[n]=arguments[n];return Be.apply(null,r)}var Ge=/[-\/\\^$*+?.()|[\]{}]/g;var $e=RegExp.prototype.exec;var Je=y();function We(t){return"object"==typeof t&&(t instanceof RegExp||(Je?function(t){try{return $e.call(t),!0}catch(t){return!1}}(t):"[object RegExp]"===w(t)))}function Xe(t,e,r){if(!Tt(t))throw new TypeError(Ye("invalid argument. First argument must be a string. Value: `%s`.",t));if(Tt(e))e=function(t){var e,r;if(!Tt(t))throw new TypeError(Ye("invalid argument. Must provide a regular expression string. Value: `%s`.",t));if("/"===t[0])for(r=t.length-1;r>=0&&"/"!==t[r];r--);return void 0===r||r<=0?t.replace(Ge,"\\$&"):(e=(e=t.substring(1,r)).replace(Ge,"\\$&"),t=t[0]+e+t.substring(r))}(e),e=new RegExp(e,"g");else if(!We(e))throw new TypeError(Ye("invalid argument. Second argument must be a string or regular expression. Value: `%s`.",e));if(!Tt(r)&&!lt(r))throw new TypeError(Ye("invalid argument. Third argument must be a string or replacement function. Value: `%s`.",r));return t.replace(e,r)}var Ze={int8:"new Int8Array( [ {{data}} ] )",uint8:"new Uint8Array( [ {{data}} ] )",uint8c:"new Uint8ClampedArray( [ {{data}} ] )",int16:"new Int16Array( [ {{data}} ] )",uint16:"new Uint16Array( [ {{data}} ] )",int32:"new Int32Array( [ {{data}} ] )",uint32:"new Uint32Array( [ {{data}} ] )",float32:"new Float32Array( [ {{data}} ] )",float64:"new Float64Array( [ {{data}} ] )",generic:"[ {{data}} ]",binary:"new Buffer( [ {{data}} ] )",complex64:"new Complex64Array( [ {{data}} ] )",complex128:"new Complex128Array( [ {{data}} ] )"};var ze="function"==typeof Uint8Array;var qe="function"==typeof Uint8Array?Uint8Array:null;var He,Ke="function"==typeof Uint8Array?Uint8Array:void 0;He=function(){var t,e,r;if("function"!=typeof qe)return!1;try{e=new qe(e=[1,3.14,-3.14,256,257]),r=e,t=(ze&&r instanceof Uint8Array||"[object Uint8Array]"===w(r))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?Ke:function(){throw new Error("not implemented")};var Qe=He,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null;var rr,nr="function"==typeof Uint16Array?Uint16Array:void 0;rr=function(){var t,e,r;if("function"!=typeof er)return!1;try{e=new er(e=[1,3.14,-3.14,65536,65537]),r=e,t=(tr&&r instanceof Uint16Array||"[object Uint16Array]"===w(r))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){t=!1}return t}()?nr:function(){throw new Error("not implemented")};var ir,or={uint16:rr,uint8:Qe};(ir=new or.uint16(1))[0]=4660;var ar=52===new or.uint8(ir.buffer)[0],ur="function"==typeof ArrayBuffer;var sr="function"==typeof Float64Array;var fr="function"==typeof Float64Array?Float64Array:null;var cr,lr="function"==typeof Float64Array?Float64Array:void 0;cr=function(){var t,e,r;if("function"!=typeof fr)return!1;try{e=new fr([1,3.14,-3.14,NaN]),r=e,t=(sr&&r instanceof Float64Array||"[object Float64Array]"===w(r))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){t=!1}return t}()?lr:function(){throw new Error("not implemented")};var hr=cr,pr="function"==typeof ArrayBuffer?ArrayBuffer:null;var gr,dr="function"==typeof ArrayBuffer?ArrayBuffer:void 0;gr=function(){var t,e,r,n;if("function"!=typeof pr)return!1;try{r=new pr(16),n=r,(t=(ur&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===w(n))&&"function"==typeof pr.isView)&&((e=new hr(r))[0]=-3.14,e[1]=NaN,t=t&&pr.isView(e)&&16===r.byteLength&&-3.14===e[0]&&e[1]!=e[1])}catch(e){t=!1}return t}()?dr:function(){throw new Error("not implemented")};var yr=gr,mr="function"==typeof DataView;var _r="function"==typeof DataView?DataView:null;var br,vr="function"==typeof DataView?DataView:void 0;br=function(){var t,e,r,n;if("function"!=typeof _r)return!1;try{r=new yr(24),e=new _r(r,8),n=e,(t=(mr&&n instanceof DataView||"[object DataView]"===w(n))&&"function"==typeof e.getFloat64&&"function"==typeof e.setFloat64)&&(e.setFloat64(0,-3.14),e.setFloat64(8,NaN),t=t&&e.buffer===r&&16===e.byteLength&&8===e.byteOffset&&-3.14===e.getFloat64(0)&&e.getFloat64(8)!=e.getFloat64(8))}catch(e){t=!1}return t}()?vr:function(){throw new Error("not implemented")};var wr=br,Er="function"==typeof BigInt?BigInt:void 0,Or=["throw","clamp","wrap"];function jr(){return Or.slice()}function Ar(){return{throw:1,clamp:2,wrap:3}}c(jr,"enum",Ar);var Ir={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Tr={"row-major":1,"column-major":2},xr={throw:1,clamp:2,wrap:3};var Sr=new Qe(8),Ur=new wr(Sr.buffer);function Nr(t,e,r,n){var i,o,a;if(0===t){for(a=0;a<Sr.length;a++)e[n]=0,n+=r;return e}for(o=(4294967295&t)>>>0,i=l(t/4294967296),ar?(Ur.setUint32(0,o,ar),Ur.setUint32(4,i,ar)):(Ur.setUint32(0,i,ar),Ur.setUint32(4,o,ar)),a=0;a<Sr.length;a++)e[n]=Sr[a],n+=r;return e}c((function(t){var e,r,n,i;return e=new Qe(8),0===t||(i=(4294967295&t)>>>0,n=l(t/4294967296),r=new wr(e.buffer),ar?(r.setUint32(0,i,ar),r.setUint32(4,n,ar)):(r.setUint32(0,n,ar),r.setUint32(4,i,ar))),e}),"assign",Nr);var Rr={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},Vr={"row-major":1,"column-major":2},Fr={throw:1,clamp:2,wrap:3};function Lr(t,e,r,n,i,o){var a,u,s,f,c;if(!(this instanceof Lr))return new Lr(t,e,r,n,i,o);for(f=1,c=0;c<r.length;c++)f*=r[c];return u=e.BYTES_PER_ELEMENT?e.BYTES_PER_ELEMENT*f:null,this._byteLength=u,this._bytesPerElement=function(t){return ae[t]||null}(t),this._buffer=e,this._dtype=t,this._length=f,this._ndims=r.length,this._offset=i,this._order=o,this._shape=r,this._strides=n,this._accessors=Boolean(e.get&&e.set),this._iterationOrder=function(t){var e,r;for(e=0,r=0;r<t.length;r++)t[r]<0&&(e+=1);return 0===e?1:e===t.length?-1:0}(n),a=function(t,e,r,n,i){var o;return 0!==t&&0!==i&&t===(o=ee(e,r,n))[1]-o[0]+1}(f,r,n,i,this._iterationOrder),s=function(t){var e,r,n,i,o,a;if(0===(r=t.length))return 0;for(e=!0,n=!0,i=ue(t[0]),a=1;a<r;a++){if(o=ue(t[a]),e&&o<i?e=!1:n&&o>i&&(n=!1),!n&&!e)return 0;i=o}return n&&e?3:n?1:2}(n),this._flags={ROW_MAJOR_CONTIGUOUS:fe(s,a),COLUMN_MAJOR_CONTIGUOUS:se(s,a),READONLY:!1},this.__meta_dataview__=null,this}function Mr(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e?new TypeError("invalid argument. A provided constructor must be either an object (except null) or a function. Value: `"+t+"`."):null}c(Lr,"name","ndarray"),oe(Lr.prototype,"byteLength",(function(){return this._byteLength})),oe(Lr.prototype,"BYTES_PER_ELEMENT",(function(){return this._bytesPerElement})),oe(Lr.prototype,"data",(function(){return this._buffer})),oe(Lr.prototype,"dtype",(function(){return this._dtype})),oe(Lr.prototype,"flags",(function(){return{ROW_MAJOR_CONTIGUOUS:(t=this._flags).ROW_MAJOR_CONTIGUOUS,COLUMN_MAJOR_CONTIGUOUS:t.COLUMN_MAJOR_CONTIGUOUS,READONLY:t.READONLY};var t})),oe(Lr.prototype,"length",(function(){return this._length})),oe(Lr.prototype,"ndims",(function(){return this._ndims})),oe(Lr.prototype,"offset",(function(){return this._offset})),oe(Lr.prototype,"order",(function(){return this._order})),oe(Lr.prototype,"shape",(function(){return this._shape.slice()})),oe(Lr.prototype,"strides",(function(){return this._strides.slice()})),c(Lr.prototype,"get",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.get(t):this._buffer[t]})),c(Lr.prototype,"iget",(function(t){var e,r,n,i,o,a;if(0===(n=this._ndims))return this._accessors?this._buffer.get(this._offset):this._buffer[this._offset];if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.get(this._offset+t):this._buffer[this._offset+t];if(-1===this._iterationOrder)return this._accessors?this._buffer.get(this.offset-t):this._buffer[this._offset-t]}if(r=this._shape,e=this._strides,i=this._offset,"column-major"===this._order){for(a=0;a<n;a++)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]}for(a=n-1;a>=0;a--)t-=o=t%r[a],t/=r[a],i+=o*e[a];return this._accessors?this._buffer.get(i):this._buffer[i]})),c(Lr.prototype,"set",(function(){var t,e;for(t=this._offset,e=0;e<arguments.length-1;e++)t+=this._strides[e]*arguments[e];return this._accessors?this._buffer.set(arguments[e],t):this._buffer[t]=arguments[e],this})),c(Lr.prototype,"iset",(function(t,e){var r,n,i,o,a,u;if(0===(i=this._ndims))return this._accessors?this._buffer.set(t,this._offset):this._buffer[this._offset]=t,this;if(this._flags.ROW_MAJOR_CONTIGUOUS||this._flags.COLUMN_MAJOR_CONTIGUOUS){if(1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset+t):this._buffer[this._offset+t]=e,this;if(-1===this._iterationOrder)return this._accessors?this._buffer.set(e,this._offset-t):this._buffer[this._offset-t]=e,this}if(n=this._shape,r=this._strides,o=this._offset,"column-major"===this._order){for(u=0;u<i;u++)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this}for(u=i-1;u>=0;u--)t-=a=t%n[u],t/=n[u],o+=a*r[u];return this._accessors?this._buffer.set(e,o):this._buffer[o]=e,this})),c(Lr.prototype,"toString",(function(){var t,e,r,n,i,o;if(e=this._shape.length,r="ndarray( '"+(n=this._dtype)+"', ",t="",this._length<=100)if("complex64"===n||"complex128"===n)for(o=0;o<this._length;o++)t+=ce(i=this.iget(o))+", "+le(i),o<this._length-1&&(t+=", ");else for(o=0;o<this._length;o++)t+=this.iget(o),o<this._length-1&&(t+=", ");else{if("complex64"===n||"complex128"===n)for(o=0;o<3;o++)t+=ce(i=this.iget(o))+", "+le(i),o<2&&(t+=", ");else for(o=0;o<3;o++)t+=this.iget(o),o<2&&(t+=", ");if(t+=", ..., ","complex64"===n||"complex128"===n)for(o=2;o>=0;o--)t+=ce(i=this.iget(this._length-1-o))+", "+le(i),o>0&&(t+=", ");else for(o=2;o>=0;o--)t+=this.iget(this._length-1-o),o>0&&(t+=", ")}if(r+=Xe(Ze[this.dtype],"{{data}}",t),r+=", ",r+=0===e?"[]":"[ "+this._shape.join(", ")+" ]",r+=", ",r+="[ ",0===e)r+="0";else for(o=0;o<e;o++)this._strides[o]<0?r+=-this._strides[o]:r+=this._strides[o],o<e-1&&(r+=", ");return r+=" ]",r+=", ",r+="0",r+=", ",r+="'"+this._order+"'",r+=" )"})),c(Lr.prototype,"toJSON",(function(){var t,e,r,n;for(e=this._length,(t={}).type="ndarray",t.dtype=this.dtype,t.flags={READONLY:this._flags.READONLY},t.order=this._order,t.shape=this._shape.slice(),t.strides=this._strides.slice(),n=0;n<e;n++)t.strides[n]<0&&(t.strides[n]*=-1);if(t.data=[],"complex64"===t.dtype||"complex128"===t.dtype)for(n=0;n<e;n++)r=this.iget(n),t.data.push(ce(r),le(r));else for(n=0;n<e;n++)t.data.push(this.iget(n));return t})),c(Lr.prototype,"__array_meta_dataview__","function"==typeof ie.BigInt&&"function"==typeof BigInt&&"bigint"==typeof ie.BigInt("1")&&"bigint"==typeof BigInt("1")?function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p;if(s=this._mode||"throw",a=this._submode||[s],r=33+16*(l=this._ndims)+(h=a.length),(u=this.__meta_dataview__)&&u.byteLength===r)return u;for(u=new wr(new yr(r)),i=this._shape,o=this._strides,n=this._dtype,t=this._bytesPerElement,f=0,u.setInt8(f,ar?1:0),f+=1,u.setInt16(f,Ir[n],ar),f+=2,u.setBigInt64(f,Er(l),ar),c=8*l,f+=8,p=0;p<l;p++)u.setBigInt64(f,Er(i[p]),ar),u.setBigInt64(f+c,Er(o[p]*t),ar),f+=8;for(f+=c,u.setBigInt64(f,Er(this._offset*t),ar),f+=8,u.setInt8(f,Tr[this._order]),f+=1,u.setInt8(f,xr[s]),f+=1,u.setBigInt64(f,Er(h),ar),f+=8,p=0;p<h;p++)u.setInt8(f,xr[a[p]]),f+=1;return e=0,e|=this._flags.READONLY?4:0,u.setInt32(f,e,ar),this.__meta_dataview__=u,u}:function(){var t,e,r,n,i,o,a,u,s,f,c,l,h,p,g;if(f=this._mode||"throw",u=this._submode||[f],n=33+16*(h=this._ndims)+(p=u.length),(s=this.__meta_dataview__)&&s.byteLength===n)return s;for(s=new wr(new yr(n)),e=new Qe(s.buffer),o=this._shape,a=this._strides,i=this._dtype,t=this._bytesPerElement,c=0,s.setInt8(c,ar?1:0),c+=1,s.setInt16(c,Rr[i],ar),Nr(h,e,1,c+=2),l=8*h,c+=8,g=0;g<h;g++)Nr(o[g],e,1,c),Nr(a[g]*t,e,1,c+l),c+=8;for(c+=l,Nr(this._offset*t,e,1,c),c+=8,s.setInt8(c,Vr[this._order]),c+=1,s.setInt8(c,Fr[f]),Nr(p,e,1,c+=1),c+=8,g=0;g<p;g++)s.setInt8(c,Fr[u[g]]),c+=1;return r=0,r|=this._flags.READONLY?4:0,s.setInt32(c,r,ar),this.__meta_dataview__=s,s});var Br=Object.create;function kr(){}var Pr="function"==typeof Br?Br:function(t){return kr.prototype=t,new kr};function Cr(){var t,e=arguments,r=e[0],n="https://stdlib.io/e/"+r+"?";for(t=1;t<e.length;t++)n+="&arg[]="+encodeURIComponent(e[t]);return n}var Dr="throw",Yr=!1;function Gr(t,e,r){if("clamp"===r)return function(t,e){return t<0?0:t>e?e:t}(t,e);if("wrap"===r)return function(t,e){var r=e+1;return t<0?((t+=r)<0&&0!=(t%=r)&&(t+=r),t):t>e?((t-=r)>e&&(t%=r),t):t}(t,e);if(t<0||t>e)throw new RangeError("invalid argument. Index must be on the interval: [0,"+e+"]. Value: `"+t+"`.");return t}var $r=Lr.prototype.iget;var Jr=Lr.prototype.iset;function Wr(t,e){var r,n;for(r=[],n=0;n<e;n++)r.push(t[n]);return r}var Xr,Zr=Object.getPrototypeOf;Xr=lt(Object.getPrototypeOf)?Zr:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var zr=Xr;var qr=Object.prototype;function Hr(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!at(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),zr(t))}(t),!e||!b(t,"constructor")&&b(e,"constructor")&&lt(e.constructor)&&"[object Function]"===w(e.constructor)&&b(e,"isPrototypeOf")&&lt(e.isPrototypeOf)&&(e===qr||function(t){var e;for(e in t)if(!b(t,e))return!1;return!0}(t)))}var Kr=jr(),Qr=Kr.length;function tn(t){var e;for(e=0;e<Qr;e++)if(t===Kr[e])return!0;return!1}function en(t,e){var r;if(!Hr(e))return new TypeError(Cr("0Mp2h",e));if(b(e,"mode")&&(t.mode=e.mode,!tn(t.mode)))return new TypeError(Cr("0Mp5o","mode",t.mode));if(b(e,"submode")){if(t.submode=e.submode,!at(t.submode))return new TypeError(Cr("0Mp5p","submode",t.submode));if(0===t.submode.length)return new TypeError(Cr("0Mp5p","submode",t.submode.join(",")));for(r=0;r<t.submode.length;r++)if(!tn(t.submode[r]))return new TypeError(Cr("invalid option. Each submode must be a recognized mode. Option: `%s`.",t.submode[r]));t.submode=t.submode.slice()}return b(e,"readonly")&&(t.readonly=e.readonly,!$(t.readonly))?new TypeError(Cr("0Mp30","readonly",t.readonly)):null}var rn=32767;function nn(t,e,r,n,i,o,a){var u,s,f,c,l;if(!(this instanceof nn))return arguments.length<7?new nn(t,e,r,n,i,o):new nn(t,e,r,n,i,o,a);if(!te(t))throw new TypeError(Cr("invalid argument. First argument must be a supported ndarray data type. Value: `%s`.",t));if(!p(e))throw new TypeError(Cr("invalid argument. Second argument must be an array-like object, typed-array-like, or a Buffer. Value: `%s`.",e));if(e.get&&e.set&&(!lt(e.get)||!lt(e.set)))throw new TypeError(Cr("invalid argument. Second argument `get` and `set` properties must be functions. Value: `%s`.",e));if(!B(r)&&(!p(r)||r.length>0))throw new TypeError(Cr("invalid argument. Third argument must be an array-like object containing nonnegative integers. Value: `%s`.",r));if((u=r.length)>rn)throw new RangeError(Cr("invalid argument. Number of dimensions must not exceed %u due to stack limits. Value: `%u`.",rn,u));if(!C(n))throw new TypeError(Cr("invalid argument. Fourth argument must be an array-like object containing integers. Value: `%s`.",n));if(u>0){if(n.length!==u)throw new RangeError(Cr("invalid argument. Fourth argument length must match the number of dimensions. Expected number of dimensions: `%u`. Strides length: `%u`.",u,n.length))}else{if(1!==n.length)throw new RangeError("invalid argument. Fourth argument length must be equal to 1 when creating a zero-dimensional ndarray.");if(0!==n[0])throw new RangeError(Cr("invalid argument. Fourth argument must contain a single element equal to 0. Value: `%d`.",n[0]))}if(!V(i))throw new TypeError(Cr("0Mp5v",i));if(!mt(o))throw new TypeError(Cr("invalid argument. Sixth argument must be a supported order. Value: `%s`.",o));if(u>0&&!re(e.length,r,n,i)&&ne(r)>0)throw new Error("invalid arguments. Input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");if((s={}).mode=Dr,s.readonly=Yr,arguments.length>6&&(f=en(s,a)))throw f;return this._mode=s.mode,void 0===s.submode&&(s.submode=[this._mode]),this._submode=s.submode,c=Wr(r,u),l=Wr(n,u||1),Lr.call(this,t,e,c,l,i,o),this._flags.READONLY=s.readonly,this}return function(t,e){var r=Mr(t);if(r)throw r;if(r=Mr(e))throw r;if(void 0===e.prototype)throw new TypeError("invalid argument. Second argument must have a prototype from which another object can inherit. Value: `"+e.prototype+"`.");t.prototype=Pr(e.prototype),f(t.prototype,"constructor",{configurable:!0,enumerable:!1,writable:!0,value:t})}(nn,Lr),c(nn,"name","ndarray"),c(nn.prototype,"get",(function(){var t,e,r,n;if(arguments.length!==this._ndims)throw new RangeError(Cr("invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.",this._ndims,arguments.length));for(t=this._offset,r=this._submode.length,n=0;n<arguments.length;n++){if(!U(arguments[n]))throw new TypeError(Cr("invalid argument. Indices must be integer valued. Argument: `%u`. Value: `%s`.",n,arguments[n]));e=Gr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.get(t):this._buffer[t]})),c(nn.prototype,"iget",(function(t){if(this._ndims>0){if(!U(t))throw new TypeError(Cr("invalid argument. Index must be an integer. Value: `%s`.",t));return t=Gr(t,this._length-1,this._mode),$r.call(this,t)}return $r.call(this)})),c(nn.prototype,"set",(function(){var t,e,r,n;if(this._flags.READONLY)throw new Error(Cr("0Mp0e"));if(arguments.length!==this._ndims+1)throw new RangeError(Cr("invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.",this._ndims,arguments.length));for(t=this._offset,r=this._submode.length,n=0;n<arguments.length-1;n++){if(!U(arguments[n]))throw new TypeError(Cr("invalid argument. Indices must be integer valued. Argument: `%i`. Value: `%s`.",n,arguments[n]));e=Gr(arguments[n],this._shape[n]-1,this._submode[n%r]),t+=this._strides[n]*e}return this._accessors?this._buffer.set(arguments[n],t):this._buffer[t]=arguments[n],this})),c(nn.prototype,"iset",(function(t,e){if(this._flags.READONLY)throw new Error(Cr("0Mp0e"));if(this._ndims>0){if(!U(t))throw new TypeError(Cr("invalid argument. Index must be an integer. Value: `%s`.",t));t=Gr(t,this._length-1,this._mode),Jr.call(this,t,e)}else Jr.call(this,t);return this})),nn}));
//# sourceMappingURL=index.js.map
