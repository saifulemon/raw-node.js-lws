/*
 * Title: Handle Request Response
 * Description: Handle Request & Response
 * Author: Saiful Islam
 * Date: 04/05/2023
 */

// defendencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { routes } = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandler/notFoundHandler');

// module scafolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handled
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObj = parsedUrl.query;
    const headersObj = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObj,
        headersObj,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        chosenHandler(requestProperties, (statusCode, payload) => {
            statusCode = typeof statusCode === 'number' ? statusCode : 500;
            payload = typeof payload === 'object' ? payload : {};

            const payloadString = JSON.stringify(payload);

            // return the final response
            res.writeHead(statusCode);
            res.end(payloadString);
        });

        // response handle
        res.end('Hello world');
    });
};

module.exports = handler;
