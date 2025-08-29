
////////////// GET: Quran API (public, read-only) ////////////////////////////////////////////////////
////////////////////// POST: JSONPlaceholder (faux backend pour enregistrer des favoris)//////////////

const QURAN_BASE = "https://api.quran.com/api/v4";

/**
 * /////////////////////Search for verses (English text via translations=131, Sahih International)////////////////
 * @param {string} query - key-word (ex: "water")
 * @param {number} page - page 1..n
 * @param {number} size - results per page
 * @returns {Promise<{verses: Array, meta: {total: number, perPage: number, currentPage: number}}>}
 */
export async function searchVerses(query, page = 1, size = 5) {
  const url = `${QURAN_BASE}/search?q=${encodeURIComponent(query)}&page=${page}&size=${size}&translations=131`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Quran API HTTP ${res.status}`);
  }
  const data = await res.json();

  /////////////////////////   the structure: { search: { query, total_results, results: [...] } } ////////////////////
  const results = data?.search?.results ?? [];
  const total = data?.search?.total_results ?? 0;

  return {
    verses: results,
    meta: { total, perPage: size, currentPage: page },
  };
}
