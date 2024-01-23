import { renderFavoriteStatus } from "../events/helpers.js";

export const toSingleView = (singleTrendingGif) => `
  <div class="gif" id="${singleTrendingGif.id}" style="background-image: url(${singleTrendingGif.images.fixed_width.url}); 
    width: ${singleTrendingGif.images.fixed_width.width}px;
    height: ${singleTrendingGif.images.fixed_width.height}px;">
    ${renderFavoriteStatus(singleTrendingGif.id)}
    <span class="fa fa-link share-button" aria-hidden="true" data-gif-id="${singleTrendingGif.id}"></span>
  </div>
`;
