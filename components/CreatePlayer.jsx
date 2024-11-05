import { useEffect, useRef } from 'react';
import * as s from '@stylesheets/create-player.module.css';

export default function CreatePlayer({ setPlayer, isVisible }) {
  const dialogRef = useRef();
  const nameInput = useRef();
  const pictureInput = useRef();

  useEffect(() => {
    dialogRef.current.showModal();
    return dialogRef.current.close();

  }, [isVisible]);

  function handleSubmit() {
    const newPlayer = {
      name: nameInput.value,
      img: pictureInput.value,
    };

    setPlayer(newPlayer);
  }
  
  function updatePicture() {
    pictureInput.value = pictureInput.current.value;
  }
  
  function updateName() {
    nameInput.value = nameInput.current.value;
  }
  
  return (
    <dialog ref={dialogRef}>    {/* display none */}
      <form method="dialog">
        <input
          type="file"
          onChange={updatePicture}
          ref={pictureInput}
          accept="image/*"
          capture="user"
        />
        
        <input
          type="text"
          onChange={updateName}
          ref={nameInput}
        />
        
        <button onClick={handleSubmit}>submit</button>
      </form>
    </dialog>
  )
}
 