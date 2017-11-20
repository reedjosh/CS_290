var express = require('express');

var app = express();

app.set('port', 3000);

// Serve a get request for /...
app.get('/',function(req,res){
  res.type('text/plain');
  res.send('Get!');
});

// Serve a post request for /...
app.post('/',function(req,res){
  res.type('text/plain');
  res.send('Post!');
});


// Serve a get request for /...
app.get('/random-number',function(req,res){
  res.type('text/plain');
  var num = Math.random();
  res.send(num.toString());
});
// Serve a get request for /other-page...
app.get('/other-page',function(req,res){
  res.type('text/plain');
  res.send('Welcome to the other page!');
});

// Serve up the not found page.
app.use(function(req,res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

// Serve up the server error page...
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.send('500 - Server Error');
});

// Log to the console on node startup...
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});

