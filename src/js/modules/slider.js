const   initSlide = (n, parent) => {
    if (n > 9) {
        parent.textContent = n;
    } else {
        parent.textContent = `0${n}`;
    }
};

export default initSlide;