import { useState, useEffect } from 'react';
import gameServerConnection from '@util/gameServerConnection.js';

export default function OnlinePlayers() {
  const [listOfPlayers, setListOfPlayers] = useState(null);

  useEffect(() => {

    gameServerConnection.main
      .subscribe('player list', setListOfPlayers);

  }, []);

  return (
    <>
    <h2>List of players:</h2>
    <p>{listOfPlayers ?? '...'}</p>
    </>
  )
}
