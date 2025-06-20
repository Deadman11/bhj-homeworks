const rotatorCase = document.querySelectorAll(".rotator__case");
let index = 0;

function changeColor(){
    return rotatorCase[index].dataset.color;
}
function changeSpeed(){
    return rotatorCase[index].dataset.speed;
}

function changeText(text){
    text.forEach(element => element.classList.remove('rotator__case_active'));
    text[index].style.color = changeColor();
    text[index].classList.add('rotator__case_active')
    index = (index + 1) % text.length;
}

setInterval(() => {
    changeText(rotatorCase);
}, changeSpeed());
