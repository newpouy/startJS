var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.send('index.html');
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
