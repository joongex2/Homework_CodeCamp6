// class Button {
//     constructor(value){
//         this.value = value;
//     }

//     click() {
//         alert(this.value);
//     }
// }
// let button = new Button("hello");
// setTimeout(() => button.click(), 1000);

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     stop() {
//         alert("a");
//     }
// }
// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength;
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 10);
// alert(rabbit.name);
// alert(rabbit.earLength);

// class Rabbit extends Animal {
//     stop() {
//         setTimeout(() => super.stop(), 1000);
//     }
// }

// let rabbit = new Rabbit();
// rabbit.stop();

// function slow(x) {
//     alert(`Called with ${x}`);
//     return x;
// }
// function cachingDecorator(func) {
//     let cache = new Map();
//     console.log("in function");
//     return function(x) {
//         if(cache.has(x)) {
//             return cache.get(x);
//         }
//         console.log(`in function(x)`);
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     }
// }
// slow = cachingDecorator(slow);
// alert( slow(1) );
// alert( "Again: " + slow(1) );

// alert( slow(2) );
// alert( "Again: " + slow(2) );

// let worker = {
//     someMethod() {
//         return 1;
//     },
//     slow(x) {
//         alert(`Called with ` + x);
//         return x * this.someMethod();
//     }
// }

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function(x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x);
//         cache.set(x, result);
//         return result;
//     }
// }

// // alert( worker.slow(1) );

// worker.slow = cachingDecorator(worker.slow);

// alert( worker.slow(2) );

// function hash() {
//     alert( [].join.call(arguments) );
// }
// hash(1,2);

// let user = {
//     firstName: `John`
// };
// function func(phrase) {
//     alert(phrase + ', ' + this.firstName);
// }

// let funcUser = func.bind(user);
// funcUser('Hello');
// function partial(func, argsBound) {
//     return function(...args) {
//         console.log(argsBound);
//         return func.call(this, argsBound, ...args);
//     }
// }
// Usage:
// let user = {
//     firstName: 'John',
//     say(time, phrase) {
//         console.log(`[${time}] ${this.firstName}: ${phrase}!`);
//     }
// }

// user.sayNow = partial(user.say, 1,2);

// user.sayNow("Hello");

// let User = {a: '1', b: '2'};
// for (let [key, value] of Object.entries(User) ) {
//     console.log(`${key}, ${value}`);
// }
// let user = new Map()
// user.set(1, "first");
// user.set(2, "second")
// for (let [key, value] of user) console.log(key, value)

// let obj = {name: 'a', surname: 'b'};
// console.log(...obj);
// let obj2 = [1,2,3];
// console.log(...obj2);
