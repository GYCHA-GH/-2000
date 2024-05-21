burgerClose.addEventListener("click", function() {
    burgerMenu.style.right="-30%"
});
burgerOpen.addEventListener("click", function() {
    burgerMenu.style.right="0%"
});


let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 1600;
    if (offset > 9600) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    offset = offset - 1600;
    if (offset < 0) {
        offset = 9600;
    }
    sliderLine.style.left = -offset + 'px';
});