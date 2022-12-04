// GLOBAL VARIABLES
var currentQuestionIndex = 0;
var btn = document.getElementById('start');
var questionsWrapper = document.getElementById('questions');
var startScreen = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var choicesOutput = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
 
// ADD EVENT LISTENER TO START BUTTON
btn.addEventListener('click', showQuizContent);

// FUNCTION TO SHOW QUESTIONS, START TIMER AND LOOP THROUGH QUESTIONS ARRAY
function showQuizContent (){
    questionsWrapper.style.display = 'block';
    startScreen.style.display = 'none';

    // SET TIMER ON START BUTTON CLICK
    var time = 60;

    var countdownEl = document.getElementById('time');
    
    setInterval(updateCountdown, 1000);
    
    function updateCountdown () {
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;
    
        countdownEl.innerHTML = `${seconds}`
            
        if (time > 0) {
        time--;
        }
    
        if (time === 0) {
            questionsWrapper.style.display = 'none';
            endScreen.style.display = 'block';
        }
    }
    
    //LOOP THROUGH QUIZ QUESTIONS
    var currentQuestion = quizQuestions[currentQuestionIndex];
    var choices = currentQuestion.choices;

    questionTitle.innerText = currentQuestion.title;

    choicesOutput.innerHTML = '';

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
        <button data-correct=${isCorrect}>${choice}</button>
        `)
    }
 }

choicesOutput.addEventListener('click', checkAnswer);

function checkAnswer(){
    if (false.clicked == true) {
        console.log("hello");
    }
 }

 

// add click event listener to choices div as it is the parent element
// if data-correct === false, show message 'wrong', deduct 10 seconds from timer & show next question, else show next question and show message 'correct'
// store result