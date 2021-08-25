const express = require('express');
const socket = require('socket.io');
const pig = require('pigcolor');

const PORT = 5000;

const app = express();

const server = app.listen(PORT, () => {
    pig.server(PORT);
})

const io = socket(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    }
});


const Peer = [];

const BroadcastEventTypes = {
    ACTIVE_USERS: "ACTIVE_USERS",
    GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS"
}

io.on('connection', (socket) => {
    socket.emit('connection', null);
    pig.box(`new user connected ${socket.id}`);

    socket.on('register-new-user', (data) => {
        Peer.push({
            username: data.username,
            socketId: data.socketId
        })
        pig.box(`register-new-user ${Object.values(Peer)}`);
        console.log(Peer)


        io.sockets.emit("broadcast", {
            event: BroadcastEventTypes.ACTIVE_USERS,
            activeUsers: Peer
        })
    });

})