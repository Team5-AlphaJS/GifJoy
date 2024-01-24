import { toSingleView } from "./single-gif.js";

/**
 * Converts a GIF object into a detailed view HTML string.
 *
 * @param {Object} gif - The GIF object to be converted.
 * @return {string} - The HTML string representing the detailed view of the GIF.
 */
export const toGifDetailedView = (gif) => `
<div id="gif-detailed">
   <h1>${gif.title}</h1>
   <div class="content">
       <!-- <div class="gif-image">
         <img src="${gif.images.fixed_width.url}">
       </div> -->
       ${toSingleView(gif)}
       <div class="gif-info">
         ${gif.user ? `<a href="${gif.user.profile_url}">👤 User: ${gif.user.username}</a>` : 'User: Unknown'}
         ${gif.user && gif.user.website_url ? `<a href="${gif.user.website_url}" target="_blank">🌐 User's website` : ''}
       </div>
   </div>
 </div>
`;
