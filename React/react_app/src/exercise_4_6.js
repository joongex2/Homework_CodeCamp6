// 1.
// function f() {
//     alert("Hello!");
// }

// Function.prototype.defer = function (time) {
//     setTimeout(this, time);
// }

// f.defer(1000);

// 2.
// function f(a, b) {
//     alert( a + b );
// }

// Function.prototype.defer = function(time) {
//     let callbackFunction = this;
//     return function(a, b) {
//         setTimeout(callbackFunction, time, a, b);
//     };
// }

// f.defer(1000)(1, 2);