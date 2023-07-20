let playerscore = 0;
let computerscore = 0;
const buttons = document.querySelectorAll('.option');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        playerchoice = button.id
        result = singleGame(playerchoice, getComputerChoice());
        document.getElementById('result').innerHTML = result;
        resetScore();
    });
});

function resetScore(){
    if(computerscore == 5){
        document.getElementById('winner').innerHTML = "Computer won the game";
        computerscore = 0;
        playerscore = 0;
    }else if(playerscore == 5){
        document.getElementById('winner').innerHTML = "You won ;)";
        computerscore = 0;
        playerscore = 0;
    }
}

/**funcion que nos devuelve la eleccion aleatoria de la computadora**/
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = getRandomInt(choices.length)
    return choices[choice];
}

/**funcion que nos devuelve un numero aleatorio dentro del rango que le demos,
 * de 0 a n **/
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function singleGame(playerChoice, computerChoice){
    let player = playerChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    document.getElementById("player").innerHTML = playerscore;
    document.getElementById("computer").innerHTML = computerscore;
    if(player === computer){
        return "Draw"
    }else if (player == "rock" && computer === "paper"){
        computerscore++;
        return "You Lose, Paper beats Rock"
    }else if(player === "rock" && computer === "scissors"){
        playerscore++;
        return "You won, Rock beats Scissors"
    }else if(player === "paper" && computer === "scissors"){
        computerscore++;
        return "You Lose, Scissors beats Paper"
    }else if(player === "paper" && computer=== "rock"){
        playerscore++;
        return "You won, Paper beats Rock"
    }else if(player === "scissors" && computer === "paper"){
        playerscore++;
        return "You won, Scissors beats paper"
    }else if(player === "scissors" && computer === "rock"){
        computerscore++;
        return "You Lose, Rock beats Scissors"
    }else{
        return "Your choice is not part of the options"
    }
}

/**function games(){
    for(let i = 0; i <=6; i++){
        let playerChoice = String(prompt("please select an option for rock, paper or scissors game"));
        //document.getElementById("player").innerHTML = playerscore;
        //document.getElementById("computer").innerHTML = computerscore;
        document.getElementById("answer").innerHTML = singleGame(playerChoice, getComputerChoice());
        resetScore(playerscore, computerscore);
    }
}**/