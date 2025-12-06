const btnContainer = document.querySelector(".button-container");
const playerResultEmoji = document.querySelector(".player-result .result-emoji");
const playerResultText = document.querySelector(".player-result-text");
const computerResultEmoji = document.querySelector(".computer-result .result-emoji");
const computerResultText = document.querySelector(".computer-result-text");
const roundsText = document.querySelector(".rounds");
const battleInfo = document.querySelector(".battle-info");
const displayRules = document.querySelector(".display-rules");
const rulesBtn = document.querySelector(".rules-open-btn");
const rulesCloseBtn = document.querySelector(".rules-close-btn");

let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerWins = false;

const winMessages = {
  dragon: "Dragon burned the knight",
  knight: "Knight slaughtered the wizard",
  wizard: "Wizard enchanted the dragon"
};

const loseMessages = {
  dragon: "Dragon got enchanted by wizard",
  knight: "Knight got burnt by the dragon",
  wizard: "Wizard got slaughtered by the knight"
};

function getComputerChoice() {
  let rn = Math.floor(Math.random() * 3); // returns random number from 0 to 2
  switch (rn) {
    case 0: return "dragon";
    case 1: return "knight";
    case 2: return "wizard";
  }
}


btnContainer.addEventListener("click", (event) => {
  playerChoice = event.target.id;
  playerChoiceEmoji = event.target.textContent;
  playerResultEmoji.textContent = playerChoiceEmoji;
  playRound(playerChoice, computerChoice);
})


function playRound(playerChoice, computerChoice) {
  computerChoice = getComputerChoice();

  switch (computerChoice) {
    case "dragon": computerResultEmoji.textContent = "🐉"; break;
    case "knight": computerResultEmoji.textContent = "⚔️"; break;
    case "wizard": computerResultEmoji.textContent = "🪄"; break;
  }

  rounds++;
  roundsText.textContent = `Rounds: ${rounds}`;

  // Game logic
  if (playerChoice == computerChoice) {
    battleInfo.textContent = "It's a tie";
    return;
  }
  else if ((playerChoice === "dragon" && computerChoice === "knight") ||
    (playerChoice === "knight" && computerChoice === "wizard") ||
    (playerChoice === "wizard" && computerChoice === "dragon")) {
    playerWins = true;
  } else {
    playerWins = false;
  }

  if (playerWins) {
    battleInfo.textContent = winMessages[playerChoice];
    playerScore++;
    playerResultText.textContent = `Player: ${playerScore}`;
  } else {
    battleInfo.textContent = loseMessages[playerChoice];
    computerScore++;
    computerResultText.textContent = `Computer: ${computerScore}`;
  }
}


rulesBtn.addEventListener("click", () => {
  displayRules.classList.add("show");
})

rulesCloseBtn.addEventListener("click", () => {
  displayRules.classList.remove("show");
})



