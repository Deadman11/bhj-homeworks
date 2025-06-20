const fontSizeBtn = document.querySelectorAll(".font-size");
const book = document.querySelector('.book')


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



// const bookColor = document.querySelectorAll('.color');
// const textColor = [];
// const bgColor = [];

// function takeColor(){
//     bookColor.forEach(el => {
//         if(el.classList.contains('text_color_black') || el.classList.contains('text_color_gray') || el.classList.contains('text_color_whitesmoke')){
//             textColor.push(el);
//         }
//         else{
//             bgColor.push(el)
//         }
//     })
// }

// textColor.forEach(el => el.addEventListener("click", () => {
//     textColor.forEach(textColorActiveElem => textColorActiveElem.classList.remove('color_active'));
//     el.classList.add("color_active");
// }))

// takeColor()



