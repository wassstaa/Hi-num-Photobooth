// Render visual template SVG tema tertentu, mengikuti grid (1x4/2x2) yang sudah dipilih user.
// Kalau grid belum dipilih, fallback ke placeholder.

import "./ThemeSelector.css";
import { UI_ELEMENTS } from "../../data/uiConfig";

export default function ThemePreview({ theme, gridId }) {
  const previewSrc = gridId ? theme.templatePath[gridId] : UI_ELEMENTS.templatePlaceholder;

  return (
    <div className="theme-preview">
      <img src={previewSrc} alt={theme.label} className="theme-preview-img" />
    </div>
  );
}
