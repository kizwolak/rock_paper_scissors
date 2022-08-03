function singleRound() {

    function computerPlay() {
        let number = Math.floor(Math.random()*3) + 1;
        let result;
        if (number === 1) {
            result = 'rock';
        } else if (number === 2) {
            result = "paper";
        } else {
            result = "scissors";
        }
        return result;
    }

    let computer = computerPlay();

    let humanChoice = human.toLowerCase();
    if (humanChoice === "rock" && computer === 'paper') {
        let losspr = document.createTextNode("You lose! Paper beats rock.");
        results.appendChild(losspr);
        results.appendChild(document.createElement("br"));
        computerResults.textContent = 'Computer: ' + ++computerSum;
    } else if (humanChoice === "paper" && computer === "rock") {
        let winpr = document.createTextNode("You win! Paper beats rock.");
        results.appendChild(winpr);
        results.appendChild(document.createElement("br"));
        humanResults.textContent = 'Human: ' + ++humanSum;
    } else if (humanChoice === "paper" && computer === "scissors") {
        let losssp = document.createTextNode("You lose! Scissors beat paper.");
        results.appendChild(losssp);
        results.appendChild(document.createElement("br"));
        computerResults.textContent = 'Computer: ' + ++computerSum;
    } else if (humanChoice === "scissors" && computer === "paper") {
        let winsp = document.createTextNode("You win! Scissors beat paper.");
        results.appendChild(winsp);
        results.appendChild(document.createElement("br"));
        humanResults.textContent = 'Human: ' + ++humanSum;
    } else if (humanChoice === "rock" && computer === "scissors") {
        let winrp = document.createTextNode("You win! Rock beats scissors.");
        results.appendChild(winrp);
        results.appendChild(document.createElement("br"));
        humanResults.textContent = 'Human: ' + ++humanSum;
    } else if (humanChoice === "scissors" && computer === "rock") {
        let lossrp = document.createTextNode("You lose! Rock beats scissors.");
        results.appendChild(lossrp);
        results.appendChild(document.createElement("br"));
        computerResults.textContent = 'Computer: ' + ++computerSum;
    } else if (humanChoice === 'rock' && computer === 'rock'){
        let drawrr = document.createTextNode(`It's a draw! Rock and rock.`);
        results.appendChild(drawrr);
        results.appendChild(document.createElement("br"));
    } else if (humanChoice === 'paper' && computer === 'paper'){
        let drawpp = document.createTextNode(`It's a draw! Paper and paper.`);
        results.appendChild(drawpp);
        results.appendChild(document.createElement("br"));
    } else if (humanChoice === 'scissors' && computer === 'scissors'){
        let drawss = document.createTextNode(`It's a draw! Scissors and scissors.`);
        results.appendChild(drawss);
        results.appendChild(document.createElement("br"));
    }

    if (humanSum === 5) {
        finalResult.textContent = "Human wins!";
        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        let btn4 = document.createElement("button");
        finalResult.appendChild(btn4);
        btn4.addEventListener("click", zeroScores);
        btn4.textContent = "Reset";
    }
    if (computerSum === 5) {
        finalResult.textContent = "Computer wins!";
        btn1.disabled = true; 
        btn2.disabled = true; 
        btn3.disabled = true; 
        let btn4 = document.createElement("button");
        finalResult.appendChild(btn4);
        btn4.addEventListener("click", zeroScores);
        btn4.textContent = "Reset";
    }

    function zeroScores() {
        btn1.disabled = false; 
        btn2.disabled = false; 
        btn3.disabled = false;
        humanSum = 0;
        computerSum = 0;
        humanResults.textContent = 'Human: ' + humanSum;
        computerResults.textContent = 'Computer: ' + computerSum;
        results.textContent = '';
        finalResult.textContent = '';
    }

}

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");

btn1.addEventListener("click", (e) => singleRound(human = "rock"));
btn2.addEventListener("click", (e) => singleRound(human = "paper"));
btn3.addEventListener("click", (e) => singleRound(human = "scissors"));

const results = document.createElement("div");

document.body.appendChild(results);

const humanResults = document.createElement("div");
const computerResults = document.createElement("div");

document.body.appendChild(humanResults);
document.body.appendChild(computerResults);

let humanSum = 0;
let computerSum = 0;

humanResults.textContent = 'Human: ' + humanSum;
computerResults.textContent = 'Computer: ' + computerSum;

const finalResult = document.createElement("div");
document.body.appendChild(finalResult);




