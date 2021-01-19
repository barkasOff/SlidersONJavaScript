import initSlide from './slider';

const hardSlider = () => {
    const   slides = document.querySelectorAll('.hard-slider__slide'),
            prev = document.querySelector('#hs-left'),
            next = document.querySelector('#hs-right'),
            cur = document.querySelector('#hs-cur'),
            total = document.querySelector('#hs-total'),
            hardSlider = document.querySelector('.hard-slider'),
            hardSliderParent = document.querySelector('.hard-slider__wrapper'),
            hardSliderField = document.querySelector('.hard-slider__inner'),
            width = window.getComputedStyle(hardSliderParent).width;
    const   hardSliderNav = document.createElement('ol');
    let     slideI = 1,
            offset = 0;

    initSlide(slideI, cur);
    initSlide(slides.length, total);
    hardSliderNav.classList.add('hard-slider__nav');
    for (let i = 0; i < slides.length; ++i) {
        const   nav = document.createElement('li');

        nav.setAttribute('data-slide-to', i + 1);
        nav.classList.add('hard-slider__nav_el');
        if (i == 0) {
            nav.classList.add('hard-slider__nav_el-active');
        }
        hardSliderNav.append(nav);
    }
    hardSlider.append(hardSliderNav);
    hardSliderField.style.width = `${100 * slides.length}%`;
    hardSliderField.style.display = 'flex';
    hardSliderField.style.transition = '0.5s all';
    slides.forEach(item => item.style.width = width);
    prev.addEventListener('click', () => {
        if (offset == 0) {
            offset = (slides.length - 1) * +width.slice(0, width.length - 2);
            slideI = 4;
        } else {
            offset -= +width.slice(0, width.length - 2);
            --slideI;
        }
        hardSliderField.style.transform = `translateX(-${offset}px)`;
        initSlide(slideI, cur);
    });
    next.addEventListener('click', () => {
        if (offset / +width.slice(0, width.length - 2) == 3) {
            offset = 0;
            slideI = 1;
        } else {
            offset += +width.slice(0, width.length - 2);
            ++slideI;
        }
        hardSliderField.style.transform = `translateX(-${offset}px)`;
        initSlide(slideI, cur);
    });
};

export default hardSlider;