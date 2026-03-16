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

//Prompts user and returns their choice
function getUserChoice(){
    let choiceStr = "";

    choiceStr = prompt("Choose between 'rock' 'paper' and 'scissors':", "rock");
    choiceStr = choiceStr.toLowerCase();

    return choiceStr
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

function playGame(){

    let userScore = 0;
    let computerScore = 0;
    let round = 0;

    while (round < 5){
        
        round++;

        let computerChoice = getComputerChoice();
        let userChoice = getUserChoice();

        let winner = playRound(userChoice, computerChoice);

        //Checks who won the round, increases score and prints message
        if (winner === "draw"){
            console.log(`Looks like this round was a draw, you both chose ${userChoice}`);
        } else if (winner === "user"){
            console.log(`You won this round! ${userChoice} beats ${computerChoice}`);
            userScore++;
        } else{
            console.log(`You lost this round, computers ${computerChoice} beats your ${userChoice}`);
            computerScore++;
        }
    }


    //Checks who won the game and prints appropiate message
    if (userScore === computerScore){
        console.log(`This game was a draw, you both got ${userScore} points`);
    } else if (userScore > computerScore){
        console.log(`You won the game with ${userScore} points against the computers ${computerScore}`);
    } else {
        console.log(`You lost the game, computer got ${computerScore} points against your ${userScore} points`);
    }
}