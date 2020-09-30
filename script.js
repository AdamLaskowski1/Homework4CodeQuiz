// var containerVar = document.querySelector(".container");
var questionEl = document.querySelector(".question");
var answerEl = document.querySelector(".answer");
var buttonEl = document.querySelector(".StartQuizBtn");
var ConfirmEl = document.querySelector(".answer-verify");
var highscore = document.querySelector(".highscore");
var timeLeft = document.querySelector(".timer-score");
var timer = 75;
var Index = 0;

var quiz = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correct: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correct: "parentheses"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to other variables.",
        answers: ["commas", "curly brackets", "quotes", "parenthesis"],
        correct: "parenthesis"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
        correct: "console.log"
    },
];

// selecting the start button
buttonEl.addEventListener("click", function(){
    //removes start button
    buttonEl.style.display = "none";
    // timer.textContent= timer();
    questionEl.textContent= quiz[Index].question;
    answerEl.textContent= "";
    // for loop through questions and answers array containing multiple objects
    for (i = 0; i < quiz[0].answers.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.innerHTML = quiz[0].answers[i];
        answerEl.appendChild(answerBtn);
        answerBtn.className = "answer-button";
        if (quiz[0].answers[i] === quiz[0].correct)
        {
            answerBtn.setAttribute("data-correct", true);
        }
    }

});
// selecting answer choice
document.body.addEventListener("click",function(event){
    var target = event.target
    if(target.classList.contains("answer-button")){
        var isCorrect = target.getAttribute("data-correct");
        if(isCorrect){
            ConfirmEl.textContent="Correct!";
        }
        else{
            ConfirmEl.textContent ="Wrong!"
            timer = timer -10;
        }
        Index++;
        questionEl.textContent= quiz[Index].question;
        answerEl.textContent="";
        var i=0;
    for (i = 0; i < quiz[0].answers.length; i++){
        var answerBtn = document.createElement("button");
        answerBtn.innerHTML = quiz[Index].answers[i];
        answerEl.appendChild(answerBtn);
        answerBtn.className ="answer-button";
        if (quiz[Index].answers[i] === quiz[Index].correct )
        {
            answerBtn.setAttribute("data-correct", true);
        }
    }
}
});

function startQuiz(){
    buttonEl.parentNode.removeChild(startButton);
    timer.textContent = timeLeft;

    displayQuestion(Index);
    answerChecking(quizIndex);

    var timerInterval = setInterval(function(){
        // seconds
        timeLeft--;
        timer.textContent = timeLeft;

        if (timeLeft <= 0){
            clearInterval(timerInterval);
            inputScore();
        }
    }, 1000);
}

startButton.addEventListener("click", startQuiz);
// viewScores.addEventListener("click", displayHighScores);

