/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
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

var cartesianSquare = require( '@stdlib/array-cartesian-square' );
var dtypes = require( '@stdlib/ndarray-dtypes' );
var isMostlySafeCast = require( './../lib' );

// Generate a list of dtype pairs:
var dt = cartesianSquare( dtypes() );

// For each data type pair, determine whether one can cast to another data type...
var i;
for ( i = 0; i < dt.length; i++ ) {
	console.log( '%s. Can cast? %s.', dt[i].join( ' => ' ), isMostlySafeCast.apply( null, dt[i] ) );
}
