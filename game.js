"use strict";

function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  
  if (ranNum == 0) {
    return "rock";
  }
  else if (ranNum == 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function getPlayerChoice() {
  let playerChoice = prompt("Rock, Paper, or Scissors?");
  return playerChoice;
}

function playRound(computerChoice, playerChoice) {
  if (computerChoice == "rock") {
    if(playerChoice.toLowerCase() == "rock") {
      console.log("Tie Round");
    }
    else if (playerChoice.toLowerCase() == "paper") {
      console.log("Player Win!");
    }
    else {
      console.log("Computer Win!");
    }
  }
  else if (computerChoice == "paper") {
    if(playerChoice.toLowerCase() == "rock") {
      console.log("Computer Win!");
    }
    else if (playerChoice.toLowerCase() == "paper") {
      console.log("Tie Round");
    }
    else {
      console.log("Player Win!");
    }
  }
  else {
    if(playerChoice.toLowerCase() == "rock") {
      console.log("Player Win!");
    }
    else if (playerChoice.toLowerCase() == "paper") {
      console.log("Computer Win!");
    }
    else {
      console.log("Tie Round");
    }
  }
}


let computerChoice = getComputerChoice();
console.log(computerChoice);
let playerChoice = getPlayerChoice();
console.log(playerChoice);
playRound(computerChoice, playerChoice);