const revealElement = Array.from(document.querySelectorAll('.reveal'));

function isVisible(el){
    el.forEach(element => {
        const {top, bottom} = element.getBoundingClientRect();

        if(bottom < 0){
            return element.classList.remove("reveal_active")
        }
        if(top > window.innerHeight){
            return element.classList.remove("reveal_active")
        }
        return element.classList.add("reveal_active")
    });

    
}

setInterval(() => {
    isVisible(revealElement)
}, 1000);
