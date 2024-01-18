import { loadTrendingGifs, uploadGif } from "../requests/request-service.js";
import { toTrendingView } from "../views/trending-view.js";
import { toUpladView } from "../views/uploadView.js";
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

const renderTrendingGifs = async () => {
    const trendingGifs = await loadTrendingGifs();

    q('div#content-container').innerHTML = toTrendingView(trendingGifs);
}

const renderUploadView = () => {
    q('div#content-container').innerHTML = toUpladView();
    q('input[type="submit"]').addEventListener('click', async (ev) => {
        ev.preventDefault();

        const fileInput = q('input[name="gif-file"]');
        
        const gifFile = fileInput.files[0];

        const formData = new FormData();
        formData.append('file', gifFile);
        
        const options = {
            method: 'POST',
            body: formData
        }

        await uploadGif(options);
    });
}