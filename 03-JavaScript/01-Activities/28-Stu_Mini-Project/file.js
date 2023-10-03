/* function computerChoice() {
    const choices = ["r", "p", "s"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choice[randomIndex];
}

function pickWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Tie!";
    } else if(
        (playerChoice === "r" && computerChoice === "s") ||
        (playerChoice === "p" && computerChoice === "r") ||
        (playerChoice === "s" && computerChoice === "p") ||
    )   {
        return "Winner!";
    }   else {
        return "Computer Wins!";
    }
}

function playGame(playerChoice) {
    const computer = computerChoice();
    const result = pickWinner(playerChoice, computer);

    console.log('You chose: ${playerChoice}');
    console.log('Computer chose: ${computer}');
    console.log(result);
} */
/*
alert("Are you sure??")

let person = prompt("r", "p", "s");

if (person === computerChoice) {
    console.log("Tie!")
}   else if(
    (person === "r" && computer === "s") ||
    (person === "p" && computer === "r") ||
    (person === "s" && computer === "p") ||
)   {
    console.log("Winner!");
}   else {
    console.log("Computer wins!");
} */

var selection = ["r", "p", "s"];

/*scoreboard */
var win = 0;
var lose = 0;
var tie = 0;

function game() {
    let person = prompt("Please pick r, p or s");
    console.log(person);
    computerOptions = ["r", "p", "s"]
    choiceNumer = Math.floor(Math.random()*3);
    computerChoice = computerOptions[choiceNumber];
    alert(computerChoice);
    console.log(computerChoice);
if (person === computerChoice) {
    console.log("Tie!")
}   else if (
    (person === "r" && computer === "s") ||
    (person === "p" && computer === "r") ||
    (person === "s" && computer === "p") || {
        wincount++;
    }
    )   {
    alert("Winner!");
}   else {
    alert("Computer wins!");
}
}
