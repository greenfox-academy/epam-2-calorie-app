'use strict';

var connection = require('./database_connection');
var server = require('./server.js')

var app = server(connection);

var port = parseInt(process.env.PORT || '3000');
app.listen(port, function () {
  console.log('Listening on port', port);
});
