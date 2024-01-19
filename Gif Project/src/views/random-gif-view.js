export const toRandomGifView = (randomGif) => `
  <a href="#">
    <img class="gif" id="${randomGif.id}" src="${randomGif.images.fixed_width.url}">
  </a>
`;
