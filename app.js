var diceDom = document.querySelector(".dice");
var isNewGame;
var activePlayer, scores, roundScore, diceNumber;
initGame();

//1   shoo hayah event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (isNewGame) {
    // randomo 1-6 buulgah
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    // delgetsend zurag haruulah
    diceDom.style.display = "block";
    //random 1-6nii zurgiig haruulah
    diceDom.src = "dice-" + diceNumber + ".png";
    // document.getElementById("score-0").textContent = diceNumber;
    if (diceNumber !== 1) {
      roundScore = roundScore + diceNumber;
      document.getElementById(
        "current-" + activePlayer
      ).textContent = roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Game Over!");
  }
});

//2   hold tovch darah
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // tsugluulsan onoog global onoon deer nemne.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // delgets deer onoog uurchiluh
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];
    // ug toglogch hojson esehiig shalgah
    if (scores[activePlayer] >= 100) {
      isNewGame = false;
      document.getElementById("name-" + activePlayer).textContent = "winner";
      // hojigdson toglogchiig loser bolgoh
      /*    activePlayer === 0
      ? (document.getElementById("name-" + 1).textContent = "you lose")
      : (document.getElementById("name-" + 0).textContent = "you lose");  */
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
    } else {
      // toglogchiin eelj solino
      switchToNextPlayer();
    }
  } else {
    alert("Game Over!");
  }
});

//3 new game button ehluuleh
document.querySelector(".btn-new").addEventListener("click", initGame);

// active player solih
function switchToNextPlayer() {
  // ene toglogchiin tsugluulsan onoog 0 lene;
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // 0 bval 1, 1 bval 0 bolgono.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  // ulaan tsegiig solino
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
  //soligdoh uyd shoog alga bolgoh
  diceDom.style.display = "none";
}
//shineer ehluuleh
function initGame() {
  isNewGame = true;
  // Тоглогчийн ээлжийг хадгалах хувьсагч 1r toglogch 0, 2r toglogchig 1 gene
  activePlayer = 0;

  // Тоглогчдын цуглуулсан оноог хадгалах хувьсагч
  scores = [0, 0];

  // Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
  roundScore = 0;
  // Шооны аль талаараа буусныг хадгалах хувьсагч, 1-6 гэсэн утгыг авна

  // document.querySelector("#score-0").textContent = dice;
  // document.querySelector("#score-1").innerHTML = "<em>YES!</em>";

  // program ehleh
  document.getElementById("score-0").textContent = 0;
  document.getElementById("score-1").textContent = 0;
  document.getElementById("current-0").textContent = 0;
  document.getElementById("current-1").textContent = 0;
  diceDom.style.display = "none";
  //toglogchiin neriig butsaay
  document.getElementById("name-0").textContent = "Player 1";
  document.getElementById("name-1").textContent = "Player 2";
  //ylagch todorhod ulaan tseg arilgah
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");
}
