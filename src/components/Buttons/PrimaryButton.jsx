// Tombol utama (filled pink) + varian "ghost" (outline) + mode icon-only (termasuk shutter).
// Semua tombol aksi utama & navigasi bulat (back, next, shutter) lewat file ini via props.
import "./Buttons.css";
export default function PrimaryButton({
  children,
  onClick,
  disabled = false,
  fullWidth = false,
  icon = null,
  variant = "primary", // "primary" | "ghost"
  iconOnly = false,
  shutter = false,
  label, // aria-label, wajib diisi kalau iconOnly true
  type = "button",
}) {
  if (iconOnly) {
    return (
      <button
        type={type}
        className={`btn-icon${shutter ? " btn-shutter" : ""}${
          variant === "ghost" ? " btn-icon-ghost" : ""
        }`}
        onClick={onClick}
        disabled={disabled}
        aria-label={label}
      >
        {icon && <img src={icon} alt="" className={`btn-icon-img${shutter ? " btn-icon-img-lg" : ""}`} aria-hidden="true" />}
      </button>
    );
  }
  return (
    <button
      type={type}
      className={`btn ${variant === "ghost" ? "btn-ghost" : "btn-primary"}${
        fullWidth ? " btn-block" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="" className="btn-icon-img" aria-hidden="true" />}
      <span>{children}</span>
    </button>
  );
}
