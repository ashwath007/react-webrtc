import socketClient from 'socket.io-client';
import * as dashBoardAction from "../../actions/dashBoardAction"

import store from "../../store"
const SERVER = 'http://localhost:5000';

let socket;

const BroadcastEventTypes = {
    ACTIVE_USERS: "ACTIVE_USERS",
    GROUP_CALL_ROOMS: "GROUP_CALL_ROOMS"
}



export const connectWebSocket = () => {
    socket = socketClient(SERVER);

    // Event listener
    socket.on('connection', () => {
        console.log('Connected with socket server')
        console.log(socket.id)


    })


    socket.on('broadcast', (data) => {
        handleBroadCastData(data);
    });
}

export const registerNewUser = (username) => {
    socket.emit('register-new-user', {
        username: username,
        socketId: socket.id
    });
}


const handleBroadCastData = (data) => {

    switch (data.event) {
        case BroadcastEventTypes.ACTIVE_USERS:
            const activeUsers = data.activeUsers.filter(activeUser => activeUser.socketId !== socket.id)
            store.dispatch(dashBoardAction.setActiveUsers(activeUsers));
            break;
        default:
            break;
    }
}