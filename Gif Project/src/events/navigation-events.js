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

const renderHome = async () => {
    const randomGif = await loadRandomGif();
    q('div#content-container').innerHTML = toHomeView(randomGif);
};

export const renderGifDetails = async (id) => {
    const gif = await loadGifById(id);

    q('div#content-container').innerHTML = toGifDetailedView(gif);
};

const renderTrendingGifs = async () => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
};

export const renderUploadView = async () => {
    const uploadedIds = getUploaded();
    const uploadedGifs = [];
    for (const id of uploadedIds) {
        uploadedGifs.push(await loadGifById(id));
    }
    q('div#content-container').innerHTML = toUploadView(uploadedGifs);
};

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

const renderAboutView = () => {
    q('div#content-container').innerHTML = toAboutView();
};
