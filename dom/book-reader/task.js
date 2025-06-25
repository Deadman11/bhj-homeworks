const fontSizeBtn = document.querySelectorAll(".font-size");
const book = document.querySelector('.book');
const bookColor = document.querySelectorAll('.color');
const pageBody = document.body;
const textColor = [];
const bgColor = [];


// вешаем через forEach на каждую кнопку обработчик событий
// далее у всех кнопок удаляем класс "font-size_active"
// далее доабвляем класс кликнутому элементу, в зависимости от имеющизся еще классов
fontSizeBtn.forEach(el => el.addEventListener("click", () =>{
    fontSizeBtn.forEach(activeEl => activeEl.classList.remove('font-size_active'));
    el.classList.add("font-size_active");
    if(el.classList.contains("font-size_active")){
        book.classList = "book";
    }
    if(el.classList.contains("font-size_active") && el.classList.contains("font-size_small")){
        book.classList.add("book_fs-small")
    };
    if(el.classList.contains("font-size_active") && el.classList.contains("font-size_big")){
        book.classList.add("book_fs-big")
    }

}))

// через forEach разделяем кнопки для цвета букв и цвека фона, 
// если есть определенные классы, 
// то их в один массив, всё остальное в другой массив
bookColor.forEach(el => {
    if(el.classList.contains('text_color_black') || el.classList.contains('text_color_gray') || el.classList.contains('text_color_whitesmoke')){
        textColor.push(el);
    }
    else{
        bgColor.push(el)
    }
})

// через forEach вешаем обработчик событий на кнопки с цветов
//  первым делом удаляем всем элементам класс "color_active"
// затем кликнутому элемнту добавляем класс "color_active"
// и задаем через data-атрибуты цвет текста
textColor.forEach(el => el.addEventListener("click", (e) => {
    textColor.forEach(textColorActiveElem => textColorActiveElem.classList.remove('color_active'));
    el.classList.add("color_active");
    book.style.color = el.dataset.textColor
}))


// через forEach вешаем обработчик событий на кнопки с цветов
//  первым делом удаляем всем элементам класс "color_active"
// затем кликнутому элемнту добавляем класс "color_active"
// и задаем через data-атрибуты цвет фона
bgColor.forEach(el => el.addEventListener("click", (e) => {
    bgColor.forEach(bgColorActiveElem => bgColorActiveElem.classList.remove('color_active'));
    el.classList.add("color_active");
    book.style.backgroundColor = el.dataset.bgColor
}))