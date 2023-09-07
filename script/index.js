let score={
    wins:0,
    loss:0,
    draw:0,
}

const savedScore = JSON.parse(localStorage.getItem('score'));
if (savedScore) {
  score = savedScore;
}

updateScoreElement();



function makeMove(playerMove){
    const computerMove=pickComputerMove();
    const resultElement= document.querySelector('.js-result');

    if (playerMove===computerMove){
        resultElement.innerHTML='Draw!';
        score.draw += 1;
    }
    else if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissors' && computerMove === 'paper')
      ) {
        resultElement.innerHTML = `You win!`;
        score.wins += 1;

      }
    else
    {
        resultElement.innerHTML='You lose!';
        score.loss += 1;
    }
    updateScoreElement();
    localStorage.removeItem('score');

    let movesElement=document.querySelector('.cst-div1');
    movesElement.innerHTML=`<img src="images/${playerMove}-emoji.png" class="img"> <img src="images/${computerMove}-emoji.png" class="img">`;

    let iconElement=document.querySelector('.cst-div2');
    iconElement.innerHTML='<img src="images/user.png"  class="icon"><img src="images/computer.png"  class="icon">';

    function updateScoreElement(){
        document.querySelector('.js-moves-chosen').innerHTML = `
        Wins: ${score.wins}, Losses: ${score.loss}, Ties: ${score.draw}
      `;
    }
    

}
function pickComputerMove(){
    const randomNumber=Math.random();
    let computerMove='';

    if (randomNumber < (1 / 3)) {
        computerMove = 'rock';
      } else if (randomNumber < (2 / 3)) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissors';
      }
    return computerMove;
}

function resetEverything(){
    location.reload();
}
