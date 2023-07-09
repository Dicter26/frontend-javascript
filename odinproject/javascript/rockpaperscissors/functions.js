let playerscore = 0;
let computerscore = 0;

function resetScore(playerscore, computerscore){
    if(computerscore === 5 || playerscore === 5){
        computerscore = 0;
        playerscore = 0;
    }
}

/**funcion que nos devuelve la eleccion aleatoria de la computadora**/
function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
    let choice = getRandomInt(choices.length)
    return choices[choice];
    //document.getElementById("answer").innerHTML = choices[choice];
}

/**funcion que nos devuelve un numero aleatorio dentro del rango que le demos,
 * de 0 a n **/
function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function singleGame(playerChoice, computerChoice){
    let player = playerChoice.toLowerCase();
    console.log(player);
    let computer = computerChoice.toLowerCase();
    console.log(computer);
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

function games(){
    for(let i = 0; i <=6; i++){
        let playerChoice = String(prompt("please select an option for rock, paper or scissors game"));
        //document.getElementById("player").innerHTML = playerscore;
        //document.getElementById("computer").innerHTML = computerscore;
        document.getElementById("answer").innerHTML = singleGame(playerChoice, getComputerChoice());
        resetScore(playerscore, computerscore);
    }
}