import * as s from '@styl/pause-menu.module.css';

export default function PauseMenu({ stateOfGame, onRematch, onBackToHome }) {

  if (!stateOfGame) return null;

  let message;

  switch (stateOfGame) {
    case 'win': message = 'you win!';
      break;
    case 'lose': message = 'you lose :(';
      break;
    case 'draw': message = ':\\';
      break;
    case 'E-offline': message = 'Error!\nplayer offline';
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.menu}>
          <span className={s.endMessage}>{message}</span>

          <button className={s.homeIcon} onClick={() => onBackToHome()}></button>

          <button className={s.rematchIcon} onClick={() => onRematch()}></button>

        </div>
      </div>
    </div>
  )
}
