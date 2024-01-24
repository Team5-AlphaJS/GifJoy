import { renderFavoriteStatus } from "../events/helpers.js";

/**
 * Converts a GIF object into a single view HTML element.
 *
 * @param {Object} gif - The GIF object.
 * @return {string} - The HTML representation of the GIF in a single view.
 */
export const toSingleView = (gif) => `
  <div class="gif" id="${gif.id}" style="background-image: url(${gif.images.fixed_width.url}); 
    width: ${gif.images.fixed_width.width}px;
    height: ${gif.images.fixed_width.height}px;">
    ${renderFavoriteStatus(gif.id)}
    <span class="fa fa-link share-button" aria-hidden="true" data-gif-id="${gif.id}"></span>
  </div>
`;
