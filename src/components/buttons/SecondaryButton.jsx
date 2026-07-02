// Tombol sekunder (filled light blue) + mode icon-only varian biru — dipakai untuk
// aksi alternatif (misal "Lihat Contoh") dan tombol navigasi kecil bernuansa biru.

import "./Buttons.css";

export default function SecondaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  icon = null,
  iconOnly = false,
  label, // aria-label, wajib diisi kalau iconOnly true
  type = "button",
}) {
  if (iconOnly) {
    return (
      <button
        type={type}
        className="btn-icon btn-icon-secondary"
        onClick={onClick}
        disabled={disabled}
        aria-label={label}
      >
        {icon && <img src={icon} alt="" className="btn-icon-img" aria-hidden="true" />}
      </button>
    );
  }

  return (
    <button
      type={type}
      className={`btn btn-secondary${fullWidth ? " btn-block" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="" className="btn-icon-img" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
