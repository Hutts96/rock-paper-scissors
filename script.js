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

function playRound(computerSeletion, playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (computerSeletion) {
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

function isValidSelection(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    switch (playerSelection) {
        case 'rock':
        case 'paper':
        case 'scissors':
            return true;
        default:
            return false;
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let result;

    for (let i = 0; i < 5; i++) {

        do {
            playerSelection = prompt('Rock Paper Scissors:');
            if (!isValidSelection(playerSelection)) {
                alert('please choose a valid move');
            }
        } while (!isValidSelection(playerSelection))

        result = playRound(getComputerChoice(), playerSelection);
        console.log(result);

        if (result.charAt(4) === 'w') {
            playerScore++;
        } else if (result.charAt(4) === 'l') {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You have won\nComputer : ' + computerScore + '\nYou : ' + playerScore);
    } else if (playerScore < computerScore) {
        console.log('You have lost\nComputer : ' + computerScore + '\nYou : ' + playerScore);
    } else {
        console.log('It\'s a tie\nComputer : ' + computerScore + '\nYou : ' + playerScore);
    }
}
game();