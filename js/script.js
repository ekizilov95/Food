
import tabs from './modules/tabs';
import timer from './modules/timer';
import carts from './modules/carts';
import forms from './modules/forms';
import slider from './modules/slider';
import calc from './modules/calc';
import modal from './modules/modal';
import {openModal} from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {

    const modalTimerId = setInterval(() => openModal('.modal', modalTimerId), 500000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2020-12-11');
    carts();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
    });
    calc();
    modal('[data-modal]', '.modal', modalTimerId);
});