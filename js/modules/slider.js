function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
    // slider 

    const sliderWrapper = document.querySelector(wrapper),
        sliderInner = document.querySelector(field),
        slides = document.querySelectorAll(slide),
        buttonPrev = document.querySelector(prevArrow),
        buttonNext = document.querySelector(nextArrow),
        maxCountSlides = document.querySelector(totalCounter),
        currentSlide = document.querySelector(currentCounter),
        width = window.getComputedStyle(sliderWrapper).width,
        slider = document.querySelector(container);

    let offset = 0;
    let slideIndex = 1;

    function dotsActive() {
        dots.forEach(dot => dot.style.opacity = ".5");
        dots[slideIndex - 1].style.opacity = 1;
    }

    if (slides.length < 10) {
        maxCountSlides.textContent = `0${slides.length}`;
        currentSlide.textContent = `0${slideIndex}`;
    } else {
        maxCountSlides.textContent = `${slides.length}`;
        currentSlide.textContent = slideIndex;
    }

    sliderInner.style.cssText = `
         display: flex;
         width: ${100 * slides.length + '%'};
         transition: all 0.5s;
     `;
    sliderWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    buttonNext.addEventListener('click', () => {

        if (offset == +width.replace(/\D/g, '') * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.replace(/\D/g, '');
        }

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        sliderInner.style.transform = `translate(-${offset}px)`;

        dotsActive();

    });

    buttonPrev.addEventListener('click', () => {

        if (offset == 0) {
            offset = +width.replace(/\D/g, '') * (slides.length - 1);
        } else {
            offset -= +width.replace(/\D/g, '');
        }

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }

        sliderInner.style.transform = `translate(-${offset}px)`;

        dotsActive();

    });




    slider.style.position = 'relative';


    const indicator = document.createElement('ol'),
        dots = [];

    indicator.style.cssText = `
     position: absolute;
     content: "";
     bottom: 2%;
     left: 0;
     right: 0;
     display: flex;
     justify-content: center;
     margin-right: 15%;
     margin-left: 15%;
     list-style: none;
     z-index: 5;
 `
    slider.append(indicator);


    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-number', i + 1);
        dot.style.cssText = `
         box-sizing: content-box;
         flex: 0 1 auto;
         width: 30px;
         height: 6px;
         margin-right: 3px;
         margin-left: 3px;
         cursor: pointer;
         background-color: #fff;
         background-clip: padding-box;
         border-top: 10px solid transparent;
         border-bottom: 10px solid transparent;
         opacity: .5;
         transition: opacity .6s ease;
     `;

        if (i == 0) {
            dot.style.opacity = 1;
        }
        indicator.append(dot);
        dots.push(dot);
    }


    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-number');

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * (slideTo - 1);
            sliderInner.style.transform = `translate(-${offset}px)`;

            dotsActive();

            if (slides.length < 10) {
                current.textContent = `0${slideIndex}`;
            } else {
                current.textContent = slideIndex;
            }

        });

    });


}

export default slider;