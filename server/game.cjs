const createPlayers = require('./createPlayers.cjs');

class Game {

    constructor(queue) {
        const [pX, pO] = createPlayers(queue);

        this.pX = pX, this.pO = pO;
        this.#syncPlayers();

        console.log(`--- new Game ---\n`);
    }

    close(code = 1000) {

        this.pX.connection.removeAllListeners('close');
        this.pO.connection.removeAllListeners('close');

        this.pO.connection.close(code);
        this.pX.connection.close(code);   

        console.log('__game closed__');
    }

    start() {

        this.pX.connection.on('close', this.#handlePlayerClose.bind(this, 'X'));
        this.pO.connection.on('close', this.#handlePlayerClose.bind(this, 'O'));

        const initMessageX = JSON.stringify({
            init: true,
            isActivePlayer: true,
            symbol: 'X',
            opponent: { username: this.pO.username, character: this.pO.character },
        });

        const initMessageO = JSON.stringify({
            init: true,
            isActivePlayer: false,
            symbol: 'O',
            opponent: { username: this.pX.username, character: this.pX.character },
        });

        this.pX.connection.send(initMessageX);
        this.pO.connection.send(initMessageO);
    }

    #handlePlayerClose(p, code, reason) {
        console.log(`player "${p}" closed ==> ${code}`);
        this.close(1001);
    }

    #syncPlayers() {
        this.pX.connection.on('message', (message) => {
            const _m = JSON.parse(message.toString());

            if (_m.close) {
                this.close();
                return;
            }

            this.pO.connection.send(JSON.stringify({ isActivePlayer: true, board: _m.board }));
        });

        this.pO.connection.on('message', (message) => {
            const _m = JSON.parse(message.toString());

            if (_m.close) {
                this.close();
                return;
            }

            this.pX.connection.send(JSON.stringify({ isActivePlayer: true, board: _m.board }));
        });
    }
}





module.exports = Game;
