
let countdown;
const timerDisplay = document.querySelector('.display_time-left');
const endTime = document.querySelector('.display_end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds){
    clearInterval(countdown);
    
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        // check if counter should stop!
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds/ 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? "0" : ""}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours();
    const minutes = end.getMinutes();
    const amPm = hour >= 12 ? "pm" : "am"
    endTime.textContent = `We'll be back at: ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? "0" : ""}${minutes}${amPm}`;
}

// Write  function startTimer()

function startTimer(){
    const seconds = parseInt(this.dataset.time);
    console.log(seconds);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value;
    console.log(mins)
    timer(mins * 60)
    this.reset()
})




// To implement a pause function:
// -> first of all save the secondsLeft in global variable. 
// -> When someone clicks the pause button, clearInterval.
// -> When someone clicks play/start button call timer(secondsLeft)