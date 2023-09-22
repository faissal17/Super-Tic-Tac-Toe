var storedPlayer1Name = window.localStorage.getItem("player1Name");
var storedPlayer2Name = window.localStorage.getItem("player2Name");

document.getElementById("player1Name").innerHTML = storedPlayer1Name;
document.getElementById("player2Name").innerHTML = storedPlayer2Name;

const game = document.querySelector("#gameBoard");
let info = document.querySelector("#info");

const StartCells = () => {
  let CellsArray = [];

  for (let i = 0; i < 400; i++) {
    CellsArray.push("");
  }
  return CellsArray;
};
let go = "cross";
info.textContent = storedPlayer1Name + " you can go first with the Cross";

function CreateBoard() {
  const gameBoard = document.getElementById("gameBoard");
  let cells = StartCells();
  cells.forEach((_cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.id = index;
    cellElement.addEventListener("click", play);
    cellElement.classList.add("square");
    gameBoard.appendChild(cellElement);
  });
}

CreateBoard();

function play(e) {
  let cross = document.createElement("div");
  cross.classList.add(go);
  e.target.append(cross);
  go = go === "cross" ? "circle" : "cross";
  info.textContent = "it is now " + go + " to go.";
  e.target.removeEventListener("click", play);
  console.log(e.target);
  Winner(e.target);
}

function Winner(selectedCell) {
  let cellSquare = document.querySelectorAll(".square");
  const selectedCellId = parseInt(selectedCell.id);
  let streak = 1;

  for (let i = selectedCellId + 1; i < selectedCellId + 5; i++) {
    if (cellSquare[i].hasChildNodes()) {
      if (
        selectedCell.children[0].getAttribute("class") ===
        cellSquare[i].children[0].getAttribute("class")
      ) {
        streak++;
      } else {
        console.log("they are not the same");
        break;
      }
    } else {
      console.log("the square is empty");
      break;
    }
  }
}
