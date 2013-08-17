var http = require("http").createServer(function(req, res){
	res.writeHead(200, {"Content-Type":"text/plain"});
	res.end("this is my new Workout - Hello World Again")
});
var port = process.env.PORT || 3000;
	http.listen(port);
console.log("The server connected at localhost");
