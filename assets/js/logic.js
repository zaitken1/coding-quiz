var currentQuestionIndex = 0;

// Add event listener to Start button
var btn = document.getElementById('start');
var questionsWrapper = document.getElementById('questions');
var startScreen = document.getElementById('start-screen');
var questionTitle = document.getElementById('question-title');
var choicesOutput = document.getElementById('choices');
 
btn.addEventListener('click', showQuizContent);

 function showQuizContent (){
    questionsWrapper.style.display = 'block';
    startScreen.style.display = 'none';
    
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

    questionsWrapper.classList.remove('hide');
 }

 function checkAnswer(event){
    console.log('event.target');
 }

 choicesOutput.addEventListener('click', checkAnswer);


// add click event listener to choices div as it is the parent element
// if class = correct, show message 'correct', else show 'wrong'
// store result
// detract from timer
// show next question