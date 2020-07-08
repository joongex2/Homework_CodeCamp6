// const { obj } = require("./export");

function Rabbit() {}
Rabbit.prototype = {
    eats: true
};

let rabbit = new Rabbit();

// // 1.1 
// Rabbit.prototype = {};
// alert( rabbit.eats ); // true because it's before set to empty object

// // 1.2 
// Rabbit.prototype.eats = false;
// alert( rabbit.eats ); // false

// // 1.3 
// delete rabbit.eats;
// alert( rabbit.eats ); // true

// // 1.4 
// delete Rabbit.prototype.eats;
// alert( rabbit.eats ); // undefined

// 2.
let obj2 = new Object.constructor();
console.log(obj2);