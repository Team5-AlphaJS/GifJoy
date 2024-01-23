import { toSingleView } from './single-gif.js';

export const toSearchView = (searchGifs) => `
  <div id="trending-view">
    ${searchGifs.map(toSingleView).join('')}
  </div>
`;
