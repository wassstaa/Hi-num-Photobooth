// Pilihan grid strip: 1x4 atau 2x2 — langkah pertama sebelum user memilih tema warna.

import "./GridSelector.css";
import { GRID_OPTIONS } from "../../data/gridOptions";
import PrimaryButton from "../Buttons/PrimaryButton";

export default function GridSelector({ selectedGridId, onSelectGrid, onConfirm }) {
  return (
    <section className="grid-selector">
      <div className="grid-selector-header">
        <h2 className="grid-selector-title">Pilih Grid Strip</h2>
        <p className="grid-selector-subtitle">Mau foto memanjang ke bawah atau ke samping?</p>
      </div>

      <div className="grid-selector-options">
        {GRID_OPTIONS.map((option) => {
          const isActive = selectedGridId === option.id;
          return (
            <button
              key={option.id}
              type="button"
              className={`grid-option-card${isActive ? " grid-option-card-active" : ""}`}
              onClick={() => onSelectGrid(option.id)}
              aria-pressed={isActive}
            >
              <img src={option.previewSvg} alt={option.label} className="grid-option-preview" />
              <span className="grid-option-label">{option.label}</span>
              <span className="grid-option-description">{option.description}</span>
            </button>
          );
        })}
      </div>

      <PrimaryButton onClick={onConfirm} disabled={!selectedGridId} fullWidth>
        Lanjut
      </PrimaryButton>
    </section>
  );
}
