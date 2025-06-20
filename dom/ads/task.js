const rotatorCase = Array.from(document.querySelectorAll(".rotator__case"));
let index = 0;
let color = '';

function timer(dataTime){
    return dataTime[index].dataset.speed;
}

function changeCase(elem){
    // debugger
    elem.forEach(el => el.classList.remove("rotator__case_active"));
    elem[index].classList.add('rotator__case_active');
    index = (index + 1) % elem.length;
    timer(elem)
}

setInterval(() => {
   changeCase(rotatorCase);
}, timer(rotatorCase));


console.log(color)