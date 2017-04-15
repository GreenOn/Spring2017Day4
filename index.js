var restify = require('restify');
var server = restify.createServer();
var port = 8080;
var mongoose = require ('mongoose');
var hello = require('./routes/hello');
var client = require('./client/client');
var Emails = require('./models/emails.js');
var emails = require('./routes/email.js');
mongoose.connect('mongodb://localhost/enron');


var db = mongoose.connection;

db.on('error', function(msg){
	console.log('Mongoose connection error %s', msg);
});

db.once('open', function(){
	console.log('Mongoose connection established.');
})

server.get('/', client.get);

server.get('/emails', emails.get);

server.get('/hello/:test', hello.send);

server.put('/hello/:test', hello.send);

server.post('hello/:stuff', hello.post);

server.del('/hello/:test', hello.del);

server.listen(port,function(){
	console.log('%s listening at %s', server.name,port);
});

