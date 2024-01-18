import { q } from './events/helpers.js';

document.addEventListener('DOMContentLoaded', (ev) => {
    // trending event listener
    q('a#trending').addEventListener('click', () => {
        console.log('trending');
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