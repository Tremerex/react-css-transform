var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.listen(8080, () => console.log('listing on port 8080'));