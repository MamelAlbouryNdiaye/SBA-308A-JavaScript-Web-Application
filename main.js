import { searchVerses, addFavorite, updateFavorite } from "./api.js";
import { renderVerses, renderPagination, setStatus } from "./ui.js";

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsEl = document.getElementById("results");
const paginationEl = document.getElementById("pagination");

let currentQuery = "";
let currentPage = 1;
//////////////////////   Anti-race condition token: each incremental search for an ID; /////////////////:
/////////////////// only responses with the last ID are taken into account /////////////////////////////
let requestToken = 0;

/**////////////////  Launches a search + render *///////////////////
async function runSearch(query, page = 1) {
  currentQuery = query;
  currentPage = page;
  const myToken = ++requestToken;

  try {
    setStatus("Searching…");
    resultsEl.innerHTML = "";
    paginationEl.innerHTML = "";

    const { verses, meta } = await searchVerses(query, page, 5);

    /////////////////// If another request has been launched in the meantime, this response is ignored
    if (myToken !== requestToken) return;

    renderVerses(verses, resultsEl);
    renderPagination(meta, paginationEl);

    const total = meta?.total ?? 0;
    setStatus(total ? `Found ${total} result(s).` : "No results.");
  } catch (err) {
    console.error(err);
    if (myToken !== requestToken) return;
    setStatus("An error occurred while searching. Please try again.");
  }
}
///////////////////////// Click sur Search//////////////////////////////////
searchBtn.addEventListener("click", () => {
  const q = (searchInput.value || "").trim();
  if (!q) {
    setStatus("Please enter a search term.");
    return;
  }
  runSearch(q, 1);
});
//////////////////////// Enter in input //////////////////////////////////////
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchBtn.click();
  }
});

///////////////// Pagination (event delegation) //////////////////////////////
paginationEl.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-page]");
  if (!btn) return;
  const page = Number(btn.dataset.page || "1");
  runSearch(currentQuery, page);
});