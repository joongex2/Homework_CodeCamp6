// 1.
// let animal = {
//     jumps: null
// };

// let rabbit = {
//     __proto__: animal,
//     jumps: true
// };

// alert( rabbit.jumps ); // ? (1)
// delete rabbit.jumps;
// alert( rabbit.jumps ); // ? (2)
// delete animal.jumps;
// alert( rabbit.jumps ); // ? (3)

// 2.
// let head = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: head
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };

// 3.
// export let animal = {
//     eat() {
//         this.full = true;
//     }
// };

// export let rabbit = {
//     __proto__: animal
// };

// rabbit.eat();
// ans rabbit got

// 4.
// let hamster = {
//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     stomach: [],
//     __proto__: hamster
// };

// let lazy = {
//     stomach: [],
//     __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // This one also has it, why? fix please.abs
// alert( lazy.stomach );