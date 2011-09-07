// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The Function prototype object is itself a Function object without [[create]] property
 *
 * @id: S15.3.4_A5;
 * @section: 15.3.4;
 * @description: Checking if creating "new Function.prototype object" fails;
 */

//CHECK#
try {
  var obj = new Function.prototype;
  $FAIL('#1: The Function prototype object is itself a Function object without [[create]] property: '+e);
} catch (e) {
  $PRINT("#1.1: The Function prototype object is itself a Function object without [[create]] property "+e);

}
