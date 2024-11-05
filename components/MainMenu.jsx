import { useState, useEffect, useRef } from 'react';
import AvatarList from '@compo/AvatarList.jsx';
import * as s from '@styl/main-menu.module.css';

export default function MainMenu({ onPlay }) {

  const [selected, setSelected] = useState(0);
  const usernameField = useRef(null);
  const isBackward = useRef(false);

  useEffect(() => {
    setTimeout(() => usernameField.current.focus(), 800);
  }, []);

  function scrollToNext() {
    setSelected(s => (s + 1) % 11);
    isBackward.current = false;
  }

  function scrollToPrev() {
    setSelected(s => s === 0 ? 10 : s - 1);
    isBackward.current = true;
  }

  function startPlay() {
    onPlay(usernameField.current.value, selected);
  }

  return (
    <div className={s.container}>

      <div className={s.characters}>
        <AvatarList selected={selected} backwards={isBackward.current} style={s} />
      </div>
      
      <div className={s.userInput}>
        <input type="text" placeholder="username" className={s.userInputField} ref={usernameField} />
      </div>

      <div className={s.controlButtons}>

        <button onClick={scrollToPrev} className={s.nextCharacter} ></button>

        <button onClick={startPlay} className={s.playButton} >Play</button>

        <button onClick={scrollToNext} className={s.prevCharacter} ></button>

      </div>
    </div>
  )
}

