import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';

document.addEventListener('DOMContentLoaded', (ev) => {
    // trending event listener
    q('a#trending').addEventListener('click', (ev) => {
        console.log('trending');
        loadPage(ev.target.id);
    });
    
    // search event listener
    q('input#search').addEventListener('input', () => {
        console.log('search');
    });

    // upload event listener
    q('a#upload').addEventListener('click', (ev) => {
        console.log('Upload');
    });

});