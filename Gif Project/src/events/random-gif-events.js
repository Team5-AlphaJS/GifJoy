import { q } from "./helpers.js";
import { loadRandomGif } from "../requests/request-service.js";
import { toRandomGifView } from "../views/random-gif-view.js";

export const renderRandomGif = async (searchTerm) => {
  const randomGif = await loadRandomGif(searchTerm);

  q('#random-gif-container').innerHTML = toRandomGifView(randomGif);
};
