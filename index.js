let randomNumber1 = Math.floor(Math.random() * 6) + 1; //random between 1 to 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dado1 = document.querySelector(".img1");
let dado2 = document.querySelector(".img2");
let winner = document.querySelector("h1");

function randomImage() {
  dado1.setAttribute("src", `/images/dice${randomNumber1}.png`);
  dado2.setAttribute("src", `/images/dice${randomNumber2}.png`);
  return [randomNumber1, randomNumber2];
}

function play() {
  [player1, player2] = randomImage();
  let message = "Refresh me!";
  if (player1 > player2) {
    message = "Won player 1";
  } else if (player2 > player1) {
    message = "Won player 2";
  } else if (player2 === player1) {
    message = "Draw!";
  }
  winner.innerText = message;
}

play();
