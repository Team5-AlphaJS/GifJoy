import { q } from './events/helpers.js';
import { loadPage, renderGifDetails, renderUploadView } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderRandomGif } from './events/random-gif-events.js';
import { onUpload } from './events/upload-events.js';

document.addEventListener('DOMContentLoaded', () => {
    q('a#home').addEventListener('click', (e) => {
        loadPage(e.target.id);
    });

    // trending event listener
    q('a#trending').addEventListener('click', (e) => {
        loadPage(e.target.id);
    });

    // search event listener
    q('input#search').addEventListener('input', (e) => {
        renderSearchItems(e.target.value);
    });

    // upload event listener
    q('a#upload').addEventListener('click', (e) => {
        loadPage(e.target.id);
    });

    // favorites event listener
    q('a#favorites').addEventListener('click', (e) =>{
      loadPage(e.target.id);
  });
    // global event listener
    document.addEventListener('click', async (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('gif')) {
            renderGifDetails(e.target.getAttribute('id'));
        };

        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('share-button')) {
            const gifId = e.target.getAttribute('id');

            const url = `https://i.giphy.com/${gifId}.webp`;

            try {
                await navigator.clipboard.writeText(url);
                alert('URL copied successfully!');
            } catch (error) {
                alert('Error copying URL to clipboard');
            }
        }

        if (e.target.tagName === 'INPUT' && e.target.getAttribute('type') === 'submit') {
            await onUpload(e);
            await renderUploadView();
        }
    });

    loadPage('home');
});
