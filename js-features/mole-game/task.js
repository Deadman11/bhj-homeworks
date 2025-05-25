const holes = document.querySelectorAll('.hole');
const deads = document.getElementById('dead');
const losts = document.getElementById('lost');
let countDeads = 0;
let countlosts = 0;



holes.forEach(hole => {
    hole.addEventListener('click', function(){
        this.textContent = ++countDeads
    })
})


