export const toTrendingView = (trendingGifs) => `
  <div id="trending-view">
  ${trendingGifs.map(toSingleTrendingView).join('')}
  </div>
`;


export const toSingleTrendingView = (singleTrendingGif) => `
  <a href="#">
    <img class="gif" id="${singleTrendingGif.id}" src="${singleTrendingGif.images.fixed_width.url}">
  </a>
`;
