const throwButton = document.getElementById("throwButton");
const playerResult = document.getElementById("playerResult");
const aiResult = document.getElementById("aiResult");
const gameResult = document.getElementById("gameResult");
const playerScoreText = document.getElementById("playerScore");
const aiScoreText = document.getElementById("aiScore");
const drawScoreText = document.getElementById("drawScore");

let playerWins = 0;
let aiWins = 0;
let drawGames = 0;

function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}

  throwButton.addEventListener("click", function () {
  const playerRoll = throwDice();
  const aiRoll = throwDice();

    playerResult.textContent = playerRoll;
    aiResult.textContent = aiRoll;

    if (playerRoll > aiRoll) {
      gameResult.textContent = "Player Wins🏆";
      gameResult.parentElement.style.color = "green";
      playerWins++;
    } else if (playerRoll < aiRoll) {
      gameResult.textContent = "AI Wins💀";
      gameResult.parentElement.style.color = "red";
      aiWins++;
    } else {
      gameResult.textContent = "DRAW🤝";
      drawGames++;
    }
    playerScoreText.textContent = playerWins;
    aiScoreText.textContent = aiWins;
    drawScoreText.textContent = drawGames;
});
