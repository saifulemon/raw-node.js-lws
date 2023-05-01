const fs = require('fs');
// read stream example
const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk.toString());
// });

// write stream example
const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

ourReadStream.on('data', (chunk) => {
    ourWriteStream.write(chunk);
});
