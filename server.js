const express = require('express');
const app = express();
var path = require('path');
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port

console.log(__dirname)

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});
app.listen(process.env.PORT || 8080);