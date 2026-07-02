// src/utils/formatDate.js
// Format tanggal jadi "dd.mm.yyyy" sesuai instruksi awal

export function formatDate(date = new Date()) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
}
