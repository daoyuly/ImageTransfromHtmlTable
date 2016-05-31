
var express = require('express');
var app = express();
var port = 3000


//app.use(express.static(__dirname + '/static'));
app.get("/logo-90.png", function(req, res) {
  res.sendFile(__dirname + '/logo-90.png')
})

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
