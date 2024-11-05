
# Tic Tac Toe

> this is a brief documentation about this project!

**? frontend ==> [UI Components](#ui-components)**\
**? backend ==> [Server Components](#server-components)**

---

## Server Components

### GameServer

```
  extends <ws>
```

| Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `_queue` | `array[]` | waiting players are store here until match against another player |

### Game

| Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `pX` | `Player` | in Tic Tac Toe this is the 'X' player |
| `pO` | `Player` | and this is 'O' |

### Player

| Property | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `connection` | `ws` | the player's connection |
| `name` | `string` | name of your player |
| `character` | `number` | an integer that represents which character you have chosen |

## UI Components
### OnlineTicTacToe(player)
it will render <TicTacToe /> based on data from useGameServerConnection (my custom hook)\
\+ your should also provide it with a player:\
an object representing who wants play
```js
{
  username: 'your_name',
  character: /[0-10]/,   /* we only have 11 character */
}
```
### TicTacToe(size, board, onBoardUpdate, onGameEnd)
it will render a 3x3 grid based on it's props:

| Parameter | Description                |
| :-------- | :------------------------- |
| `board` | an array of length "9" that will makes the board |
| `onBoardUpdate` | ... |
| `onGameEnd` | ... |
| `size` | size of your board |

