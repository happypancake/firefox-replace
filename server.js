var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.writeHead(302, { Location: '/redirected' });
  res.end();
  res.finished = true;
})
app.use('/redirected', express.static('index.html'))
app.listen(3000);
