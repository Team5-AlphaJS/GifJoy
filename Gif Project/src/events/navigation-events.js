import { loadTrendingGifs } from "../requests/request-service.js";
import { toTrendingView } from "../views/trending-view.js";
import { q } from "./helpers.js";

export const loadPage = (page = '') => {
    switch (page) {
        case 'trending':
            return renderTrendingGifs();

        case 'search':

        case 'upload':

        default: return null;
    }
}

const renderTrendingGifs = async() => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
}