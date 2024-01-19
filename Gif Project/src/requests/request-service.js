import { trendingUrl, uploadUrl, apiKey } from "../common/constants.js";

export const loadTrendingGifs = async () => {
  const response = await fetch(trendingUrl);
  const trendingGifs = await response.json();

  return trendingGifs.data;
}

export const uploadGif = async (file) => {
  const options = {
    method: 'POST',
    body: file
  }
  const response = await fetch(uploadUrl, options);
  const data = await response.json();

  return data;
}

export const loadSearch = async (searchTerm) => {

  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`)
  const data = await response.json();
  return data.data
}