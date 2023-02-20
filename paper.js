function getComputerChoice() {
    let aleatro = ["piedra", "papel", "tijera"];
    let randomNumber = Math.floor(Math.random() * aleatro.length);
    return (aleatro[randomNumber]);
}


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection)  {
        return "Culo e empate con " + playerSelection
      } 
    
    else if (playerSelection == "piedra" && computerSelection == "tijera") {
        return "Has ganado porque elegiste piedra"} 
    else if (playerSelection == "papel" && computerSelection == "piedra") {
        return "Has ganado porque elegiste papel"} 
    else if (playerSelection == "tijera" && computerSelection == "papel") {
        return "Has ganado porque elegiste tijera"}
    else {
        return "Has perdido";
    }

  }

  

    function game() {
        let playerScore = 0;
        let computerScore = 0;
        
        for (let i = 0; i < 5; i++) {
          let playerSelection = prompt('introducir piedra, papel o tijera');
          let computerSelection = getComputerChoice();
          let result = playRound(playerSelection, computerSelection);
          console.log(result);
          if (result.includes("ganado")) {
            playerScore++;
          } else if (result.includes("perdido")) {
            computerScore++;
          }
        }
        
       if (playerScore > computerScore) {
          console.log(`You win! ${playerScore} to ${computerScore}`);
        } else if (playerScore < computerScore) {
          console.log(`You lose! ${computerScore} to ${playerScore}`);
        } else {
          console.log(`It's a tie! ${playerScore} to ${computerScore}`);
        }
      }
    
    

   
  
  console.log(game())
