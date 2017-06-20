var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/talkaboutmedb');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('CONNETION TO talkaboutmedb IS OPEN')
})

var picSchema = new mongoose.Schema({
  image: {type: String, required:true},
  name: {type: String, required:true},
  age: {type: Number},
  quote: {type: String},
  hot: {type: Number},
  regular: {type: Number},
  not: {type: Number}
})

var Picture = mongoose.model('Picture', picSchema);

module.exports = Picture;
