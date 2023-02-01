<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

<!-- lint disable maximum-heading-length -->

# ndarray

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Multidimensional array constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';
```

<a name="main"></a>

#### ndarray( dtype, buffer, shape, strides, offset, order\[, options] )

Returns an `ndarray` instance.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
// returns <ndarray>
```

The constructor expects the following arguments:

-   **dtype**: underlying [data type][@stdlib/ndarray/dtypes].
-   **buffer**: data buffer.
-   **shape**: array shape (dimensions).
-   **strides**: array strides which are index offsets specifying how to access along corresponding dimensions.
-   **offset**: index offset specifying the location of the first indexed element in the data buffer.
-   **order**: array order, which is either `row-major` (C-style) or `column-major` (Fortran-style).

The constructor accepts the following `options`:

-   **mode**: specifies how to handle indices which exceed array dimensions. Default: `'throw'`.
-   **submode**: a mode array which specifies for each dimension how to handle subscripts which exceed array dimensions. If provided fewer modes than dimensions, the constructor recycles modes using modulo arithmetic. Default: `[ options.mode ]`.
-   **readonly**: `boolean` indicating whether an array should be **read-only**. Default: `false`.

The constructor supports the following `modes`:

-   **throw**: specifies that an `ndarray` instance should throw an error when an index exceeds array dimensions.
-   **wrap**: specifies that an `ndarray` instance should wrap around an index exceeding array dimensions using modulo arithmetic.
-   **clamp**: specifies that an `ndarray` instance should set an index exceeding array dimensions to either `0` (minimum index) or the maximum index.

By default, an `ndarray` instance **throws** when provided an index which exceeds array dimensions. To support alternative indexing behavior, set the `mode` option, which will affect all public methods for getting and setting array elements.

```javascript
var opts = {
    'mode': 'clamp'
};

// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
// returns <ndarray>

// Attempt to access an out-of-bounds linear index (clamped):
var v = arr.iget( 10 );
// returns 4.0
```

By default, the `mode` option is applied to subscripts which exceed array dimensions. To specify behavior for each dimension, set the `submode` option.

```javascript
var opts = {
    'submode': [ 'wrap', 'clamp' ]
};

// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2, 2 ];
var order = 'row-major';
var strides = [ 4, 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order, opts );
// returns <ndarray>

// Attempt to access out-of-bounds subscripts:
var v = arr.get( -2, 10, -1 ); // linear index: 3
// returns 4.0
```

* * *

### Properties

<a name="static-prop-name"></a>

#### ndarray.name

String value of the ndarray constructor name.

```javascript
var str = ndarray.name;
// returns 'ndarray'
```

<a name="prop-byte-length"></a>

#### ndarray.prototype.byteLength

Size (in bytes) of the array (if known).

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Specify the array configuration:
var buffer = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'float64', buffer, shape, strides, offset, order );

// Get the byte length:
var nbytes = arr.byteLength;
// returns 32
```

If unable to determine the size of the array, the property value is `null`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the byte length:
var nbytes = arr.byteLength;
// returns null
```

<a name="prop-bytes-per-element"></a>

#### ndarray.prototype.BYTES_PER_ELEMENT

Size (in bytes) of each array element (if known).

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';

// Specify the array configuration:
var buffer = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'float32', buffer, shape, strides, offset, order );

// Get the number of bytes per element:
var nbytes = arr.BYTES_PER_ELEMENT;
// returns 4
```

If size of each array element is unknown, the property value is `null`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the number of bytes per element:
var nbytes = arr.BYTES_PER_ELEMENT;
// returns null
```

<a name="prop-data"></a>

#### ndarray.prototype.data

A reference to the underlying data buffer.

```javascript
import Int8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int8@deno/mod.js';

// Specify the array configuration:
var buffer = new Int8Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'int8', buffer, shape, strides, offset, order );

// Get the buffer reference:
var d = arr.data;
// returns <Int8Array>[ 1, 2, 3, 4 ]

var bool = ( d === buffer );
// returns true
```

<a name="prop-dtype"></a>

#### ndarray.prototype.dtype

Underlying [data type][@stdlib/ndarray/dtypes].

```javascript
import Uint8Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8@deno/mod.js';

// Specify the array configuration:
var buffer = new Uint8Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'uint8', buffer, shape, strides, offset, order );

// Get the underlying data type:
var dtype = arr.dtype;
// returns 'uint8'
```

<a name="prop-flags"></a>

#### ndarray.prototype.flags

Meta information, such as information regarding the memory layout of the array. The returned `object` has the following properties:

-   **ROW_MAJOR_CONTIGUOUS**: `boolean` indicating if an array is row-major contiguous.
-   **COLUMN_MAJOR_CONTIGUOUS**: `boolean` indicating if an array is column-major contiguous.
-   **READONLY**: `boolean` indicating whether an array is **read-only**.

An array is contiguous if (1) an array is compatible with being stored in a single memory segment and (2) each array element is adjacent to the next array element. Note that an array can be both row-major contiguous and column-major contiguous at the same time (e.g., if an array is a 1-dimensional ndarray with `strides = [1]`).

```javascript
import Int32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int32@deno/mod.js';

// Specify the array configuration:
var buffer = new Int32Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ 1, 2 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'int32', buffer, shape, strides, offset, order );

// Get the array flags:
var flg = arr.flags;
// returns {...}
```

<a name="prop-length"></a>

#### ndarray.prototype.length

Number of array elements.

```javascript
import Uint16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint16@deno/mod.js';

// Specify the array configuration:
var buffer = new Uint16Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ -1, -2 ];
var offset = 3;

// Create a new ndarray:
var arr = ndarray( 'uint16', buffer, shape, strides, offset, order );

// Get the array length:
var len = arr.length;
// returns 4
```

<a name="prop-ndims"></a>

#### ndarray.prototype.ndims

Number of dimensions.

```javascript
import Uint8ClampedArray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint8c@deno/mod.js';

// Specify the array configuration:
var buffer = new Uint8ClampedArray( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, -1 ];
var offset = 3;

// Create a new ndarray:
var arr = ndarray( 'uint8c', buffer, shape, strides, offset, order );

// Get the number of dimensions:
var ndims = arr.ndims;
// returns 2
```

<a name="prop-offset"></a>

#### ndarray.prototype.offset

Index offset which specifies the `buffer` index at which to start iterating over array elements.

```javascript
import Int16Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-int16@deno/mod.js';

// Specify the array configuration:
var buffer = new Int16Array( [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ -2, -1 ];
var offset = 10;

// Create a new ndarray:
var arr = ndarray( 'int16', buffer, shape, strides, offset, order );

// Get the index offset:
var o = arr.offset;
// returns 10
```

<a name="prop-order"></a>

#### ndarray.prototype.order

Array order. The array order is either row-major (C-style) or column-major (Fortran-style).

```javascript
import Uint32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-uint32@deno/mod.js';

// Specify the array configuration:
var buffer = new Uint32Array( [ 1, 2, 3, 4 ] );
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'uint32', buffer, shape, strides, offset, order );

// Get the array order:
var ord = arr.order;
// returns 'row-major'
```

<a name="prop-shape"></a>

#### ndarray.prototype.shape

Returns a copy of the array shape.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the array shape:
var dims = arr.shape;
// returns [ 2, 2 ]
```

<a name="prop-strides"></a>

#### ndarray.prototype.strides

Returns a copy of the array strides which specify how to access data along corresponding array dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'column-major';
var strides = [ -1, 2 ];
var offset = 1;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the array strides:
var s = arr.strides;
// returns [ -1, 2 ]
```

* * *

### Methods

<a name="method-get"></a>

#### ndarray.prototype.get( i, j, k, ... )

Returns an array element specified according to provided subscripts. The number of provided subscripts must **equal** the number of dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the element located at (1,1):
var v = arr.get( 1, 1 );
// returns 6.0
```

<a name="method-iget"></a>

#### ndarray.prototype.iget( idx )

Returns an array element located at a specified linear index.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Get the element located at index 3:
var v = arr.iget( 3 );
// returns 6.0
```

For zero-dimensional arrays, the input argument is ignored and, for clarity, should **not** be provided.

<a name="method-set"></a>

#### ndarray.prototype.set( i, j, k, ..., v )

Sets an array element specified according to provided subscripts. The number of provided subscripts must **equal** the number of dimensions.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Set the element located at (1,1):
arr.set( 1, 1, 40.0 );
var v = arr.get( 1, 1 );
// returns 40.0

// Get the underlying buffer:
var d = arr.data;
// returns [ 1.0, 2.0, 3.0, 40.0 ]
```

The method returns the `ndarray` instance. If an array is **read-only**, the method raises an exception.

<a name="method-iset"></a>

#### ndarray.prototype.iset( idx, v )

Sets an array element located at a specified linear index.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0 ];
var shape = [ 2, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 0;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Set the element located at index 3:
arr.iset( 3, 40.0 );
var v = arr.iget( 3 );
// returns 40.0

// Get the underlying buffer:
var d = arr.data;
// returns [ 1.0, 2.0, 3.0, 40.0 ]
```

For zero-dimensional arrays, the first, and **only**, argument should be the value `v` to set.

The method returns the `ndarray` instance. If an array is **read-only**, the method raises an exception.

<a name="method-to-string"></a>

#### ndarray.prototype.toString()

Serializes an `ndarray` as a `string`.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 3, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Serialize to a string:
var str = arr.toString();
// returns "ndarray( 'generic', [ 3, 4, 5, 6, 7, 8 ], [ 3, 2 ], [ 2, 1 ], 0, 'row-major' )"
```

The method does **not** serialize data outside of the buffer region defined by the array configuration.

<a name="method-to-json"></a>

#### ndarray.prototype.toJSON()

Serializes an `ndarray` as a [JSON][json] `object`. `JSON.stringify()` implicitly calls this method when stringifying an `ndarray` instance.

```javascript
// Specify the array configuration:
var buffer = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ];
var shape = [ 3, 2 ];
var order = 'row-major';
var strides = [ 2, 1 ];
var offset = 2;

// Create a new ndarray:
var arr = ndarray( 'generic', buffer, shape, strides, offset, order );

// Serialize to JSON:
var o = arr.toJSON();
// returns { 'type': 'ndarray', 'dtype': 'generic', 'flags': {...}, 'offset': 0, 'order': 'row-major', 'shape': [ 3, 2 ], 'strides': [ 2, 1 ], 'data': [ 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] }
```

The method does **not** serialize data outside of the buffer region defined by the array configuration.

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   To create a zero-dimensional array, provide an empty `shape` and a single `strides` element equal to `0`. The `order` can be either `row-major` or `column-major` and has no effect on data storage or access.

    ```javascript
    var buffer = [ 1 ];
    var shape = [];
    var order = 'row-major';
    var strides = [ 0 ];
    var offset = 0;

    // Create a new zero-dimensional array:
    var arr = ndarray( 'generic', buffer, shape, strides, offset, order );
    // returns <ndarray>
    ```

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

* * *

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@deno/mod.js';
import ndarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-ctor@deno/mod.js';

// Create a data buffer:
var buffer = new Float32Array( (3*3*3*3) + 100 );

// Specify the array shape:
var shape = [ 3, 3, 3, 3 ];

// Specify the array strides:
var strides = [ 27, 9, 3, 1 ];

// Specify the index offset:
var offset = 4;

// Specify the order:
var order = 'row-major'; // C-style

// Create a new ndarray:
var arr = ndarray( 'float32', buffer, shape, strides, offset, order );

// Retrieve an array value:
var v = arr.get( 1, 2, 1, 2 );
// returns 0.0

// Set an array value:
arr.set( 1, 2, 1, 2, 10.0 );

// Retrieve the array value:
v = arr.get( 1, 2, 1, 2 );
// returns 10.0

// Serialize the array as a string:
var str = arr.toString();
// returns "ndarray( 'float32', new Float32Array( [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ), [ 3, 3, 3, 3 ], [ 27, 9, 3, 1 ], 0, 'row-major' )"

// Serialize the array as JSON:
str = JSON.stringify( arr.toJSON() );
// e.g., returns '{"type":"ndarray","dtype":"float32","flags":{"READONLY":false},"order":"row-major","shape":[3,3,3,3],"strides":[27,9,3,1],"data":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}'
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/ndarray/array`][@stdlib/ndarray/array]</span><span class="delimiter">: </span><span class="description">multidimensional arrays.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-ctor

[test-image]: https://github.com/stdlib-js/ndarray-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/ndarray-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/ndarray-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/ndarray-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-ctor/main/LICENSE

[json]: http://www.json.org/

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/deno

[@stdlib/ndarray/orders]: https://github.com/stdlib-js/ndarray-orders/tree/deno

[@stdlib/ndarray/index-modes]: https://github.com/stdlib-js/ndarray-index-modes/tree/deno

<!-- <related-links> -->

[@stdlib/ndarray/array]: https://github.com/stdlib-js/ndarray-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
