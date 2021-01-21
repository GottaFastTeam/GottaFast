const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;
const cors = require('cors')

app.use(cors())

// iniital message
const messages = [{
  name: 'GAME MASTER',
  message: 'WELCOME TO GOTTA FAST : THE ULTIMATE SPEED CLICKER'
}]

// list of players
const players = []

io.on('connection', (socket) => {
  console.log('Socket.io client connected');

  // Socket greating message for all players
  socket.emit('init', { messages, players, leaderboards })

  // Socket listen for new player
  socket.on('newPlayers', (payload) => {
    // push new player to list of players
    players.push(payload)

    // Socket send data new player to only client seeder for greating
    socket.emit('serverGreeting', payload);

    // Socket send to all player about new  player
    io.emit('messageNewPlayer', players);
  })

  // Socket for listen updated score
  socket.on('updateSkorPlayer', (payload) => {
    // find user updated skor
    const findPlayer = players.filter(el => el.username === 'nanda');

    // update score player
    findPlayer[0].score = payload.score;

    // Socket send updated score
    io.emit('updatedScore', players)
  })
})

app.listen(3000, () => {
  console.log(`listen to port ${port}`);
})