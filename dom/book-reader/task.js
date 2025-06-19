const fz = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');


fz.forEach(elem => elem.addEventListener('click',(e) =>{
    fz.forEach(delElem => delElem.classList.remove('font-size_active'))
    elem.classList.add('font-size_active')

    if(elem.classList.contains('font-size_active')){
        book.classList = "book";
    }
    if(elem.classList.contains('font-size_active') && elem.classList.contains('font-size_small')){
        book.classList.add('book_fs-small');
    }
    if(elem.classList.contains('font-size_active') && elem.classList.contains('font-size_big')){
        book.classList.add('book_fs-big');
    }
}))