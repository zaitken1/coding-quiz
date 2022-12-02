// Add event listener to Start button
 var btn = document.getElementById('start');
 var questions = document.getElementById('questions');
 var startScreen = document.getElementById('start-screen');
 
 btn.addEventListener('click', showQuizContent);

 function showQuizContent (){
    questions.style.display = 'block';
    startScreen.style.display = 'none';
 }


 // if div is display none, change to display block