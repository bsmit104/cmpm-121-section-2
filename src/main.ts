//purposely bad code so students can fix it - can make it worse

import "./style.css";

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const bird = document.getElementById("bird");
const scoreText = document.getElementById("scoreText");

let score = 0;
SetText("space to start!");

let isJumping = false;
let gameOver = true;

// document.addEventListener("click", () => jump());
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

setInterval(function () {
  Main();
}, 10);

function Main() {
  if (gameOver == false) {
    score = score + 1;
    SetText("Score: " + score);

    CheckGameOver();
  }
}

function StartGame() {
  console.log("Game started!");
  gameOver = false;
  score = 0;
  cactus?.classList.add("cactusMove");
  bird?.classList.add("birdMove");
}

function jump() {
  if (gameOver === true) {
    StartGame();
  }
  if (isJumping == false) {
    isJumping = true;
    dino?.classList.add("jump");
    setTimeout(RemoveJump, 500);
  }
}

function RemoveJump() {
  dino?.classList.remove("jump");
  isJumping = false;
  //mainLoop = mainLoop //bug fix?
}

function RemoveObstacles() {
  cactus?.classList.remove("cactusMove");
  bird?.classList.remove("birdMove");
}

function CheckGameOver() {
  if (gameOver == false && dino != null && cactus != null && bird != null) {
    //get is dinosaur jumping
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top"),
    );

    //get cactus position
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left"),
    );

    //get bird position
    let birdLeft = parseInt(
      window.getComputedStyle(bird).getPropertyValue("left"),
    );

    //detect collision
    if (
      (dinoTop >= 150 && Math.abs(cactusLeft) < 7) ||
      (dinoTop <= 55 && Math.abs(birdLeft) < 11)
    ) {
      EndGame();
    }
  }
}

function EndGame() {
  console.log("Player died!");
  SetText(`Final Score: ${score}! Space to Play Again!`);
  gameOver = true;
  RemoveObstacles();
  RemoveJump();
}

function SetText(s: string) {
  if (scoreText) {
    scoreText.textContent = s;
  }
}

//shrek credit https://www.deviantart.com/gameroiren/art/Shrek-PNG-948854143
