import { trendingUrl } from "../common/constants.js";

export const loadTrendingGifs = async () => {
  const response = await fetch(trendingUrl);
  const trendingGifs = await response.json();

  return trendingGifs.data;
}