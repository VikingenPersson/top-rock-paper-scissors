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

    return choiceStr
}