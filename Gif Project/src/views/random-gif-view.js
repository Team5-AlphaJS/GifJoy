export const toRandomGifView = (randomGif) => `
  <a href="#" id="${randomGif.id}">
    <img src="${randomGif.images.fixed_width.url}">
  </a>
`;
