let slides = document.querySelectorAll('.container>div');
let btnNext = document.querySelector('.next');

// function to slide forward
function slideForward(){
    // swipe all slides
    slides.forEach(slide => {
        // swipe the first element
        if ( slide.classList.value.includes('first') && slide.classList.value.includes('unedited')) {
            slide.classList.remove('first'); 
            slide.classList.add('selected'); 
           
            slide.classList.remove('unedited'); 
            slide.classList.add('edited'); 
        }

        // swipe the first element
        if ( slide.classList.value.includes('selected') && slide.classList.value.includes('unedited')) {
            slide.classList.remove('selected'); 
            slide.classList.add('last'); 
            
            slide.classList.remove('unedited'); 
            slide.classList.add('edited'); 
        }
         
        // swipe the first element
        if ( slide.classList.value.includes('last') && slide.classList.value.includes('unedited')) {
            slide.classList.remove('last'); 
            slide.classList.add('first');

            slide.classList.remove('unedited'); 
            slide.classList.add('edited'); 
        }
    
    })

    // change all slides classes to edited
    slides.forEach(slide => {
        if (slide.classList.value.includes('edited')) {
            slide.classList.remove('edited');
            slide.classList.add('unedited');
        }
    });
}

btnNext.addEventListener('click', () => {
    // alert('Requesting to slide forward...')
    slideForward();
})