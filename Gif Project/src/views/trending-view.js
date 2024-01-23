import { toSingleView } from './single-gif.js';

export const toTrendingView = (trendingGifs) => `
  <div id="trending-view">
    <h1>Trending GIFs</h1>
    ${trendingGifs.map(toSingleView).join('')}
  </div>
`;
