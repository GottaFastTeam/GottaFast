const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){ 
    console.log('Socket.io client connected');
    // socket.emit()
});

server.listen(3000, ()=>{
    console.log('listen 3000');
})