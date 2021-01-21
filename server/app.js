const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = 3000;

// iniital message
const messages = [{
    name: 'GAME MASTER',
    message: 'WELCOME TO GOTTA FAST : THE ULTIMATE SPEED CLICKER'
}]

// list of players
const players = []

io.on('connection', socket => {
    console.log('Socket.io client connected');
    // Socket greating message for all players
  socket.emit('init', { messages, players})

  // Socket listen for new player
  socket.on('newPlayers', (payload) => {
    // push new player to list of players

    if (players.length < 4) {
      players.push(payload)
      // Socket send data new player to only client seeder for greating
      socket.emit('serverGreeting', payload);

      // Socket send to all player about new  player
      io.emit('messageNewPlayer', players);
    }else{
      socket.emit('fullRoom', 'Room full!');
    }
  })

  // Socket for listen updated score
  socket.on('updateSkorPlayer', (payload) => {
    // find user updated skor
    const findPlayer = players.filter(el => el.username === payload.username);

    // update score player
    findPlayer[0].score = payload.score;

    // Socket send updated score
    io.emit('updatedScore', players)
  })
})

server.listen(port,()=>{
    console.log(port);
});
