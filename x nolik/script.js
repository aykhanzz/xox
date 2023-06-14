var board = ['', '', '', '', '', '', '', '', ''];
var currentPlayer = 'X';
var gameOver = false;


function makeMove(index) {
    if (!gameOver && board[index] === '') {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWin();
        togglePlayer();
    }
}


function togglePlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

function checkWin() {
    var winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        var [a, b, c] = winningCombinations[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            gameOver = true;
            document.getElementById('board').style.pointerEvents = 'none';
            setTimeout(function () {
                alert(currentPlayer + ' defeated!');
                location.reload();
            }, 100);
            break;
        }
    }

    if (!board.includes('') && !gameOver) {
        gameOver = true;
        setTimeout(function () {
            alert('It\'s a tie!');
            location.reload();
        }, 100);
    }
}



let restartButton = document.getElementById("restartButton");
restartButton.addEventListener("click", function () {
    location.reload();
});