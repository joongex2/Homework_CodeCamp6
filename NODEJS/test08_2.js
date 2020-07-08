const fs = require('fs');

function readPromise(filename) {
    return new Promise((rs, rj) => {
        if (filename.toString() === 'f02.txt') rj('Error from f02')
        fs.readFile(filename, 'utf-8', (err, data) => rs(data))
    })
};

readPromise('start.txt')
    .then((rs) => {
        console.log(rs);
        return readPromise(rs)
    })
    .then((rs) => {
        console.log(rs);
        return readPromise(rs)
    })
    .then((rs) => {
        console.log(rs);
        return readPromise(rs)
    })
    .catch((err) => {
        console.log(`Error: ` + err);
    })
