const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('Socket.io client connected');
  socket.emit()
})

app.listen(3000, () => {
  console.log(`listen to port ${port}`);
})