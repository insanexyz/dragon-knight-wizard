const humanChoiceButtons = document.querySelector(".human-choice-buttons");
const computerChoiceDisplayArea = document.querySelector(".computer-choice-display-area");
const humanChoiceDisplayArea = document.querySelector(".human-choice-display-area");
const whoWonArea = document.querySelector(".who-won-area");
const clearButton = document.querySelector(".clear-btn");
const textArea = document.querySelector(".text-area");

let humanChoice = 0;
let computerChoice = 0;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let rn = Math.floor(Math.random() * 3); // returns random number from 0 to 2
    switch (rn) {
        case 0: return "rock";
        case 1: return "paper";
        case 2: return "scissor";
    }
}


humanChoiceButtons.addEventListener("click", (event) => {
  humanChoice = event.target.id;
  humanChoiceDisplayArea.textContent = "You chose " + humanChoice;
  playRound(humanChoice, computerChoice);
})


clearButton.addEventListener("click", () => {
    const textAreaChildrenElements = textArea.children;
    for (let i = 0; i < textAreaChildrenElements.length; i++) {
        textAreaChildrenElements[i].textContent = "";
    }
})


function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    computerChoiceDisplayArea.textContent = "Computer has chosen " + computerChoice;

    if (humanChoice == computerChoice) {
        whoWonArea.textContent = "Tie";
    }
    else if ((humanChoice == "rock" && computerChoice == "scissor") ||
        (humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "scissor" && computerChoice == "paper")) {
        whoWonArea.textContent = "You won";
        humanScore++;
    } else {
        whoWonArea.textContent = "Computer won";
        computerScore++;
    }
}

