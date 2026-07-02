// Angka countdown 3-2-1 di atas preview kamera, pakai countdown-circle.svg sebagai ring visual.

import "./Camera.css";
import { UI_ELEMENTS } from "../../data/uiConfig";

export default function Countdown({ count }) {
  if (count === null) return null;

  return (
    <div className="countdown-overlay">
      <img src={UI_ELEMENTS.countdownCircle} alt="" className="countdown-ring" aria-hidden="true" />
      <span key={count} className="countdown-number">
        {count > 0 ? count : ""}
      </span>
    </div>
  );
}
