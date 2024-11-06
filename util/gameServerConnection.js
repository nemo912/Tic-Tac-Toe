
export { startServerConnection };



function startServerConnection(...rest) {
    const ws = new WebSocket('/server');

    ws.onopen = () => {

        console.log(rest);
        ws.onmessage = (message) => handleIncomingMessage(message, rest);
        ws.onclose = () => console.log('socket closed!');

    };

    return ws;
}


let isFirstMessage = true;

function handleIncomingMessage(message, rest) {
    const [onGameIsReady, onBoardUpdate, onItsMyTurn, mySymbol] = rest;

    const _m = JSON.parse(message.data);
    console.log(_m);

    onBoardUpdate(_m.board);
    onItsMyTurn.current = _m.isMyTurn;
    
    if (isFirstMessage) {
        onGameIsReady(false);
        mySymbol.current = _m.symbol;

        isFirstMessage = false;
    }
}
