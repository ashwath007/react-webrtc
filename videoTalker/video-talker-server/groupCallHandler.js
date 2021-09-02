const createPeerServerListeners = (peerServer) => {
    peerServer.on('connection', (client) => {
        console.log('sucessfully connecter');
        console.log(client.id)
    })
}


module.exports = {
    createPeerServerListeners
}