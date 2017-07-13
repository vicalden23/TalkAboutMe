var express = require('express');
var bodyParser = require('body-parser');
var Picture = require('./db/Picture.js');

var app = express();

app.listen(2323, function() {
  console.log('LISTENING ON PORT 2323');
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

//GET all pictures
app.get('/pictures', function(req, res) {
  Picture.find({}).exec(function(err, pictures) {
    res.status(200).send(pictures);
  });
});

//POST a picture
app.post('/pictures', function(req, res) {
  console.log('REQ BODY', req.body);
  Picture.findOne({image: req.body.image})
    .exec(function(err, picture) {
      if (!picture) {
        var newPic = new Picture({
          image: req.body.image,
          name: req.body.name,
          age: req.body.age,
          quote: req.body.quote,
          hot: req.body.hot,
          regular: req.body.regular,
          not: req.body.not
        });
        newPic.save(function(err, newPic) {
          if(err) {
            res.status(500).send(err);
          }
          res.status(201).send(newPic);
        });
      }
    });
});
