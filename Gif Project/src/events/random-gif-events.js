import { q } from "./helpers.js";
import { loadRandomGif } from "../requests/request-service.js";
import { toSingleView } from "../views/single-gif.js";

/**
 * Renders a random GIF by loading it and updating the HTML content of the random-gif-container element.
 * @return {Promise<void>} A promise that resolves when the random GIF is rendered.
 */
export const renderRandomGif = async () => {
  const randomGif = await loadRandomGif();

  q('#random-gif-container').innerHTML = toSingleView(randomGif);
};
