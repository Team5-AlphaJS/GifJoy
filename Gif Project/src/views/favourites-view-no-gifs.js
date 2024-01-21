import { toRandomGifView } from "./random-gif-view.js";

export const toFavoritesViewNoGifs = (randomGif) =>`
  <div id="favorites-no-gifs">
  <h1>Favorite GIFs:</h1>
  <div class="content-no-gifs">
    <p>No GIFs added to favourites. No worries. Here is a random GIF :)</p>
    ${toRandomGifView(randomGif)}
  </div>
  </div>
`;
