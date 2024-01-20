import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { getFavorites } from "../data/favorites.js";

export const q = (selector) => document.querySelector(selector);

export const renderFavoriteStatus = (gifId) => {
  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" id="${gifId}">${EMPTY_HEART}</span>`;
};
