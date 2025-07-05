let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  let x;
  x = Math.random();
  if (x <= 1 / 3) {
    return "rock";
  } else if (x > 1 / 3 && x <= 2 / 3) {
    return "paper";
  } else {
    return "scissors";
  }
}
function getHumanChoice() {
  let input = prompt("Rock! Paper! Scissors!");
  return input;
}
function playround(humanChoice, computerChoice) {
  if (
    (humanChoice.toLowerCase() == "rock" && computerChoice == "scissors") ||
    (humanChoice.toLowerCase() == "paper" && computerChoice == "rock") ||
    (humanChoice.toLowerCase() == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
    console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
  } else if (
    (humanChoice.toLowerCase() == "scissors" && computerChoice == "rock") ||
    (humanChoice.toLowerCase() == "rock" && computerChoice == "paper") ||
    (humanChoice.toLowerCase() == "paper" && computerChoice == "scissors")
  ) {
    computerScore++;
    console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
  } else if (humanChoice.toLowerCase() === computerChoice) {
    console.log("It's a tie!");
  } else {
    console.log("Invalid input");
  }
}
function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playround(humanSelection, computerSelection);
  }
}
playGame();
if (humanScore > computerScore) {
  console.log("You won the game!");
} else {
  console.log("You lost");
}
