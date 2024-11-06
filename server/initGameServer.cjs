
module.exports = initGameServer;


function initGameServer(server) {
    server.on('connection', connectionListenerForServer);


    function connectionListenerForServer(ws, req) {
        const params = new URL(req.url, 'http://localhost').searchParams;

        const username = params.get('name');
        const character = params.get('char');


        this._queue.push({ ws: ws, name: username, char: character });

        console.log('--new player connection--');
        console.log(`server queue: ${this._queue.length}`);

        ws.on('close', handleClose);
    
        this.checkForGame(handleClose);

    }

    function handleClose() {
        console.log('--client closed--');
    
        server._queue.pop();

        console.log(`server queue: ${server._queue.length}`);
    }

}
