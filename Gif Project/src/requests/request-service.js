import { trendingUrl, uploadUrl, apiKey, randomUrl } from "../common/constants.js";

export const loadRandomGif = async () => {
  const response = await fetch(randomUrl);
  const randomGif = await response.json();

  return randomGif.data;
};

export const loadGifById = async (id) => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${apiKey}&rating=g`);
  const gif = await response.json();

  return gif.data;
};

export const loadTrendingGifs = async () => {
  const response = await fetch(trendingUrl);
  const trendingGifs = await response.json();

  return trendingGifs.data;
};

export const uploadGif = async (options) => {

  const response = await fetch(uploadUrl, options);
  const data = await response.json();
  console.log(data);
};

export const loadSearch = async (searchTerm) => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`);
  const data = await response.json();
  return data.data;
};
