import { q } from './events/helpers.js';
import { loadPage, renderFavoritesView, renderGifDetails, renderUploadView } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { onUpload } from './events/upload-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { HOME, TRENDING, FAVORITES, UPLOAD, ABOUT } from './common/constants.js';

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

    // search event listener
    q('input#search').addEventListener('input', (e) => {
        renderSearchItems(e.target.value);
    });

    // global event listener
    document.addEventListener('click', async (e) => {
        if (e.target.id === HOME) loadPage(HOME);

        if (e.target.id === TRENDING) loadPage(TRENDING);

        if (e.target.id === FAVORITES) loadPage(FAVORITES);

        if (e.target.id === UPLOAD) loadPage(UPLOAD);

        if (e.target.id === ABOUT) loadPage(ABOUT);

        if (e.target.tagName === 'DIV' && e.target.classList.contains('gif')) {
            // console.log(e.target);
            await renderGifDetails(e.target.getAttribute('id'));
        }

        if (e.target.classList.contains('favorite')) {
            toggleFavoriteStatus(e.target.getAttribute('data-gif-id'));
        }
        if (e.target.classList.contains('favorite') &&
            e.target.parentNode.parentNode.id === 'favorites') {
            await renderFavoritesView();
        }

        if (e.target.tagName === 'SPAN' && e.target.classList.contains('share-button')) {
            const gifId = e.target.getAttribute('data-gif-id');

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

        // if (e.target.classList.contains('favorite')) {
        //     toggleFavoriteStatus(e.target.getAttribute('id'));
        // }
    });

    loadPage('home');
});
