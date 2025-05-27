let countMoles = 0;
let missClick = 0;
const holes = document.getElementsByClassName('hole');

function increasedCountMoles(){
    document.getElementById('dead').textContent = ++countMoles
}
function increasedMissclick(){
    document.getElementById('lost').textContent = ++missClick
}
function clearScore(){
    document.getElementById('dead').textContent = 0
    document.getElementById('lost').textContent = 0
    countMoles = 0;
    missClick = 0;
}
function winOrLose(){
    if(countMoles === 10){
        alert("Победа!");
        clearScore()
    }
    else if(missClick === 5){
        alert("Поражение!");
        clearScore()
    }
}

for(let i = 0; i < holes.length; i++){
    holes[i].addEventListener('click', function(){
        if(holes[i].classList.contains('hole_has-mole')){
            increasedCountMoles();
            winOrLose()
        }else {
            increasedMissclick()
            winOrLose()
        }
    })
}