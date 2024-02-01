playGame();

function playGame() {
  let playerScore = 0;
  let computerScore = 0;
  for (i = 0; i < 5; i++) {
    let roundWinner = playRound(getPlayerChoice, getComputerChoice);
    if (roundWinner === "player") {
      playerScore++;
    } else if (roundWinner === "computer") {
      computerScore++;
    } else {
      playerScore++;
      computerScore++;
    }
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
  }
  displayWinner(playerScore, computerScore);
}

function displayWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    console.log("You win the game");
  } else if (playerScore < computerScore) {
    console.log("You lose the game");
  } else {
    console.log("It's a tie");
  }
}

function playRound(playerChoice, computerChoice) {
  let playerSelection = playerChoice();
  let computerSelection = computerChoice(3);
  console.log(playerSelection, computerSelection);

  if (isTie(playerSelection, computerSelection)) {
    // could have it's own function, rename findWinner
    console.log("It's a tie!");
    return "tie";
  } else {
    let winningToken = findWinner(playerSelection, computerSelection);
    if (winningToken === playerSelection) {
      console.log(`You win! ${winningToken} beats ${computerSelection}`);
      return "player";
    } else {
      console.log(`You lose! ${computerSelection} beats ${winningToken}`);
      return "computer";
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
