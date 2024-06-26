import { trendingUrl, uploadUrl, apiKey, randomUrl } from "../common/constants.js";

/**
 * Loads a random GIF from the API.
 * @return {Promise<Object>} A promise that resolves to the random GIF data.
 */
export const loadRandomGif = async () => {
  const response = await fetch(randomUrl);
  const randomGif = await response.json();

  return randomGif.data;
};

/**
 * Loads a GIF by its ID.
 * @param {string} id - The ID of the GIF.
 * @return {Promise<Object>} - A promise that resolves to the GIF data.
 */
export const loadGifById = async (id) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}&rating=g`);
  const gif = await response.json();

  return gif.data;
};

/**
 * Loads trending gifs from the server.
 * @return {Promise<Array>} A promise that resolves to an array of trending gifs.
 */
export const loadTrendingGifs = async () => {
  const response = await fetch(trendingUrl);
  const trendingGifs = await response.json();

  return trendingGifs.data;
};

/**
 * Uploads a GIF file to the server.
 * @param {File} file - The GIF file to be uploaded.
 * @return {Promise<Object>} - A promise that resolves to the response data from the server.
 */
export const uploadGif = async (file) => {
  const options = {
    method: 'POST',
    body: file,
  };
  const response = await fetch(uploadUrl, options);
  const data = await response.json();

  return data;
};

/**
 * Loads search results from the Giphy API based on the provided search term.
 * @param {string} searchTerm - The term to search for.
 * @return {Promise<Array>} - A promise that resolves to an array of search results.
 */
export const loadSearch = async (searchTerm) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`);
  const searchedGif = await response.json();

  return searchedGif.data;
};
