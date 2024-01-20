import { toSingleTrendingView } from "./trending-view.js";

export const toFavoritesView = (gifs) =>`
  <div id="favorites">
  <h1>Favorite GIFs:</h1>
  <div class="content">
    ${gifs.map(toSingleTrendingView).join('\n') || '<p>No GIFs added to favourites. No worries. Here is a random GIF :)</p>'}
  </div>
  </div>
`;
