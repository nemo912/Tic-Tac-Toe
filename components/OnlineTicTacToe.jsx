import TicTacToe from '@compo/TicTacToe.jsx';
import SearchForPlayers from '@compo/SearchForPlayers.jsx';
import PauseMenu from '@compo/PauseMenu.jsx';
import { useState } from 'react';
import { useGameServerConnection } from '@hooks/useGameServerConnection.js';
import * as s from '@styl/online-tic-tac-toe.module.css';

export default function OnlineTicTacToe({ player, onBackToHome }) {

  const [nthMatch, setNthMatch] = useState(0);
  const data = useGameServerConnection(`/server?name=${player.username}&char=${player.character}`, nthMatch);
  console.log('onlineTicTacToe ------------------', data);

  function handleBoardUpdate(index) {
    if (data.isActivePlayer && data.board[index] === '') {
      const new_board = [...data.board];
      new_board[index] = data.symbol;

      data.onBoardUpdate(new_board);
    }
  }

  function handleGameEnd(detail) {
    if (detail === data.symbol) data.updateGameState('win');
    else if (detail === 'draw') data.updateGameState('draw');
    else if (detail) data.updateGameState('lose');

    if (data.isActivePlayer) data.closeGameServer();
  }

  if (data.serverStatus === 'ready') {
    return (
      <div className={s.gameContainer}>
      <PauseMenu stateOfGame={data.stateOfGame} onRematch={() => setNthMatch(n => n + 1)} onBackToHome={onBackToHome} />

      <div className={s.container}>
        
        <div className={s.wrapper}>
          <Player player={player} />
          <span className={s.divider}>vs</span>
          <Player player={data.opponent} />
        </div>

        <div className={s.ticTacToeContainer}>
          <div className={s.ticTacToeWrapper}>
            <TicTacToe size={'100%'} board={data.board} onBoardUpdate={handleBoardUpdate} onGameEnd={handleGameEnd} />
          </div>
        </div>
      </div>
      </div>
    )
  }

  if (data.serverStatus === 'searching') {
    return (
      <SearchForPlayers />
    )
  }
}

function Player({ player }) {
  return (
    <div className={s.playerContainer}>
      <div className={s.playerWrapper}>
        <img className={s.playerCharacter} src={`/avatars/${player.character}.webp`} />
      </div>
      <span className={s.playerUsername}>{player.username}</span>
    </div>
  )
}
