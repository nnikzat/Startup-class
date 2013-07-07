var express = require('express');
fs = require('fs');

var app = express.createServer(express.logger());
myBuff = new Buffer(256);

fs.readFileSync('./index.html'), function (err, data) {
   if (err) throw err;
   len = myBuff.write(data);
   console.log(myBuff.toString('utf8', 0, len));
});


//app.get('/', function(request, response) {
//  response.send('Hello World 2!');
//});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
