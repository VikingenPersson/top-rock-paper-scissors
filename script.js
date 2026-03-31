//Generates a random choice for the computer and returns it
function getComputerChoice(){

    let choiceInt = 0;
    let choiceStr = "";

    choiceInt = Math.floor(Math.random()*3)+1;

    if (choiceInt <= 1){
        choiceStr = "rock";
    } else if (choiceInt <= 2){
        choiceStr = "paper";
    } else {
        choiceStr = "scissors";
    }

    return choiceStr;
}

//Checks who won and returns the winner
function playRound(userChoice, computerChoice){

    let winner = "";

    if (userChoice === computerChoice){
        winner = "draw";
    } else if (
        userChoice === "rock" && computerChoice === "scissors" ||
        userChoice === "paper" && computerChoice === "rock" ||
        userChoice === "scissors" && computerChoice === "paper"
    ){
        winner = "user";
    } else{
        winner = "computer";
    }

    return winner

}

function clickChoiceButton(event){
    const winner = playRound(event.target.innerText.toLowerCase(), getComputerChoice());
    switch (winner){
        case "user":
            userScore++;
            announcementLabel.textContent = "You won this round";
            break;

        case "computer":
            computerScore++;
            announcementLabel.textContent = "Computer won this round";
            break;

        default:
            announcementLabel.textContent = "This round was a draw";
    }

    if (userScore >= 5){
        userScore = 0;
        computerScore = 0;
        announcementLabel.textContent = "Congratulations, you won the game!"
    } else if (computerScore >= 5){
        userScore = 0;
        computerScore = 0;
        announcementLabel.textContent = "Unfortunatly the computer won this game."
    }

    userScoreLabel.textContent = userScore;
    computerScoreLabel.textContent = computerScore;
}

let userScore = 0;
let computerScore = 0;

const userScoreLabel = document.querySelector("#userScore");
const computerScoreLabel = document.querySelector("#computerScore");
const announcementLabel = document.querySelector("#announcement");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", clickChoiceButton);
paperButton.addEventListener("click", clickChoiceButton);
scissorsButton.addEventListener("click", clickChoiceButton);