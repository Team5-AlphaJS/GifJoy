export const toGifDetailedView = (gif) => `
<div id="movies">
  <h1>${gif.title} by ${gif.user.username}</h1>
  <div class="content">
    <div class="movie-detailed">
      <div class="poster">
        <img src="${gif.images.fixed_width.url}">
      </div>
      <div class="movie-info">
        <a href="${gif.user.profile_url}">${gif.user.username}</a>
        <p>Title: Test</p>
        <button class="share-button" id="${gif.id}">Share:</button>
      </div>
    </div>
  </div>
</div>
`;
