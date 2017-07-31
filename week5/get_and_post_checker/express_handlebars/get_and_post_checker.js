var express = require('express');


var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3000);

// Serve a get request for /loopback...
app.post('/loopback',function(req,res){
    var params = [];
    for (var key in req.body){
        params.push({name:key, value:req.body[key]});
    }
    var content = {};
    content.param = params;
    console.log(content);
    res.render('post-loopback', content);
});

// Serve a post request for /loopback...
app.get('/loopback',function(req,res){
    var params = [];
    for (var key in req.query){
        params.push({name:key, value:req.query[key]});
    }
    var content = {};
    content.param = params;
    res.render('get-loopback', content);
});

// Serve a post request for /...
// app.post('/',function(req,res){
//   res.type('text/plain');
//   res.render('post');
// });


// Serve a get request for /...
app.get('/random-number',function(req,res){
  var num = Math.random();
  res.render('random-number', {num: num.toString()});
});

// Serve a get request for /other-page...
app.get('/other-page',function(req,res){
  res.render('other-page');
});

// Serve up the not found page.
app.use(function(req,res){
  res.status(404);
  res.render('404');
});

// Serve up the server error page...
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500 - Server Error');
});

// Log to the console on node startup...
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

