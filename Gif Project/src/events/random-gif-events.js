import { q } from "./helpers.js";
import { loadRandomGif } from "../requests/request-service.js";
// import { toRandomGifView } from "../views/random-gif-view.js";
import { toSingleView } from "../views/single-gif.js";

export const renderRandomGif = async () => {
  const randomGif = await loadRandomGif();

  q('#random-gif-container').innerHTML = toSingleView(randomGif);
};
