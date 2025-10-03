
let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor((Math.random() * 3));
    switch(choice){
        case 0:
            return "paper";
            break;
        case 1:
            return "scissor";
            break;
        case 2:
            return "rock";
            break;
        default:
            prompt("Computer Choice Failed");
    }
}

function getHumanChoice(){
    let choice = parseInt(prompt("Enter (0) for paper, (1) for scissors, (2) for rock"));
    switch(choice){
        case 0:
            return "paper";
            break;
        case 1:
            return "scissor";
            break;
        case 2:
            return "rock";
            break;
        default:
            prompt("Computer Choice Failed");
    }
}

function playRound(humanChoice, computerChoice){
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();

    if(human === computer){
        console.log("TIE!")
    }
    else if(human === "paper" && computer ==="scissor"){
        console.log("You Lose! Scissor beats Paper");
    }
    else if(human === "paper" && computer ==="rock"){
        console.log("You win! Paper beats Rock");
    }
    else if(human === "scissor" && computer ==="paper"){
        console.log("You win! Scissor beats paper");
    }
    else if(human === "scissor" && computer === "rock"){
        console.log("You lose! Rock beats Paper");
    }
    else if(human === "rock" && computer ==="paper"){
        console.log("You lose! Rock beats Paper");
    }
    else if(human === "rock" && computer === "scissor"){
        console.log("You win! Rock beats Scissor")
    }
    else{
        console.log("Error");
    }
}