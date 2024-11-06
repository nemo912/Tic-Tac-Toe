import { useState, useEffect } from 'react';

export function useGameServerConnection(url, nthMatch) {
    let ws = null;
    const [data, setData] = useState({ serverStatus: 'connecting', stateOfGame: '', updateGameState: handleGameState, closeGameServer: closeThisGame });

    useEffect(() => {

        ws = new WebSocket(url);
        setData({ serverStatus: 'connecting', stateOfGame: '', updateGameState: handleGameState, closeGameServer: closeThisGame });

        ws.onclose = (closeE) => {
            console.log(`connection closed --> ${closeE.code}`);

            if (closeE.code === 1001) {
                console.log('close for offline player Error!');
                setData(d => {
                    return (
                        {
                            ...d,
                            stateOfGame: 'E-offline',
                        }
                    )
                });
            }
        }

        ws.onopen = () => {
            setData(d => {
                return { ...d, serverStatus: 'searching', };
            });
        }

        ws.onmessage = (e) => handleIncomingMessage(e.data);

        return () => ws.close();

    }, [url, nthMatch]);

    function closeThisGame() {
        ws.send(JSON.stringify({
            close: true,
        }));
    }

    function handleGameState(state) {
        setData(d => {
            return (
                {
                    ...d,
                    stateOfGame: state,
                }
            )
        });
    }

    function handleBoardUpdate(new_board) {
        ws.send(JSON.stringify({
            board: new_board,
        }));

        setData(d => {
            return (
                {
                    ...d,
                    isActivePlayer: false,
                    board: new_board,
                }
        )});
    }

    function handleIncomingMessage(message) {
        const _m = JSON.parse(message);
        console.log('new message --', _m);

        if (_m.init) {
            console.log('server send init!');
            setData(d => {
                return (
                    {
                        ...d,
                        serverStatus: 'ready',
                        symbol: _m.symbol,
                        isActivePlayer: _m.isActivePlayer,
                        opponent: _m.opponent,
                        board: Array(9).fill(''),
                        onBoardUpdate: handleBoardUpdate,
                    }
                )
            });
        }

        else {
            console.log('server send normal!');
            setData(d => {
                return (
                    {
                        ...d,
                        isActivePlayer: _m.isActivePlayer,
                        board: _m.board,
                    }
                )
            });
        }
    }

    return data;
}
