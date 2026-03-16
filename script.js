function getComputerChoice(){

    let choiceInt = 0;
    let choiceStr = "";

    // SET choiceInt to a random number between 1 and 3
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

function getUserChoice(){
    let choiceStr = "";

    // OBTAIN user choice between "rock" "paper" and "scissors"
    // SET choiceStr to users choice
    // SET choiceStr to lower case
    choiceStr = prompt("Choose between 'rock' 'paper' and 'scissors':", "rock");
    choiceStr = choiceStr.toLowerCase();

    return choiceStr
}

function playRound(userChoice, computerChoice){

    let winner = "";


    //SET winner to "user" "draw" or "computer" based on who wins
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