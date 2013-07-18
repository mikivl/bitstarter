var express = require('express');

var app = express.createServer(express.logger());

var fs = require('fs');

app.get('/', function(request, response) {
	var mybuff = fs.readFileSync("index.html");
	var mystr = mybuff.toString();
	response.send(mystr);
	
	// response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
