// Indikator progress capture (1/4, 2/4, 3/4, 4/4) di atas preview kamera.

import "./Camera.css";

export default function Progress({ current, total, label }) {
  const percentage = Math.min((current / total) * 100, 100);

  return (
    <div className="camera-progress">
      <div className="camera-progress-track">
        <div className="camera-progress-fill" style={{ width: `${percentage}%` }} />
      </div>
      <span className="camera-progress-label">{label}</span>
    </div>
  );
}
