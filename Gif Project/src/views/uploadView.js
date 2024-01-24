import { toSingleView } from './single-gif.js';

/**
 * Converts an array of uploaded GIFs into an HTML string representing the upload view.
 * @param {Array} uploaded - The array of uploaded GIFs.
 * @return {string} - The HTML string representing the upload view.
 */
export const toUploadView = (uploaded) => `
<div id="uploaded">
    <h1>Upload GIFs</h1>
    ${uploaded.map(toSingleView)}
</div>
<form>
    <input type="file" name="gif-file" accept=".gif">
    <input type="submit" value="Upload">
</form>
`;
