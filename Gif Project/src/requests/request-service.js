import { trendingUrl, uploadUrl } from "../common/constants.js";

export const loadTrendingGifs = async () => {
  const response = await fetch(trendingUrl);
  const trendingGifs = await response.json();

  return trendingGifs.data;
}

export const uploadGif = async (options) => {
  
  const response = await fetch(uploadUrl, options);
  const data = await response.json();
  console.log(data);
}