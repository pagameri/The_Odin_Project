const gameBox = document.createElement("div");
const body = document.querySelector("body");
body.appendChild(gameBox);

const resultsBox = document.createElement("div");
body.appendChild(resultsBox);

const result = document.createElement("p");
resultsBox.appendChild(result);

const score = document.createElement("div");
body.appendChild(score);

const restartBtn = document.createElement("button");
restartBtn.textContent = "Restart";
body.appendChild(restartBtn);

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.id = "rock";
gameBox.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.id = "paper";
gameBox.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.id = "scissors";
gameBox.appendChild(scissors);

// GAME STARTS AUTOMATICALLY

let playerScore = 0;
let computerScore = 0;
gameBox.addEventListener("click", playRound);

restartBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  score.textContent = "";
  result.textContent = "";
  gameBox.addEventListener("click", playRound);
});

function playRound(event) {
  let playerChoice = event.target.id;
  let computerChoice = getComputerChoice(3);
  let winningToken = findWinner(playerChoice, computerChoice);

  if (winningToken === playerChoice) {
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else if (winningToken === computerChoice) {
    result.textContent = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else {
    result.textContent = "It's a tie";
  }

  displayScore();
  if (playerScore === 5) {
    endGame("player");
  }
  if (computerScore === 5) {
    endGame("computer");
  }
}

function endGame(winner) {
  if (winner === "player") {
    score.textContent += "   YOU WIN!";
  } else {
    score.textContent += "   YOU LOSE!";
  }
  gameBox.removeEventListener("click", playRound);
}

function displayScore() {
  score.textContent = `Player: ${playerScore} vs Computer: ${computerScore}`;
}

function findWinner(player, computer) {
  if (player === computer) {
    return "tie";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === " rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return player;
  }
  return computer;
}

function getComputerChoice(number) {
  let randomChoice = Math.floor(Math.random() * number);
  randomChoice = whatChoice(randomChoice);
  return randomChoice;
}

function whatChoice(number) {
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}
