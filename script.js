
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