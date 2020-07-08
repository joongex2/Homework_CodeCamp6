const { fstat } = require("fs");

const fs = require('fs');

for (let i = 0; i < 20; i++) {
    // fs.readFile('codecamp.txt', 'utf-8', (err, data) => {
    //     console.log(data);
    // });
    // console.log('cc5');
    const d1 = fs.readFileSync('codecamp.txt', 'utf-8');
    console.log(d1);
    const d2 = fs.readFileSync('codecamp1.txt', 'utf-8');
    console.log(d2);
}
// fs.readFile('codecamp1.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });