// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value
 *
 * @id: S15.3.4.3_A5_T6;
 * @section: 15.3.4.3;
 * @description: thisArg is new String();
 */

var obj=new String("soap");

( function(){this.touched= true;}).apply(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}
