"use strict";

// global variables for score
let playerScore = 0;
let computerScore = 0;

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
  const lblPlayerChoice = document.querySelector("#player-choice");
  const lblPlayerScore = document.querySelector("#player-score");
  const lblComputerChoice = document.querySelector("#computer-choice");
  const lblComputerScore = document.querySelector("#computer-score");
  lblPlayerChoice.textContent = playerChoice;
  lblPlayerScore.textContent = playerScore;
  lblComputerChoice.textContent = computerChoice;
  lblComputerScore.textContent = computerScore;
}

// play round runs a round of rock paper scissors and updates scores
function playRound(computerChoice, playerChoice) {
  if (playerChoice == computerChoice) {
    console.log("Draw, score:", playerScore, computerScore);
    return;
  } else if (
    (computerChoice == "scissors" && playerChoice == "rock") ||
    (computerChoice == "paper" && playerChoice == "scissors") ||
    (computerChoice == "rock" && playerChoice == "paper")
  ) {
    playerScore += 1;
    console.log("Player win, score:", playerScore, computerScore);
    return;
  } else {
    computerScore += 1;
    console.log("Computer Win, score:", playerScore, computerScore);
    return;
  }
}

//event handlers for player choice, handlers call functions to run game of rps
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
  playRound(computerChoice, playerChoice);
  updateUI(computerChoice, playerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
  playRound(computerChoice, playerChoice);
  updateUI(computerChoice, playerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
  playRound(computerChoice, playerChoice);
  updateUI(computerChoice, playerChoice);
});

/*
// game runs the game by calling the required functions and keeping score
function game() {
  let score = 0;
  let round = 1;

  for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();
    score += playRound(computerChoice, playerChoice);
    console.log(
      `Round: ${round}, Computer choice: ${computerChoice}, Player choice: ${playerChoice}`
    );
    round++;
  }

  if (score == 0) {
    console.log("It's a draw!");
  } else if (score > 0) {
    console.log("You Win!");
  } else {
    console.log("Computer Wins!");
  }
}
*/

// calling game function to start the game
// game();
