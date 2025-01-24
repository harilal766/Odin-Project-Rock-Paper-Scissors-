

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


function winner() {
    
}