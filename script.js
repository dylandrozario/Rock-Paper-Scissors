
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
    let choice = parseInt(prompt("Enter (0) for paper, (2) for scissors, (3) for rock"));
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