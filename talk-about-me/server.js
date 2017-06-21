var express = require('express');
var bodyParser = require('body-parser');
var Picture = require('./db/Picture.js');

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.listen(3000, function() {
  console.log('LISTENING ON PORT 3000');
});


//Get all pictures
app.get('/pictures', function(req, res) {
  Picture.find({}).exec(function(err, pictures) {
    res.status(200).send(pictures);
  })
});
