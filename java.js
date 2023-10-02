let playerScore = 0;
let computerScore = 0;
let gameOver = false;
const winningScore = 5;

function startGame() {
    gameOver = false;
    playerScore = 0;
    computerScore = 0;
    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;
    document.querySelector('.btn-primary').style.display = 'none';
    document.querySelector('#gameOverButton').style.display = 'none';
}

function playGame(playerMove) {
    if (gameOver) return;

    const moves = ['rock', 'paper', 'scissors'];
    const computerMove = moves[Math.floor(Math.random() * 3)];

    let result = '';

    if (playerMove === computerMove) {
        result = "It's a tie!";
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
        document.getElementById('winningSound').play();
    } else {
        result = 'Computer wins!';
        computerScore++;
        document.getElementById('losingSound').play();
    }

    document.getElementById('modalResult').textContent = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    document.getElementById('modalComputerMove').src = getComputerMoveImage(computerMove);

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    if (playerScore >= winningScore) {
        document.getElementById('modalResult').textContent = 'Congratulations, you\'re the winner!';
        gameOver = true;
    } else if (computerScore >= winningScore) {
        document.getElementById('modalResult').textContent = 'Computer wins! Game Over';
        gameOver = true;
    }

    $('#resultModal').modal('show');

    if (gameOver) {
        document.querySelector('#gameOverButton').style.display = 'block';
    }
}

function getComputerMoveImage(computerMove) {
    switch (computerMove) {
        case 'rock':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Rock-paper-scissors_%28rock%29.png/1920px-Rock-paper-scissors_%28rock%29.png';
        case 'paper':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Rock-paper-scissors_%28paper%29.png/1920px-Rock-paper-scissors_%28paper%29.png';
        case 'scissors':
            return 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Rock-paper-scissors_%28scissors%29.png/1200px-Rock-paper-scissors_%28scissors%29.png';
        default:
            return '';
    }
}

function continueGame() {
    $('#resultModal').modal('hide');
}

function resetGame() {
    document.querySelector('.btn-primary').style.display = 'block';
    document.querySelector('#gameOverButton').style.display = 'none';
}