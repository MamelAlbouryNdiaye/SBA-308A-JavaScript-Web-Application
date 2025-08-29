/*//////////////////// Displays a status message (loading, empty, error, etc.)
 */
export function setStatus(msg = "") {
  const s = document.getElementById("status");
  s.textContent = msg;
}

/*/////////////////////////////////////////////////////////////
* Rendering verse cards
* Each item contains { verse_key, text, ... }
*////////////////////////////////////////////////////////////
export function renderVerses(verses, container) {
  if (!Array.isArray(verses) || verses.length === 0) {
    container.innerHTML = `<p class="card">No results found.</p>`;
    return;
  }

  container.innerHTML = verses
    .map((v) => {
      const key = v.verse_key ?? "—";
      const text = v.text ?? "";
      return `
        <article class="card">
          <h3>${key}</h3>
          <p>${text}</p>
          <div class="actions">
            <button class="primary fav-btn" data-key="${escapeHtml(key)}" data-text="${escapeHtmlAttr(text)}">
              Add to Favorites
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

/*/////////////////////////////////////////////////////////*
 * Render of pagination
 *////////////////////////////////////////////////////////
export function renderPagination(meta, container) {
  const total = Number(meta?.total ?? 0);
  const perPage = Number(meta?.perPage ?? 5);
  const current = Number(meta?.currentPage ?? 1);
  const totalPages = Math.max(1, Math.ceil(total / perPage));

  ////////////// 10 pages max for the demo /////////////////
  const maxPages = Math.min(totalPages, 10);

  const btns = [];
  for (let p = 1; p <= maxPages; p++) {
    btns.push(
      `<button data-page="${p}" class="${p === current ? "active" : ""}">${p}</button>`
    );
  }
  container.innerHTML = btns.join("");
}

/*///////////////////* Escape utilities (simple DOM security) */////////////////////////
function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
function escapeHtmlAttr(s) {
  return escapeHtml(s).replaceAll(`"`, "&quot;").replaceAll("'", "&#39;");
}
