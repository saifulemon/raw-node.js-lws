/*
 * Title: Sample Handler
 * Description: Sample handler
 * Author: Saiful Islam
 * Date: 04/05/2023
 */

// module scafolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'this is sample url',
    });
};

module.exports = handler;
