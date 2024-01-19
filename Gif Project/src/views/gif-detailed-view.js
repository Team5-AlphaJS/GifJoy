export const toGifDetailedView = (gif) => `
<div id="gif-detailed">
  <h1>${gif.title} by ${gif.user.username}</h1>
  <div class="content">
      <div class="gif-image">
        <img src="${gif.images.fixed_width.url}">
      </div>
      <div class="gif-info">
        <a href="${gif.user.profile_url}">${gif.user.username}</a>
        <p>Title: Test</p>
        <button class="share-button" id="${gif.id}">Share:</button>
      </div>
  </div>
</div>
`;
