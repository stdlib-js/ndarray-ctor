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

/* eslint-disable no-invalid-this */

'use strict';

// MODULES //

var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var getIndex = require( '@stdlib/ndarray-base-ind' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Sets an array element.
*
* ## Notes
*
* -   The number of indices should **equal** the number of dimensions. Accordingly, for zero-dimensional arrays, no indices should be provided.
*
* @private
* @param {...integer} [idx] - indices
* @param {*} v - value to set
* @throws {Error} cannot write to a read-only array
* @throws {TypeError} provided indices must be integer valued
* @throws {RangeError} index exceeds array dimensions
* @throws {RangeError} number of indices must equal the number of dimensions
* @returns {ndarray} ndarray instance
*/
function set() {
	var idx;
	var ind;
	var M;
	var i;

	if ( this._flags.READONLY ) {
		throw new Error( 'invalid invocation. Cannot write to a read-only array.' );
	}
	if ( arguments.length !== this._ndims+1 ) {
		throw new RangeError( format( 'invalid arguments. Number of indices must match the number of dimensions. ndims: `%u`. nargs: `%u`.', this._ndims, arguments.length ) );
	}
	idx = this._offset;
	M = this._submode.length;
	for ( i = 0; i < arguments.length-1; i++ ) {
		if ( !isInteger( arguments[ i ] ) ) {
			throw new TypeError( format( 'invalid argument. Indices must be integer valued. Argument: `%i`. Value: `%s`.', i, arguments[ i ] ) );
		}
		ind = getIndex( arguments[ i ], this._shape[ i ]-1, this._submode[ i%M ] ); // eslint-disable-line max-len
		idx += this._strides[ i ] * ind;
	}
	if ( this._accessors ) {
		this._buffer.set( arguments[ i ], idx );
	} else {
		this._buffer[ idx ] = arguments[ i ];
	}
	return this;
}


// EXPORTS //

module.exports = set;
