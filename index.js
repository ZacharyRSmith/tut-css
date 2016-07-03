var express = require('express');

var server = express();
var PORT = process.env.PORT || '3000';

server.use(express.static('./public', { root: __dirname }));

server.get('/', function (req, res) {
  res.sendFile('./index.html', { root: __dirname });
});

server.listen(PORT, function () {
  console.log('Server listening on port', PORT);
});
