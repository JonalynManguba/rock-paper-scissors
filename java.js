let playerScore = 0;
let computerScore = 0;
let gameStarted = false;

function startGame() {
    gameStarted = true;
    document.querySelector('.btn-primary').style.display = 'none';
}

function playGame(playerMove) {
    if (!gameStarted) {
        alert("Click 'Play' to start the game.");
        return;
    }

    const randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    let result = '';

    if (playerMove === computerMove) {
        result = 'It\'s a tie!';
    } else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
    ) {
        result = 'You win!';
        playerScore++;
    } else {
        result = 'Computer wins!';
        computerScore++;
    }

    // Display result in modal
    document.getElementById('modalResult').textContent = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
    document.getElementById('modalComputerMove').src = getComputerMoveImage(computerMove);

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    // Show the result modal
    $('#resultModal').modal('show');
}

function continueGame() {
    gameStarted = true;
    document.querySelector('.btn-primary').style.display = 'block';
    $('#resultModal').modal('hide');
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