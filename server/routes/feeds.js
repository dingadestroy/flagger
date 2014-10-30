mongoose = require('mongoose');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
  var flagfeedSchema = new mongoose.Schema({
  uid: String
, feed: String
});

});

mongoose.connect('mongodb://localhost/test');
var flagfeedSchema = new mongoose.Schema({
  uid: String
, feed: String
});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
var Feed = mongoose.model('FlagFeed', flagfeedSchema);

/*
var hello = new Feed({
  uid: 1
, feed: 'Hello World'
});
hello.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
function(request, response){
  var feed = request.query.feed;
  console.log("send feed");
  console.log(feed);      // your JSON
  response.send(request.body);    // echo the result back
}
*/

exports.enterFeed = function (req, res, next) {
    var ufeed = req.query.feed;
    console.log('name: ' + ufeed);
    if (ufeed) {
        console.log('feed: ' + ufeed);
	var nfeed = new Feed({uid: "test",feed: ufeed});
	nfeed.save(function(err, sfeed) {
  	if (err) return console.error(err);
  		console.dir(sfeed);
		res.send("created feed");
	});
    }
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(employees[id]);
};
