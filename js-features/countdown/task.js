let startTime = 59

function countdownTimer() {
    document.getElementById('timer').textContent = startTime--
    if(startTime === 0){
        alert("Вы победили в конкурсе!")
    }
}

setInterval(countdownTimer, 1000)
