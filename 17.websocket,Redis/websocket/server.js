/**
 * Created by eden90267 on 2017/3/4.
 */
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('chat', (msg) => {
        console.log('message: ' + msg);
        socket.broadcast.to('mainPage').emit('message', msg); // 傳給所有人除自己
        socket.emit('message', msg); // 傳給自己
    });
    socket.on('mainPage', () => {
        socket.join('mainPage', () => {
            console.log('join main okok');
        });
    });
    socket.on('chatPage', () => {
        socket.join('chatPage', () => {
            console.log('join chat okok');
        });
    });
});

http.listen(3000, () => console.log('listening on *:3000'));