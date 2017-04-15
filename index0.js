var restify = require('restify');
var server = restify.createServer();
var port = 8080;
// blogs / posts / comments /
// CRUD  | mongoDB | REST
// ----- |---------|-------
//create | insert  | POST
// read  | find    | GET
// update| update  | PUT
// delete| remove  | DELETE

// server.verb('path', function(req, res, next){})


server.get('/book',function(req,res, next){
	res.send("Hello World");
	next(); 
});
server.get('/hello/:firstname/:lastname',function(req,res,next){
	//name is the parameter
	res.send("Hello " + req.params.firstname + req.params.lastname);
	next();
});
server.listen(port,function(){
	console.log('%s listening at %s', server.name,port);
});

// curl -X GET localhost:8080/
// curl -X DELETE localhost:8080/
