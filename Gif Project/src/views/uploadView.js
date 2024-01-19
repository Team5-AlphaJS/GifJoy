import { toSingleTrendingView } from "./trending-view.js";


export const toUploadView = (uploaded) => `
<div id="uploaded">
    ${uploaded.map(toSingleTrendingView)}
</div>
<form>
    <input type="file" name="gif-file" accept=".gif">
    <input type="submit" value="Upload">
</form>
`;
