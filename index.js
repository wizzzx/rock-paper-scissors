let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}

const startButton = document.querySelector("#start");

startButton.addEventListener("click", () => {
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = "The game has started. Pick your choice:";

  const buttonRock = document.createElement("button");
  buttonRock.setAttribute("id", "rock");
  buttonRock.textContent = "Rock";

  const buttonPaper = document.createElement("button");
  buttonPaper.setAttribute("id", "paper");
  buttonPaper.textContent = "Paper";

  const buttonScissors = document.createElement("button");
  buttonScissors.setAttribute("id", "scissors");
  buttonScissors.textContent = "Scissors";

  content.appendChild(buttonScissors);
  content.appendChild(buttonPaper);
  content.appendChild(buttonRock);

  document.body.appendChild(content);

  [buttonRock, buttonPaper, buttonScissors].forEach((button) =>
    button.addEventListener("click", () => {
      const humanChoice = button.id;
      const computerChoice = getComputerChoice();
      console.log(humanChoice, computerChoice);

      function playRound() {
        if (computerChoice === humanChoice) {
          const tie = document.createElement("p");
          tie.textContent = "It's a tie!";
          content.appendChild(tie);
        } else if (
          (computerChoice === "rock" && humanChoice === "scissors") ||
          (computerChoice === "paper" && humanChoice === "rock") ||
          (computerChoice === "scissors" && humanChoice === "paper")
        ) {
          computerScore++;
          const playerLost = document.createElement("p");
          playerLost.textContent = `You lost! Current score: ${computerScore} : ${humanScore}`;
          content.appendChild(playerLost);
          console.log(computerScore, humanScore);
        } else if (
          (computerChoice === "rock" && humanChoice === "paper") ||
          (computerChoice === "paper" && humanChoice === "scissors") ||
          (computerChoice === "scissors" && humanChoice === "rock")
        ) {
          humanScore++;
          const playerWon = document.createElement("p");
          playerWon.textContent = `You won! Current score: ${computerScore} : ${humanScore}`;
          content.appendChild(playerWon);
          console.log(computerScore, humanScore);
        }
      }

      playRound();

      if (computerScore === 5 || humanScore === 5) {
        const gameOver = document.createElement("p");
        gameOver.textContent = "Game over!";
        content.appendChild(gameOver);
      }
    }),
  );
});
