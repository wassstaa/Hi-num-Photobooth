// Satu kartu tema — menampilkan modul preview grid strip sesuai tema & grid yang dipilih.

import "./ThemeSelector.css";
import ThemePreview from "./ThemePreview";

export default function ThemeCard({ theme, gridId, isActive, onSelect }) {
  return (
    <button
      type="button"
      className={`theme-card${isActive ? " theme-card-active" : ""}`}
      onClick={onSelect}
      aria-pressed={isActive}
    >
      <ThemePreview theme={theme} gridId={gridId} />
      <span className="theme-card-label">{theme.label}</span>
    </button>
  );
}
