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