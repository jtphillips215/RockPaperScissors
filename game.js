"use strict";

// global variables for score and ui elements
let playerScore = 0;
let computerScore = 0;
const lblPlayerChoice = document.querySelector("#player-choice");
const lblPlayerScore = document.querySelector("#player-score");
const lblComputerChoice = document.querySelector("#computer-choice");
const lblComputerScore = document.querySelector("#computer-score");
const lblInfo = document.querySelector("#info-message");
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

// get computer choice randomly chooses rock, paper, or scissors for the computer player
function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);

  if (ranNum == 0) {
    return "rock";
  } else if (ranNum == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// update ui updates the user interface with updated information from the round
function updateUI(computerChoice, playerChoice) {
  lblPlayerChoice.textContent = playerChoice;
  lblPlayerScore.textContent = playerScore;
  lblComputerChoice.textContent = computerChoice;
  lblComputerScore.textContent = computerScore;
  console.log(
    `Refresh- pc=${playerChoice}, cc=${computerChoice}, score: ${playerScore} - ${computerScore}`
  );
}

// play round runs a round of rock paper scissors and updates scores
function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) {
    console.log(`Logic- Draw, score: ${playerScore} - ${computerScore}`);
    lblInfo.textContent = "Draw!";
    return;
  } else if (
    (computerChoice == "scissors" && playerChoice == "rock") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "rock" && playerChoice == "paper")
  ) {
    playerScore += 1;
    console.log(`Logic- Player win, score: ${playerScore} - ${computerScore}`);
    lblInfo.textContent = "Round Win!";
    return;
  } else {
    computerScore += 1;
    console.log(
      `Logic- Computer win, score: ${playerScore} - ${computerScore}`
    );
    lblInfo.textContent = "Round loss.";
    return;
  }
}

// game reset resets game to starting values for a new game
function gameReset() {
  playerScore = 0;
  computerScore = 0;
}

// check for winner
function checkWinner(computerChoice, playerChoice) {
  if (playerScore == 5) {
    gameReset();
    lblInfo.textContent = `Winner winner chicken dinner! Press any button to start a new game.`;
  } else if (computerScore == 5) {
    gameReset();
    lblInfo.textContent = `Better luck next time. Press any button to start a new game.`;
  }
}

// round upkeep calls all functions needed to control game flow
function roundUpkeep(computerChoice, playerChoice) {
  playRound(computerChoice, playerChoice);
  updateUI(computerChoice, playerChoice);
  checkWinner(computerChoice, playerChoice);
}

// event handlers for player choice, calls function to run game
btnRock.addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  console.log(`UI- pc=${playerChoice}, cc=${computerChoice}`);
  roundUpkeep(computerChoice, playerChoice);
});

btnPaper.addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  console.log(`UI- pc=${playerChoice}, cc=${computerChoice}`);
  roundUpkeep(computerChoice, playerChoice);
});

btnScissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  console.log(`UI- pc=${playerChoice}, cc=${computerChoice}`);
  roundUpkeep(computerChoice, playerChoice);
});
