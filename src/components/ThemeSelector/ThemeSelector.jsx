// Pilihan tema warna strip — modul tiap warna bisa di-swipe, dan preview-nya otomatis
// mengikuti grid (1x4/2x2) yang sudah dipilih user di step sebelumnya.

import "./ThemeSelector.css";
import { THEME_OPTIONS } from "../../data/themeOptions";
import { UI_ELEMENTS } from "../../data/uiConfig";
import ThemeCard from "./ThemeCard";
import PrimaryButton from "../buttons/PrimaryButton";

export default function ThemeSelector({ gridId, selectedThemeId, onSelectTheme, onConfirm }) {
  return (
    <section className="theme-selector">
      <div className="theme-selector-header">
        <h2 className="theme-selector-title">Pilih Warna Strip</h2>
        <p className="theme-selector-subtitle">Geser untuk lihat pilihan warna lainnya</p>
      </div>

      <div className="theme-selector-scroll scroll-snap-x">
        {THEME_OPTIONS.map((theme) => (
          <div className="scroll-snap-item" key={theme.id}>
            <ThemeCard
              theme={theme}
              gridId={gridId}
              isActive={selectedThemeId === theme.id}
              onSelect={() => onSelectTheme(theme.id)}
            />
          </div>
        ))}
      </div>

      <img
        src={UI_ELEMENTS.swipeIndicator}
        alt=""
        className="theme-selector-swipe-hint swipe-hint-animate"
        aria-hidden="true"
      />

      <PrimaryButton onClick={onConfirm} disabled={!selectedThemeId} fullWidth>
        Lanjut ke Kamera
      </PrimaryButton>
    </section>
  );
}
