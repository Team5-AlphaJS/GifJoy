import { renderFavoriteStatus } from "../events/helpers.js";

export const toGifDetailedView = (gif) => `
<div id="gif-detailed">
  <h1>${gif.title}</h1>
  <div class="content">
      <div class="gif-image">
        <img src="${gif.images.fixed_width.url}">
      </div>
      <div class="gif-info">
        <a href="${gif.user.profile_url}">User: ${gif.user.username}</a>
        <p>Title: Test</p>
        <button class="share-button" id="${gif.id}">Share:</button>
        ${renderFavoriteStatus(gif.id)}
      </div>
  </div>
</div>
`;
