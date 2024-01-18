import { q } from './events/helpers.js';

document.addEventListener('DOMContentLoaded', (ev) => {
    // trending event listener
    q('a#trending').addEventListener('click', () => {
      console.log('trending');
    });
    // search event listener

    // upload event listener
    document.querySelector('#upload').addEventListener('click', (ev) => {
        console.log('Upload');
    });

});