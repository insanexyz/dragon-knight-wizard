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
const usernamePopup = document.querySelector(".username-popup");
const usernameElement = document.querySelector("#username");
let username = usernameElement.value;
const helloStranger = document.querySelector(".hello-stranger");

let computerChoice = "";
let playerChoice = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;
let playerWins = false;
let playerChoiceEmoji = "";

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

const alwaysWin = ["insane"];
const alwaysLose = ["noobyetpro", "xevex"];


// Get username
usernamePopup.classList.add("show");
usernameElement.addEventListener("keyup", (event) => {
  if (event.keyCode == 13) {
    username = usernameElement.value.toLowerCase();
    usernamePopup.classList.remove("show");
    helloStranger.textContent = `💀 Hello, ${username} 💀`;
  }
})


function getComputerChoice() {
  let rn = Math.floor(Math.random() * 3); // returns random number from 0 to 2
  switch (rn) {
    case 0: return "dragon";
    case 1: return "knight";
    case 2: return "wizard";
  }
}


function riggedToloseComputerChoice(playerChoice) {
  switch (playerChoice) {
    case "dragon": return "wizard";
    case "knight": return "dragon";
    case "wizard": return "knight";
  }
}


function riggedToWinComputerChoice(playerChoice) {
  switch (playerChoice) {
    case "dragon": return "knight";
    case "knight": return "wizard";
    case "wizard": return "dragon";
  }
}


btnContainer.addEventListener("click", (event) => {
  playerChoice = event.target.id;
  playerChoiceEmoji = event.target.textContent;
  playerResultEmoji.textContent = playerChoiceEmoji;
  playRound(playerChoice, computerChoice);
})


function playRound(playerChoice, computerChoice) {

  if (alwaysLose.includes(username.toLowerCase())) {
    computerChoice = riggedToloseComputerChoice(playerChoice);
    console.log("Haha lmao get rekt " + username);
  } else if (alwaysWin.includes(username.toLowerCase())) {
    computerChoice = riggedToWinComputerChoice(playerChoice);
  } else {
    computerChoice = getComputerChoice();
  }

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



