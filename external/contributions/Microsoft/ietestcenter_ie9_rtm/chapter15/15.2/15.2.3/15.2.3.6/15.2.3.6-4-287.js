/// Copyright (c) 2009 Microsoft Corporation 
/// 
/// Redistribution and use in source and binary forms, with or without modification, are permitted provided
/// that the following conditions are met: 
///    * Redistributions of source code must retain the above copyright notice, this list of conditions and
///      the following disclaimer. 
///    * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and 
///      the following disclaimer in the documentation and/or other materials provided with the distribution.  
///    * Neither the name of Microsoft nor the names of its contributors may be used to
///      endorse or promote products derived from this software without specific prior written permission.
/// 
/// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR
/// IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
/// FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
/// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
/// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
/// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
/// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
/// ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

ES5Harness.registerTest({
    id: "15.2.3.6-4-287",

    path: "TestCases/chapter15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-287.js",

    description: "Object.defineProperty - 'O' is an Array, 'name' is generic own accessor property of 'O', test TypeError is thrown when updating the [[Enumerable]] attribute value of 'name' which is defined as non-configurable (15.4.5.1 step 5)",

    test: function testcase() {

        var arrObj = [];

        function setFunc(value) {
            arrObj.setVerifyHelpProp = value;
        }
        Object.defineProperty(arrObj, "property", {
            set: setFunc,
            enumerable: false
        });
        try {
            Object.defineProperty(arrObj, "property", {
                enumerable: true
            });
            return false;
        } catch (e) {
            return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arrObj, "property", undefined, setFunc, "setVerifyHelpProp", false, false);
        }
    },

    precondition: function prereq() {
        return fnExists(Object.defineProperty);
    }
});
