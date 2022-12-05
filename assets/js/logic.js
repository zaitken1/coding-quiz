// GLOBAL VARIABLES
var btn = document.getElementById('start');
var questionsWrapper = document.getElementById('questions');
var startScreen = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var choicesOutput = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var currentQuestionIndex = 0;
var time = 60; 
var audioCorrect = new Audio("./challenge/assets/sfx/correct.wav");
var audioIncorrect = new Audio("./challenge/assets/sfx/incorrect.wav");

// ADD EVENT LISTENER TO START BUTTON
btn.addEventListener('click', showQuizContent);

// FUNCTION TO SHOW QUESTIONS, START TIMER AND LOOP THROUGH QUESTIONS ARRAY
function showQuizContent (){
    questionsWrapper.style.display = 'block';
    startScreen.style.display = 'none';

    // SET TIMER ON START BUTTON CLICK
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
    
    showQuestions();

}


//FUNCTION TO LOOP THROUGH QUIZ QUESTIONS
function showQuestions() {
        
    var currentQuestion = quizQuestions[currentQuestionIndex];

    questionTitle.innerText = '';

    questionTitle.innerText = currentQuestion.title;

    var choices = currentQuestion.choices;

    choicesOutput.innerHTML = '';

    for (var i = 0; i < choices.length; i++) {
        var choice = choices[i];
        var isCorrect = currentQuestion.answer === choice;

        choicesOutput.insertAdjacentHTML('beforeend', `
        <button data-correct=${isCorrect}>${choice}</button>
        `)
    }
}

//ADD EVENT LISTENER TO CHOICES
choicesOutput.addEventListener('click', checkAnswer);

//FUNCTION TO CHECK ANSWER CORRECT OR FALSE
function checkAnswer(event){
    if (event.target.dataset.correct === "false"){
        choicesOutput.insertAdjacentHTML('beforeend', `
        <p>Wrong!</p>
        `);
        audioIncorrect.play();
        time -= 10;
        nextQuestion();
    }
    else {
        choicesOutput.insertAdjacentHTML('beforeend', `
        <p>Correct!</p>
        `);
        audioCorrect.play();
        nextQuestion();
    }
}

//FUNTION TO INCREMENT QUESTION
function nextQuestion() {
    currentQuestionIndex++;
    showQuestions();
}

// 
// if data-correct === false, show message 'wrong', deduct 10 seconds from timer & show next question, else show next question and show message 'correct'
// store result