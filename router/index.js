/* ************************************************************************ */
/*
    All Server Routes
*/
'use strict'

// add/modify items as needed...
const routes = [
    require('./routes/html.js'),
    require('./routes/api.js'),
    // NOTE: standard.js MUST be last!
    require('./routes/standard.js')
];

// Add access to the app, db object and application
// root to each route
module.exports = function router(app) {
    /* ******************************************************************** */
    /*
        Ported in as part of the authentication code
    */
    var authRoutes = require('./routes/auth.js');
    app.use('/', authRoutes);
    /* ******************************************************************** */

    return routes.forEach((route) => {
        route(app);
    });
};

