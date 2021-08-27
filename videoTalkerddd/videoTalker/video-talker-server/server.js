const express = require('express');
const socket = require('socket.io');

const PORT = 5000;

const app = express();

const server = app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});

const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

let peers = [];

const broadcastEventTypes = {
    ACTIVE_USERS: 'ACTIVE_USERS',
    GROUP_CALL_ROOMS: 'GROUP_CALL_ROOMS'
};

io.on('connection', (socket) => {
    socket.emit('connection', null);
    console.log('new user connected');
    console.log(socket.id);

    socket.on('register-new-user', (data) => {
        peers.push({
            username: data.username,
            socketId: data.socketId
        });
        console.log('registered new user');
        console.log(peers);

        io.sockets.emit('broadcast', {
            event: broadcastEventTypes.ACTIVE_USERS,
            activeUsers: peers
        });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
        peers = peers.filter(peer => peer.socketId !== socket.id);
        io.sockets.emit('broadcast', {
            event: broadcastEventTypes.ACTIVE_USERS,
            activeUsers: peers
        });
    });


    socket.on('pre-offer', data => {
        console.log('pre-offer : ', data.calee.socketId);
        io.to(data.calee.socketId).emit('pre-offer', {
            callerUsername: data.caller.name,
            callerSocketId: socket.id
        })
    })


    socket.on('pre-offer-answer', data => {
        console.log('pre-offer-answer : ', data.answer);
        console.log('pre-offer-answer Reason : ', data);

        io.to(data.callerSocketId).emit('pre-offer-answer', {
            answer: data.answer
        })
    })


});