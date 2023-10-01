let storedPlayer1Name = window.localStorage.getItem("player1Name");
let storedPlayer2Name = window.localStorage.getItem("player2Name");

document.getElementById("player1Name").innerHTML = storedPlayer1Name;
document.getElementById("player2Name").innerHTML = storedPlayer2Name;

let Score1 = document.getElementById("player1Score");
let Score2 = document.getElementById("player2Score");

const game = document.querySelector("#gameBoard");
let info = document.querySelector("#info");

let winnerName = "";

const boeardSize = 399;

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
  let streak = 0;
  let score1 = parseInt(localStorage.getItem("score1")) || 0;
  let score2 = parseInt(localStorage.getItem("score2")) || 0;
  let winnerName = go === "cross" ? storedPlayer2Name : storedPlayer1Name;

  for (let i = selectedCellId - 4; i <= selectedCellId + 4; i++) {
    if (i <= boeardSize && i >= 0) {
      if (cellSquare[i] && cellSquare[i].hasChildNodes()) {
        if (
          selectedCell.children[0].getAttribute("class") ===
          cellSquare[i].children[0].getAttribute("class")
        ) {
          console.log("it has a child");
          streak++;
          if (streak >= 5) break;
        } else {
          streak = 0;
          console.log("there is a child but they are not the same");
        }
      } else {
        streak = 0;
        console.log("the square is empty");
      }
    }
  }
  console.log(streak);
  if (streak >= 5) {
    if (winnerName === storedPlayer1Name) {
      score1++;
      localStorage.setItem("score1", score1);
      Score1.textContent = "Score : " + score1;
    } else if (winnerName === storedPlayer2Name) {
      score2++;
      localStorage.setItem("score2", score2);
      Score2.textContent = "Score : " + score2;
    }
    Swal.fire("Good job!", "The Winner is " + winnerName, "success");
  }
  for (let i = selectedCellId - 80; i <= selectedCellId + 80; i += 20) {
    if (i <= boeardSize && i >= 0) {
      if (cellSquare[i] && cellSquare[i].hasChildNodes()) {
        if (
          selectedCell.children[0].getAttribute("class") ===
          cellSquare[i].children[0].getAttribute("class")
        ) {
          console.log("it has a child");
          streak++;
          if (streak >= 5) break;
        } else {
          streak = 0;
          console.log("there is a child but they are not the same");
        }
      } else {
        streak = 0;
        console.log("the square is empty");
      }
    }
  }
  console.log(streak);
  if (streak >= 5) {
    Swal.fire("Good job!", "The Winner is " + winnerName, "success");
  }
  for (let i = selectedCellId - 84; i <= selectedCellId + 84; i += 21) {
    if (i <= boeardSize && i >= 0) {
      if (cellSquare[i] && cellSquare[i].hasChildNodes()) {
        if (
          selectedCell.children[0].getAttribute("class") ===
          cellSquare[i].children[0].getAttribute("class")
        ) {
          console.log("it has a child");
          streak++;
          if (streak >= 5) break;
        } else {
          streak = 0;
          console.log("there is a child but they are not the same");
        }
      } else {
        streak = 0;
        console.log("the square is empty");
      }
    }
  }
  console.log(streak);
  if (streak >= 5) {
    Swal.fire("Good job!", "The Winner is " + winnerName, "success");
  }
}
