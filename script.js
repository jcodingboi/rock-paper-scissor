let userScore = 0;
let computerScore = 0;
const humanSelection = getUserChoice();
const computerSelection = getComputerChoice();

function getUserChoice() {
    const userChoice = prompt('Choose rock, paper, or scissors:');
    return userChoice.toLowerCase();
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(getUserChoice, getComputerChoice) {
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
    console.log(`User chose: ${userChoice}, Computer chose: ${computerChoice}`);
    
    if (userChoice === computerChoice) {
        return 'The game is a tie!';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'User wins!';
    } else {
        return 'Computer wins!';
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const result = playRound(getUserChoice, getComputerChoice);
        console.log(result);
        if (result === 'User wins!') {
            userScore++;
        } else if (result === 'Computer wins!') {
            computerScore++;
        }
        console.log('User score:', userScore);
        console.log('Computer score:', computerScore);
    }
}

playGame();