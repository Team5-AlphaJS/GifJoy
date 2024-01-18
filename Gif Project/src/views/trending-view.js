export const toTrendingView = (trendingGifs) => `
  <div id="trending-view">
  ${trendingGifs.map(toSingleTrendingView).join('')}
  </div>
`;


export const toSingleTrendingView = (singleTrendingGif) => `
  <a href="#" id="${singleTrendingGif.id}">
    <img src="${singleTrendingGif.images.fixed_width.url}">
  </a>
`;