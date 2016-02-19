var express = require("express")
var app = express();


app.use(express.static("./public"));
app.use(express.static("./node_modules/bootstrap/dist"));

var server = app.listen(9000);

var connections = [];
var title = 'Untitled presentation';

var io = require('socket.io').listen(server);
//incorporating socket.io
io.sockets.on('connection', function(socket) {

  socket.once('disconnect', function() {
    connections.splice(connections.indexOf(socket), 1) // removing a sockets from the connections array
    socket.disconnect();  // this is invoked because sometimes the socket disconnects from the server but not from the client.
    console.log('Disconnected: %s sockets remaining.', connections.length)
  });

  socket.emit('welcome', { title: title})

  connections.push(socket);
  console.log("connected: %s sockets connected", connections.length)
});


console.log('server running on port 9000');
