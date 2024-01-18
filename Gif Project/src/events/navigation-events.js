import { loadTrendingGifs } from "../requests/request-service.js";
import { toTrendingView } from "../views/trending-view.js";
import { q } from "./helpers.js";

export const loadPage = (page = '') => {
    switch (page) {
        case 'trending':
            return renderTrendingGifs();

        case 'search':

        case 'upload':
            return renderUploadView();

        default: return null;
    }
}

const renderTrendingGifs = async() => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
}

const renderUploadView = () => {
    // console.log('upload view');
    q('div#content-container').innerHTML = toUpladView();
    q('input[type="submit"]').addEventListener('click', async (ev) => {
       ev.preventDefault();
        await uploadGif();
    });
}