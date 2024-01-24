import { toSingleView } from './single-gif.js';

/**
 * Converts an array of trending GIFs into a HTML string representing the trending view.
 * @param {Array} trendingGifs - The array of trending GIFs.
 * @return {string} - The HTML string representing the trending view.
 */
export const toTrendingView = (trendingGifs) => `
  <div id="trending-view">
    <h1>Top Trending GIFs</h1>
    <div id="trending-gifs" class="gifs-container">
    ${trendingGifs.map(toSingleView).join('')}
    </div>
  </div>
`;
