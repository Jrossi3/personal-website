var myVideo = document.getElementById("video100"); 
let spring = document.getElementById("video100");
let buttonSpring= document.getElementById('springBreak')
let playPauseButton = document.getElementById('playPause')
function playPause() { 
    if (myVideo.paused) {
        myVideo.play(); 
    }
    else {
        myVideo.pause(); 
    }
} 
function makeBig() { 
    myVideo.width = 1000; 
} 
function makeSmall() { 
    myVideo.width = 320; 
} 
function makeNormal() { 
    myVideo.width = 420; 
}

function displaySpringBreak(){
    if (spring.hidden == false){
        spring.hidden = true
        playPauseButton.hidden = true
        buttonSpring.innerHTML = 'Display Project'
    }else {
        spring.hidden = false
        playPauseButton.hidden = false
        buttonSpring.innerHTML = 'Hide Project'
    }
}