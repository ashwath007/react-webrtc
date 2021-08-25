import socketClient from 'socket.io-client';

const SERVER = 'http://localhost:5000';


let socket;


export const connectWebSocket = () => {
    socket = socketClient(SERVER);

    // Event listener
    socket.on('connection', () => {
        console.log('Connected with socket server')
        console.log(socket.id)

    })
}