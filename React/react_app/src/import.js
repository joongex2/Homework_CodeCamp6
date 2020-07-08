import {name, obj, arr} from './export.js';
import Export from './export';

console.log(name);
console.log(obj);
console.log(arr);
console.log(Export);

export let user = {
    name: "John",
    surname: "Smith"
};

Object.defineProperty(user, 'fullName', {
    get() {
        return `${this.name} ${this.surname}`;
    },
    set(value) {
        [this.name, this.surname] = value.split(" ");
    }
});

// alert(user.fullName);