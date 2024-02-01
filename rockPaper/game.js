playRound(getPlayerChoice, getComputerChoice);

function playRound(playerChoice, computerChoice) {
  let playerSelection = playerChoice();
  let computerSelection = computerChoice(3);
  console.log(playerSelection, computerSelection);

  if (isTie(playerSelection, computerSelection)) {
    console.log("It's a tie!");
  } else {
    let winningToken = findWinner(playerSelection, computerSelection);
    if (winningToken === playerSelection) {
      console.log(`You win! ${winningToken} beats ${computerSelection}`);
    } else {
      console.log(`You lose! ${computerSelection} beats ${winningToken}`);
    }
  }
}

function findWinner(player, computer) {
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === " rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return player;
  }
  return computer;
}

function isTie(player, computer) {
  if (player === computer) {
    return true;
  }
  return false;
}

function getPlayerChoice() {
  let choice = prompt("Make your bet: rock, paper or scissors");
  choice = isCorrect(choice);
  return choice;
}

function isCorrect(string) {
  string = string.toLowerCase();
  if (string === "rock" || string === "paper" || string === "scissors") {
    return string;
  }
  alert("Check your spelling");
  playerSelection();
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
