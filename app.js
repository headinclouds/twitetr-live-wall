var express = require('express');

var app = express();
var cors = require('cors');

app.use(require('cors')());
app.use(require('body-parser').json());

var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'nuhplBALuk3EWDCizyAoij9NF',
  consumer_secret: 'rR5o2JivHJX6jcBP7JZTeS7WcpArycyRyBPdHhMFFJaW5BhIKO',
  access_token_key: '1004682160589213698-xDDs9OlNEeE5lRiKBqNUEIwANnYooQ',
  access_token_secret: 'O6YVtdPnYpyAuTZeGkVoFH8HBubbrK2dX5Us72joCHM4P'
});

app.get('/', (req, res) => {

  var query = req.url.match(/[^=]+$/)[0];
  client.get('search/tweets', {q: query}, function(error, tweets, response) {
    var status = tweets.statuses;
    res.end(JSON.stringify(status));   
  });
 // console.log(req.body);
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});