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


// console.log(fontSizeBtn)