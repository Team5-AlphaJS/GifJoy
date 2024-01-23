import { q } from './events/helpers.js';
import { loadPage, renderGifDetails, renderUploadView } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { onUpload } from './events/upload-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {
    // dark mode logic
    const darkModeToggle = q('#darkModeToggle');

    const toggleMode = (isDarkMode) => {
      document.body.classList.toggle('dark-mode', isDarkMode);
    };

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    toggleMode(isDarkMode);

    darkModeToggle.addEventListener('click', () => {
      const isDarkModeNow = !document.body.classList.contains('dark-mode');
      toggleMode(isDarkModeNow);

      localStorage.setItem('darkMode', isDarkModeNow.toString());
    });

    // home event listener
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

    // about event listener
    q('a#about').addEventListener('click', (e) =>{
      loadPage(e.target.id);
    });

    // global event listener
    document.addEventListener('click', async (e) => {
        if (e.target.tagName === 'IMG' && e.target.classList.contains('gif')) {
            await renderGifDetails(e.target.getAttribute('id'));
        }

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

        if (e.target.classList.contains('favorite')) {
          toggleFavoriteStatus(e.target.getAttribute('id'));
        }
    });

    loadPage('home');
});
