"use strict";

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

/*
// play round runs a round of rock paper scissors
function playRound(computerChoice, playerChoice) {
  if (computerChoice == "rock") {
    if (playerChoice.toLowerCase() == "rock") {
      return 0;
    } else if (playerChoice.toLowerCase() == "paper") {
      return 1;
    } else {
      return -1;
    }
  } else if (computerChoice == "paper") {
    if (playerChoice.toLowerCase() == "rock") {
      return -1;
    } else if (playerChoice.toLowerCase() == "paper") {
      return 0;
    } else {
      return 1;
    }
  } else {
    if (playerChoice.toLowerCase() == "rock") {
      return 1;
    } else if (playerChoice.toLowerCase() == "paper") {
      return -1;
    } else {
      return 0;
    }
  }
}
*/

//event handlers for player choice
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
  const playerChoice = "rock";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
  const playerChoice = "paper";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
  const playerChoice = "scissors";
  const computerChoice = getComputerChoice();
  console.log("pc=", playerChoice, "cc=", computerChoice);
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
