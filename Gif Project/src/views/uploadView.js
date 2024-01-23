import { toSingleView } from './single-gif.js';


export const toUploadView = (uploaded) => `
<div id="uploaded">
    ${uploaded.map(toSingleView)}
</div>
<form>
    <input type="file" name="gif-file" accept=".gif">
    <input type="submit" value="Upload">
</form>
`;
