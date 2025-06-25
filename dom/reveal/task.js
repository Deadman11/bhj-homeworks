const revealElement = Array.from(document.querySelectorAll('.reveal'));


window.addEventListener('scroll', () =>{
    revealElement.forEach(el => {
        const {top, bottom} = el.getBoundingClientRect()

        if(bottom < 0){
            return el.classList.remove("reveal_active");
        }
        if(top > window.innerHeight){
            return  el.classList.remove("reveal_active");
        } else{
            return el.classList.add("reveal_active")
        }
    })
})