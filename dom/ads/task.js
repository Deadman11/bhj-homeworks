const rotatorCase = document.querySelectorAll(".rotator__case");
let index = 0;

function changeColor(){
    return rotatorCase[index].dataset.color;
}
function changeSpeed(){
    return rotatorCase[index].dataset.speed;
}

function changeText(elem){
    elem.forEach(el => el.classList.remove("rotator__case_active"));
    elem[index].style.color = changeColor();
    elem[index].classList.add("rotator__case_active");
    setTimeout(() =>{
        if(index < 6){
            changeText(rotatorCase)
        }
        index = (index + 1) % elem.length;
    }, changeSpeed())
}

changeText(rotatorCase)
