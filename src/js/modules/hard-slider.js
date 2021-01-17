const hardSlider = () => {
    const   slides = document.querySelectorAll('.hard-slider__slide'),
            prev = document.querySelector('#hs-left'),
            next = document.querySelector('#hs-right'),
            cur = document.querySelector('#hs-cur'),
            total = document.querySelector('#hs-total'),
            hardSliderParent = document.querySelector('.hard-slider__wrapper'),
            hardSliderField = document.querySelector('.hard-slider__inner'),
            width = window.getComputedStyle(hardSliderParent).width;
    let     slideI = 1,
            offset = 0;

    hardSliderField.style.width = `${100 * slides.length}%`;
    hardSliderField.style.display = 'flex';
    hardSliderField.style.transition = '0.5s all';
    slides.forEach(item => item.style.width = width);
};


export default hardSlider;