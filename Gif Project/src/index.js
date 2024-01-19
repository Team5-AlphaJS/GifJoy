import { q } from './events/helpers.js';
import { loadPage, renderGifDetails, renderUploadView } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { renderRandomGif } from './events/random-gif-events.js';
import { onUpload } from './events/upload-events.js';

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
    document.addEventListener('click', async (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('gif')) {
            renderGifDetails(e.target.getAttribute('id'));
        };

        if (e.target.tagName === 'BUTTON' && e.target.classList.contains('share-button')) {
            const gifId = e.target.getAttribute('id');

            const url = `https://i.giphy.com/${gifId}.webp`;

            navigator.clipboard.writeText(url)
                .then(() => {
                    alert('URL copied successfully!');
                })
                .catch(() => {
                    alert('Error copying URL to clipboard');
                });
        }

        if (e.target.tagName === 'INPUT' && e.target.getAttribute('type') === 'submit') {
            await onUpload(e);
            await renderUploadView();
        }
    });

    loadPage('home');
});
