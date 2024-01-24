import { q } from "./helpers.js";
import { loadSearch } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";

/**
 * Renders the search items based on the provided search term.
 * @param {string} searchTerm - The search term to be used for searching.
 * @return {Promise<void>} - A promise that resolves when the search items are rendered.
 */
export const renderSearchItems = async (searchTerm) => {
  const searchData = await loadSearch(searchTerm);

  q('#content-container').innerHTML = toSearchView(searchData);
};
