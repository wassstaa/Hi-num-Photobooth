// Render visual hasil strip final (data URL dari canvas) sebagai gambar di layar.

import "./StripPreview.css";

export default function StripCanvas({ previewUrl }) {
  return (
    <img
      src={previewUrl}
      alt="Hasil strip foto Hi'num"
      className="strip-canvas-img"
    />
  );
}
