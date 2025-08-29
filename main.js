import { searchVerses, addFavorite, updateFavorite } from "./api.js";
import { renderVerses, renderPagination, setStatus } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsEl = document.getElementById("results");
const paginationEl = document.getElementById("pagination");