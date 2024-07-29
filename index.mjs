// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@v0.2.2-esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.2-esm/index.mjs";import{isPrimitive as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@v0.2.2-esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer-array@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-buffer-length-compatible@v0.1.2-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@v0.2.2-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@v0.2.2-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@v0.3.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@v0.2.2-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.2-esm/index.mjs";import{isPrimitive as f}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.2-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.2-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.2-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.2-esm/index.mjs";import w from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@v0.2.1-esm/index.mjs";import{isPrimitive as y}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.2.2-esm/index.mjs";var c=p.prototype.iget;var _=p.prototype.iset;function E(e,r){var s,t;for(s=[],t=0;t<r;t++)s.push(e[t]);return s}var x=l.get("index_mode");function T(e,l,a,f,g,c,_){var R,D,O,N,Y;if(!(this instanceof T))return arguments.length<7?new T(e,l,a,f,g,c):new T(e,l,a,f,g,c,_);if(!d(e))throw new TypeError(j("0jp5P",e));if(!r(l))throw new TypeError(j("0jp5Q",l));if(l.get&&l.set&&(!n(l.get)||!n(l.set)))throw new TypeError(j("0jp5R",l));if(!s(a)&&(!r(a)||a.length>0))throw new TypeError(j("0jp5S",a));if((R=a.length)>32767)throw new RangeError(j("0jp5T",32767,R));if(!i(f))throw new TypeError(j("0jp5U",f));if(R>0){if(f.length!==R)throw new RangeError(j("0jp5V",R,f.length))}else{if(1!==f.length)throw new RangeError(j("0jp0f"));if(0!==f[0])throw new RangeError(j("0jpDt",f[0]))}if(!t(g))throw new TypeError(j("0jp5X",g));if(!o(c))throw new TypeError(j("0jp5Y",c));if(R>0&&!m(l.length,a,f,g)&&h(a)>0)throw new Error(j("0jpCz"));if((D={}).mode=x,D.readonly=false,arguments.length>6&&(O=function(e,r){var s;if(!b(r))return new TypeError(j("0jp2V",r));if(u(r,"mode")&&(e.mode=r.mode,!w(e.mode)))return new TypeError(j("0jp5a","mode",e.mode));if(u(r,"submode")){if(e.submode=r.submode,!v(e.submode))return new TypeError(j("0jp5b","submode",e.submode));if(0===e.submode.length)return new TypeError(j("0jp5b","submode",e.submode.join(",")));for(s=0;s<e.submode.length;s++)if(!w(e.submode[s]))return new TypeError(j("0jp5c",e.submode[s]));e.submode=e.submode.slice()}return u(r,"readonly")&&(e.readonly=r.readonly,!y(e.readonly))?new TypeError(j("0jp2o","readonly",e.readonly)):null}(D,_),O))throw O;return this._mode=D.mode,void 0===D.submode&&(D.submode=[this._mode]),this._submode=D.submode,N=E(a,R),Y=E(f,R||1),p.call(this,e,l,N,Y,g,c),this._flags.READONLY=D.readonly,this}a(T,p),e(T,"name","ndarray"),e(T.prototype,"get",(function(){var e,r,s,t;if(arguments.length!==this._ndims)throw new RangeError(j("0jp5M",this._ndims,arguments.length));for(e=this._offset,s=this._submode.length,t=0;t<arguments.length;t++){if(!f(arguments[t]))throw new TypeError(j("0jp5N",t,arguments[t]));r=g(arguments[t],this._shape[t]-1,this._submode[t%s]),e+=this._strides[t]*r}return this._accessors?this._buffer.get(e):this._buffer[e]})),e(T.prototype,"iget",(function(e){if(this._ndims>0){if(!f(e))throw new TypeError(j("0jp5O",e));return e=g(e,this._length-1,this._mode),c.call(this,e)}return c.call(this)})),e(T.prototype,"set",(function(){var e,r,s,t;if(this._flags.READONLY)throw new Error(j("0jp0e"));if(arguments.length!==this._ndims+1)throw new RangeError(j("0jp5M",this._ndims,arguments.length));for(e=this._offset,s=this._submode.length,t=0;t<arguments.length-1;t++){if(!f(arguments[t]))throw new TypeError(j("0jpDu",t,arguments[t]));r=g(arguments[t],this._shape[t]-1,this._submode[t%s]),e+=this._strides[t]*r}return this._accessors?this._buffer.set(arguments[t],e):this._buffer[e]=arguments[t],this})),e(T.prototype,"iset",(function(e,r){if(this._flags.READONLY)throw new Error(j("0jp0e"));if(this._ndims>0){if(!f(e))throw new TypeError(j("0jp5O",e));e=g(e,this._length-1,this._mode),_.call(this,e,r)}else _.call(this,e);return this}));export{T as default};
//# sourceMappingURL=index.mjs.map
