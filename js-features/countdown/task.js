let startTime = 120;
let timer = document.getElementById('timer');

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
        clearInterval(timerId);
    }
}

let timerId = setInterval(countdownTimer, 1000);
