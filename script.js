let userScore = 0;
let computerScore =0;

const choices = document.querySelectorAll(".choice");

const msg =document.querySelector("#msg");

const user_score = document.querySelector("#user-score");
const computer_score = document.querySelector("#computer-score");

const generateComputerChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

const drawGame = () =>{
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor = "red";
    msg.style.color = "black";    
}

const showWinner = (userWin) => {
    if(userWin===true){
        msg.innerText = "You Win";
        msg.style.backgroundColor = "green";
        msg.style.color = "white";
        userScore++;
        user_score.innerText = userScore;        
    }
    else{
        msg.innerText = "Computer Win";
        msg.style.backgroundColor = "orange";
        msg.style.color = "black";
        computerScore++;
        computer_score.innerText = computerScore;
    }
}

const playGame = (userChoice) => {
    console.log(`User choice : ${userChoice}`);
    //generate computer choice
    const computerChoice = generateComputerChoice();
    console.log(`Computer choice : ${computerChoice}`);

    if(userChoice===computerChoice){
        //Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice ==="rock"){
            // scissore,paper
            userWin=computerChoice ==='paper'?false:true;

        }
        else if(userChoice==="paper"){
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }



}


choices.forEach( (choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});