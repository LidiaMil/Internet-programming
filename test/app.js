const express = require('express'),
app = express();

const port = process.env.PORT || 8080;

const io = require('socket.io').listen(app.listen(port));


require('./config')(app, io);
require('./routes')(app, io);

console.log('Application is running on http://localhost:' + port);