import { toSingleView } from './single-gif.js';

export const toFavoritesView = (gifs, noFavs = false) =>`
  <div id="favorites">
    <h1>Favorite GIFs</h1>
    ${!noFavs ?
      `<p>No GIFs added to favourites. No worries. Here is a random GIF</p><br>${toSingleView(gifs)}`:
      `${gifs.map(toSingleView).join('\n') || '<p>No GIFs added to favourites. No worries. Here is a random GIF :)</p>'}`
    }
  </div>
`;
