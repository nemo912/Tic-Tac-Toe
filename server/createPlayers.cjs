const Player = require('./player.cjs');

module.exports = createPlayers;

function createPlayers(queue) {

    const players = queue.map((p) => {
        return new Player(p.ws, p.name, p.char);
    });

    return players;
}
