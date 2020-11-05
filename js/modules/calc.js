function calc() {
    // Calc

    const result = document.querySelector('.calculating__result span');
    let sex, height, weight, age, activity;

    if (localStorage.getItem('sex')) {
        sex = localStorage.getItem('sex');
    } else {
        sex = 'female';
        localStorage.setItem('sex', 'female');
    }

    if (localStorage.getItem('activity')) {
        activity = localStorage.getItem('activity');
    } else {
        activity = 1.375;
        localStorage.setItem('activity', 1.375);
    }


    function initLocalInform(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.classList.remove(activeClass);
            if (element.getAttribute('id') === localStorage.getItem('sex')) {
                element.classList.add(activeClass);
            }
            if (element.getAttribute('data-activity') === localStorage.getItem('activity')) {
                element.classList.add(activeClass);
            }
        });
    }

    initLocalInform("#gender div", 'calculating__choose-item_active');
    initLocalInform(".calculating__choose div", 'calculating__choose-item_active');

    function calcTotal() {
        if (!sex || !height || !weight || !age || !activity) {
            result.textContent = '0';
            return;
        }

        if (sex === 'female') {
            result.textContent = Math.round(447.6 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * activity);
        } else {
            result.textContent = Math.round(88.36 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * activity);
        }
    }

    calcTotal();

    function getStaticInfotmation(selector, activeClass) {
        const elements = document.querySelectorAll(selector);

        elements.forEach(element => {
            element.addEventListener('click', (e) => {
                if (e.target.getAttribute('data-activity')) {
                    activity = e.target.getAttribute('data-activity');
                    localStorage.setItem('activity', e.target.getAttribute('data-activity'));
                } else {
                    sex = e.target.getAttribute('id');
                    localStorage.setItem('sex', e.target.getAttribute('id'))
                }

                elements.forEach(elem => {
                    elem.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);

                calcTotal();
            });
        });
    }


    getStaticInfotmation('#gender div', 'calculating__choose-item_active');
    getStaticInfotmation('.calculating__choose_big div', 'calculating__choose-item_active');

    function getDynamicInformation(selector) {
        const input = document.querySelector(selector);

        input.addEventListener('input', () => {

            if (input.value.match(/\D/g)) {
                input.style.border = "1px solid red";
            } else {
                input.style.border = "none";
            }

            switch (input.getAttribute('id')) {
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }

    getDynamicInformation('#height');
    getDynamicInformation('#weight');
    getDynamicInformation('#age');

}

module.exports = calc;