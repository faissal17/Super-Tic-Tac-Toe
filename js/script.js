function validatePlayers() {
  var player1 = document.querySelector(".player1");
  var player2 = document.querySelector(".player2");
  var player1Error = document.querySelector("#player1Error");
  var player2Error = document.querySelector("#player2Error");
  if (player1.value.trim() === "") {
    player1.classList.add("error");
    player1Error.textContent = "Player 1 name cannot be empty";
    return;
  } else {
    player1.classList.remove("error");
    player1Error.textContent = "";
  }
  if (player2.value.trim() === "") {
    player2.classList.add("error");
    player2Error.textContent = "Player 2 name cannot be empty";
    return;
  } else {
    player2.classList.remove("error");
    player2Error.textContent = "";
  }
  window.location.href = "game.html";
}
