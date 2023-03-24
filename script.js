// Choice made by CPU

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    let cpuArray = ["Rock", "Paper", "Scissors"];
    let cpuChoice = cpuArray[randomNumber];
    return cpuChoice.toLowerCase();
}

// Take user's prompt
function userPrompt() {
    let userPrompt = prompt("Choose between rock, paper or scissors");
    let standardInput = userPrompt.toLowerCase();
    return standardInput;
}

// Text Validation of user's prompt
function getPlayerChoice(str) {
    if (typeof str !== "string" || str.length === 0) {
        return;
    }
    let acceptableInputs = ["rock", "paper", "scissors"];
    if (acceptableInputs.includes(str)) {
        return str;
    } return ("Please choose between rock, paper or scissors");
}

// Score 
let playerScore = 0;
let computerScore = 0;

// Round of a game 
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Draw");
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You Win! Rock beats scissors";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You Win! Paper beats rock";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper"
    }
}

// Scoring Update 
function scoring() {
    if (playerScore > computerScore) {
        return "You win!";
    } else if (playerScore < computerScore) {
        return "You lose!";
    } else {
        return "It's a draw!";
    }
}

// Game
function game() {
    for (h = 1; h < 6; h++) {
        let computerOption = getComputerChoice();
        let playerOption = getPlayerChoice(userPrompt());
        let roundnumber = h;
        roundnumber
        round(playerOption, computerOption);
        let roundResultPlayer = "Round " + h + " - Player's Selection: ";
        let roundResultCPU = "Round " + h + " - Computer's Selection: ";
        console.log(roundResultPlayer + playerOption);
        console.log(roundResultCPU + computerOption);
    }
    console.log("Player score: ", playerScore);
    console.log("Computer score: ", computerScore);
    console.log(scoring());
}

game();