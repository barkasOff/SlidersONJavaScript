import initSlide from './slider';

const   easySlider = () => {
    const   showSlide = (n) => {
        if (n > slides.length) {
            slideI = 1;
        }
        if (n < 1) {
            slideI = slides.length;
        }

        slides.forEach(item => item.classList.add('hide'));
        slides[slideI - 1].classList.remove('hide');
    };
    const   switchSlide = (n) => {
        slideI += n;
        showSlide(slideI);
        initSlide(slideI, cur);
    };
    const   slides = document.querySelectorAll('.easy-slider__slide'),
            prev = document.querySelector('#es-left'),
            next = document.querySelector('#es-right'),
            cur = document.querySelector('#es-cur'),
            total = document.querySelector('#es-total');
    let     slideI = 1;

    showSlide(slideI);
    initSlide(slideI, cur);
    initSlide(slides.length, total);
    prev.addEventListener('click', () => {
        switchSlide(-1);
    });
    next.addEventListener('click', () => {
        switchSlide(1);
    });
};

export default easySlider;