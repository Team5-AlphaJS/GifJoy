import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from "../data/favorites.js";

/**
 * Returns the first element that matches the specified selector.
 *
 * @param {string} selector - The CSS selector to match against.
 * @return {Element} - The first element that matches the selector.
 */
export const q = (selector) => document.querySelector(selector);

/**
 * Renders the favorite status of a GIF based on its ID.
 *
 * @param {string} gifId - The ID of the GIF.
 * @return {string} - The HTML string representing the favorite status of the GIF.
 */
export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId) ?
  `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>` :
  `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};
