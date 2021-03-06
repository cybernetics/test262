/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/// Ecma International makes this code available under the terms and conditions set
/// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the 
/// "Use Terms").   Any redistribution of this code must retain the above 
/// copyright and this notice and otherwise comply with the Use Terms.
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-586.js
 * @description ES5 Attributes - Fail to update value of property into of [[Proptotype]] internal property  (JSON)
 */


function testcase() {
        var data = "data";
        try {
            Object.defineProperty(Object.prototype, "prop", {
                get: function () {
                    return data;
                },
                enumerable: false,
                configurable: true
            });
            JSON.prop = "myOwnProperty";

            return !JSON.hasOwnProperty("prop") && JSON.prop === "data" && data === "data";
        } finally {
            delete Object.prototype.prop;
        }
    }
runTestCase(testcase);
