const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())

const messages = [{
  name: 'Admin',
  message: 'WELCOME TO GOTTA FAST : THE ULTIMATE SPEED CLICKER'
}]

io.on('connection', (socket) => {
  console.log('Socket.io client connected');
  socket.emit('init', { messages })
})

app.listen(3000, () => {
  console.log(`listen to port ${port}`);
})