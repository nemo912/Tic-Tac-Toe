
module.exports = handlePlayerMessage;

function handlePlayerMessage(data, player) {
    const _m = JSON.parse(data.toString());

    const outgoingMessage = JSON.stringify({
        board: _m.board,
        isMyTurn: true,
    });

    player.game.players[player.opponent].connection.send(outgoingMessage);
}
