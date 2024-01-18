import { loadTrendingGifs, uploadGif } from "../requests/request-service.js";
import { toHomeView } from "../views/home-view.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUploadView } from "../views/uploadView.js";
import { q } from "./helpers.js";
import { renderRandomGif } from "./random-gif-events.js";

export const loadPage = (page = '') => {
    switch (page) {
        case 'home':
            return renderHome();

        case 'trending':
            return renderTrendingGifs();

        case 'upload':
            return renderUploadView();

        default: return null;
    }
};

const renderHome = () => {
    q('div#content-container').innerHTML = toHomeView();
    q('a#random-gif').addEventListener('click', () => {
        renderRandomGif();
    });
};

const renderTrendingGifs = async () => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
};

const renderUploadView = () => {
    q('div#content-container').innerHTML = toUploadView();
    q('input[type="submit"]').addEventListener('click', async (ev) => {
        ev.preventDefault();

        const fileInput = q('input[name="gif-file"]');

        const gifFile = fileInput.files[0];

        const formData = new FormData();
        formData.append('file', gifFile);

        const options = {
            method: 'POST',
            body: formData,
        };

        await uploadGif(options);
    });
};
