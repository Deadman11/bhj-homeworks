const dropList = document.querySelector('.dropdown__list');
const dropItem = document.querySelectorAll('.dropdown__item');
const dropValue = document.querySelector('.dropdown__value');

dropItem.forEach(el => el.addEventListener('click', function (e){
    e.preventDefault()
    let clickedElement = e.target;
    dropValue.textContent = clickedElement.textContent 
}))

let addDropList = addEventListener('click', () =>{
    dropList.classList.toggle('dropdown__list_active')
})

