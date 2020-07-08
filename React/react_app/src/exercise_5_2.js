// let dictionary = Object.create(null);

// // your code to add dictionary.toString method
// dictionary.toString = function() {
//     let combineString = ``;
//     for(let key in this) {
//         if (typeof this[key] != "function") combineString += `${key},`
//     }
//     return combineString.slice(0, combineString.length-1);
// }

// // add some data
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // __proto__ is a regular property key here

// // only apple and __proto__ are in the loop
// for(let key in dictionary) {
//     alert(key); // "apple", then "__proto__"
// }

// console.log(dictionary);

// // your toString in action
// alert(dictionary);

// 2.
// function Rabbit(name) {
//     this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//     alert(this.name);
// }

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi(); // Rabbit
// Rabbit.prototype.sayHi(); // Undefined
// Object.getPrototypeOf(rabbit).sayHi(); // Undefined
// rabbit.__proto__.sayHi(); // Undefined

