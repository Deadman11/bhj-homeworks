let startTime = 300;
let timer = document.getElementById('timer');
const stopTime = (startTime + 1) * 1000;

function countdownTimer() {
    let startHours = Math.floor(startTime / 3600);
    let startMinuts = Math.floor(startTime % 3600 / 60);
    let startSeconds = startTime % 60;
    startHours = startHours < 10 ? '0' + startHours: startHours;
    startMinuts = startMinuts < 10 ? '0' + startMinuts: startMinuts;
    startSeconds = startSeconds < 10 ? '0' + startSeconds: startSeconds;
    timer.innerHTML = `${startHours}:${startMinuts}:${startSeconds}`;
    startTime--
    if(startTime === 0){
        alert("Вы победили в конкурсе!")
    }
}

let timerId = setInterval(countdownTimer, 1000);
setTimeout(() => {clearInterval(timerId)}, stopTime);
