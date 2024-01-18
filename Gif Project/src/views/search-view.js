import { toSingleTrendingView } from "./trending-view.js";

export const toSearchView = (searchGifs) => `
  <div id="trending-view">
  ${searchGifs.map(toSingleTrendingView).join('')}
  </div>
`;
