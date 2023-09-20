var storedPlayer1Name = window.localStorage.getItem("player1Name");
var storedPlayer2Name = window.localStorage.getItem("player2Name");

document.getElementById("player1Name").innerHTML = storedPlayer1Name;
document.getElementById("player2Name").innerHTML = storedPlayer2Name;

const game = document.querySelector(".gameBoard");
const info = document.getElementById("info");
