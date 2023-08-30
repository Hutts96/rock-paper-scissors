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