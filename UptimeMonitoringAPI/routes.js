/*
 * Title: Routes
 * Description: Application Routes
 * Author: Saiful Islam
 * Date: 03/05/2023
 */

// defendencies
const { sampleHandler } = require('./handlers/routeHandler/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
