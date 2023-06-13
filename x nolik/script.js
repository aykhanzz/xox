var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameOver = false;

// Function to make a move on the board
function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWin();
        togglePlayer();
    }
}

// Function to toggle players
function togglePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

// Function to check for a win
function checkWin() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6] // Diagonals
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById('board').style.pointerEvents = 'none';
            alert(currentPlayer + ' wins!');
            break;
        }
    }

    if (!board.includes('') && !gameOver) {
        gameOver = true;
        alert('It\'s a tie!');
    }
}
