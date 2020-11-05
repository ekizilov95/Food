document.addEventListener('DOMContentLoaded', () => {

    const tabs = require('./modules/tabs'),
        timer = require('./modules/timer'),
        carts = require('./modules/carts'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider'),
        calc = require('./modules/calc');

    tabs();
    timer();
    carts();
    forms();
    slider();
    calc();
});