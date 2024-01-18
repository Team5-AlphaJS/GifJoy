import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderRandomGif } from './events/random-gif-events.js';

document.addEventListener('DOMContentLoaded', (ev) => {
    q('a#home').addEventListener('click', (ev) => {
      loadPage(ev.target.id);
    });

    // trending event listener
    q('a#trending').addEventListener('click', (ev) => {
        loadPage(ev.target.id);
    });

    // search event listener
    q('input#search').addEventListener('input', (ev) => {
        renderSearchItems(ev.target.value);
    });

    // upload event listener
    q('a#upload').addEventListener('click', (ev) => {
       loadPage(ev.target.id);
    });

    loadPage('home');
});
