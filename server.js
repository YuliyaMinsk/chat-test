const express = require('express'); // load express -> web app

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

const rooms = new Map();

app.get('/rooms', (req, res) => {
  res.send(rooms);
});

io.on('connection', (socket) => {
  console.log('User connected!', socket.id);
})

server.listen(9999, (err) => {
  if (err) {
    throw Error(err);
  }
  console.log('Server is running!');
});