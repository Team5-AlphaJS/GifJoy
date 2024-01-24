import { loadRandomGif, loadTrendingGifs } from "../requests/request-service.js";
import { toGifDetailedView } from "../views/gif-detailed-view.js";
import { toHomeView } from "../views/home-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/uploadView.js";
import { q } from "./helpers.js";
import { loadGifById } from "../requests/request-service.js";
import { getUploaded } from "../data/uploaded.js";
import { toFavoritesView } from "../views/favorites-view.js";
import { getFavorites } from "../data/favorites.js";
import { toAboutView } from "../views/about-view.js";

/**
 * Loads the specified page based on the given page parameter.
 * @param {string} page - The page to be loaded.
 * @return {null|void} - Returns null if the page is not recognized, otherwise returns the result of the corresponding render function.
 */
export const loadPage = (page = '') => {
    switch (page) {
        case 'home':
            return renderHome();

        case 'trending':
            return renderTrendingGifs();

        case 'upload':
            return renderUploadView();

        case 'favorites':
            return renderFavoritesView();

        case 'about':
            return renderAboutView();

        default: return null;
    }
};

/**
 * Renders the home view by loading a random gif and updating the content container.
 * @return {Promise<void>} A promise that resolves when the home view is rendered.
 */
const renderHome = async () => {
    const randomGif = await loadRandomGif();

    q('div#content-container').innerHTML = toHomeView(randomGif);
};

/**
 * Renders the detailed view of a GIF by its ID.
 * @param {string} id - The ID of the GIF to be rendered.
 * @return {Promise<void>} - A promise that resolves when the GIF details are rendered.
 */
export const renderGifDetails = async (id) => {
    const gif = await loadGifById(id);

    q('div#content-container').innerHTML = toGifDetailedView(gif);
};

/**
 * Renders the trending gifs by loading them and updating the content container.
 * @return {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderTrendingGifs = async () => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
};

/**
 * Renders the upload view by fetching and loading the uploaded GIFs.
 * @return {Promise<void>} A promise that resolves once the upload view is rendered.
 */
export const renderUploadView = async () => {
    const uploadedIds = getUploaded();
    const uploadedGifs = [];
    for (const id of uploadedIds) {
        uploadedGifs.push(await loadGifById(id));
    }
    q('div#content-container').innerHTML = toUploadView(uploadedGifs);
};

/**
 * Renders the favorites view based on the favorites stored in the application.
 * If there are no favorites, a random gif is loaded and displayed.
 * If there are favorites, the gifs corresponding to the favorite ids are loaded and displayed.
 * @return {Promise<void>} A promise that resolves when the favorites view is rendered.
 */
export const renderFavoritesView = async () => {
    const favorites = getFavorites();

    if (favorites.length === 0) {
        const randomGif = await loadRandomGif();

        q('div#content-container').innerHTML = toFavoritesView(randomGif);
    } else {
        const gifPromises = favorites.map(id => loadGifById(id));

        const gifs = await Promise.all(gifPromises);

        q('div#content-container').innerHTML = toFavoritesView(gifs, true);
    }
};

/**
 * Renders the about view by updating the content container with the about view HTML.
 */
const renderAboutView = () => {
    q('div#content-container').innerHTML = toAboutView();
};
