import { q } from "./helpers.js";

export const renderSearchItems = (searchTerm) => {
  // const giphs = placeholder(searchTerm);

  q(CONTAINER_SELECTOR).innerHTML = toSearchView(giphs, searchTerm);
};