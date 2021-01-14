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
    const   initSlide = (n, parent) => {
        if (n > 9) {
            parent.textContent = n;
        } else {
            parent.textContent = `0${n}`;
        }
    };
    const   switchSlide = (n) => {
        slideI += n;
        showSlide(slideI);
        initSlide(slideI, cur);
    };
    const   slides = document.querySelectorAll('.easy-slider__slide'),
            prev = document.querySelector('.easy-slider__left'),
            next = document.querySelector('.easy-slider__right'),
            cur = document.querySelector('#easy-slider__cur'),
            total = document.querySelector('#easy-slider__total');
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