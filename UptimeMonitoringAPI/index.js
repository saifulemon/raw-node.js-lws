/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Saiful Islam
 * Date: 03/05/2023
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');
const { error } = require('console');

// app object - module scafolding
const app = {};

// testing file system
// data create
data.create('test', 'newFile', { name: 'bangladesh', language: 'bangla' }, (err) => {
    console.log('error was', err);
});

// data read
data.read('test', 'newFile', (err, data2) => {
    console.log(err, data2);
});

// data update
data.update('test', 'newFile', { name: 'England', language: 'English' }, (err) => {
    console.log(err);
});

// data delete
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// configuration
app.config = {
    port: 3000,
};

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening on ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
