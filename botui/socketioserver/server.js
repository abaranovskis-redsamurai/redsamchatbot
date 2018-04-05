var express = require('express');
var app = express();
const port = 8080;

console.log("Server Running At: localhost:" + port);

var io = require('socket.io').listen(app.listen(port));
io.sockets.on("connection",function(socket) {
  console.log('User connected');

  socket.on('clientEvent', function(data) {
    console.log(data.msg);
    socket.emit('serverEvent', {msg: 'Hello from server!'});
  });

  socket.on('disconnect', function () {
    console.log('User disconnected');
  });
})
