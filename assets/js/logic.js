// GLOBAL VARIABLES
var btn = document.getElementById('start');
var questionsWrapper = document.getElementById('questions');
var startScreen = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var choicesOutput = document.getElementById('choices');
var endScreen = document.getElementById('end-screen');
var message = document.getElementById('message');
var finalScore = document.getElementById('final-score');
var currentQuestionIndex = 0;
var time = 60; 
var audioCorrect = new Audio("assets/sfx/correct.wav");
var audioIncorrect = new Audio("assets/sfx/incorrect.wav");

// ADD EVENT LISTENER TO START BUTTON
btn.addEventListener('click', showQuizContent);

// FUNCTION TO SHOW QUESTIONS AND START TIMER
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
        audioIncorrect.play();
        time -= 10;
        nextQuestion();
    }
    else {
        audioCorrect.play();
        nextQuestion();
    }
}

//FUNTION TO INCREMENT QUESTION
function nextQuestion() {  
    if (currentQuestionIndex < quizQuestions.length-1){
        currentQuestionIndex++;
        showQuestions();
        displayMessage();
    }
    else {
        questionsWrapper.style.display = 'none';
        endScreen.style.display = 'block';
        finalScore.innerHTML = time;
    }
}

//FUNCTION TO DISPLAY MESSAGE
function displayMessage(){
    if (event.target.dataset.correct === "false"){
        message.innerHTML = "Wrong";
        setTimeout(function(){
        message.innerHTML = "";
        }, 3000);
    } else {
        message.innerHTML = "Correct";
        setTimeout(function(){
        message.innerHTML = "";
        }, 3000);
    }
}

