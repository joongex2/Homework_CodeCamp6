const fs = require('fs');
const { rejects } = require('assert');

// function readPromise(filename) {
const readPromise = (filename) => {
    return new Promise((rs, rj) => {
        // if (filename == 'f02.txt') rj('Error from f02');
        fs.readFile(filename, 'utf-8', (err, data) => rs(data))
    })
};

// (async function runReadPromise() {
(async () => {
    try {
        let data = await readPromise('start.txt');
        console.log(data);
        data = await readPromise(data);
        console.log(data);
        data = await readPromise(data);
        console.log(data);
        data = await readPromise(data);
        console.log(data);
    } catch (err) {
        console.error(`error: ` + err);
    }
})();

// runReadPromise();

// readPromise('start.txt')
// .then( (rs) => readPromise(rs) )
// .then( (rs) => readPromise(rs) )
// .then( (rs) => readPromise(rs) )