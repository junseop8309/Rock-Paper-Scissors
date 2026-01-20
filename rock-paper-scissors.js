function getComputerChoice() {
  const randInt = Math.floor(Math.random() * 3);
  if (randInt === 0) {
    return "rock"
  } else if (randInt === 1) {
    return "paper"
  } else {
    return "scissors"
  }
}

function getHumanChoice() {
  return prompt("Enter rock paper or scissors");
}


function playGame() {

  function playRound(humanChoice, computerChoice) {
    const human = humanChoice.toLowerCase();
    const computer = computerChoice;

    if (human === "rock" && computer === "scissors" ||
      human === "paper" && computer === "rock" ||
      human === "scissors" && computer === "paper") {
        console.log(`You Win! ${human} beats ${computer}`);
        humanScore++;
    } else if (human === computer) {
        console.log(`You Draw!`);
    } else {
      console.log(`You Lose! ${human} loses to ${computer}`);
      computerScore++;
    }
  }

  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; ++i) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
  }
  console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)

  if (humanScore > computerScore) {
    console.log("You Win the Game!");
  } else if (humanScore === computerScore) {
    console.log("Its a Draw!");
  } else {
    console.log("You Lose the Game!");
  }
}

playGame();






