
//Hämta HTML-Element
const playerResult = document.getElementById("playerResult");
const aiResult = document.getElementById("aiResult");
const gameResult = document.getElementById("gameResult");
const playerScoreText = document.getElementById("playerScore");
const aiScoreText = document.getElementById("aiScore");

//Deklarerar och sätter startvärden på variabler
let playerRoll = 0;
let aiRoll = 0;
let playerScore = 0;
let aiScore = 0;

loadScore();
showResultOfRoll();

//Dessa funktioner anropas när man klickar på knappen
const throwButton = document.getElementById("throwButton");
throwButton.addEventListener("click", function () {
  throwDice();
  randomNumber();
  showResult();
  resultOfRoll();
  showResultOfRoll();
  saveScore();
});

//Skapar en funktion som returnerar ett slumpmässigt värde mellan 1 och 6
function throwDice() {
  return Math.floor(Math.random() * 6) + 1;
}
//Tilldelar spelaren och AI ett slumpmässigt tal mellan 1 och 6 för tärningskast
function randomNumber () {
  playerRoll =throwDice();
  aiRoll =throwDice();
}



function showResult() {
  playerResult.innerHTML = playerRoll;
  aiResult.innerHTML = aiRoll;
}

//Avgör resultatet av tärningsomgången och uppdaterar spelets resultat
function resultOfRoll(){
    if (playerRoll > aiRoll) {
      gameResult.innerHTML = "Player Wins🏆";
      gameResult.parentElement.style.color = "green";
      playerScore++;

    } else if (playerRoll < aiRoll) {
      gameResult.innerHTML = "AI Wins💀";
      gameResult.parentElement.style.color = "red";
      aiScore++;
    } else{

      gameResult.innerHTML = "Draw🤝";
      gameResult.parentElement.style.color = "yellow";
    }
}




function showResultOfRoll() {
  //visa antal vunna matcher
      playerScoreText.innerHTML = playerScore;
      aiScoreText.innerHTML = aiScore;
    }



//COOKIES

function saveScore() {
document.cookie="previousPlayerScore="+playerScore+";expires= Sun, 27 Sep 2054 00:00:00 UTC";
document.cookie="previousAiScore="+aiScore+";expires=Sun, 27 Sep 2054 00:00:00 UTC";
}

function loadScore(){
  playerScore = getCookie("previousPlayerScore");
  aiScore = getCookie("previousAiScore");
}



function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return 0;
}
