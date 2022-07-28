function getComputerChoice() {
  let ranNum = Math.floor(Math.random() * 3);
  return ranNum;
}

console.log(getComputerChoice());