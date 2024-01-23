import { toSingleView } from './single-gif.js';

export const toHomeView = (randomGif) => `
<div id="home">
  <h1>Welcome to <img id="logo" src="src/assets/gifit-temporary-logo.png"></h1>
  <div id="random-gif-container">
    ${toSingleView(randomGif)}
  </div>
</div>
`;
