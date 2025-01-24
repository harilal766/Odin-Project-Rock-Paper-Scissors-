

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

console.log(getHumanChoice())


let humanScore = 0; let computerScore = 0;


function playRound(humanScore,computerScore) {

    let humanChoice = getHumanChoice().toLowerCase();
    let computerChoice = getComputerChoice().toLowerCase();

    /*
    This game is played in one round, and there are three three type of outcomes.,
    1. rock and paper
    2. paper and scissors
    3. scissors and rock
    */


}