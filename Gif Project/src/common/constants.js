export const apiKey = '9BvflQmIOqLZkTSAFUXVhxeRpw31Efta';

export const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&offset=0&rating=g`;
export const uploadUrl = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;
export const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=25&offset=0&rating=g&lang=en`
//optional
//export const getTrendingUrl = (limit = 25, offset = 0) => `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&offset=${offset}&rating=g`;