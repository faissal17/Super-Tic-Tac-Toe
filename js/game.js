var storedPlayer1Name = window.localStorage.getItem("player1Name");
var storedPlayer2Name = window.localStorage.getItem("player2Name");

document.getElementById("player1Name").innerHTML = storedPlayer1Name;
document.getElementById("player2Name").innerHTML = storedPlayer2Name;

const game = document.querySelector("#gameBoard");
const info = document.querySelector("#info");

const StartCells = () => {
  const CellsArray = [];

  for (let i = 0; i < 400; i++) {
    CellsArray.push("");
  }
  return CellsArray;
};

function CreateBoard() {
  const gameBoard = document.getElementById("gameBoard");

  const cells = StartCells();

  cells.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("square");
    cellElement.setAttribute("data-index", index);
    gameBoard.appendChild(cellElement);
  });
}

CreateBoard();
