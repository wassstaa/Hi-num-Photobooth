// Loading indicator — dipakai saat render canvas / compositing strip yang butuh proses.

import "./Loader.css";
import { UI_ELEMENTS } from "../../data/uiConfig";

export default function Loader({ size = 40, label = "Memproses..." }) {
  return (
    <div className="loader-wrap" role="status" aria-live="polite">
      <img
        src={UI_ELEMENTS.loadingRing}
        alt=""
        className="loader-ring spin"
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
      {label && <span className="loader-label">{label}</span>}
    </div>
  );
}
