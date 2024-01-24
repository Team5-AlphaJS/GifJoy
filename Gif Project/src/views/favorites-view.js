import { toSingleView } from './single-gif.js';

/**
 * Converts an array of GIFs into a favorites view HTML string.
 * @param {Array} gifs - The array of GIFs to be displayed in the favorites view.
 * @param {boolean} noFavs - Flag indicating if there are no favorite GIFs.
 * @return {string} - The HTML string representing the favorites view.
 */
export const toFavoritesView = (gifs, noFavs = false) =>`
  <div id="favorites">
    <h1>Favorite GIFs</h1>
    <div id="favorites-gifs">
    ${!noFavs ?
      `<p>No GIFs added to favourites. No worries. Here is a random GIF ----> </p><br>${toSingleView(gifs)}`:
      `${gifs.map(toSingleView).join('\n') || '<p>No GIFs added to favourites. No worries. Here is a random GIF :)</p>'}`
    }
    </div>
  </div>
`;
