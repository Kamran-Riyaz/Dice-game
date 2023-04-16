var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");

var h1 = document.querySelector('h1');


image1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
image2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  h1.innerHTML = "🚩Player 1 wins!";

} else if (randomNumber2 > randomNumber1) {
  h1.innerHTML = "Player 2 wins!🚩";
} else if (randomNumber1 === randomNumber2) {
  h1.innerHTML = "Draw!";
}
