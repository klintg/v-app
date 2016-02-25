var express = require("express");
var _ = require('underscore');
var app = express();


app.use(express.static("./public"));
app.use(express.static("./node_modules/bootstrap/dist"));

var server = app.listen(9000);

var connections = [];
var title = 'Untitled Presentation';
var audience = [];
var speaker = {};
var questions = require('./app-questions');
var currentQuestion = false;
var results = {
  a:0,
  b:0,
  c:0,
  d:0
}


var io = require('socket.io').listen(server);
//incorporating socket.io
io.sockets.on('connection', function(socket) {

  socket.once('disconnect', function() {

    var member= _.findWhere(audience, {id:this.id})// this refers to the socket id that has just disconnected
    if(member) {
      audience.splice(audience.indexOf(member), 1);
      io.sockets.emit('audience', audience)
      console.log("left: %s (%s audience members)", member.name, audience.length)
    } else if (this.id === speaker.id) {
      console.log("%s has left. '%s' is over", speaker.name, title)
      speaker = {}
      title = 'Untitled Presentation'
      io.sockets.emit('end', {title: title, speaker: ''})
    }

    connections.splice(connections.indexOf(socket), 1) // removing a sockets from the connections array
    socket.disconnect();  // this is invoked because sometimes the socket disconnects from the server but not from the client.
    console.log('Disconnected: %s sockets remaining.', connections.length)
  });

  socket.on('join', function(payload) {
    var newMember = {
      id: this.id,
      name: payload.name,
      type: 'member'
    };
    this.emit('joined', newMember)
    audience.push(newMember);
    io.sockets.emit('audience', audience);
    console.log('audience joined %s', payload.name)
  });

  socket.on('start', function(payload) {
    speaker.name = payload.name;
    speaker.id = this.id;
    speaker.type = 'speaker';
    title = payload.title;
    this.emit('joined', speaker);

    io.sockets.emit('start', {title: title, speaker:speaker.name});  //if an audience had joined before the Presentation had started,he will be updated by this.
    console.log("Presentation Started: '%s' by %s", title, speaker.name)
  });

  socket.on('ask', function(question) {
    currentQuestion = question;
    results = {a:0, b:0, c:0, d:0};
    io.sockets.emit('ask', currentQuestion);
    console.log("Question Asked: '%s'", question.query)
  });

  socket.on('answer', function(payload) {
    results[payload.choice]++

    console.log("Answer: '%s' - %j", payload.choice, results);
  });

  socket.emit('welcome', {
    title: title,
    audience: audience,
    speaker: speaker.name,
    questions: questions,
    currentQuestion: currentQuestion
  })

  connections.push(socket);
  console.log("connected: %s sockets connected", connections.length)
});


console.log('server running on port 9000');
