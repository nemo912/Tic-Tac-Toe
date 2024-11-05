const { WebSocketServer } = require('ws');
const initGameServer = require('./initGameServer.cjs');
const Game = require('./game.cjs');

let gameServer;

class GameServer extends WebSocketServer {

    _queue = [];

    constructor(options) {
        super(options);
        gameServer = this;
        initGameServer(this);
    }

    checkForGame(closeHandler) {
        if (this._queue.length === 2) {

            this._queue.forEach((p) => p.ws.off('close', closeHandler));

            new Game(this._queue).start();
            this._queue = [];

        }
    }
}













module.exports = (options) => {
    return gameServer ?? new GameServer(options);
};
