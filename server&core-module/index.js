/* path module */
// const path = require('path');
// const myPath = ""
// console.log(path.parse(myPath));

/* os module */
// const os = require('os');
// console.log(os.platform());

/* fs module */
// const fs = require('fs');

// file write example
// fs.writeFileSync('myfile.txt', 'Hello Node.js!');
// fs.appendFileSync('myfile.txt', 'how are you?');

// // file read example
// const data = fs.readFileSync('myfile.txt');
// console.log(data.toString());

// file read example in asynchronous way
// fs.readFile('myfile.txt', (err, data) => {
//     console.log(data.toString());
// });

/* Events module */
// const EventEmitter = require('events');

// const emitter = new EventEmitter();

// // register a listener for bellRing event
// emitter.on('bellRing', () => {
//     console.log('we need to run');
// });

// // raise an event
// emitter.emit('bellRing');

/* Events with user defined module */
const School = require('./school');

const school = new School();

// register a listener for bellRing event
school.on('bellRing', ({ period, text }) => {
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();
