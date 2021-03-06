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
var parent = require( '@stdlib/ndarray-base-ctor' ); // eslint-disable-line stdlib/no-redeclare
var format = require( '@stdlib/string-format' );


// VARIABLES //

var base = parent.prototype.iget;


// MAIN //

/**
* Returns an array element located at a specified linear index.
*
* ## Notes
*
* -   For zero-dimensional arrays, the input argument is ignored and, for clarity, should not be provided.
*
* @private
* @param {integer} [idx] - linear view index
* @throws {TypeError} index must be an integer
* @throws {RangeError} index exceeds array dimensions
* @returns {*} array element
*/
function iget( idx ) {
	if ( this._ndims > 0 ) {
		if ( !isInteger( idx ) ) {
			throw new TypeError( format( 'invalid argument. Index must be an integer. Value: `%s`.', idx ) );
		}
		idx = getIndex( idx, this._length-1, this._mode );
		return base.call( this, idx );
	}
	return base.call( this );
}


// EXPORTS //

module.exports = iget;
