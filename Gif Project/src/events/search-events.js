import { q } from "./helpers.js";
import { loadSearch } from "../requests/request-service.js";
import { toSearchView } from "../views/search-view.js";

export const renderSearchItems = async (searchTerm) => {
  const searchData = await loadSearch(searchTerm);

  q('#content-container').innerHTML = toSearchView(searchData);
};

