const body = document.querySelector('.body');
const footer = document.querySelector('.footer')
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 500) {
        body.classList.add('scroll')
        footer.classList.add('scrollFoot')
    } else {
        body.classList.remove('scroll');
        footer.classList.remove('scrollFoot');
    }
})