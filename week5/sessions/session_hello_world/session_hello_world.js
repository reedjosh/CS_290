// Joshua Reed
// OSU EECS
// CS 290 -> Web Design
// Summer, 2017
//
// session_hello_world.js
//
// Counts the number of times a visitor has visited a page.

var express = require('express');
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var session = require('express-session');

var app = express();

// Set web app parameters.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);
app.use(session({secret:'SuperSecretPassword'}));

// Serve the count session page...
app.get('/count',function(req,res){
    var context = {};
    context.count = req.session.count || 0;
    req.session.count = context.count + 1;
    res.render('counter', context);
    });

// Serve a get request for /...
app.get('/random-number',function(req,res){
    var num = Math.random();
    res.render('random-number', {num: num.toString()});
    });



// Serve up the not found page.
app.use(function(req,res){
    res.status(404);
    res.render('404');
    });

// Serve up the server error page...
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
    });

// Log to the console on node startup...
app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
    });

