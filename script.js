function computerPlay() {
    let number = Math.floor(Math.random()*3) + 1;
    let result = '';
    if (number === 1) {
        result = 'rock';
    } else if (number === 2) {
        result = "paper";
    } else {
        result = "scissors";
    }
    return (result);
}

const userSelect = prompt("Rock, paper or scissors?");

function singleRound(human, computer) {
    humanChoice = human.toLowerCase();
    if (humanChoice === "rock" && computer === 'paper') {
        console.log("You lose! Paper beats rock.");
    } else if (humanChoice === "paper" && computer === "rock") {
        console.log("You win! Paper beats rock."); 
    } else if (humanChoice === "paper" && computer === "scissors") {
        console.log("You lose! Scissors beat paper.");
    } else if (humanChoice === "scissors" && computer === "paper") {
        console.log("You win! Scissors beat paper.");
    } else if (humanChoice === "rock" && computer === "scissors") {
        console.log("You win! Rock beats paper.");
    } else if (humanChoice === "scissors" && computer === "rock") {
        console.log("You lose! Rock beats paper.");
    } 

}

singleRound(userSelect, computerPlay);