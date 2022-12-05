var getHighScores = JSON.parse(localStorage.getItem("highScoresData"));

console.log(getHighScores);

document.getElementById("highscores").innerHTML = `
<ol>
  <li>${getHighScores.initials} - ${getHighScores.score}</li>
</ol>
`;

function clearScores() {
  document.getElementById("highscores").innerHTML = "";
  localStorage.clear();
}
