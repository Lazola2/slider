let slides = document.querySelectorAll('.container>div');
let btnNext = document.querySelector('.next');

// function to slide forward
function slideForward(){
    slides.forEach(slide => {
        // swipe the first element
        if ( slide.classList.value.includes('first') ) {
            slide.classList.remove('first'); 
            slide.classList.add('selected'); 
        }
        
        // swipe the selected element
        if ( slide.classList.value.includes('selected') ) {
            slide.classList.remove('selected'); 
            slide.classList.add('last'); 
        }
        
        // swipe the last element
        if ( slide.classList.value.includes('last') ) {
            slide.classList.remove('last'); 
            slide.classList.add('first'); 
        }
    })
}

btnNext.addEventListener('click', () => {
    // alert('Requesting to slide forward...')
    slideForward();
})
