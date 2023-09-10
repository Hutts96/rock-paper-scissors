function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    computerSec.textContent = `Computer : ${computerSelection}`;
    switch (computerSelection) {
        case 'Rock':
            switch (playerSelection) {
                case 'rock':
                    return 'Tie! Rock = Rock';
                case 'paper':
                    return 'You win! Paper beats rock';
                case 'scissors':
                    return 'You lose! Rock beats scissors';
            }
        case 'Paper':
            switch (playerSelection) {
                case 'rock':
                    return 'You lose! Paper beats rock';
                case 'paper':
                    return 'Tie! Paper = Paper';
                case 'scissors':
                    return 'You win! Scissors beats paper';
            }
        case 'Scissors':
            switch (playerSelection) {
                case 'rock':
                    return 'You win! Rock beats scissors';
                case 'paper':
                    return 'You lose! Scissors beats paper';
                case 'scissors':
                    return 'Tie! Scissors = Scissors';
            }
    }
}

/*function isValidSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return true;
        default:
            return false;
    }
}*/
function resetScore() {
    playerScore = 0;
    computerScore = 0;
}

function game(playerSelection) {
    let result;


    /*do {
        playerSelection = prompt('Rock Paper Scissors:');
        if (!isValidSelection(playerSelection)) {
            alert('please choose a valid move');
        }
    } while (!isValidSelection(playerSelection))*/

    result = playRound(playerSelection);
    winner.textContent = '';
    resultDiv.textContent = result;



    if (result.charAt(4) === 'w') {
        playerScore++;
    } else if (result.charAt(4) === 'l') {
        computerScore++;
    }
    computer.textContent = `Computer : ${computerScore}`;
    you.textContent = `You : ${playerScore}`;

    if (playerScore + computerScore === 5) {
        if (playerScore > computerScore) {
            winner.textContent = 'You have won!';
        } else {
            winner.textContent = 'You have lost!';
        }
        resetScore();
    }
}

const buttons = document.querySelectorAll('button');
let computerScore = 0;
let playerScore = 0;
const container = document.querySelector('.container');
const computerSec = document.createElement('div');
const resultDiv = document.createElement('div');
const currentScores = document.createElement('div');
const you = document.createElement('div');
const computer = document.createElement('div');
const winner = document.createElement('div');
winner.style.fontSize = 'larger';

currentScores.appendChild(you);
currentScores.appendChild(computer);
container.appendChild(computerSec);
container.appendChild(resultDiv);
container.appendChild(currentScores);
container.appendChild(winner);
//add changing scores
buttons.forEach(button => button.addEventListener('click', e => game(e.target.className)));
