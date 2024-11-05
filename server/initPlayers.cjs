const handlePlayerMessage = require('./handlePlayerMessage.cjs');

module.exports = initPlayers;

function initPlayers(queue, game) {
    const [pX, pO] = queue;

    pX.setType('X');
    pO.setType('O');

    pX.isInQueue = false;
    pO.isInQueue = false;

    pX.game = game;
    pO.game = game;

    pX.connection.on('message', (data) => handlePlayerMessage(data, pX));
    pO.connection.on('message', (data) => handlePlayerMessage(data, pO));
    


    return { X: pX, O: pO };
}
