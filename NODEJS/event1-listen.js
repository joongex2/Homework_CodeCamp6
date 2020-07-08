const Em1 = require('./event1-emit.js')
const em1 = new Em1();
const em2 = new Em1();

em1.emit1();
em1.emit2();
em1.on('onesec', (e) => {
    console.log(e);
})
em1.on('twosec', (e) => {
    console.log(`from em2 ${e}`);
})