var express = require('express'),
    bodyParser     = require('body-parser'),
   // mongoskin = require('mongoskin'),
    mongoose = require('mongoose');
    methodOverride = require('method-override'),
    employees = require('./routes/employees'),
    feeds = require('./routes/feeds'),
    app = express();

app.use(bodyParser());          // pull information from html in POST
app.use(methodOverride());      // simulate DELETE and PUT

//var db = mongoose.connection;

//db.on('error', console.error);
//db.once('open', function() {
  // Create your schemas and models here.
//});

//mongoose.connect('mongodb://localhost/test');
//var feedSchema = new mongoose.Schema({
//  id: Number
//, feed: String
//});

// Compile a 'Movie' model using the movieSchema as the structure.
// Mongoose also creates a MongoDB collection called 'Movies' for these documents.
//var Feed = mongoose.model('Feed', feedSchema);

//var hello = new Feed({
//  id: 1
//, feed: 'Hello World'
//});
/*
hello.save(function(err, thor) {
  if (err) return console.error(err);
  console.dir(thor);
});
*/

// CORS (Cross-Origin Resource Sharing) headers to support Cross-site HTTP requests
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/employees', employees.findAll);
app.get('/employees/:id', employees.findById);
app.get('/feeds',feeds.findAllFeeds);
app.get('/feeds/enterfeed', feeds.enterFeed);
/*
app.get('/feeds/enterfeed', function(request, response){
  var feed = request.query.feed;
  console.log("send feed");
  console.log(feed);      // your JSON
  response.send(request.body);    // echo the result back
});
*/
app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
