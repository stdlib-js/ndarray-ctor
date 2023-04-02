// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-collection@esm/index.mjs";import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer@esm/index.mjs";import{primitives as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer-array@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-data-type@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-buffer-length-compatible@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-numel@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ctor@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-defaults@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-inherit@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@esm/index.mjs";import{isPrimitive as y}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";var w=h.prototype.iget;var _=h.prototype.iset;function E(e,t){var r,s;for(r=[],s=0;s<t;s++)r.push(e[s]);return r}function x(e,t){var r;if(!b(t))return new TypeError(g("0Mp2h",t));if(c(t,"mode")&&(e.mode=t.mode,!v(e.mode)))return new TypeError(g("0Mp5o","mode",e.mode));if(c(t,"submode")){if(e.submode=t.submode,!j(e.submode))return new TypeError(g("0Mp5p","submode",e.submode));if(0===e.submode.length)return new TypeError(g("0Mp5p","submode",e.submode.join(",")));for(r=0;r<e.submode.length;r++)if(!v(e.submode[r]))return new TypeError(g("invalid option. Each submode must be a recognized mode. Option: `%s`.",e.submode[r]));e.submode=e.submode.slice()}return c(t,"readonly")&&(e.readonly=t.readonly,!y(e.readonly))?new TypeError(g("0Mp30","readonly",e.readonly)):null}var T=l.get("index_mode");function V(e,l,u,p,f,b,c){var j,v,y,w,_;if(!(this instanceof V))return arguments.length<7?new V(e,l,u,p,f,b):new V(e,l,u,p,f,b,c);if(!d(e))throw new TypeError(g("invalid argument. First argument must be a supported ndarray data type. Value: `%s`.",e));if(!t(l))throw new TypeError(g("invalid argument. Second argument must be an array-like object, typed-array-like, or a Buffer. Value: `%s`.",l));if(l.get&&l.set&&(!n(l.get)||!n(l.set)))throw new TypeError(g("invalid argument. Second argument `get` and `set` properties must be functions. Value: `%s`.",l));if(!r(u)&&(!t(u)||u.length>0))throw new TypeError(g("invalid argument. Third argument must be an array-like object containing nonnegative integers. Value: `%s`.",u));if((j=u.length)>32767)throw new RangeError(g("invalid argument. Number of dimensions must not exceed %u due to stack limits. Value: `%u`.",32767,j));if(!i(p))throw new TypeError(g("invalid argument. Fourth argument must be an array-like object containing integers. Value: `%s`.",p));if(j>0){if(p.length!==j)throw new RangeError(g("invalid argument. Fourth argument length must match the number of dimensions. Expected number of dimensions: `%u`. Strides length: `%u`.",j,p.length))}else{if(1!==p.length)throw new RangeError("invalid argument. Fourth argument length must be equal to 1 when creating a zero-dimensional ndarray.");if(0!==p[0])throw new RangeError(g("invalid argument. Fourth argument must contain a single element equal to 0. Value: `%d`.",p[0]))}if(!s(f))throw new TypeError(g("0Mp5v",f));if(!o(b))throw new TypeError(g("invalid argument. Sixth argument must be a supported order. Value: `%s`.",b));if(j>0&&!a(l.length,u,p,f)&&m(u)>0)throw new Error("invalid arguments. Input buffer is incompatible with the specified meta data. Ensure that the offset is valid with regard to the strides array and that the buffer has enough elements to satisfy the desired array shape.");if((v={}).mode=T,v.readonly=false,arguments.length>6&&(y=x(v,c)))throw y;return this._mode=v.mode,void 0===v.submode&&(v.submode=[this._mode]),this._submode=v.submode,w=E(u,j),_=E(p,j||1),h.call(this,e,l,w,_,f,b),this._flags.READONLY=v.readonly,this}u(V,h),e(V,"name","ndarray"),e(V.prototype,"get",(function(){var e,t,r,s;if(arguments.length!==this._ndims)throw new RangeError(g("invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.",this._ndims,arguments.length));for(e=this._offset,r=this._submode.length,s=0;s<arguments.length;s++){if(!p(arguments[s]))throw new TypeError(g("invalid argument. Indices must be integer valued. Argument: `%u`. Value: `%s`.",s,arguments[s]));t=f(arguments[s],this._shape[s]-1,this._submode[s%r]),e+=this._strides[s]*t}return this._accessors?this._buffer.get(e):this._buffer[e]})),e(V.prototype,"iget",(function(e){if(this._ndims>0){if(!p(e))throw new TypeError(g("invalid argument. Index must be an integer. Value: `%s`.",e));return e=f(e,this._length-1,this._mode),w.call(this,e)}return w.call(this)})),e(V.prototype,"set",(function(){var e,t,r,s;if(this._flags.READONLY)throw new Error(g("0Mp0e"));if(arguments.length!==this._ndims+1)throw new RangeError(g("invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.",this._ndims,arguments.length));for(e=this._offset,r=this._submode.length,s=0;s<arguments.length-1;s++){if(!p(arguments[s]))throw new TypeError(g("invalid argument. Indices must be integer valued. Argument: `%i`. Value: `%s`.",s,arguments[s]));t=f(arguments[s],this._shape[s]-1,this._submode[s%r]),e+=this._strides[s]*t}return this._accessors?this._buffer.set(arguments[s],e):this._buffer[e]=arguments[s],this})),e(V.prototype,"iset",(function(e,t){if(this._flags.READONLY)throw new Error(g("0Mp0e"));if(this._ndims>0){if(!p(e))throw new TypeError(g("invalid argument. Index must be an integer. Value: `%s`.",e));e=f(e,this._length-1,this._mode),_.call(this,e,t)}else _.call(this,e);return this}));export{V as default};
//# sourceMappingURL=index.mjs.map
