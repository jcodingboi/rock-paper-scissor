let userScore = 0;
let computerScore = 0;
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const resultDisplay = document.createElement('div');
const scoreDisplay = document.createElement('div');

document.body.appendChild(resultDisplay);
document.body.appendChild(scoreDisplay);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        userScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}

function updateDisplay(result, userChoice, computerChoice) {
    resultDisplay.textContent = `${result} You chose ${userChoice}, computer chose ${computerChoice}.`;
    scoreDisplay.textContent = `Score - You: ${userScore}, Computer: ${computerScore}`;
}

function handleChoice(userChoice) {
    const computerChoice = getComputerChoice();
    const result = playRound(userChoice, computerChoice);
    updateDisplay(result, userChoice, computerChoice);
}

rock.addEventListener('click', () => handleChoice('rock'));
paper.addEventListener('click', () => handleChoice('paper'));
scissors.addEventListener('click', () => handleChoice('scissors'));