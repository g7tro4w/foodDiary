var http = require("http");

function startServer(){
	function onRequest(request, response) {
	  console.log("Request received.");
	  response.writeHead(200, {"Content-Type": "text/plain"});
	  response.write("Server is running");
	  response.end();
	}

	http.createServer(onRequest).listen(8080);

	console.log("Server has started.");
}

exports.startServer = startServer;