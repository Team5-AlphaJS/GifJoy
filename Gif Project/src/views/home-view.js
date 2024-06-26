import { toSingleView } from './single-gif.js';

/**
 * Converts a randomGif object into a HTML string representing the home view.
 *
 * @param {Object} randomGif - The randomGif object.
 * @return {string} The HTML string representing the home view.
 */
export const toHomeView = (randomGif) => `
<div id="home">
  <h1>Welcome to GifJoy</h1>
  <h2>"Spreading Smiles, One Gif at a Time: GifJoy - Your Gateway to Endless Chuckles!"</h2>
  <div id="random-gif-container">
    ${toSingleView(randomGif)}
  </div>
</div>
`;
