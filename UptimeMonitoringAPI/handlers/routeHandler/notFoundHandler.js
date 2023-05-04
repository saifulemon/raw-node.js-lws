/*
 * Title: Not Found Handler
 * Description: 404 Not Found handler
 * Author: Saiful Islam
 * Date: 04/05/2023
 */

// module scafolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'your requested url is not available',
    });
};

module.exports = handler;
