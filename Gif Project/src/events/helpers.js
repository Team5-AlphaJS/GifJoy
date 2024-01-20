export const q = (selector) => document.querySelector(selector);

// helper function for adding to favorites through favorite-events
// export const renderFavoriteStatus = (gifId) => {
//   const favorites = getFavorites();

//   return favorites.includes(gifId)
//     ? `<span class="favorite active" id="${gifId}">${FULL_HEART}</span>`
//     : `<span class="favorite" id="${gifId}">${EMPTY_HEART}</span>`;
// };