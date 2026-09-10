/*
  FINAL PROJECT — main.js

  This is the only file that is allowed to know about all the others.
  Its job is to wire them together and nothing else: if real logic starts
  accumulating here, it belongs in logic/, ui/ or services/ instead.

  Sketch of what goes here once the pieces exist:

    import "./style.css";
    import { fetchUsers } from "./services/users-service.js";
    import { filterByName } from "./logic/filter-by-name.js";
    import { renderUserList } from "./ui/user-list.js";
    import { createSearchBar } from "./ui/search-bar.js";

    ... load, filter on input, render.

  Build it in this order — it's the order that keeps you unblocked:
    1. services/  get the data and log it
    2. ui/        render the data, unfiltered
    3. logic/     filter it
    4. main.js    connect the search input to the filter and the render
*/

import "./style.css";

console.log("Final project — start here.");
