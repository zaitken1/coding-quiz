var highScore = localStorage.getItem("highScore");

var initials = localStorage.getItem("initials");

document.getElementById("highscores").innerHTML = `
<ol>
  <li>${userInitials} - ${highScore}</li>
</ol>
`;

function clearScores() {
  document.getElementById("highscores").innerHTML = "";
  localStorage.clear();
}
