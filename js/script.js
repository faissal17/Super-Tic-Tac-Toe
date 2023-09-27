function validatePlayers() {
  let player1 = document.querySelector(".player1");
  let player2 = document.querySelector(".player2");
  let player1Error = document.querySelector("#player1Error");
  let player2Error = document.querySelector("#player2Error");

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
  if (player2Name === "") {
    player2.classList.add("error");
    player2Error.textContent = "Player 2 name cannot be empty";
    return;
  } else {
    player2.classList.remove("error");
    player2Error.textContent = "";
  }
  window.localStorage.setItem("player1Name", player1Name);
  window.localStorage.setItem("player2Name", player2Name);

  window.location.href = "game.html";
}

function SelectGame() {
  let player2 = document.querySelector(".player2");
  let player1 = document.querySelector(".player1");
  let start = document.querySelector("#typeOfGame");
  if (start) {
    player2.style.display = "none";
    player1.style.width = "50%";
    player1.style.position = "relative";
    player1.style.marginTop = "20px";
    player1.style.top = "50%";
    player1.style.left = "50%";
    player1.style.transform = "translate(-50%, -50%)";
    console.log("yes");
  }
}
