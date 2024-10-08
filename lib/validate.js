/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-plain-object' );
var hasOwnProp = require( '@stdlib/assert-has-own-property' );
var isArrayLikeObject = require( '@stdlib/assert-is-array-like-object' );
var isIndexMode = require( '@stdlib/ndarray-base-assert-is-index-mode' );
var isBoolean = require( '@stdlib/assert-is-boolean' ).isPrimitive;
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Validates function options.
*
* @private
* @param {Object} opts - destination object
* @param {Options} options - function options
* @param {string} [options.mode] - specifies how to handle indices which exceed array dimensions
* @param {StringArray} [options.submode] - specifies how to handle subscripts which exceed array dimensions
* @param {boolean} [options.readonly] - boolean indicating whether an array should be read-only
* @returns {(Error|null)} null or an error object
*
* @example
* var opts = {};
* var options = {
*     'mode': 'clamp',
*     'submode': [ 'throw', 'wrap', 'clamp' ]
* };
* var err = validate( opts, options );
* if ( err ) {
*     throw err;
* }
*/
function validate( opts, options ) {
	var i;
	if ( !isObject( options ) ) {
		return new TypeError( format( 'invalid argument. Options argument must be an object. Value: `%s`.', options ) );
	}
	if ( hasOwnProp( options, 'mode' ) ) {
		opts.mode = options.mode;
		if ( !isIndexMode( opts.mode ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a recognized mode. Option: `%s`.', 'mode', opts.mode ) );
		}
	}
	if ( hasOwnProp( options, 'submode' ) ) {
		opts.submode = options.submode;
		if ( !isArrayLikeObject( opts.submode ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array containing recognized modes. Option: `%s`.', 'submode', opts.submode ) );
		}
		if ( opts.submode.length === 0 ) {
			return new TypeError( format( 'invalid option. `%s` option must be an array containing recognized modes. Option: `%s`.', 'submode', opts.submode.join( ',' ) ) );
		}
		for ( i = 0; i < opts.submode.length; i++ ) {
			if ( !isIndexMode( opts.submode[ i ] ) ) {
				return new TypeError( format( 'invalid option. Each submode must be a recognized mode. Option: `%s`.', opts.submode[ i ] ) );
			}
		}
		opts.submode = opts.submode.slice();
	}
	if ( hasOwnProp( options, 'readonly' ) ) {
		opts.readonly = options.readonly;
		if ( !isBoolean( opts.readonly ) ) {
			return new TypeError( format( 'invalid option. `%s` option must be a boolean. Option: `%s`.', 'readonly', opts.readonly ) );
		}
	}
	return null;
}


// EXPORTS //

module.exports = validate;
