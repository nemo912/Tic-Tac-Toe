let moves = -1;
export function checkForWin(board, cb, isRestart) {
    if (isRestart) moves = -1;
    let x = false; moves++;

    winningConditions.forEach((condition) => {
        const [a, b, c] = condition;

        const isLine = board[a] === board[b] && board[a] === board[c];

        if (isLine && board[a] !== '') {
            x = true;
            cb(board[a]);
        }
    });
    if (x) return;
    
    if (moves === 9) cb('draw');
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
