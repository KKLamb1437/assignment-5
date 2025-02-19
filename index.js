//let allows me to assing a value to the variable, in this case its interval
let interval;
const meme=document.getElementById("meme");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

function moveMeme(){
    //this is to make sure the image does not go past the limites of the visible screen
    let maxWidth = window.innerWidth - meme.width;
    let maxHeight = window.innerHeight - meme.height;
    //absolute position to allow the image to move
    meme.style.position="absolute";
    //adding px makes it a CSS understandable value and math.random allows the movement to be random
    meme.style.left= Math.random() * maxWidth + "px";
    meme.style.top =Math.random() * maxHeight + "px";
}
//this starts the movement of the image and set to 500ms interval
function startMovement(){
    startBtn.disabled=true;
    stopBtn.disabled=false;
    interval = setInterval(moveMeme, 500);
}
//this clears the interval and stops the image moving
function stopMovement(){
    stopBtn.disabled = true;
    startBtn.disabled = false;
    clearInterval(interval);
}
//this assigns the fuction when the button is clicked
startBtn.onclick = startMovement;
stopBtn.onclick= stopMovement;