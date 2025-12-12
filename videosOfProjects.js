var myVideo = document.getElementById("video100"); 
let spring = document.getElementById("videoSpring");
let buttonSpring = document.getElementById('springBreak')
let playPauseButton = document.getElementById('playPause')
let playPauseButtonQuiz = document.getElementById('playPauseQuiz')
let quiz = document.getElementById('videoQuiz')
let quizButton = document.getElementById('quizApp')
let timer = document.getElementById('videoTimer')
let timerButton = document.getElementById('timerButton')
let playPauseButtonTimer = document.getElementById('playPauseTimer')
let sleeper = document.getElementById("videoSleeper");
let buttonSleeper = document.getElementById('sleeper');
let sleeperPause = document.getElementById('sleeperPause');
function playPause() { 
    if (spring.paused) {
        spring.play(); 
    }
    else {
        spring.pause(); 
    }
}

function playPauseQuiz() { 
    if (quiz.paused) {
        quiz.play(); 
    }
    else {
        quiz.pause(); 
    }
} 

function playPauseTimer() { 
    if (timer.paused) {
        timer.play(); 
    }
    else {
        timer.pause(); 
    }
} 

function playPauseSleeper() { 
    if (sleeper.paused) {
        sleeper.play(); 
    }
    else {
        sleeper.pause(); 
    }
}
// function makeBig() { 
//     myVideo.width = 1000; 
// } 
// function makeSmall() { 
//     myVideo.width = 320; 
// } 
// function makeNormal() { 
//     myVideo.width = 420; 
// }

function displaySleeper() {
    if (sleeper.hidden == false){
        sleeper.hidden = true
        sleeperPause.hidden = true
        buttonSleeper.innerHTML = 'Display Project'
    } else {
        sleeper.hidden = false
        sleeperPause.hidden = false
        buttonSleeper.innerHTML = 'Hide Project'
    }
}

function displayQuizApp() {
    if (quiz.hidden == false){
        quiz.hidden = true
        playPauseButtonQuiz.hidden = true
        quizButton.innerHTML = 'Display Project'
    } else {
        quiz.hidden = false
        playPauseButtonQuiz.hidden = false
        quizButton.innerHTML = 'Hide Project'
    }
}
function displaySpringBreak(){
    if (spring.hidden == false){
        spring.hidden = true
        playPauseButton.hidden = true
        buttonSpring.innerHTML = 'Display Project'
    } else {
        spring.hidden = false
        playPauseButton.hidden = false
        buttonSpring.innerHTML = 'Hide Project'
    }
}
function displayTimer(){
    if (timer.hidden == false){
        timer.hidden = true
        playPauseButtonTimer.hidden = true
        timerButton.innerHTML = 'Display Project'
    } else {
        timer.hidden = false
        playPauseButtonTimer.hidden = false
        timerButton.innerHTML = 'Hide Project'
    }
}