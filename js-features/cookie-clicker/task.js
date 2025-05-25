let clickCount = 0;
let cookieImage = document.getElementById('cookie');



function increasedClick() {
    document.getElementById('clicker__counter').textContent = ++clickCount
}   

cookieImage.addEventListener("mousedown", increasedClick)

cookieImage.addEventListener("mousedown", () => {
    cookieImage.width = 230;
})
cookieImage.addEventListener("mouseup", () => {
    cookieImage.width = 200;
})



