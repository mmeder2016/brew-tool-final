/* ************************************************************************ */
/*
    All HTML-esque Content

    NOTE: The module arguments are required. And your code will use them to 
    access the Express application object, database object, and the root path 
    of the application.
*/
module.exports = function(app) {

    var path = require('path');

    /*
        GET /index - responds with the index/landing page
    */
    app.get('/index', function(req, res) {
        // REACT - 
        res.sendFile(path.join(app.get('approot'), '/public/index.html'));
    });
};

