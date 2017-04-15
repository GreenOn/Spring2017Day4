var restify = require('restify');

exports.send = function (req, res, next){
	res.send("Testing "+ req.params.test);
	return next();
}

exports.post = function (req, res, next){
	res.send(201, req.params.name + Math.random().tostring(35));
	return next();
}

exports.del = function (req, res, next){
	req.send(req.params.test + " is now gone.. deleted");
	return next();
}