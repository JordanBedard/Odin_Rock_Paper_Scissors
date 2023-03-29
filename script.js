const Options = {
    Rock: "rock",
    Paper: "paper",
    Scissors: "scissors"
}

// Choice made by CPU
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomNumber = getRandomInt(3);
    let cpuArray = [Options.Rock, Options.Paper, Options.Scissors];
    let cpuRoundChoice = cpuArray[randomNumber];
    return cpuRoundChoice;
}

// Display Computer's Choice
function displayComputerChoice(cpuChoice) {
    // Target DOM Elements 
    const displayCpuChoice = document.querySelector(".cpuDisplay");
    displayCpuChoice.innerHTML = '';
    // Create DOM Elements
    const displayCpuChoiceDiv = document.createElement("div");
    const displayCpuChoiceImg = document.createElement("img");
    displayCpuChoiceImg.src = `./${cpuChoice}.png`;
    displayCpuChoiceImg.alt = "Rock, Paper or Scissors Image";
    displayCpuChoiceImg.classList.add("btnImage");
    // Append 
    displayCpuChoiceDiv.append(displayCpuChoiceImg);
    displayCpuChoice.append(displayCpuChoiceDiv);
}

// Player's Choice
// Choosing Rock with button click
let btnRock = document.querySelector('.btnImageRock');
btnRock.addEventListener("click", function () {
    handleBtnClicked(Options.Rock, getComputerChoice());
});

// Choosing Paper with button click
let btnPaper = document.querySelector('.btnImagePaper');
btnPaper.addEventListener("click", function () {
    handleBtnClicked(Options.Paper, getComputerChoice());
});

// Choosing Scissors with button click
let btnScissors = document.querySelector('.btnImageScissors');
btnScissors.addEventListener("click", function () {
    handleBtnClicked(Options.Scissors, getComputerChoice());
});

// Handle Button Click 
function handleBtnClicked(playerOption, cpuOption) {
    game(playerOption, cpuOption);
}

// Display Player's Choice
function displayPlayerChoice(playerChoice) {
    // Target DOM Elements
    let displayPlayerChoice = document.querySelector(".playerDisplay");
    displayPlayerChoice.innerHTML = '';
    // Create DOM Elements
    let displayPlayerChoiceDiv = document.createElement("div");
    let displayPlayerChoiceImg = document.createElement("img");
    displayPlayerChoiceImg.src = `./${playerChoice}.png`;
    displayPlayerChoiceImg.classList.add("btnImage");
    // Append 
    displayPlayerChoiceDiv.append(displayPlayerChoiceImg);
    displayPlayerChoice.append(displayPlayerChoiceDiv);
}

// Round of a game
function round(playerOption, computerOption) {
    if (playerOption === computerOption) {
        return "Draw";
    } else if (playerOption === Options.Rock && computerOption === Options.Paper) {
        computerScore++;
        return "You lose! Paper beats rock";
    } else if (playerOption === Options.Rock && computerOption === Options.Scissors) {
        playerScore++;
        return "You Win! Rock beats scissors";
    } else if (playerOption === Options.Paper && computerOption === Options.Scissors) {
        computerScore++;
        return "You lose! Scissors beats paper";
    } else if (playerOption === Options.Paper && computerOption === Options.Rock) {
        playerScore++;
        return "You Win! Paper beats rock";
    } else if (playerOption === Options.Scissors && computerOption === Options.Rock) {
        computerScore++;
        return "You lose! Rock beats scissors";
    } else if (playerOption === Options.Scissors && computerOption === Options.Paper) {
        playerScore++;
        return "You win! Scissors beats paper"
    }
}

// Game
function game(playerOption, computerOption) {
    if (computerScore !== 5 && playerScore !== 5) {
        displayPlayerChoice(playerOption);
        displayComputerChoice(computerOption);
        displayRoundResult(playerOption, computerOption);
        displayScore();
    } else {
        alert(displayGameResult());
    }
}

// Display Round Result
function displayRoundResult(playerOption, computerOption) {
    let roundResult = round(playerOption, computerOption);
    // Target DOM Elements
    let displayRoundResult = document.querySelector(".title");
    displayRoundResult.innerHTML = '';
    // Create DOM Elements
    let displayRoundResultText = document.createElement("div");
    displayRoundResultText.textContent = roundResult;
    // Append
    displayRoundResult.appendChild(displayRoundResultText);
}

// Score
let playerScore = 0;
let computerScore = 0;

// Display Score
function displayScore() {
    // Player's Score Display
    let playerDisplayScore = document.querySelector(".playerScore");
    playerDisplayScore.innerHTML = '';
    let playerDisplayScoreText = document.createElement("div");
    playerDisplayScoreText.textContent = `Player: ${playerScore}`;
    playerDisplayScore.appendChild(playerDisplayScoreText);

    // CPU's Score Display
    let cpuDisplayScore = document.querySelector(".cpuScore");
    cpuDisplayScore.innerHTML = '';
    let cpuDisplayScoreText = document.createElement("div");
    cpuDisplayScoreText.textContent = `Computer: ${computerScore}`;
    cpuDisplayScore.appendChild(cpuDisplayScoreText);
}

// Result of the Game
function displayGameResult() {
    if (playerScore > computerScore) {
        return "You win the game. Congratulation!";
    } else if (playerScore < computerScore) {
        return "You lose the game. Better luck next time!";
    } else {
        return "It's a draw. Thank you for playing!";
    }
}
