// импорт объекта запроса
import fetch from './fetch.js';
// импорт объекта с доступами
import refs from './refs.js';
// импорт шаблона
import template from '../template/template.hbs';

import debounce from 'lodash.debounce';
import infinite from "infinite-scroll";


refs.userInput.addEventListener("input", debounce((e) => {
    refs.galleryList.innerHTML = "";
    fetch.searchQ = e.target.value;

    fetch.getFetch()
        .then((data => render(data.hits)))
        e.target.value = "";
    },1000))

// window.addEventListener('scroll', (e) => {
    
// })

    function render(data) {
        const item = template(data);
        refs.galleryList.insertAdjacentHTML('beforeend', item)
    }



