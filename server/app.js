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

// example data object player
// payload = {
//   username: 'nanda',
//   status: 'idle', => idle or ready
//   score: 0
// }

io.on('connection', socket => {
  console.log('Socket.io client connected!');

  // Socket greating message for all players

  socket.emit('init', { messages, players })

  // Socket listen for new player
  socket.on('newPlayers', function(payload){
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
  socket.on('updateScorePlayer', function(payload) {
    // find user updated score
    const findPlayer = players.filter(el => el.username === payload.name);

    // update score player
    findPlayer[0].score = payload.score;

    // Socket send updated score
    io.emit('updatedScore', players)
  })

  // Socket for listen update status
  socket.on('updateStatus', function(payload) {
    // find user updated score
    const findPlayer = players.filter(el => el.username === payload.name);

    // update score player
    findPlayer[0].status = payload.status;

    // Socket send updated score
    io.emit('updatedPlayerStatus', players)
  })

  // Socket reset player attributes
  socket.on('resetGame', function(payload) {
    // make new array updated data
    const findPlayer = players.filter(el => el.username === payload.name);
    findPlayer[0].status = 'idle';
    findPlayer[0].score = 0;

    // send reset data player
    io.emit('resetPlayer', players);
  })
})

server.listen(port,()=>{
    console.log(`listen to http://localhost:${port}`);
});