

function getComputerChoice() {
    const choiceOne = "Rock"; 
    const choiceTwo = "Paper";
    const choiceThree = "Scissors";

    let choice = Math.floor(Math.random()* 3);

    if (choice === 0) {
        return choiceOne;
    }
    else if (choice === 1) {
        return choiceTwo;
    }
    else {
        return choiceThree;
    }

}


function getHumanChoice(){
    let userChoice = prompt("Enter your choice");

    return userChoice;
}


function playRound(humanScore,computerScore) {
    let humanScore = 0; let computerScore = 0;

    /*
    This game is played in one round, and there are three three type of outcomes.,
    1. rock and paper
    2. paper and scissors
    3. scissors and rock
    */

    if (humanSelection === "rock" && computerSelection === "scissors") {
        humanScore = 1;
    }

    /* 
    Winner announce code
    This will be based on the score;

    who has the greater score will be considered as winner.
    */
    if (humanScore > computerScore){
        console.log(`You win, ${humanSelection} beats ${computerSelection}.`);
    }
    else {
        console.log(`You lose, ${computerSelection} beats ${humanSelection}.`);
    }

}

let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();


playRound(humanSelection,computerSelection)