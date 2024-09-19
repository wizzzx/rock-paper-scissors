let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"]
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice:").toLowerCase();
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a tie!")
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win!");
    humanScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win!");
    humanScore++;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lost!");
    computerScore++;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lost!");
    computerScore++;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lost!")
    computerScore
  };
  console.log(`Score: ${humanScore}, ${computerScore}`);
}




function playGame() {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  };

  if (humanScore > computerScore) {
    console.log("You won the game!")
  } else if (computerScore > humanScore) {
    console.log("You lost the game!")
  } else {
    console.log("The game is a tie.")
  }
}

playGame();