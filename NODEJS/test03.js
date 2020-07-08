const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
    if (err) {
        console.log('error..');
        return;
    }
    console.log(data.toString());
});
console.log('done');
console.log('done');
console.log('done');
console.log('done');