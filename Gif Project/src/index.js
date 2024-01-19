import { q } from './events/helpers.js';
import { loadPage, renderGifDetails } from './events/navigation-events.js';
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

    // global event listener
    document.addEventListener('click', async (ev) => {
      if (ev.target.tagName === 'IMG' && ev.target.classList.contains('gif')) {
        renderGifDetails(ev.target.getAttribute('id'));
      };

      if (ev.target.tagName === 'BUTTON' && ev.target.classList.contains('share-button')) {
        const gifId = ev.target.getAttribute('id');

        const url = `https://i.giphy.com/${gifId}.webp`;

        try {
          await navigator.clipboard.writeText(url);
          alert('URL copied successfully!');
        } catch (error) {
          alert('Error copying URL to clipboard');
        }
      }
    });

    loadPage('home');
});
