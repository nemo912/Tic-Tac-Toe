import { useState, useRef } from 'react';
import OnlineTicTacToe from '@compo/OnlineTicTacToe.jsx';
import MainMenu from '@compo/MainMenu.jsx';
import * as s from '@styl/app.module.css';

export default function App() {

  const [isPlay, setIsPlay] = useState(false);
  const player = useRef(null);

  function startPlay(name, char) {
    player.current = { username: name, character: char };
    setIsPlay(true);
  }

  return (
    <div className={s.container}>
      {isPlay ? <OnlineTicTacToe player={player.current} onBackToHome={() => setIsPlay(false)} /> : <MainMenu onPlay={startPlay} />}
    </div>
  )
}
