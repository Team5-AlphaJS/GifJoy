import { loadTrendingGifs, uploadGif } from "../requests/request-service.js";
import { toGifDetailedView } from "../views/gif-detailed-view.js";
import { toHomeView } from "../views/home-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/uploadView.js";
import { q } from "./helpers.js";
import { renderRandomGif } from "./random-gif-events.js";
import { loadGifById } from "../requests/request-service.js";
import { addUploaded, getUploaded } from "../data/uploaded.js";
import { toFavoritesView } from "../views/favorites-view.js";

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

        default: return null;
    }
};

const renderHome = () => {
    q('div#content-container').innerHTML = toHomeView();
    q('a#random-gif').addEventListener('click', () => {
        renderRandomGif();
    });
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

const renderFavoritesView = async () => {
    q('div#content-container').innerHTML = toFavoritesView();
};
