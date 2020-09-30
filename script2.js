function startQuiz(){
    startButton.parentNode.removeChild(startButton);
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