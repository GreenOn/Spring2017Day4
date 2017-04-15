var restify = require('restify');
var fs = require('fs');


exports.get = function(req,res,ext){
	fs.readFile('index.html',function(err,data){
		if(err){
			console.log("Cannot read file index.html");
			res.send(404);
		}
		else
		{
			var body = data.toString();
			res.writeHead(200, {
				'Content-Length': Buffer.byteLength(body),
				'Content-Type': 'text/html'
			});
			res.write(body);
			res.end();
		}
		return next();
	})
}

