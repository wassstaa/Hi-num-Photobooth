// Efek flash putih lembut saat capture — full-screen overlay singkat.

import "./Camera.css";

export default function Flash({ isActive }) {
  return <div className={`flash-overlay${isActive ? " flash-active" : ""}`} aria-hidden="true" />;
}
