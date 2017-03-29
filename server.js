/* ************************************************************************ */
/*
    Node/Express Server
*/
var express = require('express');
var app = express();

app.set('approot', __dirname);

/* ************************************************************************ */
/*
    Ported in as part of the authentication code
*/
var path = require('path');

var logger = require('morgan');
var cookieParser = require('cookie-parser');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var flash = require('connect-flash');
var session = require('express-session');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));

/*
    End of authentication code port in
*/
/* ************************************************************************ */

/*
    Body Parser - provides json-ized form data
*/
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


/* ************************************************************************ */
/*
    Ported in as part of the authentication code
*/
app.use(cookieParser());

app.use(session({ secret: 'shhsecret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./config/passport')(passport);

/*
    End of authentication code port in
*/
/* ************************************************************************ */


/*
    Allow CORS

    See - http://enable-cors.org/server_expressjs.html
*/
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

/*
    Configuration
*/
var config = require('./server-config.json');
app.set('appconf', config);

/*
    NOTE: The following line is necessary, especially if 
    deploying to Heroku. Other platforms may require it
    as well. 
*/
app.set('port', (process.env.PORT || config.port));

var router = require('./router');

// global
var server;
var db;

/*
    Set up the database with our models, optional.
*/
if(config.use_db === true) {

    console.log('Server - setting database');

    // Mongo/Mongoose Database
    db = require('./models');
    app.set('db', db);

    /*  
        After the database is opened listen on the 
        port that was configured for us
    */
    db.conn.once('open', function() {
        startServer();
    });
} else {
    startServer();
}

if(config.use_sockets === true) initSockets();

function startServer() {
    // set up routes
    router(app);
    
    // go!
    server = app.listen(app.get('port'), function () {
        console.log('Server - listening on port '+app.get('port'));
        console.log('Server - IDLE - waiting for the first connection');
        console.log('================================================');
    });
};

function initSockets() {
    // listen for a socket.io connection and set up
    // the socket events that we're interested in.
    const io = require('socket.io').listen(server);
    // make available to any module that already has access to `app`
    app.set('socketio', io);
    var socketEvents = require('./appsocket.js');
    socketEvents(app);
    console.log('Server - IDLE - listening for socket.io events');
    console.log('================================================');
};



