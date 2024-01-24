/**
 * Represents a module for managing favorite GIFs.
 * @module favorites
 */

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF ID to the list of favorites.
 * @param {string} gifID - The ID of the GIF to be added.
 */
export const addFavorite = (gifID) => {
  if (favorites.find(id => id === gifID)) {
    return;
  }

  favorites.push(gifID);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Removes a GIF ID from the list of favorites.
 * @param {string} gifId - The ID of the GIF to be removed.
 */
export const removeFavorite = (gifId) => {
  favorites = favorites.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

/**
 * Retrieves the list of favorite GIFs.
 * @return {string[]} An array of favorite GIF IDs.
 */
export const getFavorites = () => [...favorites];
