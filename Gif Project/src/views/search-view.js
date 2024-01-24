import { toSingleView } from './single-gif.js';

/**
 * Converts an array of searchGifs into a search view HTML string.
 *
 * @param {Array} searchGifs - The array of searchGifs.
 * @return {string} The search view HTML string.
 */
export const toSearchView = (searchGifs) => `
  <div id="search-gifs" class="gifs-container">
    ${searchGifs.map(toSingleView).join('')}
  </div>
`;
