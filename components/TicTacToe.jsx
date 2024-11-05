import { useEffect } from 'react';
import Square from '@compo/Square.jsx';
import { repeatCompo } from '@util/repeatCompo.js';
import { checkForWin } from '@util/checkForWin.js';
import * as s from '@styl/tic-tac-toe.module.css';

export default function TicTacToe({ size, board, onBoardUpdate, onGameEnd }) {

  useEffect(() => {
    const isRestart = board.every(square => square === '');
    checkForWin(board, onGameEnd, isRestart);
  }, [board]);

  function handleSquareClick(i) {
    onBoardUpdate(i)
  }

  return (
    <div className={s.container} style={{ blockSize: size }}>

      <div className={s.gridBoard}>
        {repeatCompo(9, <Square symbol={(i) => board[i]} onSquareClick={(i) => () => handleSquareClick(i)} />, 'symbol onSquareClick')}
      </div>

      <SvgBoarders />

    </div>
  )
}

function SvgBoarders() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 90 90" className={s.svgBoarders}>
      <g fill="none" stroke="#ffffff30" strokeWidth="2" strokeDasharray="45" strokeDashoffset="45">
        <path d="M30 45v-45"></path>
        <path d="M30 45v45"></path>

        <path d="M60 45v-45"></path>
        <path d="M60 45v45"></path>

        <path d="M45 30h-45"></path>
        <path d="M45 30h45"></path>

        <path d="M45 60h-45"></path>
        <path d="M45 60h45"></path>

        <animate attributeName="stroke-dashoffset" dur=".4s" to="0" fill="freeze" begin=".25s"></animate>
      </g>
    </svg>
  )
}
