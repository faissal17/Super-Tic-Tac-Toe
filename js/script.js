function validatePlayers() {
  let player1 = document.querySelector(".player1");
  let player2 = document.querySelector(".player2");
  let player1Error = document.querySelector("#player1Error");

  let player1Name = player1.value.trim();
  let player2Name = player2.value.trim();

  if (player1Name === "") {
    player1.classList.add("error");
    player1Error.textContent = "Player 1 name cannot be empty";
    return;
  } else {
    player1.classList.remove("error");
    player1Error.textContent = "";
  }

  let gameType = document.querySelector("#typeOfGame").value;
  if (gameType === "vsMachine") {
    let player2default = "machine";
    window.localStorage.setItem("player1Name", player1Name);
    window.localStorage.setItem("player2Name", player2default);
  } else {
    if (player2Name === "") {
      player2.classList.add("error");
      player1Error.textContent = "Player 2 name cannot be empty";
      return;
    } else {
      player2.classList.remove("error");
    }
    window.localStorage.setItem("player1Name", player1Name);
    window.localStorage.setItem("player2Name", player2Name);
  }

  window.location.href = "game.html";
}

function SelectGame() {
  let player1 = document.querySelector(".player1");
  let player2 = document.querySelector(".player2");
  let start = document.querySelector("#typeOfGame");

  if (start.value === "vsMachine") {
    player2.style.display = "none";
    player1.style.width = "50%";
    player1.style.position = "relative";
    player1.style.marginTop = "20px";
    player1.style.top = "50%";
    player1.style.left = "50%";
    player1.style.transform = "translate(-50%, -50%)";

    let player2Error = document.querySelector("#player2Error");
    player2Error.textContent = "";
    player2.classList.remove("error");
  } else {
    player2.style.display = "block";
    player1.style.width = "";
    player1.style.position = "";
    player1.style.top = "";
    player1.style.left = "";
    player1.style.transform = "";
  }
}
