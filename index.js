let options = ['rock', 'paper', 'scissors'];
let humanScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    let computerChoice = options[(Math.floor(Math.random()* options.length))];
    return computerChoice;
};

function getHumanChoice() {
    let humanChoice = prompt('Enter your choice:').toLowerCase();  
    return humanChoice;
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice) {
    if (humanSelection == 'rock' && computerSelection == 'scissors') {
        console.log("You win!")
    } else if (humanSelection == 'scissors')
};



playRound(humanSelection, computerSelection);




